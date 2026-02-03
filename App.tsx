
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Assistant from './components/Assistant';
import Exercises from './components/Exercises';
import TopicDetail from './components/TopicDetail';
import ExpertProfile from './components/ExpertProfile';
import { AppView, MentalHealthTopic } from './types';
import { TOPICS } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.DASHBOARD);
  const [selectedTopic, setSelectedTopic] = useState<MentalHealthTopic | null>(null);

  const handleTopicSelect = (topic: MentalHealthTopic) => {
    setSelectedTopic(topic);
    setActiveView(AppView.EDUCATION);
  };

  const handleBackToDashboard = () => {
    setSelectedTopic(null);
    setActiveView(AppView.DASHBOARD);
  };

  const renderContent = () => {
    switch (activeView) {
      case AppView.DASHBOARD:
        return (
          <div>
            <div className="mb-6 p-4 bg-slate-100 border border-slate-300 rounded-lg text-center">
              <p className="text-slate-800 font-medium">✓ Проект успешно запущен</p>
            </div>
            <Dashboard onTopicSelect={handleTopicSelect} onNavigate={setActiveView} />
          </div>
        );
      case AppView.CHAT:
        return <Assistant />;
      case AppView.EXERCISES:
        return <Exercises />;
      case AppView.EXPERT:
        return <ExpertProfile />;
      case AppView.EDUCATION:
        if (selectedTopic) {
          return <TopicDetail topic={selectedTopic} onBack={handleBackToDashboard} />;
        }
        return (
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase tracking-widest">Архив профессионального анализа</h2>
            <div className="grid grid-cols-1 gap-6">
              {TOPICS.map(topic => (
                <div 
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic)}
                  className="bg-white p-6 rounded-3xl border border-slate-200 flex items-center gap-6 cursor-pointer hover:border-slate-800 transition-all shadow-sm"
                >
                  <span className="text-4xl p-4 bg-slate-50 rounded-2xl">{topic.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xl">{topic.title}</h3>
                    <p className="text-sm text-slate-500 font-medium mt-1">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case AppView.JOURNAL:
        return (
          <div className="bg-white rounded-[3rem] p-16 border border-slate-200 shadow-sm text-center">
            <div className="text-7xl mb-8">📓</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight uppercase">Дневник рефлексии</h2>
            <p className="text-slate-500 text-lg font-medium max-w-md mx-auto">Инструмент самоанализа будет доступен после завершения первичного 40-дневного протокола ТЭС.</p>
          </div>
        );
      default:
        return <Dashboard onTopicSelect={handleTopicSelect} onNavigate={setActiveView} />;
    }
  };

  return (
    <Layout activeView={activeView} setActiveView={(v) => { setActiveView(v); setSelectedTopic(null); }}>
      {renderContent()}
    </Layout>
  );
};

export default App;
