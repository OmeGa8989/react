import { useRef, useState } from 'react'
import {motion} from 'framer-motion'



const SlideTabsExample = () => {
return(
  <div className='  grid place-content-center  h-screen  bg-gradient-to-t from-sky-300 to  bg-pink-500 '>
    <SlideTabs/>
  </div>
)
}



function SlideTabs (){
 const [position , setPosition] = useState({
  left:0,
  width:0,
  opacity: 0,
 })



  return(
    <ul onMouseLeave ={()=>{
      setPosition(pv=>({ ...pv, opacity:0,}
    ))
    }} className='  bg-white border-black p-1 border-2 rounded-full w-fit relative mx-auto flex'>
    <Tab setPosition={setPosition}>Home</Tab>
    <Tab setPosition={setPosition}>Pricing</Tab>
    <Tab setPosition={setPosition}>Docs</Tab>
    <Tab setPosition={setPosition}>Features</Tab>
    <Tab setPosition={setPosition}>Blog</Tab>
    <Cursor position={position}/>

    </ul>

  )
}

const Tab = ({children , setPosition })=>{
  const ref = useRef(null)
  return(
    <li 
    ref= {ref}
    onMouseEnter={() =>{
      if(!ref.current) return;

      const {width} = ref.current.getBoundingClientRect()

      setPosition({
        width,
        opacity:1,
        left:ref.current.offsetLeft,
      })
      
        }
    }
    className='relative font-semibold z-10 block cursor-pointer px-3 py-1.5  text-xs uppercase text-white  mix-blend-difference md:px-5 md:py-3 md:text-base'>{children}</li>
  )
}


const Cursor = ({position}) =>{
  return(
    < motion.li animate={position } className='absolute z-0 h-7   rounded-full  bg-black md:h-12' />
  )
}


export default SlideTabsExample
// export default App
