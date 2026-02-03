import React from 'react';
import { EXPERT_INFO, EFT_DESCRIPTION } from '../constants';

const ExpertProfile: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-teal-700/50 backdrop-blur-sm rounded-2xl border border-teal-500/30 p-8 shadow-xl">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-teal-600/50 rounded-full flex items-center justify-center text-4xl border border-teal-400/30">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{EXPERT_INFO.name}</h1>
            <p className="text-teal-100">{EXPERT_INFO.title}</p>
            <p className="text-sm text-teal-200/70 mt-1">{EXPERT_INFO.experience}</p>
            
            <div className="flex gap-3 mt-4">
              <a
                href={EXPERT_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg text-sm font-medium hover:from-teal-400 hover:to-cyan-400 transition-all shadow-lg"
              >
                Telegram
              </a>
              <a
                href={EXPERT_INFO.channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-teal-400/50 text-white rounded-lg text-sm font-medium hover:bg-teal-600/50 transition-all"
              >
                Канал
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-teal-700/50 backdrop-blur-sm rounded-2xl border border-teal-500/30 p-8 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-4">{EXPERT_INFO.clubName}</h2>
        <p className="text-teal-100/90">{EXPERT_INFO.clubDescription}</p>
      </div>

      <div className="bg-teal-700/50 backdrop-blur-sm rounded-2xl border border-teal-500/30 p-8 shadow-xl">
        <h2 className="text-xl font-bold text-white mb-6">О технике ТЭС</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-white mb-2">История</h3>
            <p className="text-teal-100/90">{EFT_DESCRIPTION.history}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-2">Механизм действия</h3>
            <p className="text-teal-100/90">{EFT_DESCRIPTION.mechanism}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-2">40-дневный протокол</h3>
            <p className="text-teal-100/90">{EFT_DESCRIPTION.protocol40}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-2">Результаты</h3>
            <p className="text-teal-100/90">{EFT_DESCRIPTION.results}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;