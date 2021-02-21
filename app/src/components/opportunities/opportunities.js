import React, { useState } from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Navigation from '../navigation/navigation.js'
import Feed from '../feed/feed.js'

function SideBarComponent(props) {
  return (
    <List>
        {/** Add all the feeds that this student follows */}
        {props.user.feeds.map((text) => (
        <ListItem button key={text}>
            <ListItemText primary={text} />
        </ListItem>
        ))}
    </List>
  )
}

function MainComponent() {
  {/**  Create layout for the feed and how it will be shown*/}
  return (
    <Feed/>
  )
}


function Opportunities(props) {
    return (
        <div className="wrapper">
          <Navigation
            sideBarComponent={
              <SideBarComponent
                user={props.user}
              />
            }
            mainComponent={
              <MainComponent

              />
            }
          />
        </div>
    )
}

export default Opportunities;