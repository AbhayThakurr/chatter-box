import React from "react";
import { CiMenuFries } from "react-icons/ci";
import useConversation from "../../../zustand/useConversation.js";
import { useSocket } from "../../../context/SocketContext.jsx";

const ChatUser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocket();

  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? "online" : "offline";
  };
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div>
          <h1 className="text-xl">Name</h1>
          <span className="text-sm">
            {getOnlineUserStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
