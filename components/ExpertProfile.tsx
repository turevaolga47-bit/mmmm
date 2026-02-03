import React from 'react';
import { EXPERT_INFO, EFT_DESCRIPTION } from '../constants';

const ExpertProfile: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-teal-200 p-8 shadow-lg">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-4xl border-2 border-amber-300 shadow-md">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-bold gold-text">{EXPERT_INFO.name}</h1>
            <p className="gold-text-light">{EXPERT_INFO.title}</p>
            <p className="text-sm gold-text-light mt-1">{EXPERT_INFO.experience}</p>
            
            <div className="flex gap-3 mt-4">
              <a
                href={EXPERT_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg text-sm font-medium hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg"
              >
                Telegram
              </a>
              <a
                href={EXPERT_INFO.channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-amber-400 gold-text-light rounded-lg text-sm font-medium hover:bg-amber-50 transition-all"
              >
                Канал
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-teal-200 p-8 shadow-lg">
        <h2 className="text-xl font-bold gold-text mb-4">{EXPERT_INFO.clubName}</h2>
        <p className="gold-text-light">{EXPERT_INFO.clubDescription}</p>
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-teal-200 p-8 shadow-lg">
        <h2 className="text-xl font-bold gold-text mb-6">О технике ТЭС</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold gold-text mb-2">История</h3>
            <p className="gold-text-light">{EFT_DESCRIPTION.history}</p>
          </div>
          
          <div>
            <h3 className="font-semibold gold-text mb-2">Механизм действия</h3>
            <p className="gold-text-light">{EFT_DESCRIPTION.mechanism}</p>
          </div>
          
          <div>
            <h3 className="font-semibold gold-text mb-2">40-дневный протокол</h3>
            <p className="gold-text-light">{EFT_DESCRIPTION.protocol40}</p>
          </div>
          
          <div>
            <h3 className="font-semibold gold-text mb-2">Результаты</h3>
            <p className="gold-text-light">{EFT_DESCRIPTION.results}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;