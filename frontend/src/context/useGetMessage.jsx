import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

const useGetMessage = () => {
  const { messages, setMessage, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const { data } = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          setMessage(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getMessage();
  }, [selectedConversation, setMessage]);
  return { loading, messages };
};

export default useGetMessage;
