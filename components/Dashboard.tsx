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
            className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-teal-200 hover:border-amber-400 hover:shadow-lg transition-all text-center shadow-md"
          >
            <span className="text-3xl mb-2 block">💬</span>
            <span className="text-sm font-medium gold-text-light">Консультация</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXERCISES)}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-teal-200 hover:border-amber-400 hover:shadow-lg transition-all text-center shadow-md"
          >
            <span className="text-3xl mb-2 block">🧘</span>
            <span className="text-sm font-medium gold-text-light">Упражнения</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EDUCATION)}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-teal-200 hover:border-amber-400 hover:shadow-lg transition-all text-center shadow-md"
          >
            <span className="text-3xl mb-2 block">📚</span>
            <span className="text-sm font-medium gold-text-light">Архив</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXPERT)}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-teal-200 hover:border-amber-400 hover:shadow-lg transition-all text-center shadow-md"
          >
            <span className="text-3xl mb-2 block">👤</span>
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
              <span className="text-3xl">{topic.icon}</span>
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