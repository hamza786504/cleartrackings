import Link from "next/link";

/* ---- inline SVG icons (same stroke style as homepage) ---- */
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
const Star = (p) => <S {...p}><path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1z" fill="currentColor" stroke="none" /></S>;
const Plus = (p) => <S {...p}><path d="M12 5v14M5 12h14" /></S>;
const ArrowUpRight = (p) => <S {...p}><path d="M7 17 17 7M9 7h8v8" /></S>;
const Spark = (p) => <S {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><circle cx="12" cy="12" r="3" /></S>;
const Handshake = (p) => <S {...p}><path d="M3 11l4-4 5 4 5-4 4 4M3 11v6h6l3-3 3 3h6v-6" /></S>;

/* ---- data ---- */
const benefits = [
  {
    icon: Globe,
    title: "Timezone-Aligned Workflow",
    text: "We match your working hours — feedback and revisions happen in real time, never overnight.",
  },
  {
    icon: Target,
    title: "Revision-Minimized Planning",
    text: "Every case is planned meticulously so your setups require little to no revisions.",
  },
  {
    icon: Calendar,
    title: "Holiday-Aware Scheduling",
    text: "We plan around your country's public holidays and clinic vacations so your pipeline never stalls.",
  },
  {
    icon: Doctor,
    title: "Dedicated Treatment Planner",
    text: "You get a dedicated planner who understands your clinical philosophy — not a random rotation.",
  },
  {
    icon: Chat,
    title: "Direct Communication",
    text: "Talk directly to the planner designing your case. No ticketing queues, no call centers.",
  },
  {
    icon: Shield,
    title: "HIPAA-Aligned Security",
    text: "Patient data stays confidential with encrypted transfers and strict access controls.",
  },
];

const steps = [
  { n: "1", icon: CloudUp, title: "Upload Your Case", text: "Send patient scans and your treatment goals through our secure portal." },
  { n: "2", icon: Search, title: "Clinical Review", text: "Our planners assess anatomy, occlusion, and your stated objectives." },
  { n: "3", icon: Cube, title: "Treatment Design", text: "We build a staged digital setup customised to your preferences." },
  { n: "4", icon: Check, title: "Doctor Review", text: "You review the plan and request any modifications until you're satisfied." },
  { n: "5", icon: Export, title: "Approve & Export", text: "Approved setup is exported in your preferred format, ready for production." },
];

const teamMembers = [
  { name: "Dr. Sarah Bennett", role: "Lead Treatment Planner", img: "/images/team/1.webp" },
  { name: "Dr. Maya Lin", role: "Senior Orthodontic Planner", img: "/images/team/2.webp" },
  { name: "Dr. Michael Reyes", role: "Clinical Review Specialist", img: "/images/team/3.webp" },
  { name: "Dr. James Carter", role: "Digital Setup Expert", img: "/images/team/4.webp" },
];

const stats = [
  { num: "5000+", label: "Cases Planned" },
  { num: "98%", label: "On-Time Delivery" },
  { num: "24 Hrs", label: "Average Response" },
  { num: "Worldwide", label: "Timezone Support" },
];

const testimonials = [
  { name: "Dr. Helena Cruz", role: "Orthodontist", img: "/images/testimonial/1.webp", text: "Professional communication, excellent treatment planning, and minimal revisions. ClearTrackings feels like an extension of our own clinic." },
  { name: "Dr. Marcus Webb", role: "Aligner Company", img: "/images/testimonial/2.webp", text: "We get predictable setups back fast, in our own timezone. The planning is clinically sound and genuinely revision-free." },
  { name: "Dr. Aysha Rahman", role: "Orthodontist", img: "/images/testimonial/3.webp", text: "Doctor-centered planning that respects our philosophy. Fewer revisions, better outcomes — exactly what they promise." },
];

const faqs = [
  { q: "Who is this service designed for?", a: "ClearTrackings is built for orthodontists, general dentists offering clear aligners, and aligner manufacturing companies who need predictable, clinically sound digital treatment plans." },
  { q: "How long does a treatment plan take?", a: "Most plans are delivered within 24–48 hours, aligned to your clinic hours. Complex multi-arch cases may take slightly longer, and we always communicate the timeline upfront." },
  { q: "Can I request modifications to a plan?", a: "Absolutely. Every plan includes a doctor review stage where you can request adjustments until the setup matches your treatment philosophy." },
  { q: "Do you work according to my timezone?", a: "Yes. Our planning team aligns with your working hours so feedback and revisions happen in real time, without overnight delays." },
  { q: "How is patient data protected?", a: "All patient data is handled confidentially with HIPAA-aligned practices, encrypted transfers, and strict access controls throughout case handling and storage." },
];

/* ---- reusable class fragments ---- */
const block = "relative py-[104px] max-[767px]:py-[72px]";

export default function Dentists() {
  return (
    <div className="[font-family:var(--body-font,Arial,Helvetica,sans-serif)]">

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden text-white bg-[#08152e] pt-[150px] pb-[100px]">
        {/* gradient overlay */}
        <span
          className="absolute inset-0 z-[1] bg-[radial-gradient(900px_500px_at_80%_-5%,rgba(234,166,56,0.18),transparent_60%),radial-gradient(700px_500px_at_10%_110%,rgba(var(--primary-color-rgb),0.35),transparent_55%),linear-gradient(135deg,rgba(8,21,46,0.96),rgba(12,33,72,0.88)_55%,rgba(10,28,61,0.94))]"
          aria-hidden="true"
        />

        <div className="container relative z-[2]">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-[14px] text-white/60 mb-8 opacity-0 animate-rise">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/90">Dentists</span>
          </div>

          <div className="max-w-[720px]">
            <span className="opacity-0 animate-rise inline-flex items-center gap-[10px] px-4 py-2 rounded-full border border-white/20 bg-white/[0.06] text-[13px] font-semibold tracking-[0.05em] uppercase text-[#cfe0ff] mb-[26px]">
              <span className="w-2 h-2 rounded-full bg-ctamber shadow-[0_0_0_4px_rgba(234,166,56,0.25)]" />
              For Dentists & Orthodontists
            </span>
            <h1 className="opacity-0 animate-rise text-[clamp(32px,4.8vw,56px)] leading-[1.08] font-bold tracking-[-0.025em] mb-[22px]" style={{ animationDelay: "0.1s" }}>
              Your Dedicated Treatment Planning
              <span className="bg-gradient-to-r from-[#8fd0ff] to-ctamber bg-clip-text text-transparent"> Partner.</span>
            </h1>
            <p className="opacity-0 animate-rise text-[18px] leading-[1.7] text-white/80 mb-[34px]" style={{ animationDelay: "0.22s" }}>
              Focus on your patients — we handle the digital treatment planning. Clinically focused
              setups, delivered in your timezone, with minimal revisions.
            </p>
            <div className="opacity-0 animate-rise flex flex-wrap gap-[14px]" style={{ animationDelay: "0.34s" }}>
              <Link className="btn-main" href="https://portal.cleartrackings.com/doctor/signup"><span>Upload Your First Case</span></Link>
              <Link className="btn-main fx-slide !bg-transparent !border-white/30 hover:!bg-white/10" href="/contact"><span>Talk to Our Team</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS GRID ============ */}
      <section className={block}>
        <div className="container">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <div className="flex justify-center mb-[18px]"><span className="subtitle">Why Dentists Choose Us</span></div>
            <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-ctink mb-4">
              Built Around How Your Clinic Works
            </h2>
            <p className="text-ctmuted text-[17px] leading-[1.7] m-0">
              We are not just another outsourced service. ClearTrackings is a planning partner designed for orthodontic workflows — timezone-aligned, revision-focused, and always available during your clinic hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group relative bg-white border border-ctline rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(13,33,72,0.1)] hover:border-[rgba(var(--primary-color-rgb),0.4)]"
              >
                <div className="[&_svg]:w-6 [&_svg]:h-6 w-[54px] h-[54px] rounded-2xl grid place-items-center bg-gradient-to-br from-[rgba(var(--primary-color-rgb),0.14)] to-[rgba(var(--primary-color-rgb),0.06)] text-ctblue mb-5 ring-1 ring-[rgba(var(--primary-color-rgb),0.12)]">
                  <b.icon />
                </div>
                <h3 className="text-[18px] font-bold text-ctink mb-2">{b.title}</h3>
                <p className="text-[15px] leading-[1.65] text-ctmuted m-0">{b.text}</p>
                <span className="absolute right-5 bottom-5 w-9 h-9 rounded-full grid place-items-center text-ctblue bg-[rgba(var(--primary-color-rgb),0.08)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 [&_svg]:w-4 [&_svg]:h-4">
                  <ArrowUpRight />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className={`${block} bg-ctsoft`}>
        <div className="container">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <div className="flex justify-center mb-[18px]"><span className="subtitle">How It Works</span></div>
            <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-ctink mb-4">
              Five Steps to a Predictable Setup
            </h2>
            <p className="text-ctmuted text-[17px] leading-[1.7] m-0">
              From scan upload to production-ready export — every case follows a clear, revision-minimized workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-x-5 md:gap-y-7 relative">
            {steps.map((s, i) => (
              <div
                key={i}
                className="relative text-left grid grid-cols-[56px_1fr] gap-4 items-start md:block md:text-center last:after:hidden after:absolute after:content-[''] after:bg-gradient-to-b after:from-ctblue after:to-ctamber after:w-0.5 after:left-7 after:top-14 after:h-[calc(100%-28px)] after:z-[1] md:after:hidden lg:after:block lg:after:w-full lg:after:h-0.5 lg:after:left-1/2 lg:after:top-7 lg:after:bg-gradient-to-r"
              >
                <div className="[&_svg]:w-6 [&_svg]:h-6 w-14 h-14 rounded-full mx-auto md:mb-5 flex items-center justify-center bg-white border-2 border-ctblue text-ctblue font-extrabold text-[18px] relative z-[2] shadow-[0_10px_24px_rgba(var(--primary-color-rgb),0.2)]">
                  {i === 3 ? <Check /> : s.n}
                </div>
                <div className="bg-white border border-ctline rounded-2xl p-[22px] mt-1.5 md:mt-0 md:h-[calc(100%-76px)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(13,33,72,0.09)]">
                  <h4 className="text-[16px] font-bold text-ctink mb-2">{s.title}</h4>
                  <p className="text-[14px] leading-[1.6] text-ctmuted m-0">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MEET THE TEAM ============ */}
      <section className={block}>
        <div className="container">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <div className="flex justify-center mb-[18px]"><span className="subtitle">Our Team</span></div>
            <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-ctink mb-4">
              Meet the Planners Behind Your Cases
            </h2>
            <p className="text-ctmuted text-[17px] leading-[1.7] m-0">
              Every setup is crafted by experienced orthodontic treatment planners — not algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m, i) => (
              <div
                key={i}
                className="group relative bg-white border border-ctline rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_56px_rgba(13,33,72,0.12)] hover:border-[rgba(var(--primary-color-rgb),0.35)]"
              >
                {/* image */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* gradient fade at bottom */}
                  <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                {/* info */}
                <div className="p-5 text-center">
                  <h3 className="text-[17px] font-bold text-ctink mb-1">{m.name}</h3>
                  <p className="text-[14px] text-ctmuted m-0">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="bg-gradient-to-br from-[#0c2148] to-[#12367a] text-white py-[72px]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="relative text-center px-[18px] py-[18px] after:absolute after:content-[''] after:right-0 after:top-[18%] after:h-[64%] after:w-px after:bg-white/15 last:after:hidden sm:[&:nth-child(2)]:after:hidden max-[575px]:after:hidden max-[575px]:border-b max-[575px]:border-white/10"
              >
                <div className="text-[clamp(38px,4.4vw,56px)] font-extrabold leading-none tracking-[-0.02em] bg-gradient-to-r from-white to-[#a9d4ff] bg-clip-text text-transparent">{s.num}</div>
                <div className="mt-3 text-[15px] text-white/80 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className={block}>
        <div className="container">
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <div className="flex justify-center mb-[18px]"><span className="subtitle">Testimonials</span></div>
            <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-ctink mb-4">What Doctors Say</h2>
            <p className="text-ctmuted text-[17px] leading-[1.7] m-0">
              Professional communication, excellent planning, and minimal revisions — in their words.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-ctline rounded-2xl p-[30px] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(13,33,72,0.1)]">
                <div className="[&_svg]:w-[18px] [&_svg]:h-[18px] flex gap-[3px] text-ctamber mb-4">
                  {[...Array(5)].map((_, k) => <Star key={k} />)}
                </div>
                <p className="text-[16px] leading-[1.7] text-ctink mb-[24px] flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-[18px] border-t border-ctline">
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
          <div className="text-center max-w-[720px] mx-auto mb-14">
            <div className="flex justify-center mb-[18px]"><span className="subtitle">FAQ</span></div>
            <h2 className="text-[clamp(28px,3.6vw,44px)] leading-[1.12] font-bold tracking-[-0.02em] text-ctink mb-4">Common Questions</h2>
          </div>

          <div className="max-w-[820px] mx-auto">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="border border-ctline rounded-2xl mb-[14px] bg-white overflow-hidden [&[open]]:border-ctblue [&[open]]:shadow-[0_14px_36px_rgba(var(--primary-color-rgb),0.09)] [&[open]_summary_>_svg]:rotate-45"
                open={i === 0}
              >
                <summary className="flex items-center gap-[14px] px-[24px] py-[20px] cursor-pointer list-none text-[17px] font-semibold text-ctink [&::-webkit-details-marker]:hidden">
                  <span className="flex-1">{f.q}</span>
                  <Plus className="w-6 h-6 text-ctblue shrink-0 transition-transform duration-300" />
                </summary>
                <div className="px-[24px] pb-[22px] text-ctmuted text-[15px] leading-[1.75]">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden text-center py-[120px] max-[767px]:py-[80px] bg-[radial-gradient(700px_380px_at_15%_0%,rgba(234,166,56,0.22),transparent_60%),radial-gradient(800px_480px_at_100%_100%,rgba(var(--primary-color-rgb),0.5),transparent_55%),linear-gradient(135deg,#08152e,#0c2148)]">
        <div className="container relative z-[2]">
          <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.16em] uppercase text-ctamber mb-[26px] [&_svg]:w-4 [&_svg]:h-4"><Spark /> Your Planning Partner</span>
          <h2 className="text-[clamp(30px,4.4vw,52px)] text-white mb-4 leading-[1.1] font-extrabold tracking-[-0.025em] m-0 mb-[18px]">Ready to Simplify Your Treatment Planning?</h2>
          <p className="max-w-[560px] mx-auto text-[18px] leading-[1.7] text-white/80 mb-[28px]">
            Let ClearTrackings become your dedicated digital treatment planning partner. Upload your first case today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-[14px]">
            <Link className="btn-main fx-slide" href="https://portal.cleartrackings.com/doctor/signup"><span>Upload Your First Case</span></Link>
            <Link className="btn-main fx-slide !bg-transparent !border-white/30 hover:!bg-white/10" href="/contact"><span>Contact Us</span></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
