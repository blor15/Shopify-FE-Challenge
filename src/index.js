const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion("text-curie-001", {
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 6,
});