import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Navigation from '../navigation/navigation.js'

function sideBarComponent() {
  return (
    <>
      <AccountCircle/> 
      <List>
        {/** Add a list of classes and their threads (as well as personal threads?)
        The buttons should change what shows up in the main component 
        */}
          {['General', 'Settings', 'Log Out'].map((text, index) => (
          <ListItem button key={text}>
              <ListItemText primary={text} />
          </ListItem>
          ))}
      </List>
    </>
  )
}

function mainComponent() {
  {/** Create the layout and how to show the thread */}
  return (
    <p>This a schools ting u no</p>
  )
}


function School() {
    return (
        <div className="wrapper">
          <Navigation
            sideBarComponent={sideBarComponent()}
            mainComponent={mainComponent()}
          />
        </div>
    )
}

export default School;