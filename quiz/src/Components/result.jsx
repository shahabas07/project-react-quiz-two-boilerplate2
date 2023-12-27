import React, { Component } from 'react'
import './quiz.css'

export default class ResultComponent extends Component {

  play = () => {
    this.props.pageProp(1)
  }
  home=()=>{
    this.props.pageProp(0)
  }

  render() {
    return (
      <div className='main3'>
        <h2 className='result-head'>Result</h2>
        <div className="box3">
          <h3 className="phrase">keep it up!!!!!!..</h3>
          <h2 className="score">Your score is 20%</h2>

          <div className="details">
            <div className="numberofq for-detail">
      <h4 className="d1">Total no of questions</h4>
      <h4 className='no1'>15</h4>
            </div>

            <div className="numberofq for-detail">
      <h4 className="d1">Numberof attempted questions</h4>
      <h4 className='no1'>9</h4>
            </div>

            <div className="numberofq for-detail">
      <h4 className="d1">Number of correctedanswers</h4>
      <h4 className='no1'>3</h4>
            </div>

            <div className="numberofq for-detail">
      <h4 className="d1">Number of wrong answers</h4>
      <h4 className='no1'>6</h4>
            </div>
          </div>
        </div>

        <div className="result-button-grp">
          <button className="result-buttons b1" onClick={() => this.play()}>Play again</button>

          <button className="result-buttons b2"onClick={() => this.home()}>Back to home</button>
        </div>
      </div>
    )
  }
}