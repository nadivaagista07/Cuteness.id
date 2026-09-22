import React from 'react';
import {
  Film,
  Sparkles,
  Palette,
  Music,
  GraduationCap,
  BookOpen,
  Briefcase,
  Layers,
  Wand2,
  Tv,
  CheckCircle,
} from 'lucide-react';

interface AppBrandIconProps {
  iconName: string;
  name: string;
  className?: string;
}

export const AppBrandIcon: React.FC<AppBrandIconProps> = ({ iconName, name, className = 'w-10 h-10' }) => {
  switch (iconName) {
    case 'netflix':
      return (
        <div className={`${className} rounded-xl bg-black flex items-center justify-center text-red-600 font-black text-xl tracking-tighter shadow-sm select-none`}>
          <span className="font-heading transform scale-110">N</span>
        </div>
      );
    case 'youtube':
      return (
        <div className={`${className} rounded-xl bg-[#FF0000] flex items-center justify-center text-white shadow-sm`}>
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
        </div>
      );
    case 'spotify':
      return (
        <div className={`${className} rounded-xl bg-[#1DB954] flex items-center justify-center text-black shadow-sm font-bold`}>
          <Music className="w-5 h-5 text-black" />
        </div>
      );
    case 'applemusic':
      return (
        <div className={`${className} rounded-xl bg-gradient-to-tr from-[#FC3C44] to-[#F94C57] flex items-center justify-center text-white shadow-sm`}>
          <Music className="w-5 h-5 text-white" />
        </div>
      );
    case 'chatgpt':
      return (
        <div className={`${className} rounded-xl bg-[#10A37F] flex items-center justify-center text-white shadow-sm font-semibold`}>
          <Sparkles className="w-5 h-5 text-white" />
        </div>
      );
    case 'gemini':
      return (
        <div className={`${className} rounded-xl bg-gradient-to-tr from-[#1A73E8] via-[#8AB4F8] to-[#9333EA] flex items-center justify-center text-white shadow-sm`}>
          <Sparkles className="w-5 h-5 text-white" />
        </div>
      );
    case 'canva':
      return (
        <div className={`${className} rounded-xl bg-gradient-to-br from-[#00C4CC] via-[#7D2AE8] to-[#6B46C1] flex items-center justify-center text-white shadow-sm font-bold text-lg italic select-none`}>
          C
        </div>
      );
    case 'capcut':
      return (
        <div className={`${className} rounded-xl bg-black flex items-center justify-center text-white shadow-sm font-black text-sm`}>
          <Layers className="w-5 h-5 text-white" />
        </div>
      );
    case 'disney':
      return (
        <div className={`${className} rounded-xl bg-[#0F1B4C] flex items-center justify-center text-white shadow-sm font-serif font-black text-sm select-none`}>
          D+
        </div>
      );
    case 'vidio':
      return (
        <div className={`${className} rounded-xl bg-[#ED1C24] flex items-center justify-center text-white shadow-sm font-bold text-base`}>
          V
        </div>
      );
    case 'wetv':
      return (
        <div className={`${className} rounded-xl bg-[#0055FF] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          WeTV
        </div>
      );
    case 'viu':
      return (
        <div className={`${className} rounded-xl bg-[#FFBF00] flex items-center justify-center text-slate-900 shadow-sm font-bold text-sm`}>
          viu
        </div>
      );
    case 'prime':
      return (
        <div className={`${className} rounded-xl bg-[#00A8E1] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          Prime
        </div>
      );
    case 'hbo':
      return (
        <div className={`${className} rounded-xl bg-[#5822B4] flex items-center justify-center text-white shadow-sm font-black text-xs tracking-tight`}>
          MAX
        </div>
      );
    case 'crunchyroll':
      return (
        <div className={`${className} rounded-xl bg-[#F47521] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          CR
        </div>
      );
    case 'loklok':
      return (
        <div className={`${className} rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-sm`}>
          <Tv className="w-5 h-5" />
        </div>
      );
    case 'drakor':
      return (
        <div className={`${className} rounded-xl bg-[#EC4899] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          DK
        </div>
      );
    case 'bstation':
      return (
        <div className={`${className} rounded-xl bg-[#00A1D6] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          Bili
        </div>
      );
    case 'dramabox':
      return (
        <div className={`${className} rounded-xl bg-[#7C3AED] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          DB
        </div>
      );
    case 'vision':
      return (
        <div className={`${className} rounded-xl bg-[#1E40AF] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          V+
        </div>
      );
    case 'grok':
      return (
        <div className={`${className} rounded-xl bg-black flex items-center justify-center text-white shadow-sm font-bold text-sm`}>
          /
        </div>
      );
    case 'grammarly':
      return (
        <div className={`${className} rounded-xl bg-[#15C39A] flex items-center justify-center text-white shadow-sm font-bold text-base`}>
          G
        </div>
      );
    case 'microsoft':
      return (
        <div className={`${className} rounded-xl bg-[#D83B01] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          365
        </div>
      );
    case 'zoom':
      return (
        <div className={`${className} rounded-xl bg-[#2D8CFF] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          Zoom
        </div>
      );
    case 'picsart':
      return (
        <div className={`${className} rounded-xl bg-[#9333EA] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          P
        </div>
      );
    case 'remini':
      return (
        <div className={`${className} rounded-xl bg-[#DC2626] flex items-center justify-center text-white shadow-sm`}>
          <Wand2 className="w-5 h-5 text-white" />
        </div>
      );
    case 'vsco':
      return (
        <div className={`${className} rounded-xl bg-[#18181B] flex items-center justify-center text-white shadow-sm font-mono font-bold text-xs`}>
          VS
        </div>
      );
    case 'ibispaint':
      return (
        <div className={`${className} rounded-xl bg-[#0EA5E9] flex items-center justify-center text-white shadow-sm`}>
          <Palette className="w-5 h-5 text-white" />
        </div>
      );
    case 'alightmotion':
      return (
        <div className={`${className} rounded-xl bg-[#10B981] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          AM
        </div>
      );
    case 'duolingo':
      return (
        <div className={`${className} rounded-xl bg-[#58CC02] flex items-center justify-center text-white shadow-sm font-black text-sm`}>
          Duo
        </div>
      );
    case 'wattpad':
      return (
        <div className={`${className} rounded-xl bg-[#FF6122] flex items-center justify-center text-white shadow-sm font-bold text-sm`}>
          W
        </div>
      );
    case 'youku':
      return (
        <div className={`${className} rounded-xl bg-[#00A0E9] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          YK
        </div>
      );
    case 'dazzcam':
      return (
        <div className={`${className} rounded-xl bg-[#D97706] flex items-center justify-center text-white shadow-sm font-serif font-bold text-xs`}>
          Dazz
        </div>
      );
    case 'meitu':
      return (
        <div className={`${className} rounded-xl bg-[#F43F5E] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          MT
        </div>
      );
    case 'getcontact':
      return (
        <div className={`${className} rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-sm font-bold text-xs`}>
          GTC
        </div>
      );
    case 'turnitin':
      return (
        <div className={`${className} rounded-xl bg-[#0284C7] flex items-center justify-center text-white shadow-sm`}>
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
      );
    case 'scribd':
      return (
        <div className={`${className} rounded-xl bg-[#1A7BBA] flex items-center justify-center text-white shadow-sm`}>
          <BookOpen className="w-5 h-5 text-white" />
        </div>
      );
    case 'service-tasks':
    case 'service-quiz':
    case 'service-poster':
    case 'service-other':
      return (
        <div className={`${className} rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-sm`}>
          <Briefcase className="w-5 h-5 text-white" />
        </div>
      );
    default:
      return (
        <div className={`${className} rounded-xl bg-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
