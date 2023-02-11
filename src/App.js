import React, { useState, useEffect } from 'react'
import {Data} from './components/Data'
import { FiMinus, FiPlus, FiArrowUp} from 'react-icons/fi'
import './App.css'

const App = () => {
  const [isClicked, setIsClicked] = useState(false)
  // 
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 2000);
  }, []);
  // 

  const handleToggle = index =>{
    if(isClicked === index){
      
      return setTimeout(setIsClicked(null), 20000)
    }else{
      setIsClicked(index)
    }
  }
  return (
    <div >
      <header className='bg-slate-800 w-full h-14 flex flex-col
       text-center text-green-300 font-bold text-3xl sm:text-5xl  border-b-2  border-slate-700'>
        <p className=' flex items-center flex-col my-auto'>Dad Joke's</p>
      </header>
      <div className='flex flex-col items-center justify-center py-11 sm:px-0 px-4 bg-slate-900 text-white shadow-2xl font-sans'>
      {/* <h1 className='font-bold text-xl sm:text-4xl mb-6'>What is life without a boring joke?</h1> */}
      <p className='font-bold sm:text-3xl text-lg flex flex-col text-center border-b-2 pb-3 border-dashed border-emerald-500'>Welcome to the dad jokes, where laughter is just a pun away!(wink)</p>
      {Data.map((item, index)=>{
      return(
        <div className=' mt-14  gap-14 flex flex-col '>
          <div>

            <div className='flex font-mono sm:text-2xl text-xl font-semibold tracking-wider text-center gap-8'>
    
            <h1 
            // id='p'
            className='cursor-pointer sm:hover:text-gray-500   duration-300 ' onClick={ () =>{handleToggle(index)} } key={index}> {item.question} </h1>
              <span onClick={ () =>{handleToggle(index)}}>
                {isClicked === index ? <FiMinus color='green' /> : <FiPlus color='green'/>}
              </span>

            </div>
          {isClicked===null?(
            <p className='flex justify-center text-sm text-gray-400 text-center mt-2'>click  to view answer <FiArrowUp color="green" /> </p>

          ): null}
          </div>


          { isClicked === index  ?(
            <h3
            // id='p'
             className='flex flex-col text-center font-sans text-xl font-semibold tracking-widest py-5 border-y-2 sm:bg-slate-900 bg-slate-800 border-emerald-500 transition duration-1000 ease-in-out' 
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
