import React, { useState } from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Navigation from '../navigation/navigation.js'
import Thread from '../thread/thread.js'

function SideBarComponent(props) {
  return (
      <List>
          {props.user.Class.map((course) => (
          <ListItem button key={course.name}>
              <ListItemText primary={course.name} onClick={(e) => props.setThread(e.target.innerText)}/>
          </ListItem>
          ))}
      </List>
  )
}

function MainComponent(props) {
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
    const messages = {
                "CSC301": [
                  {text: "Does anyone need a team? Our team still needs two members!", name: "Kyoji", created_at: "09:30"}, 
                  {text: "Hey I'd like to join", name: "Paul", created_at: "09:31"}, 
                  {text: "Me too!", name: "Imane", created_at: "09:32"}
                ],
                "CSC318": [
                  {text: "Did anyone finish their questionnaire? I need help understanding Likert scales...", name: "Kyoji", created_at: "09:30"}, 
                  {text: "Yeah, our group finished. Pm me if you'd like!", name: "Paul", created_at: "10:30"}, 
                ],
                "CSC373": [
                  {text: "Dynamic programming's so cool!", name: "Paul", created_at: "09:30"}, 
                  {text: "Yeah memoization changes algo runtime so significantly", name: "Imane", created_at: "09:31"}, 
                  {text: "It's so hard to come up with solutions tho", name: "Kyoji", created_at: "10:32"}
                ],
                "CSC384": [
                  {text: "Hey", name: "Kyoji", created_at: "09:30"}, 
                  {text: "hi", name: "Paul", created_at: "09:31"}, 
                  {text: "what's up guys", name: "Imane", created_at: "09:32"}, 
                  {text: "nm hbu", name: "Paul", created_at: "09:31"}
                ],
                "CSC369": [
                  {text: "Hey", name: "Kyoji", created_at: "09:30"}, 
                  {text: "hi", name: "Paul", created_at: "09:31"}, 
                  {text: "what's up guys", name: "Imane", created_at: "09:32"}, 
                  {text: "nm hbu", name: "Paul", created_at: "09:31"}
                ],
                "ANT100": [
                  {text: "Hey", name: "Kyoji", created_at: "09:30"}, 
                  {text: "hi", name: "Paul", created_at: "09:31"}, 
                  {text: "what's up guys", name: "Imane", created_at: "09:32"}, 
                  {text: "nm hbu", name: "Paul", created_at: "09:31"}
                ]}

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