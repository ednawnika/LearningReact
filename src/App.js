import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Comment from './components/Comment'
import formatDate from './components/formatDate'
import Data from './components/Data'
import Header from './components/Header'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Jefferson',
      date: new Date(),
      author: 'Makar'
    }
  }

  render () {
    console.log('Hello')
    const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64'
      }
    }
    return (<div>
      <header><Header /></header>
      <Comment google={this.state.name} author={this.state.author} text={comment.text} date={comment.date} />
      <Data />
    </div>)
  }
}
export default App
