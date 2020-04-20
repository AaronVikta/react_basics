import React,{useState} from 'react';
import './App.css';

function Button(props) {
  const handleClick= ()=>props.onClickFunction(props.increment)
  return (
    <button onClick={handleClick}>
       +{props.increment}
    </button>
  );
}
//Display component
function Display(props){
  return (
    <div>
      {props.message}
    </div>
  )
}
 function App(){
   const [counter, setCounter]= useState(42);
   const incrementCounter =(
     incrementValue)=>setCounter(counter+incrementValue
     );
   return (
     <div>
      <Button onClickFunction = {incrementCounter} increment={1}/>
      <Button onClickFunction = {incrementCounter} increment={5}/>
      <Button onClickFunction = {incrementCounter} increment={10}/>
      <Button onClickFunction = {incrementCounter} increment={100}/>
      <Display message={counter}/>
     </div>
   )
 }

export default App;
// function App() {
//   const [counter, setCounter]= useState(5);
//   return (
//     <button onClick={()=>setCounter(counter*2)}>{counter}</button>
//   );
// }
