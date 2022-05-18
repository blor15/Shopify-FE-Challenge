import React, { useState, useEffect } from "react"
import { generateResponse } from "../api/completion";


export const Input = () => {
    const [prompt, setPrompt] = useState("");



    return (
        <div>
            <form onSubmit={generateResponse}>
                <input
                    type="text"
                    name="prompt"
                    placeholder="Enter a prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <input type="submit" value="Generate response" />
            </form>
            <div></div>
        </div>
    )
}
