import React from 'react'
import { useState } from 'react';

const Home = ({Firstname}) => { 

  /* useState in react  */

  const  [state, setState] = useState(true); 

  /* Adding event to my react app */
  const handleClick = (kini) =>{
    
     /* conditional rendering */
   setState("Stackninja.pro"); 
  }


  const handleClickAgain = (name) =>{
    alert(`this is just a testing mode which is done by ${name}`)
  }


  return (
    <div className='flex items-center justify-center flex-col my-2'>
      <h1>This is a website for making a Real Estate management</h1>
      <h2>My name is {Firstname} {state }</h2>


        <button className='p-2 bg-slate-600 text-white border rounded-xl my-2' 
                 onClick= {() => handleClick("Trusteegain")}>
          Click Me
        </button>

        <button className='p-2 bg-slate-600 text-white border rounded-xl'
                onClick={() => handleClickAgain('Prince')}>
          Click Me Again
        </button>

    </div>
  )
}

export default  Home