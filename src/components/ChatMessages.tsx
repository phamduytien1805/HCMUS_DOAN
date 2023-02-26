import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import PerfectScrollbar from "react-perfect-scrollbar";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "80%",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    padding: theme.spacing(1),
    overflow: "auto",
    maxHeight: 400,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    marginBottom: theme.spacing(2),
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(10),
    // marginLeft: theme.spacing(2),
  },
  otherMessageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(10),
  },
  sender: {
    fontWeight: "bold",
    fontSize: "0.9rem",
    marginBottom: theme.spacing(0.5),
  },
}));
export interface Props {}

export const ChatMessages: React.FC<Props> = ({}) => {
  const { classes } = useStyles();
  const messages = [
    {
      id: 1,
      sender: "sss",
      content: "Hey there!",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      sender: "vvv",
      content: "sssre sdsdsd?",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      sender: "sss",
      content: "asdasdasdasd",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 4,
      sender: "vvv",
      content: "asdasdasdut asdasd?",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 5,
      sender: "sss",
      content: "ssssssdsdsd",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 6,
      sender: "John",
      content: "I'm good, thanks! How about you?",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 7,
      sender: "Jane",
      content: "Hi John, how are you?",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 8,
      sender: "John",
      content: "I'm good, thanks! How about you?",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 7,
      sender: "Jane",
      content: "Hi John, how are you?",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 8,
      sender: "John",
      content: "I'm good, thanks! How about you?",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
  ];

  return (
    <PerfectScrollbar style={{ maxHeight: "calc(100vh - 170px)" }}>
      <Box>
        {messages.map((message) => (
          <Box
            key={message.id}
            className={
              message.sender === "vvv"
                ? classes.otherMessageContainer
                : classes.messageContainer
            }
          >
            <Box
              className={classes.root}
              bgcolor={message.sender === "John" ? "#f5f5f5" : "#dcf8c6"}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={message.sender} src={message.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <span className={classes.sender}>{message.sender}</span>
                  }
                  secondary={message.content}
                />
              </ListItem>
            </Box>
          </Box>
        ))}
      </Box>
    </PerfectScrollbar>
  );
};
