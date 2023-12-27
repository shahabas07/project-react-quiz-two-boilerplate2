import React, { Component } from 'react'
import './quiz.css'

export default class HomeComponent extends Component {

  pageup=()=>{
    this.props.pageProp(1)
  }

  render() {
    return (
      <div className='main'>
        <h1>Quiz App</h1>
        <button className="play" onClick={this.pageup}>Play</button>

      </div>
    )
  }
}