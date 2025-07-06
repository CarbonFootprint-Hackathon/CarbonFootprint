import React from 'react'
import Chatbot from '../Chatbot'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'


const Dispatch = () => {
  return (
    <div>
        <Navbar />
        <Header/>
        <div>
            <h1>Dispatch</h1>
        </div>
        <Chatbot/>
    </div>
  )
}

export default Dispatch