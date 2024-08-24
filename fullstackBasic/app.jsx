import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)
  const [jokes,setJokes]= useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{console.log("error fetching jokes ", error)})
    
  })
  return(
    <>
      <h1>Full Stack</h1>
    <p>JOKES : {jokes.length}</p>
    {
      jokes.map((joke,index)=>( // note we used ( here ) instead of { here } 
      // you can use return or () either in case of .map function
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
        </div>
      ))
    }
    
    </>
  )
}

export default App
