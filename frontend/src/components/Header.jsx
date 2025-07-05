import React from 'react'
import { FcEnteringHeavenAlive } from "react-icons/fc";

const Header = () => {
  return (
    <div className='static h-23 bg-white-50 shadow-sm ml-60 flex justify-between items-center'>
      <div>
        <h1 className='text-3xl font-bold ml-1'>
          Carbon Net Zero Dashboard
        </h1>
      </div>
      
          <h1>
            <FcEnteringHeavenAlive className='ml-5' />

            Live Data
          </h1>
        <div className='mr-3'>
          <h1>Last Updated</h1>
          <h3 className='font-bold bg-green-200 rounded-3xl'>0 Seconds Ago</h3>
        </div>
      
    </div>
  )
}

export default Header