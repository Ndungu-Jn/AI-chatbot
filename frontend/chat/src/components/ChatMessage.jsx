import React from "react";
import { UserIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const ChatMessage = ({ message, isAi }) => {
  return (
    <div>
      <div>
        className=
        {`max-w-7xl mx-auto flex items-start space-x-4 p-6 rounded-2xl transition-colors duration-200  ${
          isAi ? "bg-blue-100" : "bg-pink-50"
        }`}
        <div></div>
      </div>
    </div>
  );
};

export default ChatMessage;
