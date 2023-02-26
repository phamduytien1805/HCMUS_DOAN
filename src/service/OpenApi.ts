import axios, { AxiosResponse } from "axios";
import { Message } from "../utilities/types";
import { nanoid } from "@reduxjs/toolkit";
import { delay } from "lodash";
export const API_GET_COMPLETION =
  "https://api.openai.com/v1/engines/davinci-codex/completions";
export class OpenAPI {
  private secretKey = process.env.REACT_APP_CHATGPT_SECRET_KEY;
  protected model = "text-davinci-003";
  protected max_tokens = 7;
  protected temperature = 0;
  protected top_p = 1;
  protected n = 1;
  protected stream = false;
  protected logprobs = null;
  protected stop = "\n";

  constructor() {}

  async getCompletion(prompt: string): Promise<Message> {
    // const response: AxiosResponse = await axios.post(
    //   API_GET_COMPLETION,
    //   {
    //     model: this.model,
    //     prompt: prompt,
    //     max_tokens: this.max_tokens,
    //     temperature: this.temperature,
    //     top_p: this.top_p,
    //     n: this.n,
    //     stream: this.stream,
    //     logprobs: this.logprobs,
    //     stop: this.stop,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${this.secretKey}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const { id, choices } = response.data;
    return {
      id: `${nanoid()}`,
      author: "GPT",
      // content: choices[0].text.trim(),
      content: "test",
    };
  }
}
