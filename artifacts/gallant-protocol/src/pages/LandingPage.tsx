import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import { Menu, X, Shield, Users, Plane, Calendar, MapPin, Search, CheckCircle2, Phone, Mail, Instagram, Twitter, Linkedin, Facebook, Star, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

import eccImg1 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.46_PM_(1)_1781568586010.jpeg";
import eccImg2 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.46_PM_1781568586011.jpeg";
import eccImg3 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.45_PM_(4)_1781568586012.jpeg";
import eccImg4 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.45_PM_(3)_1781568586013.jpeg";
import eccImg5 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.45_PM_(2)_1781568586014.jpeg";
import eccImg6 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.45_PM_(1)_1781568586016.jpeg";
import eccImg7 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.45_PM_1781568586017.jpeg";
import eccImg8 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.33_PM_1781568586018.jpeg";
import eccImg9 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.32_PM_(2)_1781568586019.jpeg";
import eccImg10 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.32_PM_(1)_1781568586020.jpeg";
import eccImg11 from "@assets/WhatsApp_Image_2026-06-09_at_7.13.32_PM_1781568586020.jpeg";
import epsImg1 from "@assets/WhatsApp_Image_2026-06-09_at_7.09.45_PM_(2)_1781568740994.jpeg";
import epsImg2 from "@assets/WhatsApp_Image_2026-06-09_at_7.09.45_PM_(1)_1781568740995.jpeg";
import epsImg3 from "@assets/WhatsApp_Image_2026-06-09_at_7.09.45_PM_1781568740996.jpeg";
import epsImg4 from "@assets/WhatsApp_Image_2026-06-09_at_7.09.44_PM_(1)_1781568740997.jpeg";
import epsImg5 from "@assets/WhatsApp_Image_2026-06-09_at_7.09.44_PM_(2)_1781568768260.jpeg";
import vcpImg1 from "@assets/3ca5f3e5-e96e-42c0-bdd6-a5693036776b_1781569110198.jpg";
import vcpImg2 from "@assets/WhatsApp_Image_2026-06-09_at_7.03.43_PM_1781569086389.jpeg";
import vcpImg3 from "@assets/WhatsApp_Image_2026-06-09_at_7.05.27_PM_(1)_1781569086387.jpeg";
import vcpImg4 from "@assets/WhatsApp_Image_2026-06-09_at_7.05.27_PM_1781569086388.jpeg";
import vcpImg5 from "@assets/WhatsApp_Image_2026-06-09_at_7.05.27_PM_(2)_1781569086386.jpeg";
import vcpImg6 from "@assets/WhatsApp_Image_2026-06-09_at_7.05.27_PM_(3)_1781569086385.jpeg";
import vcpImg7 from "@assets/WhatsApp_Image_2026-06-09_at_7.05.27_PM_(4)_1781569086384.jpeg";
import vcpImg8 from "@assets/WhatsApp_Image_2026-06-09_at_7.05.27_PM_(5)_1781569086383.jpeg";
import vcpImg9 from "@assets/WhatsApp_Image_2026-06-09_at_7.05.27_PM_(6)_1781569086382.jpeg";
import vcpImg10 from "@assets/WhatsApp_Image_2026-06-09_at_7.05.27_PM_(7)_1781569086381.jpeg";
import vcpImg11 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.44_PM_1781569086380.jpeg";
import vcpImg12 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.45_PM_(1)_1781569086378.jpeg";
import vcpImg13 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.45_PM_1781569086379.jpeg";
import vcpImg14 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.45_PM_(2)_1781569086377.jpeg";
import vcpImg15 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.45_PM_(3)_1781569086374.jpeg";
import vcpImg16 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.45_PM_(4)_1781569086373.jpeg";
import vcpImg17 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.46_PM_(1)_1781569086371.jpeg";
import vcpImg18 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.46_PM_1781569086372.jpeg";
import vcpImg19 from "@assets/WhatsApp_Image_2026-06-09_at_7.07.46_PM_(2)_1781569086370.jpeg";

const eventSlides: { src: string; label: string }[] = [
  ...[vcpImg1, vcpImg2, vcpImg3, vcpImg4, vcpImg5, vcpImg6, vcpImg7, vcpImg8, vcpImg9, vcpImg10, vcpImg11, vcpImg12, vcpImg13, vcpImg14, vcpImg15, vcpImg16, vcpImg17, vcpImg18, vcpImg19].map(src => ({ src, label: "VIP Close Protection" })),
  ...[eccImg1, eccImg2, eccImg3, eccImg4, eccImg5, eccImg6, eccImg7, eccImg8, eccImg9, eccImg10, eccImg11].map(src => ({ src, label: "Event and Crowd Control" })),
  ...[epsImg1, epsImg2, epsImg3, epsImg4, epsImg5].map(src => ({ src, label: "Escort and Protocol Services" })),
];

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Helper component for animated counting
const CountUp = ({ end, duration = 2, label }: { end: number, duration?: number, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center md:items-start">
      <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2 tracking-wider">
        {count}+
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{label}</div>
    </div>
  );
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "services", "events", "careers", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Past Events", id: "events" },
    { name: "Careers", id: "careers" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 h-20 transition-all duration-500 flex items-center ${
          isScrolled ? "bg-[#07152B]/95 backdrop-blur-md border-b border-border/30 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 w-full flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollTo("home")}>
            <img src="/images/logo.png" alt="Gallant Protocol" className="h-12 md:h-14 w-auto object-contain" />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-semibold uppercase tracking-widest transition-all relative group ${
                  activeSection === link.id ? "text-primary" : "text-white hover:text-primary"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Button 
              onClick={() => scrollTo("contact")} 
              className="bg-primary hover:bg-primary/90 text-white font-heading uppercase tracking-wider text-base h-12 px-8 shadow-[0_0_20px_rgba(13,76,255,0.4)] hover:shadow-[0_0_30px_rgba(13,76,255,0.6)] transition-all border-none"
            >
              Get Consultation
            </Button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#07152B] pt-24 px-6 lg:hidden border-l border-border/20 shadow-2xl"
          >
            <div className="flex flex-col gap-8 text-center mt-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-2xl font-heading font-bold uppercase tracking-widest text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="mt-8 pt-8 border-t border-border/30">
                <Button 
                  onClick={() => scrollTo("contact")} 
                  className="w-full h-14 bg-primary text-white font-heading uppercase tracking-widest text-xl shadow-[0_0_20px_rgba(13,76,255,0.3)]"
                >
                  Get Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen w-full flex flex-col overflow-hidden bg-[#07152B]">
        {/* Background carousel - fills entire section */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.hero-pagination' }}
            navigation={{ nextEl: '.hero-next', prevEl: '.hero-prev' }}
            loop
            className="h-full w-full"
          >
            {["WA0062", "WA0063", "WA0064", "WA0065", "WA0066"].map((img) => (
              <SwiperSlide key={img}>
                <div className="w-full h-full relative overflow-hidden bg-black">
                  <div
                    className="absolute inset-0 bg-cover bg-center ken-burns"
                    style={{ backgroundImage: `url(/images/events/IMG-20260525-${img}.jpg)` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#07152B] via-[#07152B]/75 to-[#07152B]/30" />
                  <div className="absolute inset-0 bg-[#07152B]/30" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Spacer that exactly matches navbar height — keeps content below nav on ALL screen sizes */}
        <div className="h-20 shrink-0" />

        {/* Content area — centers vertically in remaining space */}
        <div className="flex-1 relative z-10 flex items-center">
          <div className="container mx-auto px-4 md:px-6 w-full">
            <div className="max-w-2xl lg:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#0D4CFF] font-heading uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold mb-4 md:mb-5 flex items-center gap-3"
              >
                <span className="w-8 md:w-12 h-px bg-[#0D4CFF] shrink-0"></span>
                Executive Protection & Security Excellence
              </motion.div>

              <h1 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[1] mb-5 md:mb-6 text-white tracking-tight">
                <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}>PROTECTING PEOPLE.</motion.div>
                <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }} className="text-white/55">PRESERVING TRUST.</motion.div>
                <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }} className="text-[#0D4CFF]">DELIVERING EXCELLENCE.</motion.div>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-sm md:text-base lg:text-lg text-white/70 mb-7 md:mb-8 max-w-xl leading-relaxed font-light"
              >
                Elite security solutions for diplomats, executives, and high-value assets. 
                Unmatched discretion, strategic protocol, and operational supremacy across the globe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
              >
                <Button
                  size="lg"
                  className="h-12 md:h-14 px-6 md:px-8 font-heading uppercase tracking-widest text-sm md:text-base bg-[#0D4CFF] hover:bg-[#0D4CFF]/90 text-white border-none shadow-[0_0_20px_rgba(13,76,255,0.4)] hover:shadow-[0_0_30px_rgba(13,76,255,0.6)] transition-all"
                  onClick={() => scrollTo("contact")}
                  data-testid="button-hero-consultation"
                >
                  Get Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 md:h-14 px-6 md:px-8 font-heading uppercase tracking-widest text-sm md:text-base bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10 hover:text-white transition-all"
                  onClick={() => scrollTo("services")}
                  data-testid="button-hero-services"
                >
                  Explore Services
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom pagination & nav arrows */}
        <div className="relative z-20 pb-6 md:pb-8">
          <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
            <div className="hero-pagination flex gap-2"></div>
            <div className="hidden md:flex gap-3">
              <button className="hero-prev w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#0D4CFF] hover:border-[#0D4CFF] backdrop-blur-sm transition-all">
                <ArrowRight className="rotate-180" size={18} />
              </button>
              <button className="hero-next w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#0D4CFF] hover:border-[#0D4CFF] backdrop-blur-sm transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* FLOATING STATS CARD */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute right-0 top-[58%] -translate-y-1/2 z-20 hidden xl:block"
        >
          <div className="bg-[#07152B]/40 backdrop-blur-xl p-8 rounded-l-2xl border-y border-l border-[#0D4CFF]/30 shadow-[-10px_0_40px_rgba(13,76,255,0.15)] flex flex-col gap-8 w-64">
            <div>
              <div className="text-4xl font-heading font-bold text-white mb-1">10<span className="text-[#D61F2C]">+</span></div>
              <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">Years Experience</div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div>
              <div className="text-4xl font-heading font-bold text-white mb-1">500<span className="text-[#D61F2C]">+</span></div>
              <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">Operations</div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div>
              <div className="text-4xl font-heading font-bold text-white mb-1">24<span className="text-[#D61F2C]">/</span>7</div>
              <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">Response Team</div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div>
              <div className="text-4xl font-heading font-bold text-white mb-1">100<span className="text-[#D61F2C]">%</span></div>
              <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">Confidentiality</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-black py-12 md:py-16 border-y border-border/20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 text-center xl:text-left">
            <h2 className="text-xl md:text-3xl font-heading font-bold text-white/50 tracking-wider uppercase w-full xl:w-1/3 leading-snug">
              Trusted Protection.<br/><span className="text-white">Global Standards.</span>
            </h2>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center xl:justify-end gap-6 sm:gap-10 md:gap-16 w-full xl:w-2/3">
              <CountUp end={500} label="VIP Assignments" />
              <CountUp end={100} label="Corporate Clients" />
              <CountUp end={1000} label="Secure Transfers" />
              <CountUp end={50} label="Major Events Secured" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / WHY CHOOSE US */}
      <section id="about" className="py-24 md:py-32 bg-[#07152B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0D4CFF]/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[#07152B]/20 z-10 mix-blend-overlay"></div>
                <img src="/images/events/IMG-20260525-WA0067.jpg" alt="Security Operation" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#07152B] p-6 border border-border/30 rounded-xl shadow-2xl hidden md:flex md:flex-col md:items-center md:min-w-[180px]">
                <img src="/images/logo.png" alt="Gallant" className="h-28 w-auto object-contain opacity-90" />
                <div className="mt-3 text-white font-heading tracking-widest uppercase text-xs text-center">Institution of Trust</div>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#0D4CFF] font-heading uppercase tracking-[0.3em] text-sm font-bold mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-[#0D4CFF]"></span> Why Choose Us
                </h2>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold uppercase mb-6 md:mb-8 text-white leading-tight">
                  Uncompromising Standards.<br/>Absolute Certainty.
                </h3>
                <p className="text-white/60 mb-8 md:mb-12 text-base md:text-lg font-light leading-relaxed">
                  We don't just provide security; we architect peace of mind. Our operatives are drawn from elite military and intelligence backgrounds, bringing unparalleled expertise to every detail.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { title: "Discretion & Confidentiality", desc: "Non-disclosure protocols with total privacy." },
                  { title: "Highly Trained Personnel", desc: "Elite backgrounds in tactical operations." },
                  { title: "Rapid Deployment", desc: "Global response readiness within 24 hours." },
                  { title: "Global Standards", desc: "Internationally recognized security protocols." },
                  { title: "24/7 Operations", desc: "Continuous monitoring and command center." },
                  { title: "Risk Assessment", desc: "Proactive threat intelligence and mitigation." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-[#0D4CFF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-1">{feature.title}</h4>
                      <p className="text-white/50 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#0D4CFF] font-heading uppercase tracking-[0.3em] text-sm font-bold mb-4 justify-center flex items-center gap-4">
                <span className="w-8 h-px bg-[#0D4CFF]"></span> Our Services <span className="w-8 h-px bg-[#0D4CFF]"></span>
              </h2>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold uppercase mb-6 text-white">Elite Security Solutions<br/>Tailored For Every Mission</h3>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {[
              { icon: Shield, title: "Security Consultation", desc: "Comprehensive risk assessments, vulnerability analysis, and strategic security planning for corporate and private entities." },
              { icon: Users, title: "VIP Protection", desc: "Discreet, highly-trained executive protection details ensuring physical safety without compromising lifestyle." },
              { icon: MapPin, title: "Escort & Protocol", desc: "Seamless navigation, advance route clearing, and diplomatic protocol management for dignitaries." },
              { icon: Plane, title: "Airport Pick Ups", desc: "Secure tarmac-to-destination transport, armored vehicle fleets, and logistics management." },
              { icon: Calendar, title: "Event Security", desc: "Impenetrable perimeter, access control, and internal security architecture for major corporate and private events." },
              { icon: Search, title: "Crowd Control", desc: "Tactical crowd management, de-escalation protocols, and rapid response solutions for public spaces." }
            ].map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-[#07152B]/50 rounded-xl p-6 md:p-10 border border-white/5 overflow-hidden hover:bg-[#07152B] hover:border-[#0D4CFF]/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(13,76,255,0.1)] hover:-translate-y-2 backdrop-blur-sm"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D61F2C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                <srv.icon className="w-12 h-12 text-[#0D4CFF] mb-8 group-hover:scale-110 group-hover:text-white transition-all duration-500" strokeWidth={1.5} />
                <h4 className="text-2xl font-heading font-bold uppercase mb-4 text-white tracking-wide">{srv.title}</h4>
                <p className="text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors">{srv.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-[#0D4CFF] text-sm font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn More <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-[#07152B] relative border-y border-border/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#0D4CFF] font-heading uppercase tracking-[0.3em] text-sm font-bold mb-4 justify-center flex items-center gap-4">
              <span className="w-8 h-px bg-[#0D4CFF]"></span> Operational Protocol
            </h2>
            <h3 className="text-2xl sm:text-4xl font-heading font-bold uppercase text-white">Our 4-Step Process</h3>
          </div>

          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-px bg-border/30">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-[#0D4CFF] origin-left"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
              {[
                { num: "01", title: "Consultation", desc: "Deep-dive analysis of threat vectors and operational requirements." },
                { num: "02", title: "Planning", desc: "Strategic architecture of routes, perimeters, and contingencies." },
                { num: "03", title: "Deployment", desc: "Tactical positioning of assets and advanced clearance." },
                { num: "04", title: "Protection", desc: "Active escort, dynamic monitoring, and absolute security." }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-full bg-[#07152B] border-2 border-border/30 flex items-center justify-center mb-8 relative group-hover:border-[#0D4CFF] transition-colors duration-500 shadow-xl">
                    <div className="text-3xl font-heading font-bold text-white">{step.num}</div>
                    <div className="absolute -inset-2 rounded-full border border-[#0D4CFF] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
                  </div>
                  <h4 className="text-xl font-heading font-bold uppercase text-white mb-3">{step.title}</h4>
                  <p className="text-white/50 text-sm max-w-xs">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAST EVENTS / GALLERY */}
      <section id="events" className="py-16 md:py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 md:gap-6">
          <div>
            <h2 className="text-[#0D4CFF] font-heading uppercase tracking-[0.3em] text-sm font-bold mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-[#0D4CFF]"></span> Field Operations
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold uppercase text-white">Past Events</h3>
          </div>
          <div className="flex gap-4">
            <button className="events-prev w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#0D4CFF] hover:border-[#0D4CFF] transition-all">
              <ArrowRight className="rotate-180" size={20} />
            </button>
            <button className="events-next w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#0D4CFF] hover:border-[#0D4CFF] transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 pb-12 overflow-hidden">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 3.2, spaceBetween: 30 },
              1280: { slidesPerView: 4.2, spaceBetween: 30 },
            }}
            navigation={{ nextEl: '.events-next', prevEl: '.events-prev' }}
            autoplay={{ delay: 4000, disableOnInteraction: true, pauseOnMouseEnter: true }}
            className="events-swiper"
          >
            {eventSlides.map((slide, i) => (
              <SwiperSlide key={i} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152B] via-transparent to-transparent z-10" />
                  <img
                    src={slide.src}
                    alt={slide.label}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl font-heading font-bold uppercase text-white mb-4">{slide.label}</h4>
                    <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#07152B] relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#D61F2C]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Quote className="w-16 h-16 text-[#0D4CFF] opacity-50 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase text-white">Client Confidence</h2>
            </div>
            
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              className="pb-16 testimonials-swiper"
            >
              {[
                { q: "Gallant Protocol's operation was flawless. Their team moved with absolute precision, ensuring our executive delegation felt secure without being intruded upon. Elite professionalism.", name: "James K.", role: "CEO, Global Tech Holdings" },
                { q: "The level of discretion and planning was evident from day one. They anticipated contingencies we hadn't considered. True experts in diplomatic protocol.", name: "Sarah M.", role: "Director of Operations" },
                { q: "Their rapid deployment capability saved our summit. Within 24 hours, they had a full perimeter and escort detail active. Unequivocally the best security firm we've engaged.", name: "David O.", role: "Head of Private Wealth" }
              ].map((test, i) => (
                <SwiperSlide key={i}>
                  <div className="text-center px-4 md:px-12">
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-8 italic">
                      "{test.q}"
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-[#0D4CFF] text-[#0D4CFF]" />)}
                    </div>
                    <div className="font-heading font-bold uppercase text-white text-lg">{test.name}</div>
                    <div className="text-sm text-[#0D4CFF] uppercase tracking-widest">{test.role}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="contact" className="py-24 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D4CFF]/20 to-black z-0" />
        <div className="absolute inset-0 bg-[url('/images/events/IMG-20260525-WA0085.jpg')] opacity-20 bg-cover bg-center mix-blend-luminosity z-0" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto p-6 sm:p-10 md:p-16 border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold uppercase text-white mb-4 md:mb-6 leading-tight">
              Ready To Secure<br/>Your Next Mission?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/70 mb-7 md:mb-10 max-w-xl mx-auto font-light">
              Contact our command center today for a confidential consultation and risk assessment tailored to your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:bbface26@gmail.com" className="w-full sm:w-auto inline-block">
                <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 font-heading uppercase tracking-[0.15em] sm:tracking-[0.2em] text-sm sm:text-base md:text-lg bg-[#0D4CFF] hover:bg-white hover:text-black text-white border-none shadow-[0_0_30px_rgba(13,76,255,0.5)] transition-all relative group overflow-hidden">
                  <Mail size={18} className="relative z-10 mr-2 shrink-0" />
                  <span className="relative z-10">Email Us</span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                </Button>
              </a>
              <a href="https://wa.me/2348024493299?text=Hello%2C%20I%20would%20like%20to%20request%20a%20consultation." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-block">
                <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 md:h-16 px-6 sm:px-8 md:px-10 font-heading uppercase tracking-[0.15em] sm:tracking-[0.2em] text-sm sm:text-base md:text-lg bg-[#25D366] hover:bg-white hover:text-black text-white border-none shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all relative group overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 mr-2 shrink-0 w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.855L.057 23.5l5.799-1.519A11.934 11.934 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.497-5.2-1.365l-.373-.22-3.44.902.917-3.349-.242-.384A9.937 9.937 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/>
                  </svg>
                  <span className="relative z-10">WhatsApp</span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0"></div>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#040B18] pt-12 md:pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none w-[800px] h-[400px]" 
             style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="lg:col-span-1">
              <img src="/images/logo.png" alt="Gallant Protocol" className="h-16 w-auto mb-6" />
              <p className="text-white/50 text-sm leading-relaxed mb-6 font-light max-w-xs">
                Elite security, VIP protection, and protocol services. Confidentiality guaranteed. Operational excellence delivered.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0D4CFF] hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0D4CFF] hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0D4CFF] hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <button onClick={() => scrollTo(link.id)} className="text-white/50 hover:text-[#0D4CFF] text-sm uppercase tracking-wider transition-colors">
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Services</h4>
              <ul className="space-y-3">
                {["VIP Protection", "Event Security", "Escort & Protocol", "Asset Transfer", "Risk Assessment"].map(item => (
                  <li key={item}>
                    <span className="text-white/50 text-sm uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-heading font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin size={18} className="text-[#0D4CFF] shrink-0 mt-0.5" />
                  <span>Gallant Tower, Wuse I<br/>Abuja, Nigeria</span>
                </li>
                <li className="flex items-center gap-3 text-white/50 text-sm">
                  <Phone size={18} className="text-[#0D4CFF] shrink-0" />
                  <a href="tel:+2348024493299" className="hover:text-white transition-colors">+234 802 449 3299</a>
                </li>
                <li className="flex items-center gap-3 text-white/50 text-sm">
                  <Mail size={18} className="text-[#0D4CFF] shrink-0" />
                  <a href="mailto:bbface26@gmail.com" className="break-all hover:text-white transition-colors">bbface26@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs uppercase tracking-widest text-white/40">
            <div>© 2025 Gallant Protocol. All Rights Reserved.</div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
