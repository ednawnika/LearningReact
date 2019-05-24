import React, { Component } from 'react'
import axios from 'axios'

class Data extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((google) => {
        console.log(google)
        this.setState({ items: google.data[6].body })
      })
  }

  render () {
    console.log('Hello')
    console.log(this.state.items)
    const { items } = this.state
    return (
      <div>
        {this.state.items}
        {/* { items.map(item => (
          <li key={item.id}>{item.body}</li>))} */}
      </div>
    )
  }
}

export default Data
