import React, { useEffect, useRef, useState } from 'react'
import { IoChatbubble } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import axios from "axios"
const Chatbot = () => {
  const BASE_URL = "http://localhost:8080"
  const [chat, setchat] = useState(false)
  const userinput = useRef("")
  const Scroll = useRef()
  const button = document.getElementById("sendbutton")
  const [message, setmessage] = useState([
    { user: "bot", message: "Hi there, Carbon tracker assistent" },
    { user: "user", message: "Hi there, how i can help you" },
  ])
  console.log(message)
  const handleinput = () => {
    setmessage((prev) => (
      [...prev, { user: "user", message: userinput.current.value }]
    ))
    console.log(userinput.current.value)
    axios.post(`${BASE_URL}/chatbot`, { input: (userinput.current.value) })
      .then(res => {
        setmessage((prev) => (
          [...prev, { user: "bot", message: res.data }]
        ))
      })
  }
  useEffect(() => {
    if (Scroll.current) {
      Scroll.current.scrollTop = Scroll.current.scrollHeight
    }
  }, [message])



  return (

    <div className='min-h-screen min-w-screen'>

      <button className='border p-5  rounded-full fixed bottom-10 right-10 active:scale-110 ' onClick={() => setchat(!chat)}>

        <IoChatbubble className=' active:scale-110 text-green-500 text-2xl fill-current  ' />
      </button>
      {
        chat ? <div className=' w-full h-full   '>
          <div className=' fixed bottom-8 right-8'>
            <div name="" id="" className=' bg-gray-100 min-h-96 min-w-64  bottom-15 rounded-l-sm rounded-r-sm rounded-br-sm right-10 z-50  overflow-hidden relative  '>
              <ul ref={Scroll} className='flex flex-col   h-80 top-10 absolute w-full overflow-y-scroll'>
                {
                  message.map((item, key) => (
                    <li key={key} className={`${item.user == "user" ? "self-end bg-red-300" : "right-0 bg-green-200"} w-[70%]  px-2 rounded-sm   mb-2 mr-2 ml-2 py-2`}>{item.message}</li>
                  ))
                }
              </ul>
              <input type="text" className=' bg-white border-dotted border bottom-0 absolute text-sm w-[70%] outline-0 h-8 pl-2 pr-2' ref={userinput} onKeyDown={(e) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  handleinput();
                }
              }} />
              <button id='sendbutton' className='bottom-0 right-0 absolute  rounded- px-3 w-[30%] bg-red-500 py-1 active:scale-110' onClick={handleinput}>Send</button>
            </div>
            <p className='-top-13 absolute z-50 font-mono pr-5 '>Assistant</p>
            <RxCross2 className='z-50 text-2xl -top-12 absolute right-13 active:scale-110 ' onClick={() => setchat(!chat)} />
          </div>

        </div> : ""
      }
    </div>
  )
}

export default Chatbot