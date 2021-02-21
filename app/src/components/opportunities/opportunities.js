import React, { useState } from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Navigation from '../navigation/navigation.js'
import Feed from '../feed/feed.js'

function SideBarComponent(props) {
  return (
    <List>
        {props.user.Feed.map((feed) => (
        <ListItem button key={feed.name}>
            <ListItemText primary={feed.name} onClick={(e) => props.setFeed(e.target.innerText)}/>
        </ListItem>
        ))}
    </List>
  )
}

function MainComponent(props) {
  return (
    <Feed
      feed={props.feed}
      posts={props.posts}
    />
  )
}


function Opportunities(props) {
  const [feed, setFeed] = useState("Research")

  const posts = {
              "Research": [
                {title: "Stats students needed", content: "Would you like to be part of this exciting new study on Machine Learning? We need stats students proficient in R. Come apply for this research opportunity!"},
                {title: "Interested in AI?", content: "Professor Engels is conducting research during the next fall term. If you would like to be part of this research study, come to the meeting at Bahen 1020 Friday at 8pm for more details."},
                {title: "Quantum Computing", content: "Quantum Computing needs you! If you would like to be part of this research study, come to the meeting at Bahen 1040 next Friday at noon for more details."},
              ],
              "Events": [
                {title: "UofTHacks", content: "Come apply and be part of UofT's next hackathon. Expect more details on your feed soon..."},
                {title: "Varsity Sports Events", content: "This weekend the UofT Varsity teams will be hosting a sports fest at the field. You won't want to miss it!"},
              ],
              "Clubs": [
                {title: "Clubs Fair", content: "Checkout the awesome clubs at UofT along St. George Street tomorrow. Prizes, raffles and food trucks galore!!! Can't wait to see you there!"},
                {title: "Chess Club", content: "Come join the UofT Chess Club! We meet every Tuesday at Victoria College."},
              ]}
    return (
        <div className="wrapper">
          <Navigation
            sideBarComponent={
              <SideBarComponent
                user={props.user}
                setFeed={setFeed}
              />
            }
            mainComponent={
              <MainComponent
                feed={feed}
                posts={posts}
              />
            }
          />
        </div>
    )
}

export default Opportunities;