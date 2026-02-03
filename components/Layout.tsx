import React from 'react';
import { AppView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: AppView;
  setActiveView: (view: AppView) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, setActiveView }) => {
  const navItems = [
    { view: AppView.DASHBOARD, label: 'Главная', emoji: '🏠' },
    { view: AppView.CHAT, label: 'Консультация', emoji: '💬' },
    { view: AppView.EXERCISES, label: 'Упражнения', emoji: '🧘‍♀️' },
    { view: AppView.EDUCATION, label: 'Архив', emoji: '📚' },
    { view: AppView.EXPERT, label: 'Эксперт', emoji: '👩‍⚕️' },
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white/95 backdrop-blur-sm border-b border-teal-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold teal-text tracking-tight flex items-center gap-2">
            <span className="text-2xl">🌊</span> ВЫХОД ИЗ СТРЕССА за 5 минут
          </h1>
        </div>
      </header>
      
      <nav className="bg-white/90 backdrop-blur-sm border-b border-teal-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map(item => (
              <button
                key={item.view}
                onClick={() => setActiveView(item.view)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
                  activeView === item.view 
                    ? 'teal-text border-b-2 border-teal-500' 
                    : 'text-gray-500 hover:text-teal-600'
                }`}
              >
                <span className="text-lg">{item.emoji}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;