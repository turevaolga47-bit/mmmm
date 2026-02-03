import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { MentalHealthTopic } from '../types';

interface TopicDetailProps {
  topic: MentalHealthTopic;
  onBack: () => void;
}

const topicEmojis: Record<string, string> = {
  'anxiety': '🌀',
  'burnout': '🔥',
  'stress': '💔',
  'fatigue': '😴',
  'self-understanding': '🦋',
};

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onBack }) => {
  const emoji = topicEmojis[topic.id] || '✨';

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
          <div className="w-20 h-20 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full flex items-center justify-center shadow-md text-5xl">
            {emoji}
          </div>
          <div>
            <h1 className="text-2xl font-bold teal-text">{topic.title}</h1>
            <p className="text-gray-500">{topic.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50/50 rounded-xl p-5 border border-red-100">
            <h3 className="font-semibold teal-text mb-3 flex items-center gap-2">
              <span>⚠️</span> Симптомы
            </h3>
            <ul className="space-y-2">
              {topic.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <span className="text-red-400">•</span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-xl p-5 border border-green-100">
            <h3 className="font-semibold teal-text mb-3 flex items-center gap-2">
              <span>💡</span> Стратегии
            </h3>
            <ul className="space-y-2">
              {topic.strategies.map((strategy, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-600">
                  <span className="text-green-500">✓</span>
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {topic.tappingScript && (
        <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-lg">
          <h2 className="text-xl font-bold teal-text mb-4 flex items-center gap-2">
            <span>🎯</span> {topic.tappingScript.title}
          </h2>
          
          <div className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl border border-teal-100">
            <p className="text-sm font-medium teal-text mb-2">✋ Установочная фраза:</p>
            <p className="text-gray-600 italic">{topic.tappingScript.setupPhrase}</p>
          </div>

          <h3 className="font-semibold teal-text mb-3">👆 Раунды тэппинга:</h3>
          <div className="space-y-3">
            {topic.tappingScript.rounds.map((round, idx) => (
              <div key={idx} className="p-3 bg-teal-50/60 rounded-lg text-gray-600 border border-teal-100 flex items-start gap-2">
                <span className="text-teal-500 font-bold">{idx + 1}.</span>
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