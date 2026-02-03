import React from 'react';
import { MessageCircle, Dumbbell, Archive, User, Compass, Scale, Diamond, Clock, PenTool, BarChart3 } from 'lucide-react';
import { AppView, MentalHealthTopic } from '../types';
import { TOPICS } from '../constants';

interface DashboardProps {
  onTopicSelect: (topic: MentalHealthTopic) => void;
  onNavigate: (view: AppView) => void;
}

const topicIcons: Record<string, React.ReactNode> = {
  'anxiety': <Compass className="icon-float text-teal-500" size={28} strokeWidth={2.5} />,
  'burnout': <Scale className="icon-pulse text-teal-500" size={28} strokeWidth={2.5} />,
  'stress': <Diamond className="icon-spin text-teal-500" size={28} strokeWidth={2.5} />,
  'fatigue': <Clock className="icon-bounce text-teal-500" size={28} strokeWidth={2.5} />,
  'self-understanding': <PenTool className="icon-float text-teal-500" size={28} strokeWidth={2.5} />,
  'stress-test': <BarChart3 className="icon-pulse text-teal-500" size={28} strokeWidth={2.5} />,
};

const Dashboard: React.FC<DashboardProps> = ({ onTopicSelect, onNavigate }) => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-8 border border-teal-100 shadow-lg">
        <h2 className="text-2xl font-bold teal-text mb-2">Добро пожаловать</h2>
        <p className="teal-text-light">
          Персональный ассистент по Технике Эмоциональной Свободы
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold teal-text mb-4">Быстрый доступ</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate(AppView.CHAT)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center shadow-sm">
              <MessageCircle className="icon-float text-teal-500" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium teal-text">Консультация</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXERCISES)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center shadow-sm">
              <Dumbbell className="icon-pulse text-teal-500" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium teal-text">Упражнения</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EDUCATION)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center shadow-sm">
              <Archive className="icon-bounce text-teal-500" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium teal-text">Архив</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXPERT)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center shadow-sm">
              <User className="icon-spin text-teal-500" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium teal-text">Эксперт</span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold teal-text mb-4">Темы для проработки</h3>
        <div className="grid gap-4">
          {TOPICS.slice(0, 4).map(topic => (
            <div
              key={topic.id}
              onClick={() => onTopicSelect(topic)}
              className="bg-white p-5 rounded-xl border border-teal-100 flex items-center gap-4 cursor-pointer hover:border-teal-300 hover:shadow-lg transition-all shadow-md"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center text-teal-500 shadow-sm">
                {topicIcons[topic.id] || <Diamond className="icon-float" size={28} strokeWidth={2.5} />}
              </div>
              <div>
                <h4 className="font-semibold teal-text">{topic.title}</h4>
                <p className="text-sm text-gray-500">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;