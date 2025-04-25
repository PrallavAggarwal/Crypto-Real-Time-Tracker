import { useState } from 'react'
import './App.css'
import Heading from './Components/Heading'
import Dashboard from './Components/Dashboard'

function App() {

  return (
   <>
   <div className='flex flex-col items-center justify-center w-screen h-screen bg-purple-800'>

    <Heading />
    <Dashboard />
   </div>
   </>
  )
}

export default App
