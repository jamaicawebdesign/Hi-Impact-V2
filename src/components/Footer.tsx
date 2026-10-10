import React from 'react';
import { Anchor, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#020817] text-slate-300 border-t border-[#172c5a] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#172c5a]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 text-white mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b89225] text-[#030b1e] flex items-center justify-center font-bold shadow-md shadow-[#d4af37]/20">
                <Anchor className="w-4 h-4 stroke-[2.5]" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                Hi Impact<span className="text-[#d4af37] ml-1.5 font-semibold">Shipping Co.</span>
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm mb-5 text-xs">
              Direct ocean container transport, priority air cargo charters, intermodal overland freight, and temperature-controlled cold chain logistics serving enterprise supply chains worldwide.
            </p>
            <div className="text-slate-400 text-[11px] space-y-1">
              <div>FMC Licensed Ocean Transportation Intermediary #024881</div>
              <div>IATA Cargo Agent Network #01-4-8921</div>
              <div>C-TPAT Tier 3 Validated Highway &amp; Ocean Carrier</div>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors">Home &amp; Hero Slider</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">About Us &amp; Fleet</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Our Freight Services</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#d4af37] transition-colors">Market Insights Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact &amp; Rate Quotes</a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
              Freight Modes
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Ocean FCL &amp; LCL</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Air Cargo &amp; Charters</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Intermodal Rail Drayage</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Cold Chain &amp; Pharma</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#d4af37] transition-colors">Customs Brokerage</a>
              </li>
            </ul>
          </div>

          {/* Gateways Col */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
              Operating Gateways
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>Kingston Container Terminal, Jamaica (KCT)</li>
              <li>Port of Los Angeles / Long Beach</li>
              <li>Port of Rotterdam (Maasvlakte)</li>
              <li>Port of Singapore (PSA Gateway)</li>
              <li>Hamburg Container Terminal</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Hi Impact Shipping Company Inc. All rights reserved. Registered Marine &amp; Intermodal Carrier.
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-200 transition-colors">Terms of Carriage</a>
            <a href="#home" className="hover:text-slate-200 transition-colors">Standard Trading Conditions</a>
            <a href="#home" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 text-slate-300 hover:text-[#d4af37] bg-[#081533] border border-[#172c5a] rounded-lg hover:bg-[#0c1f4a] transition-colors flex items-center gap-1.5 shadow-sm"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
