import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myProp = {
    name : "Adhyan",
    tech : 1,
  }
  

 let arr=[1,2,3,4,5]

  return (
    <>
      <h1 className='  text-left font-mono text-yellow-300 bg-pink-400 rounded-lg text-5xl mb-4 p-2 '>My Card ⬇️</h1>
      <Card name = 'Adhyan' h1= "This is 1st page"  type = {1} objReturn={myProp}/>
      <Card name = 'Aditya' h1= "This is 2nd page"  type = {2}  objReturn={arr}/>
    
    </>
  )
  
}

export default App
