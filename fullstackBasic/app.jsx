import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const [jokes,setJokes]= useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>setJokes(response.data))
    .catch((error)=>console.log(error))
    
  })
  return(
    <>
      <h1>Full Stack</h1>
    <p>JOKES : {jokes.length}</p>
    {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))
    }
    
    </>
  )
}

export default App
