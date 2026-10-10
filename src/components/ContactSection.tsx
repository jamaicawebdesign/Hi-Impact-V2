import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Calculator, 
  HelpCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Ship, 
  Plane, 
  Truck, 
  ThermometerSnowflake, 
  Clock, 
  Copy, 
  Check, 
  AlertCircle 
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formMode, setFormMode] = useState<'quote' | 'inquiry'>('quote');
  
  // Quote Form State
  const [quoteData, setQuoteData] = useState({
    mode: initialService?.includes('Air') ? 'Air Cargo' : initialService?.includes('Intermodal') ? 'Intermodal Truck' : 'Ocean FCL',
    origin: 'Shanghai (CNSHA)',
    destination: 'Rotterdam (NLRTM)',
    cargoType: 'Standard Dry Commercial Goods',
    containerType: "40' High Cube Container",
    weightKg: '18500',
    volumeCbm: '65',
    targetDate: '2026-05-15',
    customsRequired: true,
    insuranceRequired: true,
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Inquiry Form State
  const [inquiryData, setInquiryData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    department: 'Customer Operations & Tracking',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    referenceId: string;
    mode: string;
    estimatedCost: string;
    submittedAt: string;
    details: string;
  } | null>(null);

  const [copiedId, setCopiedId] = useState(false);

  // Common international trade gateways for fast selection
  const popularPorts = [
    'Shanghai (CNSHA)',
    'Rotterdam (NLRTM)',
    'Singapore (SGSIN)',
    'Los Angeles (USLAX)',
    'Hamburg (DEHAM)',
    'Dubai (AEDXB)',
    'Frankfurt Cargo Hub (FRA)',
    'Chicago O\'Hare (ORD)',
  ];

  // Dynamic cost estimator
  const calculateEstimate = () => {
    const weight = parseFloat(quoteData.weightKg) || 1000;
    const mode = quoteData.mode;
    let base = 2800;
    if (mode === 'Air Cargo') {
      base = Math.max(1800, weight * 4.2);
    } else if (mode === 'Ocean FCL') {
      base = quoteData.containerType.includes('40') ? 3450 : 2100;
    } else if (mode === 'Ocean LCL') {
      base = Math.max(450, (parseFloat(quoteData.volumeCbm) || 5) * 110);
    } else if (mode === 'Cold Chain Reefer') {
      base = 4900;
    } else {
      base = 1850;
    }

    if (quoteData.customsRequired) base += 350;
    if (quoteData.insuranceRequired) base += 220;

    return `$${Math.round(base).toLocaleString('en-US')}`;
  };

  const validateQuote = () => {
    const errors: Record<string, string> = {};
    if (!quoteData.origin.trim()) errors.origin = 'Origin location is required.';
    if (!quoteData.destination.trim()) errors.destination = 'Destination location is required.';
    if (!quoteData.companyName.trim()) errors.companyName = 'Company name is required.';
    if (!quoteData.contactName.trim()) errors.contactName = 'Contact name is required.';
    if (!quoteData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quoteData.email)) {
      errors.email = 'Valid corporate email address is required.';
    }
    if (!quoteData.phone.trim()) errors.phone = 'Contact telephone is required.';
    return errors;
  };

  const validateInquiry = () => {
    const errors: Record<string, string> = {};
    if (!inquiryData.fullName.trim()) errors.fullName = 'Your full name is required.';
    if (!inquiryData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryData.email)) {
      errors.email = 'Valid email address is required.';
    }
    if (!inquiryData.subject.trim()) errors.subject = 'Subject line is required.';
    if (!inquiryData.message.trim() || inquiryData.message.length < 15) {
      errors.message = 'Please provide details of your inquiry (at least 15 characters).';
    }
    return errors;
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateQuote();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = `HIS-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionReceipt({
        referenceId: randomRef,
        mode: quoteData.mode,
        estimatedCost: calculateEstimate(),
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        details: `${quoteData.origin} → ${quoteData.destination} (${quoteData.containerType})`,
      });
      setIsSubmitting(false);
    }, 750);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateInquiry();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = `INQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionReceipt({
        referenceId: randomRef,
        mode: inquiryData.department,
        estimatedCost: 'N/A (General Inquiry)',
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        details: inquiryData.subject,
      });
      setIsSubmitting(false);
    }, 750);
  };

  const handleCopyReference = () => {
    if (submissionReceipt?.referenceId) {
      navigator.clipboard.writeText(submissionReceipt.referenceId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#b89225] mb-3">
              Commercial Desk &amp; Quotations
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#081533] leading-tight">
              Request a Formal Freight Rate or Contact Global Dispatch
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Hi Impact Shipping Company pricing desks operate 24/7. Calculate estimated corridor rates instantly or speak directly with our licensed terminal specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Container (Left Column) */}
          <div className="lg:col-span-8 bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl">
            
            {/* Form Mode Selector (Interactive buttons) */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 border border-slate-200 rounded-lg max-w-max mb-8">
              <button
                type="button"
                onClick={() => {
                  setFormMode('quote');
                  setSubmissionReceipt(null);
                  setFormErrors({});
                }}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-md transition-colors ${
                  formMode === 'quote'
                    ? 'bg-[#081533] text-[#d4af37] shadow-sm'
                    : 'text-slate-600 hover:text-[#081533]'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                Freight Rate Calculator &amp; Quote
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormMode('inquiry');
                  setSubmissionReceipt(null);
                  setFormErrors({});
                }}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-md transition-colors ${
                  formMode === 'inquiry'
                    ? 'bg-[#081533] text-[#d4af37] shadow-sm'
                    : 'text-slate-600 hover:text-[#081533]'
                }`}
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Operations &amp; Customs Desk
              </button>
            </div>

            {/* Success State */}
            {submissionReceipt ? (
              <div className="py-8 px-6 bg-slate-50 rounded-xl border-2 border-[#d4af37] text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-[#d4af37]/20 text-[#081533] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#b89225]" />
                </div>
                <h3 className="text-2xl font-bold text-[#081533] mb-2">
                  Request Dispatched to Carrier Desk
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Your freight inquiry has been assigned to a Hi Impact Shipping trade lane manager. A binding commercial quote with spot tariff rate will be emailed within 2 hours.
                </p>

                <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 bg-white border border-slate-200 rounded-lg text-left mb-6 max-w-lg mx-auto w-full shadow-sm">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Booking Reference Number</div>
                    <div className="font-mono text-base font-bold text-[#b89225]">
                      {submissionReceipt.referenceId}
                    </div>
                  </div>
                  <div className="sm:border-l sm:border-slate-200 sm:pl-4">
                    <div className="text-xs text-slate-500 font-medium">Estimated Rate Guide</div>
                    <div className="font-mono text-base font-bold text-[#081533]">
                      {submissionReceipt.estimatedCost}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyReference}
                    className="p-2 text-slate-500 hover:text-[#081533] rounded hover:bg-slate-100 transition-colors shrink-0"
                    title="Copy reference code"
                  >
                    {copiedId ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmissionReceipt(null);
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] rounded-lg transition-colors shadow-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : formMode === 'quote' ? (
              /* Quote Calculator Form */
              <form onSubmit={handleQuoteSubmit} className="space-y-6">
                
                {/* Mode Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#081533] mb-2">
                    1. Transportation Mode
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { label: 'Ocean FCL', icon: Ship },
                      { label: 'Ocean LCL', icon: Ship },
                      { label: 'Air Cargo', icon: Plane },
                      { label: 'Intermodal Truck', icon: Truck },
                      { label: 'Cold Chain Reefer', icon: ThermometerSnowflake },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = quoteData.mode === item.label;
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setQuoteData({ ...quoteData, mode: item.label })}
                          className={`flex flex-col items-center justify-center p-3 rounded-lg border text-xs font-semibold transition-all ${
                            isSelected
                              ? 'bg-[#081533] text-[#d4af37] border-2 border-[#d4af37] shadow-md font-bold'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#d4af37] hover:bg-slate-100'
                          }`}
                        >
                          <Icon className="w-4 h-4 mb-1" />
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Routing Origin & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Origin Port / Gateway City *
                    </label>
                    <input
                      type="text"
                      value={quoteData.origin}
                      onChange={(e) => setQuoteData({ ...quoteData, origin: e.target.value })}
                      placeholder="e.g. Shanghai Port (CNSHA)"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent font-medium"
                    />
                    {formErrors.origin && <p className="text-rose-500 text-xs mt-1">{formErrors.origin}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Destination Port / Gateway City *
                    </label>
                    <input
                      type="text"
                      value={quoteData.destination}
                      onChange={(e) => setQuoteData({ ...quoteData, destination: e.target.value })}
                      placeholder="e.g. Rotterdam Gateway (NLRTM)"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent font-medium"
                    />
                    {formErrors.destination && <p className="text-rose-500 text-xs mt-1">{formErrors.destination}</p>}
                  </div>
                </div>

                {/* Quick suggestions */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Popular Gateways:</span>
                  {popularPorts.slice(0, 5).map((port) => (
                    <button
                      key={port}
                      type="button"
                      onClick={() => setQuoteData({ ...quoteData, destination: port })}
                      className="hover:text-[#b89225] font-medium hover:underline transition-colors"
                    >
                      {port.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Cargo Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Container / Equipment Type
                    </label>
                    <select
                      value={quoteData.containerType}
                      onChange={(e) => setQuoteData({ ...quoteData, containerType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-medium"
                    >
                      <option value="20' Standard Dry (33 CBM)">20' Standard Dry (33 CBM)</option>
                      <option value="40' High Cube Container">40' High Cube (76 CBM)</option>
                      <option value="40' Temperature Controlled Reefer">40' Reefer (-25°C to +25°C)</option>
                      <option value="Air Freight ULD Pallet (PMC)">Air Freight ULD Pallet (PMC)</option>
                      <option value="Less-than-Container Load (LCL Crates)">LCL Palletized Consolidation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Gross Cargo Weight (KG)
                    </label>
                    <input
                      type="number"
                      value={quoteData.weightKg}
                      onChange={(e) => setQuoteData({ ...quoteData, weightKg: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 font-mono focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Target Cargo Ready Date
                    </label>
                    <input
                      type="date"
                      value={quoteData.targetDate}
                      onChange={(e) => setQuoteData({ ...quoteData, targetDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-medium"
                    />
                  </div>
                </div>

                {/* Value added options */}
                <div className="flex flex-wrap items-center gap-6 p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
                  <label className="flex items-center gap-2 cursor-pointer font-medium">
                    <input
                      type="checkbox"
                      checked={quoteData.customsRequired}
                      onChange={(e) => setQuoteData({ ...quoteData, customsRequired: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-300 text-[#081533] focus:ring-[#d4af37]"
                    />
                    <span>Include Export/Import Customs Brokerage</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer font-medium">
                    <input
                      type="checkbox"
                      checked={quoteData.insuranceRequired}
                      onChange={(e) => setQuoteData({ ...quoteData, insuranceRequired: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-300 text-[#081533] focus:ring-[#d4af37]"
                    />
                    <span>Include All-Risk Cargo Insurance</span>
                  </label>
                </div>

                {/* Shipper Contact Information */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#081533] mb-3">
                    2. Shipper Credentials &amp; Delivery Destination
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Company Name *"
                        value={quoteData.companyName}
                        onChange={(e) => setQuoteData({ ...quoteData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                      {formErrors.companyName && <p className="text-rose-500 text-xs mt-1">{formErrors.companyName}</p>}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Contact Person Full Name *"
                        value={quoteData.contactName}
                        onChange={(e) => setQuoteData({ ...quoteData, contactName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                      {formErrors.contactName && <p className="text-rose-500 text-xs mt-1">{formErrors.contactName}</p>}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Corporate Email Address *"
                        value={quoteData.email}
                        onChange={(e) => setQuoteData({ ...quoteData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                      {formErrors.email && <p className="text-rose-500 text-xs mt-1">{formErrors.email}</p>}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Telephone Number / Ext *"
                        value={quoteData.phone}
                        onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                      />
                      {formErrors.phone && <p className="text-rose-500 text-xs mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Rate Estimator Summary & Action */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Estimated Lane Indicator:</div>
                    <div className="text-2xl font-bold text-[#081533] font-mono tabular-nums">
                      {calculateEstimate()}{' '}
                      <span className="text-xs font-normal text-slate-500">USD est.</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] disabled:opacity-50 rounded-lg transition-colors shadow-lg shadow-[#d4af37]/25 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span>Calculating Tariffs...</span>
                    ) : (
                      <>
                        <span>Submit Formal Rate Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* General Support & Customs Inquiry Form */
              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={inquiryData.fullName}
                      onChange={(e) => setInquiryData({ ...inquiryData, fullName: e.target.value })}
                      placeholder="e.g. Rachel Sterling"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    />
                    {formErrors.fullName && <p className="text-rose-500 text-xs mt-1">{formErrors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      placeholder="e.g. rachel@enterprise.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    />
                    {formErrors.email && <p className="text-rose-500 text-xs mt-1">{formErrors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Department Desk
                    </label>
                    <select
                      value={inquiryData.department}
                      onChange={(e) => setInquiryData({ ...inquiryData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] font-medium"
                    >
                      <option value="Customer Operations & Tracking">Customer Operations &amp; Tracking</option>
                      <option value="Customs Brokerage & Compliance">Customs Brokerage &amp; Compliance</option>
                      <option value="Port Terminal Billing & Demurrage">Port Terminal Billing &amp; Demurrage</option>
                      <option value="Dedicated Air Cargo Charters">Dedicated Air Cargo Charters</option>
                      <option value="Enterprise Carrier Alliances">Enterprise Carrier Alliances</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#081533] mb-1.5">
                      Subject Line *
                    </label>
                    <input
                      type="text"
                      value={inquiryData.subject}
                      onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                      placeholder="e.g. Schedule inquiry for Rotterdam liner service"
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    />
                    {formErrors.subject && <p className="text-rose-500 text-xs mt-1">{formErrors.subject}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#081533] mb-1.5">
                    Operational Inquiries / Cargo Manifest Details *
                  </label>
                  <textarea
                    rows={4}
                    value={inquiryData.message}
                    onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                    placeholder="Provide details on your shipment parameters, port pairs, hazardous requirements or customs queries..."
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                  {formErrors.message && <p className="text-rose-500 text-xs mt-1">{formErrors.message}</p>}
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-[#081533] bg-[#d4af37] hover:bg-[#e6ca65] disabled:opacity-50 rounded-lg transition-colors whitespace-nowrap shadow-md"
                  >
                    {isSubmitting ? 'Transmitting Message...' : 'Send Message to Operations'}
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Contact Information & Operational Desks (Right Column) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-[#081533] border-2 border-[#d4af37]/60 rounded-2xl p-6 sm:p-7 shadow-xl text-white">
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-[#172c5a] flex items-center justify-between">
                <span>24/7 Global Dispatch</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/20 px-2 py-0.5 rounded">Active</span>
              </h3>
              
              <div className="space-y-4 text-xs">
                <div>
                  <div className="text-slate-300 mb-0.5">Maritime Commercial Hotline:</div>
                  <div className="font-mono text-sm font-bold text-white flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    +1 (800) 489-2240
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Available 24/7 across all global timezones</div>
                </div>

                <div>
                  <div className="text-slate-300 mb-0.5">Air Cargo Charter Desk:</div>
                  <div className="font-mono text-sm font-bold text-white flex items-center gap-2">
                    <Plane className="w-3.5 h-3.5 text-[#d4af37]" />
                    +1 (800) 489-2249
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Urgent AOG &amp; Dedicated Charter Operations</div>
                </div>

                <div>
                  <div className="text-slate-300 mb-0.5">Commercial Bookings &amp; Quotes:</div>
                  <div className="font-mono text-sm font-bold text-[#d4af37] flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5" />
                    quotes@hiimpactshipping.com
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-md text-slate-900">
              <h3 className="text-base font-bold text-[#081533] mb-4 pb-2 border-b border-slate-200">
                Strategic Gateway Terminals
              </h3>
              
              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#b89225] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#081533] block">Caribbean &amp; Americas Flagship Gateway 🇯🇲</strong>
                    Kingston Wharves &amp; Container Terminal, Port Bustamante, Kingston, Jamaica
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#b89225] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#081533] block">Pacific Gateway (North America)</strong>
                    Pier T Terminal, Port of Long Beach, CA 90802
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#b89225] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#081533] block">European Master Hub</strong>
                    Maasvlakte 2, Haven 9830, 3199 LK Rotterdam, NL
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#b89225] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#081533] block">Asian Transshipment Center</strong>
                    PSA Singapore Container Terminal 4, 118483
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-[#081533] to-[#040d22] rounded-xl border border-[#d4af37]/40 text-xs text-slate-200 space-y-2 shadow-md">
              <div className="font-bold text-[#d4af37]">
                Hi Impact Liner Service Guarantee:
              </div>
              <p className="leading-relaxed">
                All container slot allocations submitted with approved credit terms are validated against vessel stowage plans within 120 minutes during standard port operating shifts.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
