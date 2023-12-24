import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './Users'
import Friends from './Friends'

function App() {

  // normal function use kore
  function handleClick() {
    alert('button clciked')
  }

  // arrow function use kore
  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }


  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      {/* direact function use  */}
      <button onClick={() => { alert('Third clicked') }} third></button>
      {/* <button onClick={addToFive(3)}>Four</button> */}
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
