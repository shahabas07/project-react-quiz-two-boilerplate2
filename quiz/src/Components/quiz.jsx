import React, { Component } from 'react'
import './quiz.css'
import quizQuestions from '../resources/quizQuestion.json'

export default class QuizComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: quizQuestions,
         ind:0
      }
    }


      

      increment = () => {
        if (this.state.ind < 14) {
          this.setState((prevState) => {
            return {
              ind: prevState.ind + 1,
            };
          });
        } else {
          this.props.pageProp(2)
        }
      };
      

     decrement=()=>{
        if (this.state.ind<=0){
            alert('There are no more previous questions?')
        }
        else if(this.state.ind>=0){
            this.setState(()=>{
            return{
                ind: this.state.ind-1 
            }
        
        })
    }}

     alertpop=()=>{
                alert('Are you sure want to quit?')
     }

    
    
    render() {
        return (
            <div className='main2'>

                <div className="box2">

                    <h2 className='question-head'>Question</h2>
                    <div className="qno">
                        <h4 className="qno-text">{[this.state.ind+1]} of 15</h4>
                    </div>
                    <div className="main-quiz">
                        <h4 className='question'>{quizQuestions[this.state.ind].question}</h4>

                        <div className="option-div">
                            <button className="options">{quizQuestions[this.state.ind].optionA}</button>
                            <button className="options">{quizQuestions[this.state.ind].optionB}</button>
                            <button className="options">{quizQuestions[this.state.ind].optionC}</button>
                            <button className="options">{quizQuestions[this.state.ind].optionD}</button>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className='page-options page-options1' onClick={this.decrement}>Previous</button>
                        <button className='page-options page-options2' onClick={this.increment}>Next</button>
                        <button className='page-options page-options3' onClick={this.alertpop}>Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}