import { Configuration, OpenAIApi } from "openai";

// get the open ai api key
const myApiKey = String(process.env.OPENAI_API_KEY);

const configuration = new Configuration({
  organization: "org-oi94BI9EZ1wFFXi3UBfQ8mya",
  apiKey: myApiKey
});

const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [
    {role: "user", content: "hello world"}
  ]
});

console.log(completion.data.choices[0].message);