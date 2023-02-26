// =======================================================================================
// Messages
// =======================================================================================

export interface Message {
  content: string;
  date: string;
  author: string;
}

export interface MessagesState {
  messages: Message[];
  loading: boolean;
  errorMsg: string | null;
}

export interface RootState {
  messagesState: MessagesState;
}
