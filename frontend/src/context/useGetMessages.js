import React, { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import { useEffect } from "react";
import { axiosClient } from "../utils/axiosClient.js";

const useGetMessages = () => {
  const [loading, setLoading] = useState(true);
  const { messages, setMessages, selectedConvo } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConvo && selectedConvo._id) {
        try {
          const res = await axiosClient.get(
            `/get-message/${selectedConvo._id}`,
            { withCredentials: true }
          );

          setMessages(res.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    getMessages();
  }, [selectedConvo, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
