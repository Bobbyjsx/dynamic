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
    <div >
      <header className='bg-slate-800 w-full h-14 flex flex-col
       text-center text-green-300 font-bold text-3xl sm:text-5xl  border-b-2 pb-3  border-slate-700'>
        <p className=' flex items-center flex-col my-auto'>Dad Joke's</p>
      </header>
      <div className='flex flex-col items-center justify-center py-11 sm:px-0 px-4 bg-slate-900 text-white shadow-2xl font-sans'>
      {/* <h1 className='font-bold text-xl sm:text-4xl mb-6'>What is life without a boring joke?</h1> */}
      <p className='font-bold sm:text-3xl text-lg flex flex-col text-center border-b-2 pb-3 border-dashed border-emerald-500'>Welcome to the dad jokes, where laughter is just a pun away!(wink)</p>
      {Data.map((item, index)=>{
      return(
        <div className=' mt-14  gap-14 flex flex-col '>
          <div className='flex font-mono sm:text-2xl text-xl font-semibold tracking-wider text-center gap-8'>
   
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
      </div>
  )
}
export default App
