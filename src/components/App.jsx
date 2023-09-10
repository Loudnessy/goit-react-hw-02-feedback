import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";
export const App = () => {
  const [good, setGoodFeedback] = useState(0)
  const [neutral, setNeutralFeedback] = useState(0)
  const [bad, setBadFeedback] = useState(0)
  const onBtnClick = evt => {
    if (evt.target === evt.currentTarget) {
      return
    }
switch (evt.target.textContent) {
  case "good":
    setGoodFeedback(good + 1)
    break;
    case "neutral":
    setNeutralFeedback(neutral + 1)
    break;
    case "bad":
    setBadFeedback(bad + 1)
    break;

  default:
    console.log("error");
}
  }
const countTotalFeedback = () => {
return good + neutral + bad
}
const countPositiveFeedbackPercentage = () => {
  const total = countTotalFeedback()
  const PositiveFeedbackPercentage = ((good / total) * 100)
  if (!PositiveFeedbackPercentage) {
    return 0
  }
  return Number(PositiveFeedbackPercentage.toString().slice(0,3))
}
  const keys = ["good", "neutral", "bad"]
    return <>
    <Section title="Please leave feadback">
 <FeedbackOptions options={keys} onLeaveFeedback={onBtnClick}/>
    </Section>
    <Section title="Statistics">
      {countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()}
      positiveFeadback={countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/>}
      
    </Section>
    <GlobalStyle/>
    </>
}


