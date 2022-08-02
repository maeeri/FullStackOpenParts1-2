
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.pt1} exercises={props.ex1} />
      <Part part={props.pt2} exercises={props.ex2} />
      <Part part={props.pt3} exercises={props.ex3} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.pt} {props.ex}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header  course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App