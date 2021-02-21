import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Navigation from '../navigation/navigation.js'
import GamesGrid from './gamesGrid.js'

function SideBarComponent(props) {
  return (
      <List>
          {/** Show a list of all friends */}
          {props.user.friends.map((text, index) => (
          <ListItem button key={text}>
              <ListItemText primary={text} />
          </ListItem>
          ))}
      </List>
  )
}

function mainComponent() {
  {/** Show all games in a grid */}
  return (
    <GamesGrid/>
  )
}


function Games(props) {
    return (
        <div className="wrapper">
          <Navigation
            sideBarComponent={SideBarComponent(props)}
            mainComponent={mainComponent()}
          />
        </div>
    )
}

export default Games;