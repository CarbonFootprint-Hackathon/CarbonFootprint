import React, { useEffect, useRef, useState } from 'react';
import { IoChatbubble } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

const Chatbot = () => {
  const BASE_URL = "http://localhost:8080";

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { user: "bot", message: "Hi there, I’m your Carbon Tracker Assistant 🌱" }
  ]);

  const inputRef = useRef();
  const scrollRef = useRef();

  const handleSend = () => {
    const input = inputRef.current.value.trim();
    if (input === "") return;

    setMessages(prev => [...prev, { user: "user", message: input }]);
    inputRef.current.value = "";

    axios.post(`${BASE_URL}/chatbot`, { input })
      .then(res => {
        setMessages(prev => [...prev, { user: "bot", message: res.data }]);
      })
      .catch(() => {
        setMessages(prev => [...prev, { user: "bot", message: "Oops! Something went wrong." }]);
      });
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button
        className="p-4 rounded-full shadow-lg bg-green-100 hover:bg-green-200 transition-all duration-200"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <IoChatbubble className="text-green-600 text-2xl" />
      </button>

      {chatOpen && (
        <div className="w-80 h-96 mt-4 rounded-xl bg-white shadow-2xl flex flex-col relative overflow-hidden">
          {/* Header */}
          <div className="bg-green-600 text-white flex justify-between items-center px-4 py-2">
            <span className="font-semibold">Carbon Assistant</span>
            <RxCross2
              className="cursor-pointer text-xl hover:text-gray-200 transition"
              onClick={() => setChatOpen(false)}
            />
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-scroll px-3 py-2 space-y-2 bg-gray-50"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`w-fit max-w-[70%] px-3 py-2 rounded-md text-sm ${
                  msg.user === "user"
                    ? "ml-auto bg-green-100 text-right"
                    : "mr-auto bg-white border"
                }`}
              >
                {msg.message}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t p-2 bg-white">
            <input
              type="text"
              ref={inputRef}
              placeholder="Type a message..."
              className="flex-1 text-sm px-3 py-1 border border-gray-300 rounded-l-md focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
