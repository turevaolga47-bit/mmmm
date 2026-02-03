import React from 'react';
import { AppView } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: AppView;
  setActiveView: (view: AppView) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, setActiveView }) => {
  const navItems = [
    { view: AppView.DASHBOARD, label: 'Главная', icon: '🏠' },
    { view: AppView.CHAT, label: 'Консультация', icon: '💬' },
    { view: AppView.EXERCISES, label: 'Упражнения', icon: '🧘' },
    { view: AppView.EDUCATION, label: 'Архив', icon: '📚' },
    { view: AppView.EXPERT, label: 'Эксперт', icon: '👤' },
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white/90 backdrop-blur-sm border-b border-teal-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold gold-text tracking-tight">Свобода от стресса</h1>
        </div>
      </header>
      
      <nav className="bg-white/80 backdrop-blur-sm border-b border-teal-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto">
            {navItems.map(item => (
              <button
                key={item.view}
                onClick={() => setActiveView(item.view)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  activeView === item.view 
                    ? 'gold-text border-b-2 border-amber-500' 
                    : 'text-teal-600 hover:text-amber-600'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
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