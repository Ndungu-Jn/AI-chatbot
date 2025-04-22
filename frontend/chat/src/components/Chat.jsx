import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Chat = () => {
  const [messages, setMessage] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const messageEndRef = React.useRef(null);
  const inputRef = React.useRef(null);

  return (
    <main className="">
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-pink-600">Ndungu's AI</span> Chat Assistant
          </h1>
        </div>
      </div>
      <div className=""></div>
      <div className="flex-1 overflow-y-auto p-4 space-y-6 ">
        {messages.length === 0 ? (
          <div className="flex flex-col  items-center justify-center h-full text-center text-gray-500">
            <svg
              className="w-16 h-16 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <p className="text-xl font-medium">Start a conversation</p>
            <p className="mt-2">Ask me anything!</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isAi={message.isAi}
            />
          ))
        )}
        {isLoading && (
          <div className="flex items-center justify-center space-x-2 p-4">
            <div className="animate-bounce h-2 w-2 bg-pink-500 rounded-full"></div>
            <div className="animate-bounce h-2 w-2 bg-pink-500 rounded-full delay-100"></div>
            <div className="animate-bounce h-2 w-2 bg-pink-500 rounded-full delay-200"></div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </main>
  );
};

export default Chat;
