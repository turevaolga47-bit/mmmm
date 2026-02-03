import React, { useState } from 'react';
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

    // Placeholder response
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
    <div className="bg-white rounded-2xl border border-slate-200 h-[600px] flex flex-col">
      <div className="p-4 border-b border-slate-200">
        <h2 className="font-semibold text-slate-900">Консультация с ТЭС-ассистентом</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-slate-500 py-8">
            <p>Задайте ваш вопрос о технике эмоциональной свободы</p>
          </div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl max-w-[80%] ${
              msg.role === 'user'
                ? 'bg-slate-100 ml-auto'
                : 'bg-slate-50 border border-slate-200'
            }`}
          >
            <p className="text-slate-800">{msg.text}</p>
          </div>
        ))}
        {isLoading && (
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl max-w-[80%]">
            <p className="text-slate-500">Печатает...</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите ваш вопрос..."
            className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:border-slate-400"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 disabled:opacity-50"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Assistant;
