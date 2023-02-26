import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration); 

async function runCompletion (question) {
  var ans = "";
  if (!configuration.apiKey) {
      console.log("OpenAI API key not configured, please follow instructions in README.md");
    return;
  }

  try {
    const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    temperature: 0,
    max_tokens: 1000,
    });
    ans = completion.data.choices[0].text;
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
  return  await ans;
};

var anw;
var questionInput = "i love you, and you?";
anw = await runCompletion(questionInput);
console.log(anw);

