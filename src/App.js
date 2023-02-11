import React, { useState } from 'react'
import {Data} from './components/Data'
import { FiMinus, FiPlus} from 'react-icons/fi'
import './App.css'

const App = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleToggle = index =>{
    if(isClicked === index){
      return setIsClicked(null)
    }else{
      setIsClicked(index)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center py-11 sm:px-0 px-4 bg-slate-900 text-white shadow-2xl '>
      {Data.map((item, index)=>{
      return(
        <div className=' mt-14  gap-14 flex flex-col '>
          <div className='flex font-mono text-2xl font-semibold tracking-wider text-center gap-8'>
   
          <h1 className='cursor-pointer hover:text-gray-500' onClick={ () =>{handleToggle(index);  console.log( isClicked)} } key={index}> {item.question} </h1>
            <span>
              {isClicked === index ? <FiMinus color='green' /> : <FiPlus color='green'/>}
            </span>

          </div>

          { isClicked === index  ?(
            <h3
             className='flex flex-col text-center font-sans text-xl font-semibold tracking-widest py-5 border-y-2 border-emerald-500' 
             >
              {item.answer}
              </h3> 
            ) : null }
        </div>
      )
      
    })}
    </div>
  )
}
export default App
