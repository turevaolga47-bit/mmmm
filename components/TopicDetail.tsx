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
        className="text-slate-500 hover:text-slate-700 flex items-center gap-2 font-medium"
      >
        ← Назад
      </button>

      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="text-5xl">{topic.icon}</span>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{topic.title}</h1>
            <p className="text-slate-600">{topic.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Симптомы</h3>
            <ul className="space-y-2">
              {topic.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-600">
                  <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Стратегии</h3>
            <ul className="space-y-2">
              {topic.strategies.map((strategy, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-600">
                  <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {topic.tappingScript && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">{topic.tappingScript.title}</h2>
          
          <div className="mb-6 p-4 bg-slate-50 rounded-xl">
            <p className="text-sm font-medium text-slate-700 mb-2">Установочная фраза:</p>
            <p className="text-slate-800 italic">{topic.tappingScript.setupPhrase}</p>
          </div>

          <h3 className="font-semibold text-slate-900 mb-3">Раунды тэппинга:</h3>
          <div className="space-y-3">
            {topic.tappingScript.rounds.map((round, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-lg text-slate-700">
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
