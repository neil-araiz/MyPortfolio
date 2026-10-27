import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { sendMessageToGemini } from '@/services/geminiService';

const SUGGESTED_PROMPTS = [
  "What is Neil's primary tech stack?",
  "Tell me about the AI RAG Assistant project",
  "What production mobile apps has he built?",
  "How can I get in touch with Neil?",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'bot',
      text: "Hi, I am Neil's AI assistant. Ask me anything about his technical background, experience, or projects.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendPrompt = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const recentHistory = messages.slice(-10);
      const response = await sendMessageToGemini(text, recentHistory);

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
        text: "I am having trouble connecting right now. Please reach out to Neil directly via the contact form or email.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = () => {
    sendPrompt(inputValue);
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
        text: "Hi, I am Neil's AI assistant. Ask me anything about his technical background, experience, or projects.",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] h-[540px] max-h-[80vh] bg-[#0d2242] border border-white/10 rounded-2xl shadow-2xl flex flex-col chatbot-slide-up backdrop-blur-xl overflow-hidden">
          {/* Header */}
          <div className="bg-[#0a192f] border-b border-white/10 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
              <div>
                <h3 className="text-heading font-semibold text-sm">Neil's Assistant</h3>
                <span className="text-[10px] font-mono text-accent">Powered by Gemini AI</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="text-secondary hover:text-accent transition-colors p-1.5 rounded-lg hover:bg-white/5"
                title="Reset conversation"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                onClick={toggleChat}
                className="text-secondary hover:text-accent transition-colors p-1.5 rounded-lg hover:bg-white/5"
                title="Close chat"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scrollbar text-sm">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} message-fade-in`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-accent text-[#0a192f] font-medium rounded-tr-sm'
                      : 'bg-[#112240] text-primary border border-white/5 rounded-tl-sm'
                  }`}
                >
                  {message.role === 'user' ? (
                    <p className="whitespace-pre-wrap break-words text-xs sm:text-sm">{message.text}</p>
                  ) : (
                    <div className="prose prose-invert prose-xs sm:prose-sm max-w-none
                      prose-headings:text-accent prose-headings:font-semibold prose-headings:mt-2 prose-headings:mb-1
                      prose-p:text-primary prose-p:my-1 prose-p:leading-relaxed
                      prose-a:text-accent prose-a:underline hover:prose-a:text-accent/80
                      prose-strong:text-accent prose-strong:font-semibold
                      prose-code:text-accent prose-code:bg-[#0a192f] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-[11px]
                      prose-ul:list-disc prose-ul:ml-3 prose-ul:my-1
                      prose-ol:list-decimal prose-ol:ml-3 prose-ol:my-1
                      prose-li:text-primary prose-li:my-0.5">
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

            {/* Quick Suggestion Chips on initial state */}
            {messages.length === 1 && (
              <div className="pt-2 space-y-1.5">
                <span className="block text-[11px] font-mono text-secondary">
                  Suggested topics:
                </span>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTED_PROMPTS.map((prompt, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => sendPrompt(prompt)}
                      className="text-left text-xs font-mono text-accent bg-accent/5 hover:bg-accent/15 border border-accent/20 px-3 py-2 rounded-xl transition-all duration-150"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#112240] text-primary border border-white/5 px-4 py-2.5 rounded-2xl rounded-tl-sm">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-white/10 p-3 bg-[#0a192f]">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Neil's background..."
                disabled={isLoading}
                className="flex-1 bg-[#112240] text-primary border border-white/10 rounded-xl px-3.5 py-2 text-xs sm:text-sm focus:outline-none focus:border-accent/60 transition-colors placeholder:text-secondary/40 disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-accent text-[#0a192f] px-3.5 py-2 rounded-xl font-semibold hover:bg-accent/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label="Send message"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#112240] hover:bg-[#172d54] text-heading border border-accent/40 px-4 py-3 rounded-full shadow-2xl hover:border-accent transition-all duration-300 group"
        aria-label="Ask Neil's AI assistant"
      >
        <div className="relative flex items-center justify-center">
          <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-ping" />
        </div>
        <span className="text-xs font-mono font-semibold text-heading group-hover:text-accent transition-colors hidden sm:inline">
          {isOpen ? "Close Assistant" : "Ask Neil's AI"}
        </span>
      </button>
    </>
  );
};

export default ChatBot;
