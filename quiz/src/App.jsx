import React, { Component } from 'react'

// import { Component } from 'react'
import Home from './Components/Home'
import Quiz from './Components/quiz'
import Result from './Components/result'



export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       page:0
    }
  }

  pageUp=(pageNo)=>{
    this.setState(()=>{
        return{
            page: pageNo
        }
    })
 }

  render() {
    if(this.state.page===0){
      return (
        <Home pageProp={this.pageUp}/>
        )
    }
    else if(this.state.page===1){
      return (
        <Quiz pageProp={this.pageUp}/>
        )

    }
    else if(this.state.page===2){
      return (
        <Result pageProp={this.pageUp}/>
        )
    }


  }
}