import Course from './Course'

const CourseList = (props) => {
    console.log(props)
    return (
        <div>
            {props.courses.map(course => 
                <Course key={course.id} course={course} />)}
        </div>
    )
}

export default CourseList