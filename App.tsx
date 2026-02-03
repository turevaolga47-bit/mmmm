import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Assistant from './components/Assistant';
import Exercises from './components/Exercises';
import TopicDetail from './components/TopicDetail';
import ExpertProfile from './components/ExpertProfile';
import StressTest from './components/StressTest';
import { AppView, MentalHealthTopic } from './types';
import { TOPICS } from './constants';

const topicEmojis: Record<string, string> = {
  'anxiety': '🌀',
  'burnout': '🔥',
  'stress': '💔',
  'fatigue': '😴',
  'self-understanding': '🦋',
  'stress-test': '📊',
};

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.DASHBOARD);
  const [selectedTopic, setSelectedTopic] = useState<MentalHealthTopic | null>(null);
  const [showStressTest, setShowStressTest] = useState(false);

  const handleTopicSelect = (topic: MentalHealthTopic) => {
    if (topic.isTest) {
      setShowStressTest(true);
      setActiveView(AppView.EDUCATION);
    } else {
      setSelectedTopic(topic);
      setActiveView(AppView.EDUCATION);
    }
  };

  const handleBackToDashboard = () => {
    setSelectedTopic(null);
    setShowStressTest(false);
    setActiveView(AppView.DASHBOARD);
  };

  const renderContent = () => {
    switch (activeView) {
      case AppView.DASHBOARD:
        return (
          <div>
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
        if (showStressTest) {
          return <StressTest onBack={handleBackToDashboard} />;
        }
        if (selectedTopic) {
          return <TopicDetail topic={selectedTopic} onBack={handleBackToDashboard} />;
        }
        return (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-4xl">📚</span>
                <div>
                  <h2 className="text-2xl font-bold teal-text mb-1">Архив профессионального анализа</h2>
                  <p className="text-gray-500">Изучите материалы для самостоятельной проработки</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {TOPICS.map(topic => {
                const emoji = topicEmojis[topic.id] || '✨';
                return (
                  <div 
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic)}
                    className="bg-white p-5 rounded-xl border border-teal-100 flex items-center gap-4 cursor-pointer hover:border-teal-300 hover:shadow-lg transition-all shadow-md"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full flex items-center justify-center shadow-sm text-3xl">
                      {emoji}
                    </div>
                    <div>
                      <h3 className="font-semibold teal-text">{topic.title}</h3>
                      <p className="text-sm text-gray-500">{topic.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case AppView.JOURNAL:
        return (
          <div className="bg-white rounded-2xl p-12 border border-teal-100 shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full flex items-center justify-center shadow-md">
              <span className="text-5xl">📓</span>
            </div>
            <h2 className="text-2xl font-bold teal-text mb-4">Дневник рефлексии</h2>
            <p className="text-gray-500 max-w-md mx-auto">Инструмент самоанализа будет доступен после завершения первичного 40-дневного протокола ТЭС.</p>
          </div>
        );
      default:
        return <Dashboard onTopicSelect={handleTopicSelect} onNavigate={setActiveView} />;
    }
  };

  return (
    <Layout activeView={activeView} setActiveView={(v) => { setActiveView(v); setSelectedTopic(null); setShowStressTest(false); }}>
      {renderContent()}
    </Layout>
  );
};

export default App;