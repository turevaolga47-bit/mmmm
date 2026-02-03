import React from 'react';
import { MentalHealthTopic } from '../types';

interface TopicDetailProps {
  topic: MentalHealthTopic;
  onBack: () => void;
}

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onBack }) => {
  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="text-teal-200/70 hover:text-white flex items-center gap-2 font-medium transition-colors"
      >
        ← Назад
      </button>

      <div className="bg-teal-700/50 backdrop-blur-sm rounded-2xl border border-teal-500/30 p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl">{topic.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-white">{topic.title}</h1>
            <p className="text-teal-100/90">{topic.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-white mb-3">Симптомы</h3>
            <ul className="space-y-2">
              {topic.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-center gap-2 text-teal-100/90">
                  <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-3">Стратегии</h3>
            <ul className="space-y-2">
              {topic.strategies.map((strategy, idx) => (
                <li key={idx} className="flex items-center gap-2 text-teal-100/90">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {topic.tappingScript && (
        <div className="bg-teal-700/50 backdrop-blur-sm rounded-2xl border border-teal-500/30 p-8 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-4">{topic.tappingScript.title}</h2>
          
          <div className="mb-6 p-4 bg-teal-800/50 rounded-xl border border-teal-500/30">
            <p className="text-sm font-medium text-teal-200 mb-2">Установочная фраза:</p>
            <p className="text-white italic">{topic.tappingScript.setupPhrase}</p>
          </div>

          <h3 className="font-semibold text-white mb-3">Раунды тэппинга:</h3>
          <div className="space-y-3">
            {topic.tappingScript.rounds.map((round, idx) => (
              <div key={idx} className="p-3 bg-teal-800/40 rounded-lg text-teal-100/90 border border-teal-500/20">
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