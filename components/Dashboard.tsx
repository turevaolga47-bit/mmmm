import React from 'react';
import { MessageCircle, Dumbbell, Archive, User, Compass, Scale, Diamond, Clock, PenTool, BarChart3 } from 'lucide-react';
import { AppView, MentalHealthTopic } from '../types';
import { TOPICS } from '../constants';

interface DashboardProps {
  onTopicSelect: (topic: MentalHealthTopic) => void;
  onNavigate: (view: AppView) => void;
}

const topicIcons: Record<string, React.ReactNode> = {
  'anxiety': <Compass className="icon-float" size={32} />,
  'burnout': <Scale className="icon-pulse" size={32} />,
  'stress': <Diamond className="icon-spin" size={32} />,
  'fatigue': <Clock className="icon-bounce" size={32} />,
  'self-understanding': <PenTool className="icon-float" size={32} />,
  'stress-test': <BarChart3 className="icon-pulse" size={32} />,
};

const Dashboard: React.FC<DashboardProps> = ({ onTopicSelect, onNavigate }) => {
  return (
    <div className="space-y-8">
      <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-teal-200 shadow-lg">
        <h2 className="text-2xl font-bold gold-text mb-2">Добро пожаловать</h2>
        <p className="gold-text-light">
          Персональный ассистент по Технике Эмоциональной Свободы
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold gold-text mb-4">Быстрый доступ</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate(AppView.CHAT)}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-teal-200 hover:border-amber-400 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <MessageCircle className="mx-auto mb-2 icon-float text-amber-500" size={32} />
            <span className="text-sm font-medium gold-text-light">Консультация</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXERCISES)}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-teal-200 hover:border-amber-400 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <Dumbbell className="mx-auto mb-2 icon-pulse text-amber-500" size={32} />
            <span className="text-sm font-medium gold-text-light">Упражнения</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EDUCATION)}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-teal-200 hover:border-amber-400 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <Archive className="mx-auto mb-2 icon-bounce text-amber-500" size={32} />
            <span className="text-sm font-medium gold-text-light">Архив</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXPERT)}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-teal-200 hover:border-amber-400 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <User className="mx-auto mb-2 icon-spin text-amber-500" size={32} />
            <span className="text-sm font-medium gold-text-light">Эксперт</span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold gold-text mb-4">Темы для проработки</h3>
        <div className="grid gap-4">
          {TOPICS.slice(0, 4).map(topic => (
            <div
              key={topic.id}
              onClick={() => onTopicSelect(topic)}
              className="bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-teal-200 flex items-center gap-4 cursor-pointer hover:border-amber-400 hover:shadow-lg transition-all shadow-md"
            >
              <div className="text-amber-500">
                {topicIcons[topic.id] || <Diamond className="icon-float" size={32} />}
              </div>
              <div>
                <h4 className="font-semibold gold-text">{topic.title}</h4>
                <p className="text-sm gold-text-light">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;