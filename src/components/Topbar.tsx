import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Youtube 
} from 'lucide-react';

// Custom crisp WhatsApp icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const Topbar: React.FC = () => {
  return (
    <div className="bg-[#020713] text-slate-300 text-xs border-b border-[#172c5a]/80 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9 sm:h-10">
          
          {/* Left: Contact Info & Location */}
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1">
            {/* Location */}
            <div className="flex items-center gap-1.5 text-slate-300 shrink-0 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">Kingston, Jamaica</span>
              <span className="sm:hidden">Kingston, JA 🇯🇲</span>
            </div>

            {/* Primary Phone */}
            <a 
              href="tel:8765780508" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#d4af37] transition-colors shrink-0 font-medium"
              title="Call primary operations"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>(876) 578-0508</span>
            </a>

            {/* Secondary Phone (desktop) */}
            <a 
              href="tel:8764707066" 
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-[#d4af37] transition-colors shrink-0 font-medium"
              title="Call customer support"
            >
              <span className="text-slate-500">/</span>
              <span>(876) 470-7066</span>
            </a>

            {/* Email (desktop) */}
            <a 
              href="mailto:hiimpactshipping@outlook.com" 
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-[#d4af37] transition-colors shrink-0"
              title="Email Hi-Impact Shipping"
            >
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>hiimpactshipping@outlook.com</span>
            </a>
          </div>

          {/* Right: Social Media Icons & Hours */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Business Hours (large screens) */}
            <div className="hidden xl:flex items-center gap-1.5 text-slate-400 text-[11px] pr-3 border-r border-[#172c5a]">
              <Clock className="w-3 h-3 text-[#d4af37]" />
              <span>Mon - Fri: 8:30 AM - 5:00 PM</span>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {/* WhatsApp */}
              <a
                href="https://wa.me/18765780508?text=Hello%20Hi-Impact%20Shipping%2C%20I%20would%20like%20to%20inquire%20about%20shipping%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-slate-300 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200"
                aria-label="Chat with Hi-Impact on WhatsApp"
                title="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-slate-300 hover:text-[#E4405F] hover:bg-[#E4405F]/10 transition-all duration-200"
                aria-label="Follow Hi-Impact on Instagram"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-slate-300 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-all duration-200"
                aria-label="Connect with Hi-Impact on Facebook"
                title="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-slate-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all duration-200"
                aria-label="Follow Hi-Impact on LinkedIn"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-md flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="Follow Hi-Impact on X"
                title="Twitter / X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex w-7 h-7 rounded-md items-center justify-center text-slate-300 hover:text-[#FF0000] hover:bg-[#FF0000]/10 transition-all duration-200"
                aria-label="Watch Hi-Impact on YouTube"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
