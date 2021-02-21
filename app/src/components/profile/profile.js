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
          {['General', 'Settings', 'Log Out'].map((text, index) => (
          <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <ExitToAppIcon /> : <SettingsIcon />}</ListItemIcon>
              <ListItemText primary={text} />
          </ListItem>
          ))}
      </List>
    </>
  )
}

function mainComponent() {
  return (
    <p>This is for the profile stuff</p>
  )
}


function Profile() {
    return (
        <div className="wrapper">
          <Navigation
            sideBarComponent={sideBarComponent()}
            mainComponent={mainComponent()}
          />
        </div>
    )
}

export default Profile;