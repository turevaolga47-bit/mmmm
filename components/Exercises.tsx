import React from 'react';
import { Compass, Scale, Diamond, Clock, PenTool } from 'lucide-react';
import { TOPICS } from '../constants';

const topicIcons: Record<string, React.ReactNode> = {
  'anxiety': <Compass className="icon-float" size={32} />,
  'burnout': <Scale className="icon-pulse" size={32} />,
  'stress': <Diamond className="icon-spin" size={32} />,
  'fatigue': <Clock className="icon-bounce" size={32} />,
  'self-understanding': <PenTool className="icon-float" size={32} />,
};

const Exercises: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-teal-200 shadow-lg">
        <h2 className="text-2xl font-bold gold-text mb-2">Упражнения ТЭС</h2>
        <p className="gold-text-light">
          Практические техники эмоциональной свободы для ежедневного применения
        </p>
      </div>

      <div className="grid gap-4">
        {TOPICS.filter(t => t.tappingScript).map(topic => (
          <div key={topic.id} className="bg-white/90 backdrop-blur-sm rounded-xl border border-teal-200 overflow-hidden shadow-md">
            <div className="p-5 flex items-center gap-4">
              <div className="text-amber-500">
                {topicIcons[topic.id] || <Diamond className="icon-float" size={32} />}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold gold-text">{topic.tappingScript?.title}</h3>
                <p className="text-sm gold-text-light mt-1">{topic.description}</p>
              </div>
            </div>
            {topic.tappingScript && (
              <div className="border-t border-teal-100 p-5 bg-amber-50/50">
                <p className="text-sm font-medium gold-text mb-3">Установочная фраза:</p>
                <p className="gold-text-light italic">{topic.tappingScript.setupPhrase}</p>
                
                <p className="text-sm font-medium gold-text mt-4 mb-2">Раунды:</p>
                <ul className="space-y-2">
                  {topic.tappingScript.rounds.map((round, idx) => (
                    <li key={idx} className="text-sm gold-text-light">{round}</li>
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