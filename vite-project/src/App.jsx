const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.partName} {props.partNumExercises}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part partName={props.course.parts[0].name} partNumExercises={props.course.parts[0].exercises}/>
      <Part partName={props.course.parts[1].name} partNumExercises={props.course.parts[1].exercises}/>
      <Part partName={props.course.parts[2].name} partNumExercises={props.course.parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
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
      <Header course={course} />
      <Content 
        course={course}
      />
      <Total 
        course={course}
      />
    </div>
  )
}

export default App