import React, { useState } from 'react';
import { EXPERT_INFO } from '../constants';

interface StressTestProps {
  onBack: () => void;
}

const QUESTIONS = [
  { id: 1, text: 'Как часто вы чувствуете усталость, даже после полноценного сна?' },
  { id: 2, text: 'Бывает ли у вас ощущение, что вы не справляетесь с обязанностями дома и на работе?' },
  { id: 3, text: 'Как часто вы испытываете раздражение по мелочам в общении с близкими?' },
  { id: 4, text: 'Чувствуете ли вы тревогу о будущем своих детей или семьи?' },
  { id: 5, text: 'Как часто вы откладываете заботу о себе ради других?' },
  { id: 6, text: 'Бывают ли у вас проблемы со сном: бессонница или тревожные сны?' },
  { id: 7, text: 'Чувствуете ли вы себя одинокой, даже находясь в окружении людей?' },
  { id: 8, text: 'Как часто вы ощущаете напряжение в теле: зажимы в шее, плечах, груди?' },
  { id: 9, text: 'Бывает ли у вас ощущение, что жизнь проходит мимо, а вы только наблюдаете?' },
  { id: 10, text: 'Как часто вы чувствуете, что потеряли связь с собой и своими желаниями?' }
];

const ANSWERS = [
  { value: 0, label: 'Никогда' },
  { value: 1, label: 'Редко' },
  { value: 2, label: 'Иногда' },
  { value: 3, label: 'Часто' },
  { value: 4, label: 'Постоянно' }
];

const StressTest: React.FC<StressTestProps> = ({ onBack }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateStressLevel = (): number => {
    const values = Object.values(answers) as number[];
    const totalScore = values.reduce((sum: number, val: number) => sum + val, 0);
    const maxScore = QUESTIONS.length * 4;
    const percentage = totalScore / maxScore;
    return Math.max(1, Math.round(percentage * 10));
  };

  const allAnswered = Object.keys(answers).length === QUESTIONS.length;
  const stressLevel = calculateStressLevel();

  const getStressDescription = (level: number): string => {
    if (level <= 3) return 'Низкий уровень стресса. Вы справляетесь хорошо, но профилактика важна.';
    if (level <= 5) return 'Умеренный стресс. Пора обратить внимание на своё состояние.';
    if (level <= 7) return 'Повышенный стресс. Требуется активная работа над восстановлением.';
    return 'Критический уровень стресса. Необходима срочная помощь специалиста.';
  };

  const getStressColor = (level: number): string => {
    if (level <= 3) return 'text-emerald-500';
    if (level <= 5) return 'text-yellow-500';
    if (level <= 7) return 'text-orange-500';
    return 'text-red-500';
  };

  if (showResult) {
    return (
      <div className="space-y-6">
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-teal-600 flex items-center gap-2 transition-colors"
        >
          ← Назад
        </button>

        <div className="bg-white rounded-2xl p-8 border border-teal-100 text-center shadow-lg">
          <h2 className="text-2xl font-bold teal-text mb-6">Результат теста</h2>
          
          <div className="mb-8">
            <div className={`text-7xl font-bold ${getStressColor(stressLevel)} mb-4`}>
              {stressLevel}/10
            </div>
            <p className="text-lg text-gray-500">{getStressDescription(stressLevel)}</p>
          </div>

          <div className="w-full bg-teal-100 rounded-full h-4 mb-8">
            <div 
              className={`h-4 rounded-full transition-all ${
                stressLevel <= 3 ? 'bg-emerald-500' :
                stressLevel <= 5 ? 'bg-yellow-500' :
                stressLevel <= 7 ? 'bg-orange-500' : 'bg-red-500'
              }`}
              style={{ width: `${stressLevel * 10}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-lg">
          <h3 className="text-xl font-bold teal-text mb-6">Рекомендации для выхода из стресса</h3>
          
          <div className="space-y-6">
            <div className="p-5 bg-teal-50 rounded-xl border-l-4 border-teal-500">
              <h4 className="font-bold teal-text mb-2">👤 Личная консультация</h4>
              <p className="text-gray-600 text-sm mb-3">
                Получите профессиональную поддержку от кризисного психолога {EXPERT_INFO.name}. 
                Индивидуальный разбор вашей ситуации и план восстановления.
              </p>
              <a 
                href={EXPERT_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition-all shadow-md"
              >
                Записаться на консультацию
              </a>
            </div>

            <div className="p-5 bg-cyan-50 rounded-xl border-l-4 border-cyan-400">
              <h4 className="font-bold teal-text mb-2">🧘 40-дневный протокол ТЭС</h4>
              <p className="text-gray-600 text-sm">
                Попробуйте Технику Эмоциональной Свободы. Всего 2–5 минут в день в течение 40 дней — 
                и вы начнёте замечать, как стресс уходит малыми порциями, день за днём.
              </p>
            </div>

            <div className="p-5 bg-purple-50 rounded-xl border-l-4 border-purple-400">
              <h4 className="font-bold teal-text mb-2">📱 Канал «Секреты Женской Энергии»</h4>
              <p className="text-gray-600 text-sm mb-3">
                Подписывайтесь на канал с ежедневными практиками, поддержкой и вдохновением для женщин.
              </p>
              <a 
                href={EXPERT_INFO.channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-400 transition-all shadow-md"
              >
                Подписаться на канал
              </a>
            </div>

            <div className="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl shadow-md border border-teal-100">
              <h4 className="font-bold teal-text mb-2">✨ {EXPERT_INFO.clubName}</h4>
              <p className="text-gray-600 text-sm mb-4">
                {EXPERT_INFO.clubDescription}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Если вы готовы расстаться с состоянием стресса и начать жить счастливой жизнью — 
                это место для вас. Для вступления стучитесь в личку к {EXPERT_INFO.name}.
              </p>
              <a 
                href={EXPERT_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition-all shadow-md"
              >
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => { setShowResult(false); setAnswers({}); }}
          className="w-full bg-white text-gray-500 py-3 rounded-xl font-medium hover:bg-teal-50 transition-colors border border-teal-200 shadow-md"
        >
          Пройти тест заново
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="text-gray-500 hover:text-teal-600 flex items-center gap-2 transition-colors"
      >
        ← Назад
      </button>

      <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-lg">
        <h2 className="text-2xl font-bold teal-text mb-2">Мониторинг стресса</h2>
        <p className="text-gray-500">
          Ответьте на 10 вопросов, чтобы определить ваш уровень стресса по шкале от 1 до 10.
        </p>
      </div>

      <div className="space-y-4">
        {QUESTIONS.map((question, index) => (
          <div key={question.id} className="bg-white rounded-xl p-6 border border-teal-100 shadow-md">
            <p className="font-medium teal-text mb-4">
              {index + 1}. {question.text}
            </p>
            <div className="flex flex-wrap gap-2">
              {ANSWERS.map(answer => (
                <button
                  key={answer.value}
                  onClick={() => handleAnswer(question.id, answer.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    answers[question.id] === answer.value
                      ? 'bg-teal-500 text-white shadow-md'
                      : 'bg-teal-50 text-gray-600 hover:bg-teal-100 border border-teal-200'
                  }`}
                >
                  {answer.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-400">
        Отвечено: {Object.keys(answers).length} из {QUESTIONS.length}
      </div>

      <button
        onClick={() => setShowResult(true)}
        disabled={!allAnswered}
        className={`w-full py-4 rounded-xl font-semibold transition-all ${
          allAnswered
            ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-lg'
            : 'bg-teal-100 text-teal-300 cursor-not-allowed border border-teal-200'
        }`}
      >
        Узнать результат
      </button>
    </div>
  );
};

export default StressTest;