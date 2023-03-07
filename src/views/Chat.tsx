import React from "react";

import { Nav } from "../components/Nav";
import { Sidebar } from "../components/Sidebar";
import { ChatMessages } from "../components/ChatMessages";
import { addMessage, sendMsgToApi } from "../store/messages.slice";
import { RootState } from "../utilities/types";
import { Box } from "@mui/material";
import { ChatBox } from "../components/ChatBox";
import { useAppDispatch, useAppSelector } from "../store/index";
import { nanoid } from "@reduxjs/toolkit";

export const Chat: React.FC = () => {
  const dispatch = useAppDispatch();

  const { messages, loading, errorMsg } = useAppSelector(
    (state: RootState) => state.messagesState
  );

  const handleSendMsg = (msg: string) => {
    dispatch(
      addMessage({
        id: `${nanoid}`,
        content: msg,
        author: "me",
      })
    );
    dispatch(sendMsgToApi(msg));
  };

  return (
    <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
      <Nav />
      <Box display={"flex"} height={"100%"}>
        <Sidebar />
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          padding={(theme) => theme.spacing(2, 2)}
        >
          <ChatMessages messages={messages} isLoading={loading === "loading"} />
          <ChatBox onSendMsg={handleSendMsg} />
        </Box>
      </Box>
    </Box>
  );
};
