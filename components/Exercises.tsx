import React from 'react';
import { Compass, Scale, Diamond, Clock, PenTool } from 'lucide-react';
import { TOPICS } from '../constants';

const topicIcons: Record<string, React.ReactNode> = {
  'anxiety': <Compass className="icon-float" size={28} />,
  'burnout': <Scale className="icon-pulse" size={28} />,
  'stress': <Diamond className="icon-spin" size={28} />,
  'fatigue': <Clock className="icon-bounce" size={28} />,
  'self-understanding': <PenTool className="icon-float" size={28} />,
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
        {TOPICS.filter(t => t.tappingScript).map(topic => (
          <div key={topic.id} className="bg-white rounded-xl border border-teal-100 overflow-hidden shadow-md">
            <div className="p-5 flex items-center gap-4">
              <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-500">
                {topicIcons[topic.id] || <Diamond className="icon-float" size={28} />}
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
        ))}
      </div>
    </div>
  );
};

export default Exercises;