import React from 'react';
import { 
  ShieldCheck, 
  Globe2, 
  Award, 
  Target, 
  Compass 
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#b89225] mb-3">
            About Hi-Impact Shipping Co.
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081533] leading-tight mb-5 text-balance">
            With over26  years of experience in the shipping and Customs Industry
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At HI- Impact Shipping & Co., we are dedicated to providing reliable,efficient and personalized logistics solutions for all. With over26  years of experience in the shipping and Customs Industry, our mission is to simplify the process of sending  your goods to Jamaica safely and timely.
          </p>
        </div>

        {/* Mission Statement & Vision Statement Showcase */}
        <div className="relative p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-[#081533] via-[#0a1b42] to-[#040d22] border-2 border-[#d4af37]/70 shadow-xl flex flex-col justify-between group hover:border-[#d4af37] transition-all duration-300">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold shadow-md shadow-[#d4af37]/15">
                  <Target className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                    Hi-Impact Group of Companies
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
              </div>
              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal italic">
                &ldquo;At Hi-Impact, our mission is to lead with innovation, integrity, and excellence across all our businesses. We are committed to creating value for our clients, employees, and communities by delivering high-quality solutions and fostering sustainable growth. Rooted in Jamaican culture and values, we aim to make a positive, lasting impact in every sector we operate in, contributing to the advancement of our nation and the well-being of all.&rdquo;
              </blockquote>
            </div>
            <div className="mt-8 pt-4 border-t border-[#172c5a] flex items-center justify-between text-xs">
              <span className="text-[#d4af37] font-semibold">Innovation · Integrity · Excellence</span>
              <span className="text-slate-300 font-medium">Rooted in Jamaica 🇯🇲</span>
            </div>
          </div>


          {/* Vision Card */}
          <div className="relative p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-[#081533] via-[#0a1b42] to-[#040d22] border-2 border-[#d4af37]/40 shadow-xl flex flex-col justify-between group hover:border-[#d4af37] transition-all duration-300">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center font-bold shadow-md shadow-[#d4af37]/15">
                  <Compass className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                    Hi-Impact Group of Companies
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
              </div>
              <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal italic">
                &ldquo;To be a transformative force in Jamaica, leading the way in innovation, sustainability, and social responsibility across all sectors. We envision a future where Hi-Impact is recognized as the driving catalyst for positive change, empowering communities, enhancing lives, and shaping a prosperous, sustainable economy for generations to come.&rdquo;
              </blockquote>
            </div>
            <div className="mt-8 pt-4 border-t border-[#172c5a] flex items-center justify-between text-xs">
              <span className="text-[#d4af37] font-semibold">Transformative Catalyst · Sustainability</span>
              <span className="text-slate-300 font-medium">Shaping the Future 🇯🇲</span>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Strip (Claim-to-Proof Adjacency) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 mb-16 shadow-sm">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#081533] font-mono tabular-nums mb-1">
              4.8M
            </div>
            <div className="text-xs font-bold text-[#b89225] uppercase tracking-wider mb-1">
              Annual TEU Handled
            </div>
            <p className="text-xs text-slate-600">
              Containerized freight moved across major maritime corridors annually.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#081533] font-mono tabular-nums mb-1">
              99.4%
            </div>
            <div className="text-xs font-bold text-[#b89225] uppercase tracking-wider mb-1">
              Liner Schedule Reliability
            </div>
            <p className="text-xs text-slate-600">
              On-time berth arrival rate exceeding international carrier benchmarks.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#081533] font-mono tabular-nums mb-1">
              140+
            </div>
            <div className="text-xs font-bold text-[#b89225] uppercase tracking-wider mb-1">
              Direct Port Terminals
            </div>
            <p className="text-xs text-slate-600">
              Global commercial maritime gateways with dedicated terminal berths.
            </p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-bold text-[#081533] font-mono tabular-nums mb-1">
              &lt; 24h
            </div>
            <div className="text-xs font-bold text-[#b89225] uppercase tracking-wider mb-1">
              Electronic Customs Clearance
            </div>
            <p className="text-xs text-slate-600">
              Pre-arrival electronic manifest filing across US, EU and Asian customs.
            </p>
          </div>
        </div>

        {/* Operational Pillars / Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 text-[#b89225] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#081533] mb-2">
              C-TPAT &amp; AEO Security Certified
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tier 3 Authorized Economic Operator with validated physical security, electronic container seals, and green-lane customs priority.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 text-[#b89225] flex items-center justify-center mb-4">
              <Globe2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#081533] mb-2">
              IMO 2030 Decarbonization Roadmap
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Committed to 40% carbon intensity reduction via bio-methanol dual-fuel vessels, shore power cold ironing, and electric port drayage.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-[#d4af37]/15 text-[#b89225] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-[#081533] mb-2">
              FMC Licensed &amp; Bonded OTI
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Federal Maritime Commission licensed Non-Vessel Operating Common Carrier (NVOCC) and ocean freight forwarder (OTI #024881).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
