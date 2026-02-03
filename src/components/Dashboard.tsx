import React from 'react';
import { AppView, MentalHealthTopic } from '../types';
import { TOPICS, EXPERT_INFO } from '../constants';

interface DashboardProps {
  onTopicSelect: (topic: MentalHealthTopic) => void;
  onNavigate: (view: AppView) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onTopicSelect, onNavigate }) => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Добро пожаловать</h2>
        <p className="text-slate-600">
          Персональный ассистент по Технике Эмоциональной Свободы от {EXPERT_INFO.name}
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Быстрый доступ</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate(AppView.CHAT)}
            className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-400 transition-colors text-center"
          >
            <span className="text-3xl mb-2 block">💬</span>
            <span className="text-sm font-medium text-slate-700">Консультация</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXERCISES)}
            className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-400 transition-colors text-center"
          >
            <span className="text-3xl mb-2 block">🧘</span>
            <span className="text-sm font-medium text-slate-700">Упражнения</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EDUCATION)}
            className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-400 transition-colors text-center"
          >
            <span className="text-3xl mb-2 block">📚</span>
            <span className="text-sm font-medium text-slate-700">Архив</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXPERT)}
            className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-400 transition-colors text-center"
          >
            <span className="text-3xl mb-2 block">👤</span>
            <span className="text-sm font-medium text-slate-700">Эксперт</span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Темы для проработки</h3>
        <div className="grid gap-4">
          {TOPICS.slice(0, 4).map(topic => (
            <div
              key={topic.id}
              onClick={() => onTopicSelect(topic)}
              className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-4 cursor-pointer hover:border-slate-400 transition-colors"
            >
              <span className="text-3xl">{topic.icon}</span>
              <div>
                <h4 className="font-semibold text-slate-900">{topic.title}</h4>
                <p className="text-sm text-slate-500">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
