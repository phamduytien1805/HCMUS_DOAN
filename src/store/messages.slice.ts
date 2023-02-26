import axios from "axios";
import {
  createSlice,
  PayloadAction,
  Dispatch,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { Message, MessagesState } from "../utilities/types";

const initialState: MessagesState = {
  messages: [],
  loading: false,
  errorMsg: null,
};

export const sendMsgToApi = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    // const response = await fetchCount(amount);
    // // The value we return becomes the `fulfilled` action payload
    // return response.data;
    return { content: "asdasd", date: "DOB", author: "api" };
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, { payload }: PayloadAction<Message[]>) => {
      state.messages = payload;
    },
    addMessage: (state, { payload }: PayloadAction<Message>) => {
      state.messages.push(payload);
    },
    sendMessage: (state, { payload }: PayloadAction<any>) => {
      // Placeholder for own message
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMsgToApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMsgToApi.fulfilled, (state, action) => {
        state.loading = false;
        state.messages.push(action.payload);
      })
      .addCase(sendMsgToApi.rejected, (state) => {
        state.loading = false;
        state.errorMsg = "Oops! Something went wrong!";
      });
  },
});

export const { sendMessage, addMessage, setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;

// Action
// export function getMessages() {
//   return async (dispatch: Dispatch, getState: () => {}) => {
//     dispatch(setLoading());

//     try {
//       const { data } = await axios("/api/messages");

//       dispatch(setMessages(data.messages));
//     } catch (e) {
//       // Not handling errors
//       console.log(e);
//     } finally {
//       dispatch(setLoadingComplete());
//     }
//   };
// }
