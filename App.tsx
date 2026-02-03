import React, { useState } from 'react';
import { Compass, Zap, Brain, Sun, Sparkles, BarChart3, Gem } from 'lucide-react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Assistant from './components/Assistant';
import Exercises from './components/Exercises';
import TopicDetail from './components/TopicDetail';
import ExpertProfile from './components/ExpertProfile';
import StressTest from './components/StressTest';
import { AppView, MentalHealthTopic } from './types';
import { TOPICS } from './constants';

const topicIcons: Record<string, { icon: React.ReactNode; bgColor: string }> = {
  'anxiety': { 
    icon: <Compass className="icon-float" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-500' 
  },
  'burnout': { 
    icon: <Zap className="icon-pulse" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-orange-100 to-amber-100 text-orange-500' 
  },
  'stress': { 
    icon: <Brain className="icon-spin" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-red-100 to-pink-100 text-red-500' 
  },
  'fatigue': { 
    icon: <Sun className="icon-bounce" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-600' 
  },
  'self-understanding': { 
    icon: <Sparkles className="icon-float" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500' 
  },
  'stress-test': { 
    icon: <BarChart3 className="icon-pulse" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-500' 
  },
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
              <h2 className="text-2xl font-bold teal-text mb-2">Архив профессионального анализа</h2>
              <p className="text-gray-500">Изучите материалы для самостоятельной проработки</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {TOPICS.map(topic => {
                const iconData = topicIcons[topic.id] || { 
                  icon: <Gem className="icon-float" size={28} strokeWidth={2.5} />, 
                  bgColor: 'bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-500' 
                };
                return (
                  <div 
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic)}
                    className="bg-white p-5 rounded-xl border border-teal-100 flex items-center gap-4 cursor-pointer hover:border-teal-300 hover:shadow-lg transition-all shadow-md"
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm ${iconData.bgColor}`}>
                      {iconData.icon}
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
            <div className="w-20 h-20 mx-auto mb-6 bg-teal-50 rounded-full flex items-center justify-center">
              <span className="text-4xl">📓</span>
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