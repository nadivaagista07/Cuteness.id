import React from 'react';

interface CutenessLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const CutenessLogo: React.FC<CutenessLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showSubtitle = true,
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    hero: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    hero: 'text-3xl sm:text-4xl',
  };

  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Cute Mascot & Sparkle Brand Badge */}
      <div
        className={`${iconSizes[size]} relative rounded-2xl flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105`}
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #3B2854 0%, #292330 100%)'
            : 'linear-gradient(135deg, #A98BD4 0%, #8E6BC2 100%)',
          border: isDark ? '1px solid rgba(169, 139, 212, 0.3)' : '1px solid rgba(233, 200, 223, 0.6)',
          boxShadow: '0 4px 14px rgba(169, 139, 212, 0.25)',
        }}
      >
        {/* SVG Cute Cat Profile Avatar Mascot */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4/5 h-4/5"
        >
          {/* Left Cat Ear */}
          <path
            d="M24 44L30 18C31 15 35 15 37 18L48 36Z"
            fill="#FFFFFF"
          />
          {/* Left Inner Ear (Pink) */}
          <path
            d="M28 38L32 22C32.5 20.5 34.5 20.5 35.5 22L42 35Z"
            fill="#FDA4AF"
          />

          {/* Right Cat Ear */}
          <path
            d="M76 44L70 18C69 15 65 15 63 18L52 36Z"
            fill="#FFFFFF"
          />
          {/* Right Inner Ear (Pink) */}
          <path
            d="M72 38L68 22C67.5 20.5 65.5 20.5 64.5 22L58 35Z"
            fill="#FDA4AF"
          />

          {/* Cat Head / Face Shape */}
          <path
            d="M20 54C19 63 24 72 33 77C38 79.5 44 81 50 81C56 81 62 79.5 67 77C76 72 81 63 80 54C80 44 74 37 68 34C62 31.5 56 31 50 31C44 31 38 31.5 32 34C26 37 20 44 20 54Z"
            fill="#FFFFFF"
          />

          {/* Cute Big Sparkling Eyes */}
          {/* Left Eye */}
          <ellipse cx="38" cy="53" rx="4.2" ry="5.2" fill="#3B2854" />
          <circle cx="39.5" cy="51" r="1.8" fill="#FFFFFF" />
          <circle cx="36.5" cy="55" r="0.9" fill="#FFFFFF" />

          {/* Right Eye */}
          <ellipse cx="62" cy="53" rx="4.2" ry="5.2" fill="#3B2854" />
          <circle cx="63.5" cy="51" r="1.8" fill="#FFFFFF" />
          <circle cx="60.5" cy="55" r="0.9" fill="#FFFFFF" />

          {/* Rosy Cheeks */}
          <ellipse cx="28" cy="62" rx="4.5" ry="2.5" fill="#FDA4AF" fillOpacity="0.8" />
          <ellipse cx="72" cy="62" rx="4.5" ry="2.5" fill="#FDA4AF" fillOpacity="0.8" />

          {/* Cute Pink Button Nose */}
          <path
            d="M48.5 60C49 59 51 59 51.5 60L50 62.5Z"
            fill="#F43F5E"
          />

          {/* Cute Cat Mouth (:3) */}
          <path
            d="M45.5 63.5C47 66 49.5 65.5 50 63.5C50.5 65.5 53 66 54.5 63.5"
            stroke="#3B2854"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Whiskers (Left) */}
          <path d="M26 58L13 57" stroke="#3B2854" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M25 62L12 63" stroke="#3B2854" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M26 66L14 69" stroke="#3B2854" strokeWidth="1.4" strokeLinecap="round" />

          {/* Whiskers (Right) */}
          <path d="M74 58L87 57" stroke="#3B2854" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M75 62L88 63" stroke="#3B2854" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M74 66L86 69" stroke="#3B2854" strokeWidth="1.4" strokeLinecap="round" />

          {/* Cute Star Sparkle near right ear */}
          <path
            d="M78 15L79.5 19.5L84 21L79.5 22.5L78 27L76.5 22.5L72 21L76.5 19.5Z"
            fill="#FFDE82"
          />
          {/* Small Sparkle near left ear */}
          <path
            d="M20 23L21 25.5L23.5 26.5L21 27.5L20 30L19 27.5L16.5 26.5L19 25.5Z"
            fill="#FFFFFF"
            fillOpacity="0.85"
          />
        </svg>

        {/* Subtle glossy sheen */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className="flex items-center leading-none">
          <span
            className={`font-heading font-extrabold ${titleSizes[size]} tracking-tight transition-colors`}
            style={{ color: isDark ? '#FFFFFF' : '#3B2854' }}
          >
            Cuteness<span style={{ color: '#A98BD4' }}>.id</span>
          </span>
        </div>

        {showSubtitle && (
          <p
            className="text-[11px] font-medium tracking-wide mt-1"
            style={{ color: isDark ? '#A98BD4' : '#69587B' }}
          >
            Trusted App Store
          </p>
        )}
      </div>
    </div>
  );
};
