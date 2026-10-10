import React from 'react';
import { Target, Compass } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
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

      </div>
    </section>
  );
};
