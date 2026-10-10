import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ArrowRight, 
  Search, 
  Ship, 
  Plane, 
  Truck, 
  Warehouse,
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
  X
} from 'lucide-react';
import { HERO_SLIDES, TRACKING_SAMPLES, ShipmentTrackRecord } from '../data/shippingData';

// High-resolution commercial maritime & logistics imagery fallbacks
const FALLBACK_SLIDE_IMAGES: Record<string, string> = {
  'ocean-freight': 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=2000&q=85',
  'air-freight': 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=2000&q=85',
  'road-freight': 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=85',
  'logistics-hub': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85',
};

interface HeroSliderProps {
  onSelectServiceQuote?: (serviceId: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onSelectServiceQuote }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [trackingInput, setTrackingInput] = useState('');
  const [activeTrackingResult, setActiveTrackingResult] = useState<ShipmentTrackRecord | null>(null);
  const [trackingError, setTrackingError] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideDuration = 6500; // ms per slide

  // Autoplay cycle
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, slideDuration);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSlideIndex]);

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = trackingInput.trim().toUpperCase();
    if (!query) {
      setTrackingError('Please enter a tracking number.');
      return;
    }

    if (TRACKING_SAMPLES[query]) {
      setActiveTrackingResult(TRACKING_SAMPLES[query]);
      setTrackingError('');
    } else {
      // Simulate live lookup for demonstration
      setActiveTrackingResult({
        trackingNumber: query,
        carrier: 'Hi Impact Global Carrier Network',
        status: 'In Transit',
        origin: 'Direct Global Port of Origin',
        destination: 'Destination Terminal Facility',
        mode: 'Ocean FCL',
        vesselName: 'M/V Hi Impact Enterprise',
        progressPercent: 65,
        currentLocation: 'Open Ocean International Transit Waypoint',
        estimatedArrival: 'Estimated 5 Business Days',
        events: [
          { date: 'Recent', time: '10:00 UTC', location: 'Commercial Departure Port', description: 'Bill of Lading manifest validated and loaded', completed: true },
          { date: 'In Transit', time: '18:30 UTC', location: 'International Waters', description: 'Vessel underway with active telemetry verified', completed: true },
          { date: 'Upcoming', time: 'Estimated', location: 'Destination Berth', description: 'Customs declaration & terminal gate receipt', completed: false }
        ]
      });
      setTrackingError('');
    }
  };

  const handlePresetTrack = (code: string) => {
    setTrackingInput(code);
    setActiveTrackingResult(TRACKING_SAMPLES[code] || null);
    setTrackingError('');
  };

  const getSlideIcon = (id: string) => {
    switch (id) {
      case 'ocean-freight':
        return <Ship className="w-4 h-4 text-[#d4af37]" />;
      case 'air-freight':
        return <Plane className="w-4 h-4 text-[#d4af37]" />;
      case 'road-freight':
        return <Truck className="w-4 h-4 text-[#d4af37]" />;
      default:
        return <Warehouse className="w-4 h-4 text-[#d4af37]" />;
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#030b1e]">
      {/* Background Slides with AnimatePresence - No overlay on slider images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                const fallback = FALLBACK_SLIDE_IMAGES[currentSlide.id] || FALLBACK_SLIDE_IMAGES['ocean-freight'];
                if (target.src !== fallback) {
                  target.src = fallback;
                }
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Text Column directly on the slider without overlay box */}
          <div className="lg:col-span-8 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="max-w-3xl py-2"
              >
                {/* Clean unboxed category kicker directly on the slider */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#d4af37] uppercase tracking-wider mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  <span className="p-1 rounded bg-[#081533]/80 border border-[#d4af37]/60 shadow-md">
                    {getSlideIcon(currentSlide.id)}
                  </span>
                  <span>{currentSlide.category}</span>
                  <span aria-hidden="true" className="text-white">·</span>
                  <span className="text-white font-medium drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {currentSlide.subtitle}
                  </span>
                </div>

                {/* Hero Title - Directly on slider with strong drop-shadow */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                  {currentSlide.title}
                </h1>

                {/* Description - Directly on slider with strong drop-shadow */}
                <p className="text-base sm:text-xl text-white font-normal leading-relaxed mb-8 max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                  {currentSlide.description}
                </p>

                {/* Primary Actions & Adjacent Key Proof */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] active:bg-[#c29c29] rounded-lg transition-all duration-200 shadow-xl shadow-black/60 whitespace-nowrap"
                  >
                    {currentSlide.primaryAction}
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={currentSlide.secondaryHref}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white bg-[#081533]/90 hover:bg-[#081533] hover:text-[#d4af37] border-2 border-[#d4af37] rounded-lg transition-all shadow-xl shadow-black/60 whitespace-nowrap"
                  >
                    {currentSlide.secondaryAction}
                  </a>

                  {/* Adjacent Proof Stat directly visible */}
                  <div className="flex items-center gap-3 pl-3 sm:pl-5 border-l-2 border-[#d4af37] py-1 bg-[#081533]/70 backdrop-blur-xs px-3.5 rounded-r-lg shadow-lg">
                    <div className="text-2xl font-bold text-[#d4af37] font-mono tabular-nums drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      {currentSlide.highlightStat}
                    </div>
                    <div className="text-xs text-white max-w-[130px] leading-tight font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      {currentSlide.highlightLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Slide Quick Selector Tabs */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-1">
              Active Fleet Sectors
            </div>
            {HERO_SLIDES.map((slide, index) => {
              const isActive = index === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrentSlideIndex(index);
                  }}
                  className={`text-left p-3.5 rounded-lg border transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0d1e44] border-[#d4af37] shadow-md shadow-[#d4af37]/15'
                      : 'bg-[#07132d]/80 border-[#152a58] hover:bg-[#0a1b3f] hover:border-[#1d3a77]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-semibold ${isActive ? 'text-[#d4af37]' : 'text-slate-300'}`}>
                      {slide.category}
                    </span>
                    <span className="font-mono text-slate-400 text-[11px] tabular-nums">
                      0{index + 1} / 04
                    </span>
                  </div>
                  <div className="text-sm font-medium text-slate-200 line-clamp-1">
                    {slide.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Docked Lower Bar: Live Shipment Tracking Bar & Slider Navigation Controls */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        <div className="bg-[#081533]/95 backdrop-blur-md border border-[#172c5a] rounded-xl p-4 sm:p-5 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Live Tracking Input Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={trackingInput}
                    onChange={(e) => {
                      setTrackingInput(e.target.value);
                      if (trackingError) setTrackingError('');
                    }}
                    placeholder="Enter Container, B/L, or Waybill (e.g. HIS-8921-X)..."
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#040c20] border border-[#1b356d] rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-bold text-[#030b1e] bg-[#d4af37] hover:bg-[#e6ca65] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-2 shadow-md shadow-[#d4af37]/20"
                >
                  Track Cargo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Sample tracking quick pills for instant evaluation */}
              <div className="flex flex-wrap items-center gap-2 mt-2.5 text-xs text-slate-300">
                <span className="text-slate-400">Sample active shipments:</span>
                {Object.keys(TRACKING_SAMPLES).map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handlePresetTrack(code)}
                    className="font-mono text-[#d4af37] hover:text-[#f3df8a] underline underline-offset-2 hover:bg-[#0f214d] px-1 py-0.5 rounded transition-colors"
                  >
                    {code}
                  </button>
                ))}
                {trackingError && (
                  <span className="text-rose-400 text-xs ml-2">{trackingError}</span>
                )}
              </div>
            </div>

            {/* Slider Playback Controls */}
            <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-[#172c5a]">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlideIndex
                        ? 'w-7 bg-[#d4af37]'
                        : 'w-2 bg-[#1b356d] hover:bg-[#284992]'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next & Pause Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 text-slate-300 hover:text-[#d4af37] rounded-lg hover:bg-[#0e2049] transition-colors"
                  aria-label={isPlaying ? 'Pause slider autoplay' : 'Resume slider autoplay'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2 text-slate-200 hover:text-[#d4af37] rounded-lg hover:bg-[#0e2049] transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 text-slate-200 hover:text-[#d4af37] rounded-lg hover:bg-[#0e2049] transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Tracking Result Modal Drawer */}
      {activeTrackingResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#030b1e]/85 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#081533] border border-[#1b356d] rounded-xl max-w-2xl w-full p-6 sm:p-7 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-start justify-between pb-4 border-b border-[#172c5a]">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-mono mb-1">
                  <span>WAYBILL ID: {activeTrackingResult.trackingNumber}</span>
                  <span>·</span>
                  <span className="text-[#d4af37] font-semibold">{activeTrackingResult.mode}</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {activeTrackingResult.vesselName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveTrackingResult(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#0e2049] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tracking Status Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-b border-[#172c5a] text-sm">
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Status</div>
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {activeTrackingResult.status}
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Origin</div>
                <div className="font-medium text-slate-200 truncate">{activeTrackingResult.origin}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Destination</div>
                <div className="font-medium text-slate-200 truncate">{activeTrackingResult.destination}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Est. Arrival</div>
                <div className="font-medium text-[#d4af37] font-mono text-xs">{activeTrackingResult.estimatedArrival}</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="py-4">
              <div className="flex justify-between text-xs text-slate-300 mb-1.5 font-mono">
                <span>Voyage Route Transit</span>
                <span className="text-[#d4af37] font-bold tabular-nums">{activeTrackingResult.progressPercent}% Completed</span>
              </div>
              <div className="w-full bg-[#040c20] rounded-full h-2.5 overflow-hidden border border-[#172c5a]">
                <div
                  className="bg-[#d4af37] h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${activeTrackingResult.progressPercent}%` }}
                />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Current Waypoint: <strong className="text-slate-100">{activeTrackingResult.currentLocation}</strong></span>
              </div>
            </div>

            {/* Milestone Checkpoints Timeline */}
            <div className="mt-4 pt-4 border-t border-[#172c5a]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                Milestone Telemetry Log
              </h4>
              <div className="space-y-3.5">
                {activeTrackingResult.events.map((event, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <div className="mt-0.5">
                      {event.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${event.completed ? 'text-white' : 'text-slate-400'}`}>
                          {event.location}
                        </span>
                        <span className="font-mono text-slate-300 tabular-nums">
                          {event.date} · {event.time}
                        </span>
                      </div>
                      <p className="text-slate-300 mt-0.5">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-[#172c5a] flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveTrackingResult(null)}
                className="px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-[#0e2049] hover:bg-[#152e64] rounded-lg transition-colors"
              >
                Close Tracking View
              </button>
              <a
                href="#contact"
                onClick={() => setActiveTrackingResult(null)}
                className="px-4 py-2 text-xs font-bold text-[#030b1e] bg-[#d4af37] hover:bg-[#e6ca65] rounded-lg transition-colors inline-flex items-center gap-1 shadow-md"
              >
                Inquire With Dispatch
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
