import { useState,useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // array return krta hai --- ek variable dusra method 
  let[counter,setCounter] = useState(0)  // propagate krta hai UI m...

  const addValue = () => {
    if(counter < 20){
    counter = counter + 1;
    setCounter(counter)
    }else{
      alert("value cant exceed");
    }
  }
  const removeValue=() =>{
    if(counter > 0){
      counter = counter -1 ;
      setCounter(counter)
    }
    else{
      alert("value cant updated");
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br/>
      <br/>
      <button onClick={removeValue}>Remove value: {counter}</button>
      <br/>
      <br/>
      <footer>Counter: {counter}</footer>
    </>
  )
}

export default App;
