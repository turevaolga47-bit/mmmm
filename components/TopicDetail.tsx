import React from 'react';
import { ArrowLeft, Compass, Scale, Diamond, Clock, PenTool } from 'lucide-react';
import { MentalHealthTopic } from '../types';

interface TopicDetailProps {
  topic: MentalHealthTopic;
  onBack: () => void;
}

const topicIcons: Record<string, React.ReactNode> = {
  'anxiety': <Compass className="icon-float text-teal-500" size={48} strokeWidth={2.5} />,
  'burnout': <Scale className="icon-pulse text-teal-500" size={48} strokeWidth={2.5} />,
  'stress': <Diamond className="icon-spin text-teal-500" size={48} strokeWidth={2.5} />,
  'fatigue': <Clock className="icon-bounce text-teal-500" size={48} strokeWidth={2.5} />,
  'self-understanding': <PenTool className="icon-float text-teal-500" size={48} strokeWidth={2.5} />,
};

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onBack }) => {
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
          <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center shadow-sm">
            {topicIcons[topic.id] || <Diamond className="icon-float text-teal-500" size={48} strokeWidth={2.5} />}
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