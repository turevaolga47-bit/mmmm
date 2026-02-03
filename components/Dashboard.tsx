import React from 'react';
import { AppView, MentalHealthTopic } from '../types';
import { TOPICS } from '../constants';

interface DashboardProps {
  onTopicSelect: (topic: MentalHealthTopic) => void;
  onNavigate: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onTopicSelect, onNavigate }) => {
  return (
    <div className="space-y-8">
      <section className="bg-gradient-to-br from-teal-600/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-2">Добро пожаловать</h2>
        <p className="text-teal-100">
          Персональный ассистент по Технике Эмоциональной Свободы
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-4">Быстрый доступ</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate(AppView.CHAT)}
            className="bg-teal-700/60 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 hover:bg-teal-600/70 transition-all text-center shadow-lg"
          >
            <span className="text-3xl mb-2 block">💬</span>
            <span className="text-sm font-medium text-white">Консультация</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXERCISES)}
            className="bg-teal-700/60 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 hover:bg-teal-600/70 transition-all text-center shadow-lg"
          >
            <span className="text-3xl mb-2 block">🧘</span>
            <span className="text-sm font-medium text-white">Упражнения</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EDUCATION)}
            className="bg-teal-700/60 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 hover:bg-teal-600/70 transition-all text-center shadow-lg"
          >
            <span className="text-3xl mb-2 block">📚</span>
            <span className="text-sm font-medium text-white">Архив</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXPERT)}
            className="bg-teal-700/60 backdrop-blur-sm p-6 rounded-xl border border-teal-500/30 hover:border-teal-400/50 hover:bg-teal-600/70 transition-all text-center shadow-lg"
          >
            <span className="text-3xl mb-2 block">👤</span>
            <span className="text-sm font-medium text-white">Эксперт</span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-white mb-4">Темы для проработки</h3>
        <div className="grid gap-4">
          {TOPICS.slice(0, 4).map(topic => (
            <div
              key={topic.id}
              onClick={() => onTopicSelect(topic)}
              className="bg-teal-700/50 backdrop-blur-sm p-5 rounded-xl border border-teal-500/30 flex items-center gap-4 cursor-pointer hover:border-teal-400/50 hover:bg-teal-600/60 transition-all shadow-lg"
            >
              <span className="text-3xl">{topic.icon}</span>
              <div>
                <h4 className="font-semibold text-white">{topic.title}</h4>
                <p className="text-sm text-teal-100/80">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;