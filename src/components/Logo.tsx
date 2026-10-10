import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer' | 'compact' | 'hero';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'header',
  showSubtitle = true 
}) => {
  const isFooter = variant === 'footer';
  const isCompact = variant === 'compact';
  const isHero = variant === 'hero';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem Mark */}
      <div className="relative group shrink-0">
        <div className={`relative overflow-hidden rounded-xl border border-[#d4af37]/60 bg-gradient-to-br from-[#0c1c44] via-[#081533] to-[#030919] shadow-lg shadow-black/40 flex items-center justify-center transition-all duration-300 group-hover:border-[#d4af37] group-hover:shadow-[#d4af37]/20 ${
          isCompact 
            ? 'w-9 h-9' 
            : isFooter 
              ? 'w-11 h-11' 
              : isHero 
                ? 'w-14 h-14' 
                : 'w-11 h-11 sm:w-12 sm:h-12'
        }`}>
          {/* Logo Graphic Image */}
          <img 
            src="/images/hi_impact_logo.jpg" 
            alt="HI-Impact Shipping & Co. Crest" 
            className="w-full h-full object-cover scale-110 object-center transition-transform duration-300 group-hover:scale-115"
            onError={(e) => {
              // Fallback to inline SVG if image fails
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                (target.nextElementSibling as HTMLElement).style.display = 'flex';
              }
            }}
          />

          {/* Scalable SVG Fallback */}
          <div className="hidden absolute inset-0 w-full h-full items-center justify-center bg-gradient-to-br from-[#0b1b3d] to-[#040b1a] p-1.5 text-[#d4af37]">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <path d="M50 5 L88 22 L88 65 L50 95 L12 65 L12 22 Z" stroke="url(#goldGrad)" strokeWidth="4" fill="#081533" />
              <path d="M28 32 L38 32 L38 46 L62 46 L62 32 L72 32 L72 68 L62 68 L62 54 L38 54 L38 68 L28 68 Z" fill="url(#goldGrad)" />
              <path d="M25 72 C40 82 60 82 75 72" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f3df8a" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#aa8218" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute -inset-0.5 rounded-xl bg-[#d4af37]/20 blur-sm -z-10 opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Typography Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight text-white ${
            isCompact 
              ? 'text-base' 
              : isFooter 
                ? 'text-lg sm:text-xl' 
                : 'text-lg sm:text-xl'
          }`}>
            HI-IMPACT
          </span>
          <span className="text-[#d4af37] font-extrabold text-xs tracking-wider uppercase px-1.5 py-0.5 rounded bg-[#d4af37]/15 border border-[#d4af37]/30">
            &amp; CO.
          </span>
        </div>
        
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.16em] text-slate-300">
              Shipping &amp; Logistics
            </span>
            <span className="w-1 h-1 rounded-full bg-[#d4af37] hidden sm:inline-block" />
            <span className="text-[9.5px] font-medium tracking-wider text-[#d4af37] hidden sm:inline-block">
              Kingston, JA
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
