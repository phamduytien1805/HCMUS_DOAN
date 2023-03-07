import { Configuration, OpenAIApi } from "openai";
import { Message } from "../utilities/types";
import { nanoid } from "@reduxjs/toolkit";
export const API_GET_COMPLETION =
  "https://api.openai.com/v1/engines/davinci-codex/completions";
export class OpenAPI {
  private secretKey = process.env.REACT_APP_CHATGPT_SECRET_KEY;
  private configuration: any;
  private openai: any;

  protected model = "text-davinci-003";
  protected max_tokens = 2048;
  protected temperature = 0.5;

  constructor() {
    this.configuration = new Configuration({
      apiKey: this.secretKey,
    });

    this.openai = new OpenAIApi(this.configuration);
  }

  async getCompletion(question: string): Promise<Message> {
    if (!this.configuration.apiKey) {
      console.log(
        "OpenAI API key not configured, please follow instructions in README.md"
      );
    }
    const completion = await this.openai.createCompletion({
      model: this.model,
      prompt: question,
      temperature: this.temperature,
      max_tokens: this.max_tokens,
    });

    return {
      id: `${nanoid()}`,
      author: "GPT",
      content: String(completion.data.choices[0].text),
    };
  }
}
