import React, { useState, useEffect } from 'react'
import {Data} from './components/Data'
import { FiMinus, FiPlus, FiArrowUp} from 'react-icons/fi'
import './App.css'

const App = () => {
  const [isClicked, setIsClicked] = useState(false)

  const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 200) {
  //       setShowButton(true)
  //     } else {
  //       setShowButton(false);
  //     }
  //   });
  // }, []);

  // const handleClick = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const handleToggle = index =>{
    if(isClicked === index){
      return setIsClicked(null)
    }else{
      setIsClicked(index)
    } 

  }
  
  // console.log(window.pageYOffset)
 
 
  return (
    <div >
      <header className='bg-slate-800 w-full h-14 flex flex-col
       text-center text-green-300 font-bold text-3xl sm:text-5xl  border-b-2  border-slate-700'>
        <p className=' flex items-center flex-col my-auto'>Dad Joke's</p>
      </header>
      <div className='flex flex-col items-center justify-center py-11 sm:px-0 px-4 bg-slate-900 text-white shadow-2xl font-sans'>

      <p className='font-bold sm:text-3xl text-lg flex flex-col text-center border-b-2 pb-3 border-dashed border-emerald-500'>Welcome to the dad jokes, where laughter is just a pun away!(wink)</p>
      <p className='flex justify-center text-sm text-gray-400 text-center mt-2'><span className='text-red-500'>NOTE:</span> click the question or the '+' sign to view the answer  </p>

      {Data.map((item, index)=>{
      return(
        <div className=' mt-14  gap-14 flex flex-col '>
          
          <div>

            <div className='flex font-mono sm:text-2xl text-xl font-semibold tracking-wider text-center gap-8'>
    
            <h1 
            className='cursor-pointer sm:hover:text-gray-500   duration-300 ' onClick={ () =>{handleToggle(index)} } key={index}> {item.question} </h1>
              <span onClick={ () =>{handleToggle(index)}} className="hover:cursor-pointer">
                {isClicked === index ? <FiMinus color='green' /> : <FiPlus color='green'/>}
              </span>

            </div>
          </div>


          { isClicked === index  ?(
            <h3
             className='flex flex-col text-center font-sans text-xl font-semibold tracking-widest py-5 border-y-2 sm:bg-slate-900 bg-slate-800 border-emerald-500 transition duration-1000 ease-in-out' 
             >
              {item.answer}
              </h3> 
            ) : null }
        </div>
        
      )
      
    })}
    </div>
    {/* {showButton && (
        <button title='Back to top'
          onClick={handleClick}
          className="fixed bottom-0 right-0 mb-16 mr-2 bg-green-700 text-white font-bold py-2 px-4 rounded-full hover:bg-green-900"
        >
          <FiArrowUp size={'25px'} />
        </button>
      )} */}
      </div>
  )
}
export default App
