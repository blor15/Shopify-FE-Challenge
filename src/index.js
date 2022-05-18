import React from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components';
import { generatePrompt } from './api';

createRoot(
    document.getElementById('FunWithAIApp')
)
    .render(<Home />);