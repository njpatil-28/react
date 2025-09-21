import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter]=useState(0)

  const addValue = () =>{
    console.log('Add Value', counter)
    if(counter<=19){
      counter=counter+1
      setcounter(counter)
    }
    else[
      console.log('Maz value reach...')
    ]
    
  }

  const decValue = () => {
    console.log('Dec Value', counter)
    if(counter>=1){
      counter=counter-1
      setcounter(counter)  
    }
    else{
      console.log('Min value reach...')
    }
    
  }
  return (
    <>
    <h1>This is my 2nd project on hooks and project</h1>
    <h2>Counter {counter}</h2>
    <button
    onClick={addValue}> Add value {counter} </button>
    <br/  >
    <button
    onClick={decValue}> Dec value {counter} </button>
    <h4> This is used of hook to change the UI on multiple places by using useState </h4>
    <h6> Increase and decrease value from 0 to 20 range </h6>
    </>
  )
}

export default App
