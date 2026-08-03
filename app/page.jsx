import Link from "next/link";

/* ---------------- inline SVG icon set (clinical, stroke style) ---------------- */
const S = ({ children, className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {children}
  </svg>
);
const Globe = (p) => <S {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" /></S>;
const Target = (p) => <S {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></S>;
const Calendar = (p) => <S {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></S>;
const Doctor = (p) => <S {...p}><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /></S>;
const Bolt = (p) => <S {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></S>;
const Shield = (p) => <S {...p}><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6z" /><path d="m9 12 2 2 4-4" /></S>;
const CloudUp = (p) => <S {...p}><path d="M7 18a4 4 0 0 1-.6-8A6 6 0 0 1 18 9a3.5 3.5 0 0 1 0 7" /><path d="M12 13v6M9 16l3-3 3 3" /></S>;
const Search = (p) => <S {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></S>;
const Cube = (p) => <S {...p}><path d="M12 3 4 7v10l8 4 8-4V7z" /><path d="M4 7l8 4 8-4M12 11v10" /></S>;
const Check = (p) => <S {...p}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5L16 9" /></S>;
const Export = (p) => <S {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M12 18v-6M9.5 15.5 12 18l2.5-2.5" /></S>;
const Chat = (p) => <S {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z" /></S>;
const Refresh = (p) => <S {...p}><path d="M20 11a8 8 0 0 0-14-4.5M4 13a8 8 0 0 0 14 4.5" /><path d="M4 4v5h5M20 20v-5h-5" /></S>;
const Sliders = (p) => <S {...p}><path d="M4 8h10M18 8h2M4 16h2M10 16h10" /><circle cx="16" cy="8" r="2" /><circle cx="8" cy="16" r="2" /></S>;
const Link2 = (p) => <S {...p}><path d="M9 15l6-6M10.5 6.5l4-4a4 4 0 0 1 6 6l-4 4M13.5 17.5l-4 4a4 4 0 0 1-6-6l4-4" /></S>;
const Scissors = (p) => <S {...p}><circle cx="6" cy="6" r="2.4" /><circle cx="6" cy="18" r="2.4" /><path d="M8 8 20 16M8 16 20 8" /></S>;
const Layers = (p) => <S {...p}><path d="M12 3 3 8l9 5 9-5z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></S>;
const Star = (p) => <S {...p}><path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1z" fill="currentColor" stroke="none" /></S>;
const Plus = (p) => <S {...p}><path d="M12 5v14M5 12h14" /></S>;
const ArrowUpRight = (p) => <S {...p}><path d="M7 17 17 7M9 7h8v8" /></S>;
const Spark = (p) => <S {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><circle cx="12" cy="12" r="3" /></S>;
const Handshake = (p) => <S {...p}><path d="M3 11l4-4 5 4 5-4 4 4M3 11v6h6l3-3 3 3h6v-6" /></S>;

/* ---------------- reusable utility class fragments ---------------- */
const block = "relative py-[104px] max-[767px]:py-[72px]";
const blockSm = "relative py-[72px] max-[767px]:py-[52px]";
const eyebrowRow = "flex justify-center mb-[18px]";
const sectionHead = "text-center max-w-[720px] mx-auto mb-14";
const sectionH2 = "text-[clamp(28px,3.6vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-ctink mb-4";
const sectionP = "text-ctmuted text-[17px] leading-[1.7] m-0";

const trustLabel = "text-[12px] font-bold tracking-[0.14em] uppercase text-ctmuted";
const trustPill = "inline-flex items-center gap-3 rounded-full bg-white border border-ctline pl-2.5 pr-5 py-2.5 shadow-[0_6px_18px_rgba(13,33,72,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(var(--primary-color-rgb),0.45)] hover:shadow-[0_12px_26px_rgba(13,33,72,0.1)]";
const trustBadge = "grid place-items-center w-9 h-9 rounded-full bg-[rgba(var(--primary-color-rgb),0.1)] text-ctblue [&_svg]:w-5 [&_svg]:h-5 [&_svg]:shrink-0";
const trustName = "text-[14px] sm:text-[15px] font-semibold text-ctink";

const diffLabel = "inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-ctamber mr-[26px] shrink-0 [&_svg]:w-4 [&_svg]:h-4";
const diffItem = "inline-flex items-center gap-[11px] px-[22px] py-[12px] rounded-full border border-white/15 bg-white/[0.04] text-[15px] font-medium text-white/90 whitespace-nowrap [&_svg]:w-[18px] [&_svg]:h-[18px] [&_svg]:text-ctamber [&_svg]:shrink-0";

/* ---- WHY CHOOSE (bento) ---- */
const wdGrid = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-fr gap-3";
const wdSpot = "group relative overflow-hidden lg:col-span-2 lg:row-span-2 rounded-[22px] p-7 sm:p-10 text-white bg-gradient-to-br from-ctblue via-[#3a6cc0] to-[#234e9c] flex flex-col justify-center";
const wdSpotBlob1 = "absolute -top-20 -right-12 w-60 h-60 rounded-full bg-ctamber/25 blur-3xl pointer-events-none";
const wdSpotBlob2 = "absolute -bottom-24 -left-12 w-72 h-72 rounded-full bg-[#8fd0ff]/20 blur-3xl pointer-events-none";
const wdSpotGlyph = "absolute right-3 top-3 text-white/[0.08] pointer-events-none [&_svg]:w-[160px] [&_svg]:h-[160px]";
const wdSpotEyebrow = "relative z-[2] inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-[#dbe9ff] mb-6 [&_svg]:w-4 [&_svg]:h-4";
const wdSpotTitle = "relative z-[2] text-[clamp(26px,2.8vw,38px)] leading-[1.12] font-extrabold tracking-[-0.02em] mb-4";
const wdSpotText = "relative z-[2] text-[16px] leading-[1.7] text-white/85 max-w-[42ch]";
const wdChip = "relative z-[2] inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.12] border border-white/20 text-[14px] font-medium backdrop-blur-sm";
const wdCard = "group relative bg-white border border-ctline rounded-2xl p-6 sm:p-[26px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(13,33,72,0.1)] hover:border-[rgba(var(--primary-color-rgb),0.4)] flex flex-col";
const wdIndex = "absolute right-6 top-6 text-[13px] font-extrabold tracking-wider text-[rgba(var(--primary-color-rgb),0.3)]";
const wdIcon = "[&_svg]:w-6 [&_svg]:h-6 w-[54px] h-[54px] rounded-2xl grid place-items-center bg-gradient-to-br from-[rgba(var(--primary-color-rgb),0.14)] to-[rgba(var(--primary-color-rgb),0.06)] text-ctblue mb-[18px] ring-1 ring-[rgba(var(--primary-color-rgb),0.12)]";
const wdArrow = "absolute right-5 bottom-5 w-9 h-9 rounded-full grid place-items-center text-ctblue bg-[rgba(var(--primary-color-rgb),0.08)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 [&_svg]:w-4 [&_svg]:h-4";
const wdTitle = "text-[18px] font-bold text-ctink mb-2 pr-7";
const wdText = "text-[15px] leading-[1.65] text-ctmuted m-0";
const wdBand = "lg:col-span-4 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 rounded-[22px] p-7 sm:p-9 bg-gradient-to-r from-[#0c2148] to-[#123a7a] text-white";
const wdBandTitle = "text-[22px] sm:text-[24px] font-bold mb-1.5";
const wdBandText = "text-[15px] text-white/80 m-0";
const wdBandTag = "inline-flex items-center gap-2 px-[14px] py-2 rounded-full bg-white/[0.08] border border-white/15 text-[14px] font-medium [&_svg]:w-[15px] [&_svg]:h-[15px] [&_svg]:text-ctamber";

const processList = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-x-5 md:gap-y-7 relative";
const step = "relative text-left grid grid-cols-[56px_1fr] gap-4 items-start md:block md:text-center last:after:hidden after:absolute after:content-[''] after:bg-gradient-to-b after:from-ctblue after:to-ctamber after:w-0.5 after:left-7 after:top-14 after:h-[calc(100%-28px)] after:z-[1] md:after:hidden lg:after:block lg:after:w-full lg:after:h-0.5 lg:after:left-1/2 lg:after:top-7 lg:after:bg-gradient-to-r";
const stepNode = "[&_svg]:w-6 [&_svg]:h-6 w-14 h-14 rounded-full mx-auto md:mb-5 flex items-center justify-center bg-white border-2 border-ctblue text-ctblue font-extrabold text-[18px] relative z-[2] shadow-[0_10px_24px_rgba(var(--primary-color-rgb),0.2)]";
const stepBody = "bg-white border border-ctline rounded-2xl p-[22px] mt-1.5 md:mt-0 md:h-[calc(100%-76px)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,33,72,0.09)]";

const accItem = "border border-ctline rounded-2xl mb-[14px] bg-white overflow-hidden transition-all duration-300 [&[open]]:border-ctblue [&[open]]:shadow-[0_14px_36px_rgba(var(--primary-color-rgb),0.1)] [&[open]_summary_>_svg]:rotate-45";
const accSummary = "flex items-center gap-4 px-[22px] py-[18px] cursor-pointer list-none [&::-webkit-details-marker]:hidden";
const accIndex = "text-[13px] font-extrabold text-ctblue w-[26px] shrink-0";
const accIcon = "[&_svg]:w-[22px] [&_svg]:h-[22px] w-11 h-11 rounded-xl grid place-items-center bg-[rgba(var(--primary-color-rgb),0.1)] text-ctblue shrink-0";
const accTitle = "flex-1 text-[17px] font-semibold text-ctink";
const accPlus = "w-[26px] h-[26px] text-ctblue shrink-0 transition-transform duration-300";
const accBody = "px-[22px] pb-[22px] pl-[86px] text-ctmuted text-[15px] leading-[1.7] max-[575px]:pl-[22px]";

const stat = "relative text-center px-[18px] py-[18px] after:absolute after:content-[''] after:right-0 after:top-[18%] after:h-[64%] after:w-px after:bg-white/15 last:after:hidden sm:[&:nth-child(2)]:after:hidden max-[575px]:after:hidden max-[575px]:border-b max-[575px]:border-white/10";
const statNum = "text-[clamp(38px,4.4vw,56px)] font-extrabold leading-none tracking-[-0.02em] bg-gradient-to-r from-white to-[#a9d4ff] bg-clip-text text-transparent";
const statLabel = "mt-3 text-[15px] text-white/80 font-medium";

const testiGrid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]";
const quoteCard = "bg-white border border-ctline rounded-2xl p-[30px] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(13,33,72,0.1)]";
const stars = "[&_svg]:w-[18px] [&_svg]:h-[18px] flex gap-[3px] text-ctamber mb-4";
const quoteText = "text-[16px] leading-[1.7] text-ctink mb-[24px] flex-1";
const author = "flex items-center gap-3 pt-[18px] border-t border-ctline";

const faqItem = "border border-ctline rounded-2xl mb-[14px] bg-white overflow-hidden [&[open]]:border-ctblue [&[open]]:shadow-[0_14px_36px_rgba(var(--primary-color-rgb),0.09)] [&[open]_summary_>_svg]:rotate-45";
const faqSummary = "flex items-center gap-[14px] px-[24px] py-[20px] cursor-pointer list-none text-[17px] font-semibold text-ctink [&::-webkit-details-marker]:hidden";
const faqPlus = "w-6 h-6 text-ctblue shrink-0 transition-transform duration-300";

/* ---------------- data ---------------- */
const trustItems = [
  { icon: Globe, label: "Timezone Based Support" },
  { icon: Bolt, label: "Fast Turnaround" },
  { icon: Target, label: "Revision-Focused Planning" },
  { icon: Shield, label: "HIPAA / Patient Privacy" },
  { icon: Doctor, label: "Dedicated Treatment Planner" },
];

const diffItems = [
  { icon: Globe, label: "We work according to your timezone." },
  { icon: Calendar, label: "We plan around your national holidays and clinic vacations." },
  { icon: Target, label: "Our objective is revision-minimized treatment planning." },
  { icon: Chat, label: "Direct communication with the treatment planner." },
  { icon: Bolt, label: "Fast response during your clinic hours." },
  { icon: Handshake, label: "Long-term partnership instead of one-time case designing." },
];

const whyCards = [
  { cls: "spotlight", icon: Globe, title: "We Work in Your Timezone", text: "No matter where your clinic is located, our team aligns with your working hours for smooth communication and faster feedback." },
  { cls: "", icon: Target, title: "Revision-Less Treatment Planning", text: "Our mission is simple: deliver treatment plans that require little to no revisions. Every case is planned carefully to reduce unnecessary back-and-forth." },
  { cls: "", icon: Calendar, title: "We Respect Your Holidays", text: "We schedule production according to your country's public holidays and clinic vacations so your workflow never gets interrupted." },
  { cls: "", icon: Doctor, title: "Doctor-Centered Planning", text: "Every setup is customized according to your treatment philosophy—not just software automation." },
  { cls: "", icon: Bolt, title: "Fast Communication", text: "Need urgent modifications? We're available during your business hours." },
];

const processSteps = [
  { n: "1", icon: CloudUp, title: "Upload Case", text: "Send patient scans and your treatment goals through a secure portal." },
  { n: "2", icon: Search, title: "Clinical Review", text: "Our planners assess anatomy, occlusion and your objectives." },
  { n: "3", icon: Cube, title: "Treatment Planning", text: "We design a predictable, staged digital setup with your preferences." },
  { n: "4", icon: Check, title: "Doctor Review", text: "You review the setup and request any adjustments you need." },
  { n: "5", icon: Export, title: "Final Approval & Export", text: "Approved setup is exported and ready for production." },
];

const services = [
  { icon: Cube, title: "Clear Aligner Treatment Planning", text: "Complete orthodontic digital setup." },
  { icon: Refresh, title: "Midcourse Correction", text: "Case refinement after treatment begins." },
  { icon: Sliders, title: "Refinement Planning", text: "Optimized refinement setups." },
  { icon: Link2, title: "Attachment Planning", text: "Biomechanically efficient attachment placement." },
  { icon: Scissors, title: "IPR Planning", text: "Safe and predictable interproximal reduction planning." },
  { icon: Layers, title: "Staging Optimization", text: "Efficient tooth movement sequencing." },
  { icon: Chat, title: "Digital Consultation", text: "Planning support for difficult cases." },
];

const stats = [
  { num: "5000+", label: "Cases Planned" },
  { num: "98%", label: "On-Time Delivery" },
  { num: "24 Hrs", label: "Average Response Time" },
  { num: "Worldwide", label: "Timezone Support" },
];

const testimonials = [
  { name: "Dr. Helena Cruz", role: "Orthodontist", img: "/images/testimonial/1.webp", text: "Professional communication, excellent treatment planning, and minimal revisions. ClearTrackings feels like an extension of our own clinic." },
  { name: "Dr. Marcus Webb", role: "Aligner Company", img: "/images/testimonial/2.webp", text: "We get predictable setups back fast, in our own timezone. The planning is clinically sound and genuinely revision-free." },
  { name: "Dr. Aysha Rahman", role: "Orthodontist", img: "/women.jfif", text: "Doctor-centered planning that respects our philosophy. Fewer revisions, better outcomes — exactly what they promise." },
];

const faqs = [
  { q: "How long does a treatment plan take?", a: "Most plans are delivered within 24–48 hours, aligned to your clinic hours. Complex or multi-arch cases may take slightly longer, and we always communicate the timeline upfront." },
  { q: "Do you work according to my timezone?", a: "Yes. Our planning team aligns with your working hours so feedback and revisions happen in real time, without overnight delays." },
  { q: "Can I request modifications?", a: "Absolutely. Every plan includes a doctor review stage where you can request adjustments until the setup matches your treatment philosophy." },
  { q: "What software do you use?", a: "We use industry-standard orthodontic planning software and follow your preferred setup conventions, exporting in the formats your lab and printers require." },
  { q: "How is patient data protected?", a: "All patient data is handled confidentially and securely, with privacy and HIPAA-aligned practices throughout case handling and storage." },
];

export default function Home() {
  return (
    <div className="[font-family:var(--body-font,Arial,Helvetica,sans-serif)]">

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden text-white bg-[#08152e] pt-[150px] pb-[110px] [&_.container]:relative [&_.container]:z-10">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          autoPlay muted loop playsInline preload="auto"
          poster="/images/background/4.webp"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <span
          className="absolute inset-0 z-[1] bg-[radial-gradient(1100px_600px_at_85%_-10%,rgba(234,166,56,0.22),transparent_60%),radial-gradient(900px_620px_at_5%_110%,rgba(var(--primary-color-rgb),0.5),transparent_55%),linear-gradient(135deg,rgba(8,21,46,0.92),rgba(12,33,72,0.82)_55%,rgba(10,28,61,0.9))]"
          aria-hidden="true"
        ></span>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-14 items-center">

            <div className="max-w-[600px]">
              <span className="opacity-0 animate-rise inline-flex items-center gap-[10px] px-4 py-2 rounded-full border border-white/20 bg-white/[0.06] text-[13px] font-semibold tracking-[0.05em] uppercase text-[#cfe0ff] mb-[26px]">
                <span className="w-2 h-2 rounded-full bg-ctamber shadow-[0_0_0_4px_rgba(234,166,56,0.25)]"></span>
                Digital Treatment Planning Partner
              </span>
              <h1 className="opacity-0 animate-rise text-[clamp(34px,5vw,60px)] leading-[1.05] font-bold tracking-[-0.025em] mb-[22px]" style={{ animationDelay: "0.1s" }}>
                Precision Clear Aligner Treatment Planning.
                <span className="bg-gradient-to-r from-[#8fd0ff] to-ctamber bg-clip-text text-transparent"> Designed Around Your Workflow.</span>
              </h1>
              <p className="opacity-0 animate-rise text-[18px] leading-[1.7] text-white/80 mb-[34px]" style={{ animationDelay: "0.22s" }}>
                We provide high-quality clear aligner treatment planning with predictable, clinically
                focused setups. Our team works according to your timezone, communicates efficiently, and
                aims to deliver revision-free treatment plans.
              </p>
              <div className="opacity-0 animate-rise flex flex-wrap gap-[14px] mb-[38px]" style={{ animationDelay: "0.34s" }}>
                <Link className="btn-main" href="https://portal.cleartrackings.com/doctor/signup"><span>Upload Your First Case</span></Link>
              </div>
              
              <div className="opacity-0 animate-rise flex items-center gap-[14px]" style={{ animationDelay: "0.46s" }}>
                <div className="flex">
                  <img src="/images/testimonial/1.webp" alt="" className="w-[38px] h-[38px] rounded-full border-2 border-[#0c2148] object-cover -ml-[10px] first:ml-0" />
                  <img src="/images/testimonial/2.webp" alt="" className="w-[38px] h-[38px] rounded-full border-2 border-[#0c2148] object-cover -ml-[10px] first:ml-0" />
                  <img src="/images/testimonial/3.webp" alt="" className="w-[38px] h-[38px] rounded-full border-2 border-[#0c2148] object-cover -ml-[10px] first:ml-0" />
                  <img src="/images/testimonial/4.webp" alt="" className="w-[38px] h-[38px] rounded-full border-2 border-[#0c2148] object-cover -ml-[10px] first:ml-0" />
                </div>
                <div className="text-[14px] text-white/70">Trusted by <b className="text-white font-bold">orthodontists &amp; aligner companies</b> worldwide</div>
              </div>
            </div>

          
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="bg-ctsoft border-y border-ctline py-9 sm:py-11">
        <div className="container">
          <div className="flex flex-col items-center gap-6 sm:gap-7">
            <span className={trustLabel}>Trusted by orthodontists &amp; aligner companies worldwide</span>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {trustItems.map((t, i) => (
                <div key={i} className={trustPill}>
                  <span className={trustBadge}><t.icon /></span>
                  <span className={trustName}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ THE CLEARTRACKINGS DIFFERENCE (marquee) ============ */}
      <section className="bg-ctink text-white py-[40px] overflow-hidden">
        <div className="">
          <div className="flex flex-col items-center gap-4 overflow-hidden">
            <span className={diffLabel}><Spark /> The ClearTrackings Difference</span>
            <div className="flex items-center w-max animate-marquee">
              {[...diffItems, ...diffItems].map((d, i) => (
                <span key={i} className={diffItem}>
                  <d.icon /> {d.label}
                </span>
              ))}
            </div>
            <div className="mt-1">
            <Link className="btn-main fx-slide" href="https://portal.cleartrackings.com/doctor/signup"><span>Upload Your First Case</span></Link>
          </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE (bento) ============ */}
      <section className={block}>
        <div className="container">
          <div className={sectionHead}>
            <div className={eyebrowRow}><span className="subtitle">Why Choose ClearTrackings?</span></div>
            <h2 className={sectionH2}>More Than Just Designing Cases</h2>
            <p className={sectionP}>A planning partner built around how orthodontic clinics actually work — clinically focused, timezone-aligned, and obsessed with fewer revisions.</p>
          </div>

          <div className={wdGrid}>
            {whyCards.map((c, i) => {
              if (c.cls === "spotlight") {
                return (
                  <div key={i} className={wdSpot}>
                    <span className={wdSpotBlob1}></span>
                    <span className={wdSpotBlob2}></span>
                    <span className={wdSpotGlyph}><c.icon /></span>
                    <span className={"text-white"}> Built around your clinic</span>
                    <div>
                      <h3 className={`wdSpotTitle text-2xl md:text-4xl font-bold text-white`} >{c.title}</h3>
                      <p className={wdSpotText}>{c.text}</p>
                    </div>
                    <div className="relative z-[2] mt-7 flex flex-wrap gap-2.5">
                      <span className={wdChip}>Real-time feedback</span>
                      <span className={wdChip}>No overnight delays</span>
                      <span className={wdChip}>24h average response</span>
                    </div>
                  </div>
                );
              }
              return (
                <div key={i} className={wdCard}>
                  <span className={wdIndex}>{String(i).padStart(2, "0")}</span>
                  <div className={wdIcon}><c.icon /></div>
                  <h3 className={wdTitle}>{c.title}</h3>
                  <p className={wdText}>{c.text}</p>
                  <span className={wdArrow}><ArrowUpRight /></span>
                </div>
              );
            })}

            <div className={wdBand}>
              <div className="flex-1 min-w-[240px]">
                <h3 className='text-white'>Secure, end-to-end case handling</h3>
                <p className='text-white/80'>Patient data stays confidential and protected at every step of the workflow.</p>
              </div>
              <div className="flex flex-wrap gap-[10px] md:flex-[2_1_380px]">
                <span className={wdBandTag}><Shield /> HIPAA-aligned privacy</span>
                <span className={wdBandTag}><Shield /> Encrypted transfers</span>
                <span className={wdBandTag}><Doctor /> Dedicated planner</span>
                <span className={wdBandTag}><Bolt /> Real-time updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS RAIL ============ */}
      <section className={`${block} ${blockSm} bg-ctsoft`}>
        <div className="container">
          <div className={sectionHead}>
            <div className={eyebrowRow}><span className="subtitle">Our Process</span></div>
            <h2 className={sectionH2}>Simple, five-step planning</h2>
            <p className={sectionP}>From upload to export, every case moves through a clear, predictable workflow designed for revision-free outcomes.</p>
          </div>

          <div className={processList}>
            {processSteps.map((s, i) => (
              <div key={i} className={step}>
                <div className={stepNode}>{i === 3 ? <Check /> : s.n}</div>
                <div className={stepBody}>
                  <h4 className="text-[16px] font-bold text-ctink mb-2">{s.title}</h4>
                  <p className="text-[14px] leading-[1.6] text-ctmuted m-0">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES (accordion) ============ */}
      <section className={block}>
        <div className="container">
          <div className={sectionHead}>
            <div className={eyebrowRow}><span className="subtitle">Services</span></div>
            <h2 className={sectionH2}>What we plan for you</h2>
            <p className={sectionP}>Complete digital setups and the specialist planning that keeps complex cases moving.</p>
          </div>

          <div>
            {services.map((s, i) => (
              <details key={i} className={accItem} open={i === 0}>
                <summary className={accSummary}>
                  <span className={accIndex}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={accIcon}><s.icon /></span>
                  <span className={accTitle}>{s.title}</span>
                  <Plus className={accPlus} />
                </summary>
                <div className={accBody}>{s.text}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="relative overflow-hidden text-white py-[120px] bg-[radial-gradient(800px_400px_at_90%_10%,rgba(var(--primary-color-rgb),0.5),transparent_60%),linear-gradient(135deg,#08152e,#0c2148)]">
        <div className="container">
          <div className="relative z-[2] max-w-[980px] mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] uppercase text-ctamber mb-[26px] [&_svg]:w-4 [&_svg]:h-4"><Target /> Our Mission</span>
            <p className="text-[clamp(26px,3.8vw,46px)] leading-[1.28] font-bold tracking-[-0.02em] m-0">
              To help orthodontists and aligner companies achieve{" "}
              <span className="text-ctamber">predictable outcomes</span> through clinically sound, efficient,
              and <span className="text-ctamber">revision-minimized</span> treatment planning.
            </p>
            <p className="mt-[26px] mx-auto max-w-[640px] text-white/70 text-[17px] leading-[1.7]">
              Precision in every movement. Confidence in every smile. That is the standard behind every
              case we plan.
            </p>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-gradient-to-br from-[#0c2148] to-[#12367a] text-white py-[72px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className={stat}>
                <div className={statNum}>{s.num}</div>
                <div className={statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className={block}>
        <div className="container">
          <div className={sectionHead}>
            <div className={eyebrowRow}><span className="subtitle">Testimonials</span></div>
            <h2 className={sectionH2}>What doctors say</h2>
            <p className={sectionP}>Professional communication, excellent planning, and minimal revisions — in their words.</p>
          </div>

          <div className={testiGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={quoteCard}>
                <div className={stars}>
                  {[...Array(5)].map((_, k) => <Star key={k} />)}
                </div>
                <p className={quoteText}>&ldquo;{t.text}&rdquo;</p>
                <div className={author}>
                  <img src={t.img} alt={t.name} className="w-[46px] h-[46px] rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-[15px] text-ctink leading-[1.2]">{t.name}</div>
                    <div className="text-[13px] text-ctmuted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className={`${block} bg-ctsoft`}>
        <div className="container">
          <div className={sectionHead}>
            <div className={eyebrowRow}><span className="subtitle">FAQ</span></div>
            <h2 className={sectionH2}>Questions, answered</h2>
          </div>

          <div className="max-w-[820px] mx-auto">
            {faqs.map((f, i) => (
              <details key={i} className={faqItem} open={i === 0}>
                <summary className={faqSummary}>
                  <span className="flex-1">{f.q}</span>
                  <Plus className={faqPlus} />
                </summary>
                <div className="px-[24px] pb-[22px] text-ctmuted text-[15px] leading-[1.75]">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden text-center py-[120px] bg-[radial-gradient(700px_380px_at_15%_0%,rgba(234,166,56,0.22),transparent_60%),radial-gradient(800px_480px_at_100%_100%,rgba(var(--primary-color-rgb),0.5),transparent_55%),linear-gradient(135deg,#08152e,#0c2148)]">
        <div className="container">
          <h2 className="text-[clamp(30px,4.4vw,52px)] text-white mb-4 leading-[1.1] font-extrabold tracking-[-0.025em] m-0 mb-[18px]">Ready to Simplify Your Treatment Planning?</h2>
          <p className="max-w-[560px] mx-auto text-[18px] leading-[1.7] text-white/80 mb-[28px]">
            Let ClearTrackings become your dedicated digital treatment planning partner.
          </p>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-[10px] px-5 py-[10px] rounded-full border border-[rgba(234,166,56,0.5)] bg-[rgba(234,166,56,0.12)] text-[#ffd591] font-semibold text-[15px] mb-[34px] [&_svg]:w-4 [&_svg]:h-4 [&_svg]:text-ctamber">
              <Spark /> Precision in Every Movement. Confidence in Every Smile.
            </span>
          </div>
          <div className="mt-1">
            <Link className="btn-main fx-slide" href="https://portal.cleartrackings.com/doctor/signup"><span>Upload Your First Case</span></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
