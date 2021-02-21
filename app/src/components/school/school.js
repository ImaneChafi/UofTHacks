import React, { useState } from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import Navigation from '../navigation/navigation.js'
import Thread from '../thread/thread.js'

function SideBarComponent(props) {
  return (
      <List>
        {/** Add a list of classes and their threads (as well as personal threads?)
        The buttons should change what shows up in the main component 
        */}
          {props.user.classes.map((text, index) => (
          <ListItem button key={text}>
              <ListItemText primary={text} onClick={(e) => props.setThread(e.target.innerText)}/>
          </ListItem>
          ))}
      </List>
  )
}

function MainComponent(props) {
  {/** Create the layout and how to show the thread */}
  return (
    <Thread 
      thread={props.thread}
      user={props.user}
      messages={props.messages}
    />
  )
}


function School(props) {
    const [thread, setThread] = useState("")
    const messages = [{text: "Hey", name: "Kyoji", created_at: "09:30"}, {text: "hi", name: "Paul", created_at: "09:31"}, {text: "what's up guys", name: "Imane", created_at: "09:32"}, {text: "nm hbu", name: "Paul", created_at: "09:31"}]

    return (
        <div className="wrapper">
          <Navigation
            sideBarComponent={
            <SideBarComponent
              user={props.user}
              setThread={setThread}
            />}
            mainComponent={thread !== "" ? 
            <MainComponent
              user={props.user}
              thread={thread}
              messages={messages}
            /> : <p>Please click on a class to see its thread.</p>}
          />
        </div>
    )
}

export default School;