import React from 'react';
import { Send, ExternalLink } from 'lucide-react';
import { EXPERT_INFO, EFT_DESCRIPTION } from '../constants';

const olgaPhoto = '/olga-photo.jpg';

const ExpertProfile: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <img 
            src={olgaPhoto} 
            alt="Ольга Турьева" 
            className="w-32 h-32 object-cover rounded-2xl shadow-lg border-4 border-teal-100"
          />
          <div>
            <h1 className="text-2xl font-bold teal-text">{EXPERT_INFO.name}</h1>
            <p className="text-gray-500">{EXPERT_INFO.title}</p>
            <p className="text-sm text-gray-400 mt-1">{EXPERT_INFO.experience}</p>
            
            <div className="flex gap-3 mt-4">
              <a
                href="https://t.me/OlgaTurjjeva"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-all shadow-md flex items-center gap-2"
              >
                <Send size={16} />
                Telegram
              </a>
              <a
                href="https://t.me/+X6SAWEgppy9lYmMy"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-teal-300 teal-text rounded-lg text-sm font-medium hover:bg-teal-50 transition-all flex items-center gap-2"
              >
                <ExternalLink size={16} />
                Канал
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-lg">
        <h2 className="text-xl font-bold teal-text mb-4">{EXPERT_INFO.clubName}</h2>
        <p className="text-gray-500">{EXPERT_INFO.clubDescription}</p>
      </div>

      <div className="bg-white rounded-2xl border border-teal-100 p-8 shadow-lg">
        <h2 className="text-xl font-bold teal-text mb-6">О технике ТЭС</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold teal-text mb-2">История</h3>
            <p className="text-gray-500">{EFT_DESCRIPTION.history}</p>
          </div>
          
          <div>
            <h3 className="font-semibold teal-text mb-2">Механизм действия</h3>
            <p className="text-gray-500">{EFT_DESCRIPTION.mechanism}</p>
          </div>
          
          <div>
            <h3 className="font-semibold teal-text mb-2">40-дневный протокол</h3>
            <p className="text-gray-500">{EFT_DESCRIPTION.protocol40}</p>
          </div>
          
          <div>
            <h3 className="font-semibold teal-text mb-2">Результаты</h3>
            <p className="text-gray-500">{EFT_DESCRIPTION.results}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;