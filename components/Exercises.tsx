import React from 'react';
import { TOPICS } from '../constants';

const topicEmojis: Record<string, string> = {
  'anxiety': '🌀',
  'burnout': '🔥',
  'stress': '💔',
  'fatigue': '😴',
  'self-understanding': '🦋',
};

const iconAnimations = ['icon-float', 'icon-pulse', 'icon-bounce', 'icon-wiggle'];

const Exercises: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-lg fade-in-up card-breathe">
        <div className="flex items-center gap-4">
          <span className="text-4xl icon-pulse">🧘‍♀️</span>
          <div>
            <h2 className="text-2xl font-bold teal-text mb-1">Упражнения ТЭС</h2>
            <p className="text-gray-500">
              Практические техники эмоциональной свободы для ежедневного применения
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {TOPICS.filter(t => t.tappingScript).map((topic, index) => {
          const emoji = topicEmojis[topic.id] || '✨';
          const animation = iconAnimations[index % iconAnimations.length];
          return (
            <div 
              key={topic.id} 
              className={`bg-white rounded-xl border border-teal-100 overflow-hidden shadow-md hover-lift hover-glow fade-in-up stagger-${Math.min(index + 1, 4)}`}
            >
              <div className="p-5 flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full flex items-center justify-center shadow-sm text-3xl ${animation}`}>
                  {emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold teal-text">{topic.tappingScript?.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{topic.description}</p>
                </div>
              </div>
              {topic.tappingScript && (
                <div className="border-t border-teal-100 p-5 bg-teal-50/50">
                  <p className="text-sm font-medium teal-text mb-3">
                    <span className="icon-bounce inline-block">✋</span> Установочная фраза:
                  </p>
                  <p className="text-gray-600 italic">{topic.tappingScript.setupPhrase}</p>
                  
                  <p className="text-sm font-medium teal-text mt-4 mb-2">
                    <span className="icon-pulse inline-block">👆</span> Раунды:
                  </p>
                  <ul className="space-y-2">
                    {topic.tappingScript.rounds.map((round, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-teal-500 icon-bounce">•</span>
                        {round}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercises;