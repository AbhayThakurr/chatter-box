import React, { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

const useSendMessage = () => {
  const { messages, setMessage, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);
  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessage([...messages, data]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { loading, sendMessages };
};

export default useSendMessage;
