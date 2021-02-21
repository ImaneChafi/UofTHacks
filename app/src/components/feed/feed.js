import { CardContent, CardMedia } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, Typography, Button, List, ListItem} from '@material-ui/core'

const useStyles = makeStyles({
    list: {
      height: '70vh',
      overflowY: 'auto'
    },
    card: {
        width: "60vw",
        margin: "auto"
    }
  });

function Feed(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem>
                <Typography>{props.feed + " Posts"}</Typography>
            </ListItem>
            {props.posts[props.feed].map((post, index) => (
                <ListItem key={index}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h4" className='postTitle' align="left" style={{marginBottom: "20px"}}>{post.title}</Typography>
                            <CardMedia></CardMedia>
                            <Typography variant="p" className='postContent' align="left">{post.content}</Typography>
                        </CardContent>
                    </Card>
                </ListItem>
            ))}
        </List>
    )
}

export default Feed;