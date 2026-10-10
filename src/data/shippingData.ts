export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  highlightStat: string;
  highlightLabel: string;
  primaryAction: string;
  primaryHref: string;
  secondaryAction: string;
  secondaryHref: string;
}

export interface ShippingService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  specs: {
    transitTime: string;
    capacity: string;
    coverage: string;
    bestFor: string;
  };
  features: string[];
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Maritime' | 'Air Freight' | 'Supply Chain' | 'Trade Policy';
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
}

export interface ShipmentTrackRecord {
  trackingNumber: string;
  carrier: string;
  status: 'In Transit' | 'Customs Cleared' | 'Port Arrival' | 'Out for Delivery' | 'Scheduled';
  origin: string;
  destination: string;
  mode: 'Ocean FCL' | 'Air Cargo' | 'Overland Intermodal' | 'Cold Chain';
  vesselName: string;
  progressPercent: number;
  currentLocation: string;
  estimatedArrival: string;
  events: {
    date: string;
    time: string;
    location: string;
    description: string;
    completed: boolean;
  }[];
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'ocean-freight',
    title: 'Precision Global Ocean Freight & Container Logistics',
    subtitle: 'Scheduled Liner Services Across 140+ Sovereign Port Terminals',
    description: 'Direct oceanic transit lines with guaranteed vessel space allocations, real-time container IoT tracking, and optimized trade corridor scheduling.',
    image: '/src/assets/images/hero_ocean_freight_1791654360420.jpg',
    category: 'Maritime Cargo',
    highlightStat: '4.8M TEU',
    highlightLabel: 'Annual Ocean Volume Handled',
    primaryAction: 'Request Freight Quote',
    primaryHref: '#contact',
    secondaryAction: 'Explore Ocean Services',
    secondaryHref: '#services',
  },
  {
    id: 'air-freight',
    title: 'Expedited Air Freight & Dedicated Charter Solutions',
    subtitle: 'Time-Critical International Air Cargo with 24–48h Transit Windows',
    description: 'Consolidated air cargo networks and dedicated charter flights for high-value machinery, perishables, and mission-critical industrial supply chains.',
    image: '/src/assets/images/hero_air_freight_1791654375365.jpg',
    category: 'Aviation Logistics',
    highlightStat: '24-48 hrs',
    highlightLabel: 'Express Hub-to-Hub Transit',
    primaryAction: 'Book Urgent Air Cargo',
    primaryHref: '#contact',
    secondaryAction: 'View Flight Corridors',
    secondaryHref: '#services',
  },
  {
    id: 'road-freight',
    title: 'Intermodal Overland Haulage & Cross-Border Freight',
    subtitle: 'Seamless Rail-to-Road Connectivity & Heavy-Duty Fleet Logistics',
    description: 'Nationwide and transcontinental freight hauling powered by telematics-equipped carrier fleets, heavy-lift transport, and temperature-controlled reefer trailers.',
    image: '/src/assets/images/hero_road_freight_1791654388807.jpg',
    category: 'Overland Haulage',
    highlightStat: '99.4%',
    highlightLabel: 'On-Time Linehaul Reliability',
    primaryAction: 'Calculate Overland Rates',
    primaryHref: '#contact',
    secondaryAction: 'Explore Intermodal',
    secondaryHref: '#services',
  },
  {
    id: 'logistics-hub',
    title: 'Smart Automated Warehousing & Cross-Dock Distribution',
    subtitle: 'High-Bay Automated Storage with Real-Time Inventory Visibility',
    description: 'Strategically located bonded warehouses offering automated pick-and-pack, temperature-monitored holding, and expedited port-adjacent cross-docking.',
    image: '/src/assets/images/hero_logistics_hub_1791654402278.jpg',
    category: 'Contract Logistics',
    highlightStat: '3.2M sq ft',
    highlightLabel: 'Bonded Warehouse Capacity',
    primaryAction: 'Inquire Storage Solutions',
    primaryHref: '#contact',
    secondaryAction: 'Explore Facilities',
    secondaryHref: '#about',
  },
];

export const SHIPPING_SERVICES: ShippingService[] = [
  {
    id: 'ocean-freight',
    title: 'Ocean Freight (FCL & LCL)',
    tagline: 'Reliable containerized maritime transport across premier global trade routes.',
    description: 'Whether you require dedicated Full Container Load (FCL) bookings or flexible Less than Container Load (LCL) consolidation, our carrier agreements provide vessel capacity and fixed scheduling even during peak seasons.',
    details: [
      'Standard Dry Van, High-Cube, Open Top & Flat Rack containers',
      'Port-to-port, door-to-port, and end-to-end door-to-door transit',
      'Consolidation hubs in major transshipment ports (Singapore, Rotterdam, Ningbo)',
      'Digital Bill of Lading (e-BL) and automated customs clearance filing'
    ],
    specs: {
      transitTime: '12 - 32 Days (corridor dependent)',
      capacity: 'Up to 24,000 TEU per vessel',
      coverage: '140+ Direct Global Commercial Ports',
      bestFor: 'High-volume manufactured goods, raw commodities & retail inventories'
    },
    features: ['Weekly Guaranteed Departures', 'Real-Time Container GPS Tracking', 'Direct Carrier Vessel Allocation'],
    icon: 'Ship',
  },
  {
    id: 'air-cargo',
    title: 'International Air Freight',
    tagline: 'Time-critical global air transport when speed and precision are paramount.',
    description: 'We orchestrate direct flight allocations and consolidated space on premier commercial wide-body freighters and private charters for urgent automotive parts, electronics, and aerospace components.',
    details: [
      'Next-Flight-Out (NFO) and deferred economy consolidated schedules',
      'Full and part aircraft chartering for out-of-gauge equipment',
      'Airport tarmac ramp supervision and direct priority transfer',
      'Hazardous material (IATA DGR certified) and lithium battery handling'
    ],
    specs: {
      transitTime: '24 - 72 Hours',
      capacity: 'Up to 110 Tonnes payload per chartered widebody',
      coverage: '380+ International Cargo Airports',
      bestFor: 'High-value electronics, pharmaceuticals, aerospace & urgent samples'
    },
    features: ['IATA Licensed Cargo Agent', 'Customs Pre-Clearance Airborne', 'Door-to-Airport Delivery Sprints'],
    icon: 'Plane',
  },
  {
    id: 'intermodal-rail-road',
    title: 'Intermodal Truck & Rail Haulage',
    tagline: 'Cost-effective inland connectivity combining heavy rail and modern trucking.',
    description: 'Bridge the critical miles between maritime seaports, rail ramps, and inland distribution centers with our high-density intermodal network and company-operated carrier fleet.',
    details: [
      'Dedicated drayage from marine terminals and railheads',
      'FTL (Full Truckload) and LTL (Less Than Truckload) dry van service',
      'Double-stack intermodal rail corridors for fuel efficiency',
      'Heavy-haul and oversized specialized multi-axle permits'
    ],
    specs: {
      transitTime: '1 - 5 Days domestic / cross-border',
      capacity: 'Up to 45,000 lbs standard / 80,000 lbs permitted',
      coverage: 'Comprehensive North American & European Intermodal Corridors',
      bestFor: 'Continental distribution, port drayage & plant-to-hub moves'
    },
    features: ['Telematics Fleet Tracking', '24/7 Dispatch Control', 'Cross-Border Bonded Transit'],
    icon: 'Truck',
  },
  {
    id: 'cold-chain',
    title: 'Temperature-Controlled Cold Chain',
    tagline: 'Unbroken active thermal management for perishables and biotech logistics.',
    description: 'Maintain strict thermal integrity from loading to final handover. Our modern reefer containers and refrigerated trailers feature dual-redundant cooling units and autonomous IoT data loggers.',
    details: [
      'Deep-frozen (-25°C), chilled (+2°C to +8°C), and controlled ambient (+15°C to +25°C)',
      'Continuous calibrated temperature data loggers with cellular uplink',
      'GDP (Good Distribution Practice) certified for bio-pharma and APIs',
      'Pre-trip reefer inspections and backup nitrogen refrigeration options'
    ],
    specs: {
      transitTime: 'Configured per freight mode (Air/Ocean/Road)',
      capacity: '40ft High-Cube Reefers & 53ft Refrigerated Trailers',
      coverage: 'Global cold-chain certified port terminals & air hubs',
      bestFor: 'Biopharmaceuticals, vaccines, fresh produce, seafood & dairy'
    },
    features: ['Continuous IoT Telemetry', 'GDP Pharma Compliance', 'Active Pre-Trip Calibrated Units'],
    icon: 'ThermometerSnowflake',
  },
  {
    id: 'customs-brokerage',
    title: 'Customs Clearance & Trade Compliance',
    tagline: 'Seamless border clearance and automated tariff classification advisory.',
    description: 'Avoid costly border demurrage and compliance penalties. Our licensed in-house customs brokers manage harmonized tariff codes (HTS), duty optimization, and preferential trade agreements.',
    details: [
      'Automated manifest filing (AMS, ISF 10+2, ICS2) prior to vessel departure',
      'Duty drawback, foreign trade zone (FTZ) entries, and bonded warehousing',
      'C-TPAT and AEO security audit support and compliance consulting',
      'Free Trade Agreement (FTA) origin documentation and valuation certification'
    ],
    specs: {
      transitTime: '< 24 Hours standard electronic pre-release',
      capacity: 'Unlimited commercial declaration throughput',
      coverage: 'Major ports of entry across USA, EU, UK, and East Asia',
      bestFor: 'Importers, exporters, multi-tier supply chains & cross-border trade'
    },
    features: ['Licensed In-House Brokers', 'Electronic Pre-Clearance (ISF/AMS)', 'Tariff Classification Auditing'],
    icon: 'ShieldCheck',
  },
  {
    id: 'warehousing-fulfillment',
    title: 'Smart Warehousing & 3PL Distribution',
    tagline: 'Strategic port-adjacent facilities with automated inventory management.',
    description: 'Position your cargo next to high-volume container terminals. Our smart warehouse facilities offer bonded holding, container devanning, pallet cross-docking, and B2B fulfillment.',
    details: [
      'Modern high-bay selective pallet racking and automated guided vehicles (AGV)',
      'Real-time WMS integration with API and EDI data feeds',
      'Bonded container freight stations (CFS) for duty-deferred storage',
      'Value-added services: labeling, shrink-wrapping, kitting, and QC inspection'
    ],
    specs: {
      transitTime: 'Same-day receiving and cross-dock dispatch',
      capacity: 'Over 3.2 Million sq ft across 12 strategic gateway hubs',
      coverage: 'Gateways adjacent to Port of LA/Long Beach, Rotterdam, Hamburg, Singapore',
      bestFor: 'Seasonal inventory buffers, e-commerce staging & container transloading'
    },
    features: ['Port-Adjacent Gateways', 'API/EDI Inventory Connect', 'Bonded CFS Storage'],
    icon: 'Building2',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'maritime-regulations-2026',
    slug: 'imo-2026-decarbonization-mandates',
    title: 'Decarbonization Mandates: How Green Methanol Vessels Are Reshaping Ocean Freight Rates',
    category: 'Maritime',
    author: {
      name: 'Capt. Henrik Lindqvist',
      role: 'VP of Maritime Fleet Operations',
    },
    date: 'March 28, 2026',
    readTime: '5 min read',
    summary: 'A deep dive into new maritime greenhouse gas targets, dual-fuel container vessels, and how enterprise shippers can forecast green fuel surcharges.',
    keyTakeaways: [
      'Over 28% of new container ship orderbooks now feature dual-fuel methanol or LNG propulsion systems.',
      'Tiered carbon intensity indicator (CII) ratings are prompting vessel speed optimizations across trans-Pacific routes.',
      'Forward contracting and consolidated cargo planning mitigate seasonal alternative fuel price fluctuations.'
    ],
    content: [
      'As international maritime environmental policies tighten, global liner shipping is undergoing its most capital-intensive transformation since containerization. The latest mandate sets binding carbon intensity benchmarks across all vessels exceeding 5,000 gross tonnage.',
      'For global supply chain directors, this shift introduces both operational opportunities and contract structures that require foresight. Dual-fuel container ships running on green e-methanol are no longer conceptual prototypes; major alliances are operating them on scheduled trans-Pacific and Asia-Europe loops.',
      'Shippers investing in long-term carrier contracts must evaluate how maritime fuel surcharges (BAF) are pegged to alternative bio-fuels versus conventional marine gas oil. By consolidating LCL shipments and utilizing predictive booking schedules, organizations can preserve shipping budget predictability while meeting mandatory Scope 3 corporate decarbonization targets.'
    ],
  },
  {
    id: 'cold-chain-iot-pharma',
    slug: 'cold-chain-telemetry-pharma',
    title: 'Cold-Chain Integrity: Real-Time IoT Telemetry in Biopharmaceutical Freight',
    category: 'Supply Chain',
    author: {
      name: 'Dr. Elena Rostova',
      role: 'Director of Life Sciences & Cold Chain',
    },
    date: 'April 04, 2026',
    readTime: '6 min read',
    summary: 'Examines active sensors, cellular-satellite data loggers, and automated temperature excursion mitigation during intercontinental transport.',
    keyTakeaways: [
      'Active GPS and 5G cellular thermal loggers provide continuous 60-second telemetry polling even inside cargo holds.',
      'Automated alert protocols trigger airport intervention teams within 15 minutes of any temperature drift.',
      'GDP compliant digital data logs eliminate paper-based documentation delays at international customs checkpoints.'
    ],
    content: [
      'Biologic drugs, cellular therapies, and vaccines present zero tolerance for temperature excursions. A single uncontrolled thermal swing can compromise millions of dollars in clinical inventory and disrupt patient treatment cycles.',
      'Traditional passive data loggers only revealed thermal failures after the shipment arrived at the destination dock. Today, modern cold chain logistics deploys active IoT sensor arrays equipped with multi-constellation satellite connectivity and cellular failover.',
      'When cargo approaches threshold limits, automated protocol triggers alert on-ground triage personnel at intermediate transfer hubs. Ramp teams can replace dry ice or reconnect reefer units before product viability is compromised, ensuring pristine compliance with Good Distribution Practice (GDP).'
    ],
  },
  {
    id: 'nearshoring-rail-corridors',
    slug: 'nearshoring-intermodal-corridors',
    title: 'Nearshoring Corridors: Intermodal Rail Expanding Continental Supply Chains',
    category: 'Trade Policy',
    author: {
      name: 'Marcus Vance',
      role: 'Chief Commercial Officer',
    },
    date: 'April 11, 2026',
    readTime: '4 min read',
    summary: 'Why manufacturing shifts toward regional clusters are driving historic investments in cross-border rail and dedicated bonded drayage fleets.',
    keyTakeaways: [
      'Cross-border intermodal rail volume grew 18.4% year-over-year as automotive and industrial manufacturing clusters expand.',
      'Pre-cleared bonded rail cars cross international frontiers without stopping for physical highway truck inspections.',
      'Intermodal rail reduces carbon emissions by up to 65% compared to long-haul dry van highway trucking.'
    ],
    content: [
      'The strategic pivot from single-source offshore manufacturing toward diversified regional clusters has placed unprecedented demand on overland freight networks. Industrial hubs are relocating closer to end-consumer markets, shifting freight flows onto continental corridors.',
      'Rather than relying exclusively on long-haul truck drivers navigating congested border crossing bottlenecks, shippers are turning to unified cross-border rail systems. Bonded trains travel directly through electronic non-intrusive inspection portals, shaving days off international border dwell times.',
      'By integrating domestic railhead drayage with port container arrivals, businesses establish resilient, fuel-efficient supply pipelines that buffer against fuel shocks and driver shortages.'
    ],
  },
  {
    id: 'smart-port-congestion-ai',
    slug: 'predictive-port-slot-booking',
    title: 'Mitigating Demurrage: How Predictive Port Slot Booking Protects Operating Margins',
    category: 'Air Freight',
    author: {
      name: 'Sarah Chen-Morales',
      role: 'Head of Global Port Operations',
    },
    date: 'April 18, 2026',
    readTime: '5 min read',
    summary: 'Practical strategies for cargo owners to avoid punitive detention charges through automated berth scheduling and rapid drayage off-dock staging.',
    keyTakeaways: [
      'Terminal demurrage and detention fees cost global cargo owners over $8B in preventable supply chain friction annually.',
      'Automated vessel ETA reconciliation allows drayage trucks to schedule terminal appointments inside 2-hour appointment windows.',
      'Off-dock container yards provide immediate relief by staging containers within 10 miles of marine gates.'
    ],
    content: [
      'Marine terminal congestion and unpredictable vessel bunching frequently subject importers to steep demurrage penalties. When containers sit on terminal property past free-time windows, daily charges accumulate rapidly.',
      'The remedy lies in real-time integration between vessel satellite AIS tracking, terminal gate reservation systems, and drayage dispatch. Instead of waiting for official vessel discharge notifications, our dispatch team reconciles crane moves hours ahead of time.',
      'By immediately moving containers to adjacent off-dock container freight stations (CFS), shippers stop the demurrage clock, maintain inventory velocity, and eliminate driver idle time at port gates.'
    ],
  },
];

export const TRACKING_SAMPLES: Record<string, ShipmentTrackRecord> = {
  'HIS-8921-X': {
    trackingNumber: 'HIS-8921-X',
    carrier: 'Hi Impact Ocean Line',
    status: 'In Transit',
    origin: 'Singapore (SGSIN)',
    destination: 'Rotterdam (NLRTM)',
    mode: 'Ocean FCL',
    vesselName: 'M/V Hi Impact Voyager (Voyage 2604W)',
    progressPercent: 74,
    currentLocation: 'Approaching Suez Canal Maritime Corridor',
    estimatedArrival: 'April 26, 2026 · 14:00 UTC',
    events: [
      { date: 'Apr 10, 2026', time: '08:30 UTC', location: 'Singapore PSA Terminal', description: 'Container loaded onto M/V Hi Impact Voyager', completed: true },
      { date: 'Apr 10, 2026', time: '17:45 UTC', location: 'Singapore Straits', description: 'Vessel cleared harbor waters, underway to Rotterdam', completed: true },
      { date: 'Apr 16, 2026', time: '11:15 UTC', location: 'Indian Ocean Corridor', description: 'Mid-voyage safety inspection & reefer telematics verified', completed: true },
      { date: 'Apr 20, 2026', time: '06:00 UTC', location: 'Gulf of Aden / Red Sea', description: 'Convoys formed for scheduled canal transit', completed: true },
      { date: 'Apr 26, 2026', time: '14:00 UTC', location: 'Rotterdam Gateway Terminal', description: 'Berth arrival & automated gantry crane discharge', completed: false },
    ],
  },
  'HIS-4402-A': {
    trackingNumber: 'HIS-4402-A',
    carrier: 'Hi Impact Air Express',
    status: 'Customs Cleared',
    origin: 'Frankfurt Airport (FRA)',
    destination: 'Chicago O\'Hare (ORD)',
    mode: 'Air Cargo',
    vesselName: 'Boeing 777F (Flight HI-920)',
    progressPercent: 88,
    currentLocation: 'Chicago O\'Hare Cargo Hub 5',
    estimatedArrival: 'Today · 18:30 CDT',
    events: [
      { date: 'Yesterday', time: '14:20 CEST', location: 'Frankfurt Airport Cargo City Süd', description: 'Palletized cargo accepted and screened by TSA/LBA', completed: true },
      { date: 'Yesterday', time: '21:00 CEST', location: 'Frankfurt Runway 18', description: 'Flight HI-920 departed on schedule', completed: true },
      { date: 'Today', time: '04:15 CDT', location: 'Chicago O\'Hare Terminal 5', description: 'Aircraft landed, air waybill processed', completed: true },
      { date: 'Today', time: '09:40 CDT', location: 'US Customs & Border Protection ORD', description: 'Customs clearance granted, release order issued', completed: true },
      { date: 'Today', time: '18:30 CDT', location: 'Consignee Facility, Aurora IL', description: 'Scheduled final dock delivery via dedicated truck', completed: false },
    ],
  },
  'HIS-1109-R': {
    trackingNumber: 'HIS-1109-R',
    carrier: 'Hi Impact Intermodal Haulage',
    status: 'In Transit',
    origin: 'Port of Long Beach, CA',
    destination: 'Alliance Logistics Hub, Dallas TX',
    mode: 'Overland Intermodal',
    vesselName: 'Double-Stack Rail Manifest HI-804',
    progressPercent: 52,
    currentLocation: 'El Paso Inland Rail Corridor, TX',
    estimatedArrival: 'April 23, 2026 · 10:00 CDT',
    events: [
      { date: 'Apr 18, 2026', time: '11:00 PDT', location: 'Long Beach Pier T Terminal', description: 'Discharged from vessel, mounted on intermodal chassis', completed: true },
      { date: 'Apr 19, 2026', time: '02:30 PDT', location: 'ICTF Intermodal Yard, Carson CA', description: 'Classified onto double-stack railcar sequence', completed: true },
      { date: 'Apr 20, 2026', time: '15:10 MDT', location: 'Tucson Rail Corridor, AZ', description: 'Sensors verified, rolling transit on schedule', completed: true },
      { date: 'Apr 23, 2026', time: '10:00 CDT', location: 'Dallas BNSF Intermodal Facility', description: 'Arriving at destination ramp for last-mile delivery', completed: false },
    ],
  },
};
