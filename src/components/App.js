import React from 'react';
import Header from './Header.js'
import Navbar from './Navbar.js'
import Card from './Card.js'

const startDate = new Date();
let i = 1;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "PickerOfNoses",
        image_url: "http://i48.tinypic.com/28lcnll.jpg",
        bio: "Hi, I am a kid who picks his nose.",
        city: "Detroit",
        locationState: "MI",
        signupDate: startDate.toLocaleDateString(),
        messages: []
      }
    }
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    const addedMessage = {id: i, description: event.target.querySelector('input').value, createdAt: date.toLocaleTimeString()}

    this.setState({
        user: {
          ...this.state.user, 
          messages: [...this.state.user.messages, addedMessage]
      }
    })
    i++;
    event.target.querySelector('input').value = "";
  }

  render() {
    return (
      <body>
        <div className="row">
          <div className="col-sm-3">&nbsp;</div>
          <div className="col-sm-6 main-page" align='center'>
            <Navbar handleClick={this.handleClick} username={this.state.user.username} />
            <Header />
            <Card handleMessageSubmit={this.handleMessageSubmit} user={this.state.user} />
          </div>
          <div className="col-sm-3">&nbsp;</div>
        </div>
      </body>
    )
  }
}