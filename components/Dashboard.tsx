import React from 'react';
import { MessageCircle, Archive, User } from 'lucide-react';
import { AppView, MentalHealthTopic } from '../types';
import { TOPICS } from '../constants';

interface DashboardProps {
  onTopicSelect: (topic: MentalHealthTopic) => void;
  onNavigate: (view: AppView) => void;
}

const topicEmojis: Record<string, string> = {
  'anxiety': '🌀',
  'burnout': '🔥',
  'stress': '💔',
  'fatigue': '😴',
  'self-understanding': '🦋',
  'stress-test': '📊',
};

const iconAnimations = ['icon-float', 'icon-pulse', 'icon-bounce', 'icon-wiggle'];

const Dashboard: React.FC<DashboardProps> = ({ onTopicSelect, onNavigate }) => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-8 border border-teal-100 shadow-lg fade-in-up card-breathe">
        <div className="flex items-center gap-4">
          <span className="text-5xl icon-float">🌊</span>
          <div>
            <h2 className="text-2xl font-bold teal-text mb-2">Добро пожаловать</h2>
            <p className="text-gray-500">
              Персональный ассистент по Технике Эмоциональной Свободы
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold teal-text mb-4">Быстрый доступ</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate(AppView.CHAT)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 transition-all text-center shadow-md group hover-lift hover-glow fade-in-up stagger-1"
          >
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-sm text-3xl icon-bounce">
              💬
            </div>
            <span className="text-sm font-medium teal-text">Консультация</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXERCISES)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 transition-all text-center shadow-md group hover-lift hover-glow fade-in-up stagger-2"
          >
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-sm text-3xl icon-pulse">
              🧘‍♀️
            </div>
            <span className="text-sm font-medium teal-text">Упражнения</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EDUCATION)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 transition-all text-center shadow-md group hover-lift hover-glow fade-in-up stagger-3"
          >
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center shadow-sm text-3xl icon-float">
              📚
            </div>
            <span className="text-sm font-medium teal-text">Архив</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXPERT)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 transition-all text-center shadow-md group hover-lift hover-glow fade-in-up stagger-4"
          >
            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-sm text-3xl icon-wiggle">
              👩‍⚕️
            </div>
            <span className="text-sm font-medium teal-text">Эксперт</span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold teal-text mb-4">Темы для проработки</h3>
        <div className="grid gap-4">
          {TOPICS.slice(0, 4).map((topic, index) => {
            const emoji = topicEmojis[topic.id] || '✨';
            const animation = iconAnimations[index % iconAnimations.length];
            return (
              <div
                key={topic.id}
                onClick={() => onTopicSelect(topic)}
                className={`bg-white p-5 rounded-xl border border-teal-100 flex items-center gap-4 cursor-pointer hover:border-teal-300 transition-all shadow-md hover-lift hover-glow fade-in-up stagger-${index + 1}`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-full flex items-center justify-center shadow-sm text-3xl ${animation}`}>
                  {emoji}
                </div>
                <div>
                  <h4 className="font-semibold teal-text">{topic.title}</h4>
                  <p className="text-sm text-gray-500">{topic.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;