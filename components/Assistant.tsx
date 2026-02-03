import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ChatMessage } from '../types';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        role: 'model',
        text: 'Благодарю за ваш вопрос. Для полноценной работы ассистента необходимо настроить API ключ.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-2xl border border-teal-100 h-[600px] flex flex-col shadow-lg">
      <div className="p-4 border-b border-teal-100">
        <h2 className="font-semibold teal-text">Консультация с ТЭС-ассистентом</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 py-8">
            <p>Задайте ваш вопрос о технике эмоциональной свободы</p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-teal-500 text-white ml-auto'
                : 'bg-teal-50 border border-teal-100'
            }`}
          >
            <p className={msg.role === 'user' ? 'text-white' : 'teal-text'}>{msg.text}</p>
          </div>
        ))}
        {isLoading && (
          <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl max-w-[80%]">
            <p className="text-gray-400">Печатает...</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-teal-100">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите ваш вопрос..."
            className="flex-1 px-4 py-3 bg-white border border-teal-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-teal-400"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 disabled:opacity-50 transition-all shadow-md flex items-center gap-2"
          >
            <Send size={18} />
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Assistant;