import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { sendMessageToGemini } from '@/services/geminiService';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hi! I'm Neil's AI assistant. Ask me anything about his experience, skills, or projects!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Get chat history for context (last 10 messages)
      const recentHistory = messages.slice(-10);
      const response = await sendMessageToGemini(inputValue, recentHistory);

      const botMessage = {
        role: 'bot',
        text: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        role: 'bot',
        text: "Sorry, I encountered an error. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([
      {
        role: 'bot',
        text: "Hi! I'm Neil's AI assistant. Ask me anything about his experience, skills, or projects!",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[380px] h-[500px] bg-slate-gray border-2 border-accent/30 rounded-lg shadow-2xl flex flex-col chatbot-slide-up backdrop-blur-md">
          {/* Header */}
          <div className="bg-background-primary border-b border-accent/20 px-4 py-3 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <h3 className="text-primary font-semibold text-lg">Neil's AI Assistant</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="text-secondary hover:text-accent transition-colors p-1"
                title="Clear chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <button
                onClick={toggleChat}
                className="text-secondary hover:text-accent transition-colors p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} message-fade-in`}
              >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-accent text-background-primary font-medium'
                    : 'bg-background-secondary text-primary border border-accent/10'
                }`}
              >
                {message.role === 'user' ? (
                  <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
                ) : (
                  <div className="text-sm prose prose-invert prose-sm max-w-none
                    prose-headings:text-accent prose-headings:font-semibold prose-headings:mt-3 prose-headings:mb-2
                    prose-p:text-primary prose-p:my-2 prose-p:leading-relaxed
                    prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80
                    prose-strong:text-accent prose-strong:font-bold
                    prose-code:text-accent prose-code:bg-background-primary prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                    prose-pre:bg-background-primary prose-pre:border prose-pre:border-accent/20 prose-pre:p-3 prose-pre:rounded prose-pre:my-2
                    prose-ul:list-disc prose-ul:ml-4 prose-ul:my-2
                    prose-ol:list-decimal prose-ol:ml-4 prose-ol:my-2
                    prose-li:text-primary prose-li:my-1">
                    <ReactMarkdown
                      components={{
                        a: ({ node, children, href, ...props }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline text-accent hover:text-accent/80 transition-colors"
                            {...props}
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background-secondary text-primary border border-accent/10 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce delay-200"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-accent/20 p-4 bg-background-primary rounded-b-lg">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                disabled={isLoading}
                className="flex-1 bg-slate-gray text-primary border border-accent/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors placeholder-secondary/50 disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-accent text-background-primary px-4 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-accent text-background-primary p-4 rounded-full shadow-2xl hover:bg-accent/90 hover:scale-110 transition-all duration-300 group"
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        ) : (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          </div>
        )}
      </button>
    </>
  );
};

export default ChatBot;
