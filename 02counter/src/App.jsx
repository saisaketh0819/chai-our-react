import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  //let counter =5
  const addValue = () =>{
    //counter = counter+1
    setCounter(counter+1)
  }
  return (
    <>
      <h1>Hello</h1>
      <h2>Counter vlaue: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br/>
      <button>Remove</button>
    </>
  )
}

export default App
