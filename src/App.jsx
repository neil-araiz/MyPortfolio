import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

import Home from './page/Home';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ChatBot />
    </BrowserRouter>
  )
}

export default App
