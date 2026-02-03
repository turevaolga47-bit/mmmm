import React from 'react';
import { TOPICS } from '../constants';

const Exercises: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Упражнения ТЭС</h2>
        <p className="text-slate-600">
          Практические техники эмоциональной свободы для ежедневного применения
        </p>
      </div>

      <div className="grid gap-4">
        {TOPICS.filter(t => t.tappingScript).map(topic => (
          <div key={topic.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <div className="p-5 flex items-center gap-4">
              <span className="text-3xl">{topic.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{topic.tappingScript?.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{topic.description}</p>
              </div>
            </div>
            {topic.tappingScript && (
              <div className="border-t border-slate-100 p-5 bg-slate-50">
                <p className="text-sm font-medium text-slate-700 mb-3">Установочная фраза:</p>
                <p className="text-slate-600 italic">{topic.tappingScript.setupPhrase}</p>
                
                <p className="text-sm font-medium text-slate-700 mt-4 mb-2">Раунды:</p>
                <ul className="space-y-2">
                  {topic.tappingScript.rounds.map((round, idx) => (
                    <li key={idx} className="text-sm text-slate-600">{round}</li>
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
