import React, { useEffect } from "react";

import useConversation from "../zustand/useConversation.js";
import sound from "../assets/notification.mp3";
import { useSocket } from "./SocketContext.jsx";
const useGetSocketMessage = () => {
  const { socket } = useSocket();
  const { messages, setMessage } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
      notification.play();
      setMessage([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessage]);
};
export default useGetSocketMessage;
