const Part1 = (props)=>{
  return(<div><p>{props.part1} {props.exercises1}</p></div>)
};
const Part2 = (props)=>{
  return(<div><p>{props.part2} {props.exercises2}</p></div>)
};
const Part3= (props)=>{
  return(<div><p>{props.part3} {props.exercises3}</p></div>)
};



const Header=(props)=>{
  return(
    <div><h1>{props.course}</h1></div>
  )

};
const Content=(props)=>{
  return(
    <div>
      <Part1 part1={props.part1} />
      <Part2  part2={props.part2}/>
      <Part3 part3={props.part3}/>
    </div>
  )
};
 const Total=(props)=>
 {
  return(
    <div>
    <p>{props.total}</p>
    
    </div>
  )
 };

a

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header  course ={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
     <Total total= {exercises1 + exercises2 +exercises3}/>
    </div>
  )
};

export default App
