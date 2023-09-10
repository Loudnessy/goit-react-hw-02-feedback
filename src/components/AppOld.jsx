import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onBtnClick = evt => {
    if (evt.target === evt.currentTarget) {
      return
    }
    this.setState(prevState => {
      const btnName = evt.target.textContent
      const currentState = {[btnName]: prevState[btnName] + 1}
      return {...prevState, ...currentState}
    })
  }
countTotalFeedback() {
  const {good, neutral, bad} = this.state 
return good + neutral + bad
}
countPositiveFeedbackPercentage() {
  const {good} = this.state
  const total = this.countTotalFeedback()
  const PositiveFeedbackPercentage = ((good / total) * 100)
  if (!PositiveFeedbackPercentage) {
    return 0
  }
  return Number(PositiveFeedbackPercentage.toString().slice(0,3))
}
  render() {
  const {good, neutral, bad} = this.state
  const keys = Object.keys(this.state)
    return <>
    <Section title="Please leave feadback">
 <FeedbackOptions options={keys} onLeaveFeedback={this.onBtnClick}/>
    </Section>
    <Section title="Statistics">
      {this.countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()}
      positiveFeadback={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/>}
      
    </Section>
    <GlobalStyle/>
    </>
  }
}


