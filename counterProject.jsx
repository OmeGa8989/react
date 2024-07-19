import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0); //default value in useState(default value of counter)
  let addValue = () => {
    setCounter(counter + 1)
    console.log(counter);
  }
  let subValue = () => {
    counter = counter === 0 ? 0 : setCounter(counter - 1)
    console.log(counter);
  }
  return (
    <div>

      <h1>A counter Project!</h1>
      <h3>Counter value:{counter}</h3>
      <br />
      <button onMouseEnter={addValue}>++</button>
      <button onMouseEnter={subValue}>--</button>
      <footer>Counter is :{counter}</footer>

    </div>
  )

}

export default App
