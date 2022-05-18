import { Configuration, OpenAIApi } from "openai";
import { API_URL } from "./constant";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const data = {
    prompt: "Once upon a time there was...",
    temperature: 0.5,
    max_tokens: 5,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
};

export async function generateResponse() {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify(data)
        })
        const result = await result.json();
        return result
    } catch (error) {
        console.error(error)
    } throw error;
}


