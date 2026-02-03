import React from 'react';
import { EXPERT_INFO, EFT_DESCRIPTION } from '../constants';

const ExpertProfile: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-4xl">
            👤
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{EXPERT_INFO.name}</h1>
            <p className="text-slate-600">{EXPERT_INFO.title}</p>
            <p className="text-sm text-slate-500 mt-1">{EXPERT_INFO.experience}</p>
            
            <div className="flex gap-3 mt-4">
              <a
                href={EXPERT_INFO.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800"
              >
                Telegram
              </a>
              <a
                href={EXPERT_INFO.channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50"
              >
                Канал
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-4">{EXPERT_INFO.clubName}</h2>
        <p className="text-slate-600">{EXPERT_INFO.clubDescription}</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8">
        <h2 className="text-xl font-bold text-slate-900 mb-6">О технике ТЭС</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">История</h3>
            <p className="text-slate-600">{EFT_DESCRIPTION.history}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Механизм действия</h3>
            <p className="text-slate-600">{EFT_DESCRIPTION.mechanism}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">40-дневный протокол</h3>
            <p className="text-slate-600">{EFT_DESCRIPTION.protocol40}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-2">Результаты</h3>
            <p className="text-slate-600">{EFT_DESCRIPTION.results}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
