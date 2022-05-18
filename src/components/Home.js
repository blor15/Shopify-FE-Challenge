import { useState } from 'react';
import { generateResponse } from '../api/completion';
import { Input } from './Prompt';

export function Home() {



    return (
        <div>
            <h1>Fun With AI</h1>
            <Input />
        </div>
    )
}