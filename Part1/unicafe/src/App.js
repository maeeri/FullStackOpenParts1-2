import { useState } from 'react'



const Button = ({handleClick, text}) => {
  return (
  <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value, marker}) => {
  return (
    <div>{text} {value} {marker}</div>
  )
}



const Statistics = (props) => {

  const addAll = (good, neutral, bad) => {
    const add = good + neutral + bad
    return add
  }

  const calcAverage = (good, neutral, bad) => {
    const avg = (good + neutral * 0 + bad * (-1)) / addAll(good, neutral, bad)
    return avg
  }

  const percent = (good, neutral, bad) => {
    return good / addAll(good, neutral, bad) * 100
  }

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
        <StatisticLine text='good' value={props.good} />
        <StatisticLine text='neutral' value={props.neutral} />
        <StatisticLine text='bad' value={props.bad} />
        <StatisticLine text='all' value={addAll(props.good, props.neutral, props.bad)} />
        <StatisticLine text='average' value={calcAverage(props.good, props.neutral, props.bad)} />
        <StatisticLine text='positive' value={percent(props.good, props.neutral, props.bad)} marker='%' />
    </div>
  )

}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good + 1)
  const addNeutral = () => setNeutral(neutral + 1)
  const addBad = () => setBad(bad + 1)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={addGood} text='good' />
        <Button handleClick={addNeutral} text='neutral' />
        <Button handleClick={addBad} text='bad' />
      </div>

      <Statistics good={good} neutral={neutral} bad={bad} /> 
    </div>
  )
}

export default App