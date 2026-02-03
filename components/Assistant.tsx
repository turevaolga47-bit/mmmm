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
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-teal-200 h-[600px] flex flex-col shadow-lg">
      <div className="p-4 border-b border-teal-200">
        <h2 className="font-semibold gold-text">Консультация с ТЭС-ассистентом</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center gold-text-light py-8">
            <p>Задайте ваш вопрос о технике эмоциональной свободы</p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-teal-100/80 ml-auto'
                : 'bg-amber-50/80 border border-amber-200'
            }`}
          >
            <p className="gold-text-light">{msg.text}</p>
          </div>
        ))}
        {isLoading && (
          <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-xl max-w-[80%]">
            <p className="gold-text-light">Печатает...</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-teal-200">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите ваш вопрос..."
            className="flex-1 px-4 py-3 bg-white border border-teal-200 rounded-xl text-amber-800 placeholder-amber-400 focus:outline-none focus:border-amber-400"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-medium hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 transition-all shadow-lg flex items-center gap-2"
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