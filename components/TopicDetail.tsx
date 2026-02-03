import React from 'react';
import { ArrowLeft, Compass, Zap, Brain, Sun, Sparkles, Gem } from 'lucide-react';
import { MentalHealthTopic } from '../types';

interface TopicDetailProps {
  topic: MentalHealthTopic;
  onBack: () => void;
}

const topicIcons: Record<string, { icon: React.ReactNode; bgColor: string }> = {
  'anxiety': { 
    icon: <Compass className="icon-float" size={48} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-500' 
  },
  'burnout': { 
    icon: <Zap className="icon-pulse" size={48} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-orange-100 to-amber-100 text-orange-500' 
  },
  'stress': { 
    icon: <Brain className="icon-spin" size={48} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-red-100 to-pink-100 text-red-500' 
  },
  'fatigue': { 
    icon: <Sun className="icon-bounce" size={48} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-600' 
  },
  'self-understanding': { 
    icon: <Sparkles className="icon-float" size={48} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500' 
  },
};

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onBack }) => {
  const iconData = topicIcons[topic.id] || { 
    icon: <Gem className="icon-float" size={48} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-500' 
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="text-gray-500 hover:text-teal-600 flex items-center gap-2 font-medium transition-colors"
      >
        <ArrowLeft size={18} />
        Назад
      </button>

      <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-sm ${iconData.bgColor}`}>
            {iconData.icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold teal-text">{topic.title}</h1>
            <p className="text-gray-500">{topic.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold teal-text mb-3">Симптомы</h3>
            <ul className="space-y-2">
              {topic.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold teal-text mb-3">Стратегии</h3>
            <ul className="space-y-2">
              {topic.strategies.map((strategy, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {topic.tappingScript && (
        <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-lg">
          <h2 className="text-xl font-bold teal-text mb-4">{topic.tappingScript.title}</h2>
          
          <div className="mb-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
            <p className="text-sm font-medium teal-text mb-2">Установочная фраза:</p>
            <p className="text-gray-600 italic">{topic.tappingScript.setupPhrase}</p>
          </div>

          <h3 className="font-semibold teal-text mb-3">Раунды тэппинга:</h3>
          <div className="space-y-3">
            {topic.tappingScript.rounds.map((round, idx) => (
              <div key={idx} className="p-3 bg-teal-50/60 rounded-lg text-gray-600 border border-teal-100">
                {round}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicDetail;