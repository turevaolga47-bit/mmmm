import React from 'react';
import { ArrowLeft, Compass, Scale, Diamond, Clock, PenTool } from 'lucide-react';
import { MentalHealthTopic } from '../types';

interface TopicDetailProps {
  topic: MentalHealthTopic;
  onBack: () => void;
}

const topicIcons: Record<string, React.ReactNode> = {
  'anxiety': <Compass className="icon-float" size={48} />,
  'burnout': <Scale className="icon-pulse" size={48} />,
  'stress': <Diamond className="icon-spin" size={48} />,
  'fatigue': <Clock className="icon-bounce" size={48} />,
  'self-understanding': <PenTool className="icon-float" size={48} />,
};

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onBack }) => {
  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="gold-text-light hover:text-amber-600 flex items-center gap-2 font-medium transition-colors"
      >
        <ArrowLeft size={18} />
        Назад
      </button>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-teal-200 p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-amber-500">
            {topicIcons[topic.id] || <Diamond className="icon-float" size={48} />}
          </div>
          <div>
            <h1 className="text-2xl font-bold gold-text">{topic.title}</h1>
            <p className="gold-text-light">{topic.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold gold-text mb-3">Симптомы</h3>
            <ul className="space-y-2">
              {topic.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-center gap-2 gold-text-light">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold gold-text mb-3">Стратегии</h3>
            <ul className="space-y-2">
              {topic.strategies.map((strategy, idx) => (
                <li key={idx} className="flex items-center gap-2 gold-text-light">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {topic.tappingScript && (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-teal-200 p-8 shadow-lg">
          <h2 className="text-xl font-bold gold-text mb-4">{topic.tappingScript.title}</h2>
          
          <div className="mb-6 p-4 bg-amber-50/80 rounded-xl border border-amber-200">
            <p className="text-sm font-medium gold-text mb-2">Установочная фраза:</p>
            <p className="gold-text-light italic">{topic.tappingScript.setupPhrase}</p>
          </div>

          <h3 className="font-semibold gold-text mb-3">Раунды тэппинга:</h3>
          <div className="space-y-3">
            {topic.tappingScript.rounds.map((round, idx) => (
              <div key={idx} className="p-3 bg-amber-50/60 rounded-lg gold-text-light border border-amber-100">
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