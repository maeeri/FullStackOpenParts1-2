import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

function addPoints(points, index) {
  const copy = [...points]
  copy[index] += 1
  return copy
}

function getIndexOfHighest(points) {
  const max = Math.max(...points)
  const index = points.indexOf(max)
  console.log(index)
  return index
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(7).fill(0))

  function getIndex() {
    setSelected(Math.floor(Math.random() * 7))
  } 

  console.log(getIndexOfHighest(points))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <p>
        <Button handleClick={() => setPoints(addPoints(points, selected))} text='vote' />
        <Button handleClick={getIndex} text='next anecdote' />
      </p>
      <h2>The anecdote with the most votes</h2>
      <p>{anecdotes[getIndexOfHighest(points)]}</p>
      <p>has {points[getIndexOfHighest(points)]} points</p>
    </div>
  )
}

export default App