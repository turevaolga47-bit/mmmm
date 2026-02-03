import React from 'react';
import { MessageCircle, Dumbbell, Archive, User, Compass, Scale, Gem, Clock, PenTool, BarChart3, Heart, Sparkles, Brain, Zap, Sun } from 'lucide-react';
import { AppView, MentalHealthTopic } from '../types';
import { TOPICS } from '../constants';

interface DashboardProps {
  onTopicSelect: (topic: MentalHealthTopic) => void;
  onNavigate: (view: AppView) => void;
}

const topicIcons: Record<string, { icon: React.ReactNode; bgColor: string }> = {
  'anxiety': { 
    icon: <Compass className="icon-float" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-500' 
  },
  'burnout': { 
    icon: <Zap className="icon-pulse" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-orange-100 to-amber-100 text-orange-500' 
  },
  'stress': { 
    icon: <Brain className="icon-spin" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-red-100 to-pink-100 text-red-500' 
  },
  'fatigue': { 
    icon: <Sun className="icon-bounce" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-yellow-100 to-amber-100 text-yellow-600' 
  },
  'self-understanding': { 
    icon: <Sparkles className="icon-float" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-pink-100 to-rose-100 text-pink-500' 
  },
  'stress-test': { 
    icon: <BarChart3 className="icon-pulse" size={28} strokeWidth={2.5} />, 
    bgColor: 'bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-500' 
  },
};

const Dashboard: React.FC<DashboardProps> = ({ onTopicSelect, onNavigate }) => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl p-8 border border-teal-100 shadow-lg">
        <h2 className="text-2xl font-bold teal-text mb-2">Добро пожаловать</h2>
        <p className="text-gray-500">
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
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-sm">
              <MessageCircle className="icon-float text-blue-500" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium teal-text">Консультация</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXERCISES)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-sm">
              <Heart className="icon-pulse text-green-500" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium teal-text">Упражнения</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EDUCATION)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-full flex items-center justify-center shadow-sm">
              <Archive className="icon-bounce text-violet-500" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium teal-text">Архив</span>
          </button>
          <button
            onClick={() => onNavigate(AppView.EXPERT)}
            className="bg-white p-6 rounded-xl border border-teal-100 hover:border-teal-300 hover:shadow-lg transition-all text-center shadow-md group"
          >
            <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center shadow-sm">
              <User className="icon-spin text-rose-500" size={28} strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium teal-text">Эксперт</span>
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold teal-text mb-4">Темы для проработки</h3>
        <div className="grid gap-4">
          {TOPICS.slice(0, 4).map(topic => {
            const iconData = topicIcons[topic.id] || { 
              icon: <Gem className="icon-float" size={28} strokeWidth={2.5} />, 
              bgColor: 'bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-500' 
            };
            return (
              <div
                key={topic.id}
                onClick={() => onTopicSelect(topic)}
                className="bg-white p-5 rounded-xl border border-teal-100 flex items-center gap-4 cursor-pointer hover:border-teal-300 hover:shadow-lg transition-all shadow-md"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${iconData.bgColor}`}>
                  {iconData.icon}
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