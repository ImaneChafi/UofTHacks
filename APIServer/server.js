"use strict";

const env = process.env.NODE_ENV;
const log = console.log;

const express = require("express");

const app = express();
const path = require('path')

const cors = require('cors')
if (env !== 'production') { app.use(cors()) }


const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

const { mongoose } = require("./database/mongoose");
mongoose.set('useFindAndModify', false);

const { User } = require('./models/user');
const { Feed } = require('./models/feed')
const { Class } = require('./models/class')
const { Message } = require('./models/message')
const { Post } = require('./models/post')
const { Thread } = require('./models/thread')

const session = require("express-session");
const MongoStore = require('connect-mongo')(session)

app.use(express.static(path.join(__dirname, "/public")));


function isMongoError(error) {
  return typeof error === 'object' && error !== null && error.name === "MongoNetworkError"
}

const mongoChecker = (req, res, next) => {
  if (mongoose.connection.readyState != 1) {
      log('Issue with mongoose connection')
      res.status(500).send('Internal server error')
      return;
  } else {
      next()  
  }   
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*')
  next();
});

app.use(
    session({
        secret: "our hardcoded secret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 3600000,
            httpOnly: true
        },
        store: env === 'production' ? new MongoStore({ mongooseConnection: mongoose.connection }) : null
    })
);


app.post("/api/user", mongoChecker, async (req, res) => {

    const user = new User({
        email: "kyoji.goto@mail.utoronto.ca",
        password: "123456789",
        fname: "Kyoji",
        lname: "Goto",
        friends: [],
        class: [],
        feed: []
    })

    try {
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('This username is already in use! Please use a different username.')
        }
    }
})

app.post("/api/class", mongoChecker, async (req, res) => {

    console.log(req.body)
    const course = new Class({
        name: req.body.name,
        students: []
    })

    try {
        const newCourse = await course.save()
        res.send(newCourse)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('This username is already in use! Please use a different username.')
        }
    }
})

app.post("/api/feed", mongoChecker, async (req, res) => {

    console.log(req.body)
    const feed = new Feed({
        name: req.body.name,
        users: [],
        posts: []
    })

    try {
        const newFeed = await feed.save()
        res.send(newFeed)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('This username is already in use! Please use a different username.')
        }
    }
})

app.post("/api/thread", mongoChecker, async (req, res) => {

    const thread = new Thread({
        messages: [],
        students: []
    })

    try {
        const newThread = await thread.save()
        res.send(newThread)
    } catch (error) {
        if (isMongoError(error)) {
            res.status(500).send('Internal server error')
        } else {
            res.status(400).send('This username is already in use! Please use a different username.')
        }
    }
})

app.post("/api/login", mongoChecker, (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body)
    console.log(email)
    console.log(password)

    User.findByEmailPassword(email, password)
        .then(user => {
            req.session.user = user._id;
            req.session.username = user.username; 
            res.send({ currentUser: user });
        })
        .catch(error => {
            console.log(error)
            res.status(400).send()
        });
});


app.get("/api/logout", mongoChecker, (req, res) => {
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

app.get("/api/check-session", mongoChecker, (req, res) => {
    if (req.session.user) {
        User.findById(req.session.user)
            .then(user => {
                res.send({ currentUser: user })
            })
            .catch(error => {
                res.status(400).send()
            });
    } else {
        res.status(401).send();
    }
});

app.get("*", (req, res) => {
    const goodPageRoutes = ["/", "/school", "/feed", "/games"];
    if (!goodPageRoutes.includes(req.url)) {
        res.status(404);
    }

    res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});

module.exports = app;