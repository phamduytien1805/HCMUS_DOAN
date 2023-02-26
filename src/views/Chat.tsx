import React, {
  useMemo,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
} from "react";

import { useSelector, useDispatch } from "react-redux";

import { Nav } from "../components/Nav";
import { Sidebar } from "../components/Sidebar";
import { ChatMessages } from "../components/ChatMessages";
import { sendMessage } from "../store/messages.slice";
import { RootState, Message } from "../utilities/types";
import Button, { Box, Grid } from "@mui/material";
import { ChatBox } from "../components/ChatBox";

export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const [messageInput, setMessageInput] = useState("");

  const { messages, loading } = useSelector(
    (state: RootState) => state.messagesState
  );

  const handleSendMsg = (msg: string) => {
    console.log("sent :>> ", msg);
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
          <ChatMessages />
          <ChatBox onSendMsg={handleSendMsg} />
        </Box>
      </Box>
    </Box>
  );
};
