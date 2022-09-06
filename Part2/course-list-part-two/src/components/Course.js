
const Course = (props) => {
    return (
    <div>
        <Header course={props.course} />
        <Content course={props.course} />
        <Total course={props.course} />
    </div>
    )
}

const Header = (props) => {
    return <div>
        <h1>{props.course.name}</h1>
    </div>
}

const Content = (props) => {
    return ( 
        props.course.parts.map(part => 
        <Part key={part.id} name={part.name} exercises={part.exercises} />
        )
    )
}

const Total = (props) => {
    const start = 0;
    const total = props.course.parts.reduce((total, part) => total + part.exercises, start)
    return (
        <b>total of {total} exercises</b>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

export default Course