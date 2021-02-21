import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  },
  avatar: {
      float: 'left',
      "margin-right": '5px'
  }
});

function Chat(props) {
  const classes = useStyles();
  console.log(props)

  Axios({
    method: "GET",
    url: "http://localhost:5000/posts",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });

  return (
      <div>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">{props.thread}</Typography>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12} >
                <List className={classes.messageArea}>
                    {props.messages.map((message, index) => (
                        <ListItem key={index}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Avatar alt={message.name} src="/static/images/avatar/1.jpg" className={classes.avatar}/>
                                <ListItemText align="left" primary={message.text}></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary={"at " + message.created_at + " from: " + message.name}></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-text" label="Type your message here" fullWidth />
                    </Grid>
                    <Grid xs={1} align="right">
                        <Fab color="primary" aria-label="add"><SendIcon /></Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </div>
  );
}

export default Chat;