var createError = require("http-errors");
var express = require("express");
var path = require("path");
const mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./models/user");
  Messages = require("./models/quotes");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser"); // middleware

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

//Mongodb setup
require("dotenv").config();
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://Imane:hellogovnor@cluster0-cxkrq.mongodb.net/test?retryWrites=true&w=majority"
);
const MongoClient = require("mongodb").MongoClient;
var db;

MongoClient.connect(
  "mongodb+srv://Imane:hellogovnor@cluster0-cxkrq.mongodb.net/test?retryWrites=true&w=majority",
  (err, client) => {
    if (err) return console.log(err);
    db = client.db("test"); // whatever your database name is
    app.listen(3000, () => {
      console.log("listening on 3000");
    });
  }
);

//Initializing the view engine with ejs
app.set("view engine", "ejs");

app.use(
  require("express-session")({
    secret: "Any normal Word", //decode or encode session
    resave: false,
    saveUninitialized: false,
  })
);
passport.serializeUser(User.serializeUser()); //session encoding
passport.deserializeUser(User.deserializeUser()); //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

//=======================
//      R O U T E S
//=======================
app.get("/", (req, res) => {
  res.render("login");
});
app.get("/school", (req, res) => {
  db.collection('quotes').find().toArray()
  .then(results => {
    res.render('userprofile.ejs', { quotes: results })
  })
  .catch(/* ... */)
});
app.get("/games", (req, res) => {
  res.render("games");
});
app.get("/userprofile", isLoggedIn, (req, res) => {
  db.collection('quotes').find().toArray()
  .then(results => {
    res.render('userprofile.ejs', { quotes: results })
  })
  .catch(/* ... */)
});
app.get("/research", (req, res) => {
  res.render("research");
});

//Auth Routes
app.get("/login", (req, res) => {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/userprofile",
    failureRedirect: "/login",
  }),
  function (req, res) {}
);

app.post('/message', function(req, res) {
  db.collection('quotes').insertOne(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/userprofile')
      
    })
})

app.get('/', (req, res) => {
  const cursor = db.collection('quotes').find()
  console.log(cursor)
  // ...
})

app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", (req, res) => {
  User.register(
    new User({
      username: req.body.username,
      phone: req.body.phone,
      telephone: req.body.telephone,
    }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.render("register");
      }
      passport.authenticate("local")(req, res, function () {
        res.redirect("/login");
      });
    }
  );
});
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.set("view engine", "ejs");

const port = process.env.PORT || 3030;
app.listen(port);
