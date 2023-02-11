import React, { useState } from 'react';
import  './App.css'

function DynamicInputs() {

  const [optionsClickCount, setOptionsClickCount] = useState( () => {
    const storedoptionsClickCount = localStorage.getItem("options");
    if (!storedoptionsClickCount) {
      return 1;
    }
    return JSON.parse(storedoptionsClickCount);
  });

  const [inputs, setInputs] = useState([{ id: 0, value1: '', value2: '' }]);

  const handleAddInput = () => {
    setInputs([...inputs, { id: inputs.length, value1: '', value2: '' }]);
  };

  const handleDeleteInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleInputChange = (event, id) => {
    const updatedInputs = inputs.map((input) => {
      if (input.id === id) {
        return {
          ...input,
          [event.target.name]: event.target.value,
        };
      }
      return input;
    });
    setInputs(updatedInputs);
  };
  const style = 'purple'
  return (
    <div>
      {inputs.map((input) => (
        <div lassName='p-0 flex flex-row mx-auto w-full' key={input.id}>

        <div className='p-4 w-3/5 mx-auto mt-4 border-2 rounded-lg bg-white flex flex-col justify-between shadow-md' style={{borderStyle: `${style}`}}>

        <div className='flex flex-row justify-between'>
                <input type="text"
                className='bg-gray-200 w-[58%] p-[16px] border-b-2 border-black rounded-sm font-normal text-sm outline-none'                  style={{borderColor:`${style}`}}
                placeholder='Input a question'
                name="question"
                // value={input.question}
                onChange={handleInputChange}
              />                    

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="silver" className="bi bi-image my-auto" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>

              <label className=''>
                <select   className='w-56 p-[16px] border-[1px] rounded-md bg-white' onChange={handleInputChange}>
                  <option value={input.text} >
                    Paragraph
                  </option>
                  <option value={input.checkbox}> 
                    Checkbox
                  </option>
                  <option value="Multiple choice">
                    Multiple choice
                  </option>
                  <option value="Dropdown">
                    Dropdown
                  </option>
                  <option value={input.radio}>
                    Radio
                  </option>
                  <option value={input.file}>
                    File
                  </option>
                  <option value={input.number}>
                    Number
                  </option>
                </select>
              </label>
          </div>
            <div className="flex flex-col mt-4 h-auto justify-between">
              <label htmlFor="ques" className='w-[70%] flex flex-col'>
                  <input
                  id='ques'
                  // type={selectedOption.text}
                  type='text'
                  placeholder='text'
                  aria-multiline="true" contentEditable="true"
                  className='block border-b-2 border-dashed  py-[14px] w-[70%] outline-none my-auto'
                  style={{borderColor:`${style}`}}
                  // value={input.answer}
                  onChange={handleInputChange}
                  name="answer"
              />
              {Array.from({length: optionsClickCount}, (_, o) => (
                <label htmlFor="op" key={o} className='w-44 flex flex-row gap-5 ml-5'>
                  <input
                  id='ques'
                  // type={selectedOption.text}
                  type='text'
                  placeholder='text'
                  aria-multiline="true" contentEditable="true"
                  className="border-b-2 border-dashed  py-[14px] w-[70%] outline-none my-auto"
                  style={{borderColor:`${style}`}}
                  // value={input.answer}
                  onChange={handleInputChange}
                  name="answer"
              />
                  <input
                  type="text" 
                  placeholder='question'
                  aria-multiline="false" contentEditable="true" autoComplete='true'
                  className="border-b-2 border-dashed  py-[14px] w-44 outline-none my-auto"
                  style={{borderColor:`${style}`}}
              />
                </label>
                ))}
          
              </label>
            
            
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash my-auto mt-11 " viewBox="0 0 16 16" onClick={() => handleDeleteInput(input.id)}>
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </div>
          </div>

          {/* <button onClick={() => handleDeleteInput(input.id)}>Delete</button> */}
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>
    </div>
  );
}

export default DynamicInputs;


// function detectOS() {
//     const platform = navigator.platform;
//     switch (platform) {
//       case "iPhone":
//         console.log("Hello iOS user");
//         break;
//       case "iPad":
//         console.log("Hello iOS user");
//         break;
//       case "iPod":
//         console.log("Hello iOS user");
//         break;
//       case "MacIntel":
//         console.log("Hello MacOS user");
//         break;
//       case "Win32":
//         console.log("Hello Windows user");
//         break;
//       case "Win64":
//         console.log("Hello Windows user");
//         break;
//       case "Linux x86_64":
//         console.log("Hello Linux user");
//         break;
//       case "Linux i686":
//         console.log("Hello Linux user");
//         break;
//       default:
//         console.log("Unknown OS");
//         break;
//     }
//     // console.log(platform+'fool')
//   }
//   function checkDevice() {
//     const userAgent = navigator.userAgent;
//     if (userAgent.includes("iPhone")) {
//       console.log("Hello iOS user!");
//     } else if (userAgent.includes("Android")) {
//       console.log("Hi Android user!");
//     } else if (userAgent.includes("Macintosh")) {
//       console.log("Hello MacOS user!");
//     } else if (userAgent.includes("Windows")) {
//       console.log("Hi Windows user!");
//     } else if (userAgent.includes("Linux")) {
//       console.log("Hi Linux user!");
//     } else {
//       console.log("Hi user from an unknown device!");
//     }
//   }
  