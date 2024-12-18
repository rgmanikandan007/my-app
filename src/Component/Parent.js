import React, { Component } from 'react'
import Children from './Children'

export default class Parent extends Component {
  render() {
    const message = "Message Recived";
    return (
      <div><Children message={message} /></div>
    )
  }
}
