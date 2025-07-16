import { useState,useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // array return krta hai --- ek variable dusra method 
  let[counter,setCounter] = useState(0)  // propagate krta hai UI m...

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
  }
  const removeValue=() =>{
    counter = counter -1 ;
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value{counter}</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App;
