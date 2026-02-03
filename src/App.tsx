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
        return <Dashboard onTopicSelect={handleTopicSelect} onNavigate={setActiveView} />;
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
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-white tracking-tight uppercase">Архив профессионального анализа</h2>
            <div className="grid grid-cols-1 gap-6">
              {TOPICS.map(topic => (
                <div 
                  key={topic.id}
                  onClick={() => handleTopicSelect(topic)}
                  className="bg-teal-700/50 backdrop-blur-sm p-6 rounded-3xl border border-teal-500/30 flex items-center gap-6 cursor-pointer hover:border-teal-400/50 hover:bg-teal-600/60 transition-all shadow-lg"
                >
                  <span className="text-4xl p-4 bg-teal-800/50 rounded-2xl">{topic.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-xl">{topic.title}</h3>
                    <p className="text-sm text-teal-100/80 font-medium mt-1">{topic.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case AppView.JOURNAL:
        return (
          <div className="bg-teal-700/50 backdrop-blur-sm rounded-3xl p-16 border border-teal-500/30 shadow-xl text-center">
            <div className="text-7xl mb-8">📓</div>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight uppercase">Дневник рефлексии</h2>
            <p className="text-teal-100/80 text-lg font-medium max-w-md mx-auto">Инструмент самоанализа будет доступен после завершения первичного 40-дневного протокола ТЭС.</p>
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