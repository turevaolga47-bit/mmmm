import React from 'react';
import { TOPICS } from '../constants';

const Exercises: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-teal-600/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-2">Упражнения ТЭС</h2>
        <p className="text-teal-100">
          Практические техники эмоциональной свободы для ежедневного применения
        </p>
      </div>

      <div className="grid gap-4">
        {TOPICS.filter(t => t.tappingScript).map(topic => (
          <div key={topic.id} className="bg-teal-700/50 backdrop-blur-sm rounded-xl border border-teal-500/30 overflow-hidden shadow-lg">
            <div className="p-5 flex items-center gap-4">
              <span className="text-3xl">{topic.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-white">{topic.tappingScript?.title}</h3>
                <p className="text-sm text-teal-100/80 mt-1">{topic.description}</p>
              </div>
            </div>
            {topic.tappingScript && (
              <div className="border-t border-teal-500/30 p-5 bg-teal-800/40">
                <p className="text-sm font-medium text-teal-200 mb-3">Установочная фраза:</p>
                <p className="text-teal-100/90 italic">{topic.tappingScript.setupPhrase}</p>
                
                <p className="text-sm font-medium text-teal-200 mt-4 mb-2">Раунды:</p>
                <ul className="space-y-2">
                  {topic.tappingScript.rounds.map((round, idx) => (
                    <li key={idx} className="text-sm text-teal-100/80">{round}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;