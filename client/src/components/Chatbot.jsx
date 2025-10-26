import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { text: message, sender: 'user' };
    const newChat = [...chat, userMessage];
    setChat(newChat);
    setMessage('');

    try {
      const response = await axiosInstance.post('/chatbot', { message });
      const botMessage = { text: response.data.reply, sender: 'bot' };
      setChat(prev => [...prev, botMessage]);
    } catch (error) {
      const botMessage = { text: 'Sorry, I couldn\'t process that.', sender: 'bot' };
      setChat(prev => [...prev, botMessage]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
      <div className="bg-blue-600 text-white p-2 rounded-t-lg">City Assistant</div>
      <div className="flex-1 p-2 overflow-y-auto">
        {chat.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-2 border-t">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="w-full p-2 border rounded"
          placeholder="Ask me anything..."
        />
      </div>
    </div>
  );
};

export default Chatbot;