import React from 'react';
import { Compass, Zap, Brain, Sun, Sparkles, Gem } from 'lucide-react';
import { TOPICS } from '../constants';

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
};

const Exercises: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-lg">
        <h2 className="text-2xl font-bold teal-text mb-2">Упражнения ТЭС</h2>
        <p className="text-gray-500">
          Практические техники эмоциональной свободы для ежедневного применения
        </p>
      </div>

      <div className="grid gap-4">
        {TOPICS.filter(t => t.tappingScript).map(topic => {
          const iconData = topicIcons[topic.id] || { 
            icon: <Gem className="icon-float" size={28} strokeWidth={2.5} />, 
            bgColor: 'bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-500' 
          };
          return (
            <div key={topic.id} className="bg-white rounded-xl border border-teal-100 overflow-hidden shadow-md">
              <div className="p-5 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${iconData.bgColor}`}>
                  {iconData.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold teal-text">{topic.tappingScript?.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{topic.description}</p>
                </div>
              </div>
              {topic.tappingScript && (
                <div className="border-t border-teal-100 p-5 bg-teal-50/50">
                  <p className="text-sm font-medium teal-text mb-3">Установочная фраза:</p>
                  <p className="text-gray-600 italic">{topic.tappingScript.setupPhrase}</p>
                  
                  <p className="text-sm font-medium teal-text mt-4 mb-2">Раунды:</p>
                  <ul className="space-y-2">
                    {topic.tappingScript.rounds.map((round, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{round}</li>
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