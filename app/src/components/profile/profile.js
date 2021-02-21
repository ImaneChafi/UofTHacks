import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Avatar } from '@material-ui/core'

import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Navigation from '../navigation/navigation.js'

function SideBarComponent(props) {
  return (
    <>
      <Avatar alt={props.user.name} src="/static/images/avatar/1.jpg" style={{margin: "auto", "margin-top": "10px", height: "100px", width: "100px"}}/>
      <List>
          <ListItem button key={'Settings'}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={'Settings'} />
          </ListItem>
          <ListItem button key={'Log Out'}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary={'Log Out'} />
          </ListItem>

      </List>
    </>
  )
}

function MainComponent(props) {

  return (
    <p>This is for the profile stuff</p>
  )
}

function Profile(props) {
    return (
        <div className="wrapper">
          <Navigation
            sideBarComponent={
            <SideBarComponent
              user={props.user}
            />}
            mainComponent={
            <MainComponent

            />}

          />
        </div>
    )
}

export default Profile;