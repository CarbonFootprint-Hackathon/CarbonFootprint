import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Chatbot from './Chatbot'
import { Link } from 'react-router-dom';

const Departments = () => {
return (
    <div>
            <Navbar />
            <Header />
            <div className='ml-65 mt-5 '>
                    <div>
                            <h1 className='text-3xl font-bold'>Department Management</h1>
                            <p className='mt-3'>Monitor and Manage emissions across manufacturing departments.</p>
                    </div>

                    <div className='mt-10 flex justify-between items-center mr-30 ml-30'>
                            <div className='w-70 h-70 bg-white shadow-md border-green-500 rounded-3xl hover:cursor-pointer flex flex-col justify-center items-center'>
                                    <h1 className='text-3xl font-extrabold text-green-500 mb-2'>Melting</h1>
                                    <h1 className='font-bold'>Carbon Emissions</h1>
                                    <h1 className='mt-2 '>Value - <span className='font-bold'> kg Co2 </span></h1>
                                    <Link to="/melting">
                                        <button className='bg-green-300 p-2 rounded-2xl mt-3 hover:bg-green-400 '>View More</button>
                                    </Link>
                            </div>

                            <div className='w-70 h-70 bg-white shadow-md border-green-500 rounded-3xl hover:cursor-pointer flex flex-col justify-center items-center'>
                                    <h1 className='text-3xl font-extrabold text-green-500 mb-2'>Machining</h1>
                                    <h1 className='font-bold'>Carbon Emissions</h1>
                                    <h1 className='mt-2 '>Value - <span className='font-bold'> kg Co2 </span></h1>
                                    <Link to="/machining">
                                        <button className='bg-green-300 p-2 rounded-2xl mt-3 hover:bg-green-400'>View More</button>
                                    </Link>
                            </div>

                            <div className='w-70 h-70 bg-white shadow-md border-green-500 rounded-3xl hover:cursor-pointer flex flex-col justify-center items-center'>
                                    <h1 className='text-3xl font-extrabold text-green-500 mb-2'>Dispatch</h1>
                                    <h1 className='font-bold'>Carbon Emissions</h1>
                                    <h1 className='mt-2 '>Value - <span className='font-bold'> kg Co2 </span></h1>
                                    <Link to='/dispatch'>
                                    <button className='bg-green-300 p-2 rounded-2xl mt-3 hover:bg-green-400'>View More</button>
                                    </Link>
                                </div>
                    </div>
            </div>
                                <Chatbot/>
    </div>
)
}

export default Departments