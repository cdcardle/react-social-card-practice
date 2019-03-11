import React from 'react';
import Header from './Header.js'
import Navbar from './Navbar.js'
import Card from './Card.js'

const startDate = new Date();
const postedDate1 = new Date();
const postedDate2 = new Date();
const postedDate3 = new Date();
const postedDate4 = new Date();
const postedDate5 = new Date();
const postedDate6 = new Date();
let message_1 = {id: 1, description: "oh my gosh, first post, i am new!", createdAt: postedDate1.toLocaleTimeString()};
let message_2 = {id: 2, description: "my second post, this is still cool!", createdAt: postedDate2.toLocaleTimeString()}
let message_3 = {id: 3, description: "kinda wearing off a bit, but still here", createdAt: postedDate3.toLocaleTimeString()}
let message_4 = {id: 4, description: "ugh my family found my page", createdAt: postedDate4.toLocaleTimeString()}
let message_5 = {id: 5, description: "all the depressing stories and fake stuff stinks", createdAt: postedDate5.toLocaleTimeString()}
let message_6 = {id: 6, description: "this site sucks, i am over it", createdAt: postedDate6.toLocaleTimeString()}

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
        messages: [message_1, message_2, message_3, message_4, message_5, message_6]
      }
    }
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <body>
        <div className="row">
          <div className="col-sm-3">&nbsp;</div>
          <div className="col-sm-6 main-page" align='center'>
            <Navbar handleClick={this.handleClick} username={this.state.user.username} />
            <Header />
            <Card handleSubmit={this.handleSubmit} user={this.state.user} />
          </div>
          <div className="col-sm-3">&nbsp;</div>
        </div>
      </body>
    )
  }
}