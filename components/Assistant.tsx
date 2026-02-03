import React, { useState } from 'react';
import { Send, Calendar, CheckCircle, Clock, Heart, AlertTriangle } from 'lucide-react';
import { ChatMessage } from '../types';
const olgaPhoto = '/olga-photo.jpg';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        role: 'model',
        text: 'Благодарю за ваш вопрос. Для полноценной работы ассистента необходимо настроить API ключ.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8">
      {/* Chat Section */}
      <div className="bg-white rounded-2xl border border-teal-100 h-[400px] flex flex-col shadow-lg">
        <div className="p-4 border-b border-teal-100">
          <h2 className="font-semibold teal-text">Консультация с ТЭС-ассистентом</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-400 py-8">
              <p>Задайте ваш вопрос о технике эмоциональной свободы</p>
            </div>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl max-w-[80%] ${
                msg.role === 'user'
                  ? 'bg-teal-500 text-white ml-auto'
                  : 'bg-teal-50 border border-teal-100'
              }`}
            >
              <p className={msg.role === 'user' ? 'text-white' : 'teal-text'}>{msg.text}</p>
            </div>
          ))}
          {isLoading && (
            <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl max-w-[80%]">
              <p className="text-gray-400">Печатает...</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-teal-100">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Введите ваш вопрос..."
              className="flex-1 px-4 py-3 bg-white border border-teal-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:border-teal-400"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 disabled:opacity-50 transition-all shadow-md flex items-center gap-2"
            >
              <Send size={18} />
              Отправить
            </button>
          </div>
        </form>
      </div>

      {/* Consultation Section */}
      <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <img 
            src={olgaPhoto} 
            alt="Ольга Турьева" 
            className="w-48 h-48 object-cover rounded-2xl shadow-lg border-4 border-teal-100"
          />
          <div>
            <h2 className="text-2xl font-bold teal-text mb-2">Запишитесь на личную консультацию к Ольге Турьевой</h2>
            <p className="text-gray-500">Кризисный психолог, доктор философии, автор метода Телесная Регрессология</p>
            <p className="text-sm text-gray-400 mt-1">Более 30 лет практики | Более 12 000 консультаций</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Why Consultation */}
          <div>
            <h3 className="text-xl font-bold teal-text mb-4 flex items-center gap-2">
              <Heart className="text-teal-500" size={24} strokeWidth={2.5} />
              Зачем нужна консультация?
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>Если вы читаете эти строки — значит, внутри что-то болит. Может быть, давно. Может быть, так сильно, что уже сложно делать вид, что всё в порядке.</p>
              <p>Консультация — это не разговор «по душам». Это точная диагностика того, что блокирует вашу жизнь прямо сейчас:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={18} />
                  <span>Почему нет денег, несмотря на усилия.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={18} />
                  <span>Откуда страх, тревога и внутренняя пустота.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={18} />
                  <span>Что мешает отношениям, энергии и ощущению опоры.</span>
                </li>
              </ul>
              <p>Уже на первой встрече вы получите обратную связь от своего подсознания — конкретный ответ на вопрос, который мучает вас месяцами или годами.</p>
              <p className="font-medium teal-text">Я не работаю с симптомами. Я нахожу корневую причину — ту, что скрыта в вашем теле, энергии и подсознании. И показываю, как её безопасно исцелить.</p>
            </div>
          </div>

          {/* Why Not Delay */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold teal-text mb-4 flex items-center gap-2">
              <AlertTriangle className="text-orange-500" size={24} strokeWidth={2.5} />
              Почему нельзя откладывать?
            </h3>
            <div className="space-y-3 text-gray-600">
              <p><strong>Проблема не рассосётся сама. Она будет расти.</strong></p>
              <p>То, что вы игнорируете сегодня, завтра станет хроническим выгоранием, депрессией, разрушенными отношениями или болезнью тела.</p>
              <p>Чем дольше вы ждёте — тем глубже уходит боль. И тем сложнее потом её распутать.</p>
              <p className="font-medium">Каждый день, который вы живёте в стрессе, страхе и пустоте — это день, украденный у вашей настоящей жизни. У той, где вы спокойны, свободны и управляете своей реальностью.</p>
              <p className="text-lg font-bold teal-text">Вы заслуживаете помощи. Не «когда-нибудь». Сейчас.</p>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-xl font-bold teal-text mb-4 flex items-center gap-2">
              <Clock className="text-teal-500" size={24} strokeWidth={2.5} />
              Как проходит консультация?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <h4 className="font-bold teal-text mb-2">Первые 15 минут — бесплатно</h4>
                <p className="text-gray-600 text-sm">Мы знакомимся, я слушаю вашу историю и определяю, смогу ли я вам помочь. Вы чувствуете, подходит ли вам мой подход.</p>
              </div>
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-6 border border-teal-200">
                <h4 className="font-bold teal-text mb-2">Полная консультация — 1 час, 5000 рублей</h4>
                <p className="text-gray-600 text-sm mb-3">Вы получаете:</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>Точную диагностику корневой причины вашей проблемы.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>Обратную связь от вашего подсознания — ответ, который вы давно ищете.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>Конкретные техники, которые начнут работать уже после встречи.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="text-teal-500 mt-0.5 flex-shrink-0" size={16} />
                    <span>План действий — что делать дальше, чтобы изменить ситуацию.</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-600 italic">Это не «поговорили и разошлись». Это начало вашего пути к себе — осознанному, живому, свободному.</p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">📅 Запишитесь прямо сейчас</h3>
            <div className="space-y-2 mb-6 text-teal-50">
              <p>Не ждите, пока станет ещё хуже.</p>
              <p>Не надейтесь, что «само пройдёт».</p>
              <p>Не тратьте годы на попытки справиться в одиночку.</p>
            </div>
            <p className="mb-6 font-medium">Запишитесь на консультацию — и сделайте первый шаг к жизни, в которой вы снова чувствуете почву под ногами.</p>
            <a
              href="https://t.me/OlgaTurjjeva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all shadow-lg"
            >
              <Calendar size={24} />
              Записаться на консультацию
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;