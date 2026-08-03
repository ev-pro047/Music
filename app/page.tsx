"use client";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Drum,
  Guitar,
  Headphones,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Mic2,
  Music2,
  Phone,
  Piano,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Wrench,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";

const whatsapp = "https://wa.me/919319583602?text=Hi%20KK%20Music%20House%2C%20I%20want%20to%20enquire%20about%20a%20musical%20instrument.";
const maps = "https://www.google.com/maps/search/?api=1&query=KK+Music+House+Sector+86+Faridabad";
const instagram = "https://www.instagram.com/kkmusichouse/";
const youtube = "https://www.youtube.com/results?search_query=KK+MUSIC+HOUSE+SEC86+FBD";

const categories = [
  { title: "Guitars", caption: "Acoustic · Electric · Bass", icon: Guitar, image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1000&q=90", tone: "coral" },
  { title: "Keys", caption: "Keyboards · Digital pianos", icon: Piano, image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1000&q=90", tone: "violet" },
  { title: "Rhythm", caption: "Drums · Tabla · Percussion", icon: Drum, image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1000&q=90", tone: "lime" },
  { title: "Audio", caption: "Microphones · Speakers", icon: Mic2, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1000&q=90", tone: "blue" },
  { title: "Accessories", caption: "Strings · Stands · Cables", icon: SlidersHorizontal, image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=1000&q=90", tone: "yellow" },
  { title: "Indian", caption: "Harmonium · Tabla · More", icon: Music2, image: "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?auto=format&fit=crop&w=1000&q=90", tone: "pink" },
];

const services = [
  { icon: BadgeCheck, title: "Choose with confidence", text: "Compare instruments in person and get straightforward help for your level and budget." },
  { icon: Wrench, title: "Repair & setup", text: "Practical support for instrument maintenance, setup and repair enquiries." },
  { icon: ShieldCheck, title: "Real store. Real people.", text: "Inspect before buying, speak directly with the shop and avoid guesswork." },
  { icon: Zap, title: "Fast availability check", text: "Ask about current stock and repair details instantly through WhatsApp." },
];

const particles = [
  [8, 19, "#ff6633", 18], [14, 61, "#713cff", 10], [21, 34, "#ffd84d", 13], [27, 78, "#ff4f9a", 16],
  [35, 15, "#34d399", 9], [42, 88, "#ff6633", 12], [53, 23, "#713cff", 15], [61, 72, "#34d399", 10],
  [70, 12, "#ffd84d", 11], [77, 58, "#ff4f9a", 17], [85, 28, "#ff6633", 8], [91, 76, "#713cff", 13],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const moveHero = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--mx", `${x * 24}px`);
    event.currentTarget.style.setProperty("--my", `${y * 20}px`);
  };

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><Music2 /></span>
          <span className="brand-copy"><strong>KK</strong><small>MUSIC HOUSE</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#instruments" onClick={() => setMenuOpen(false)}>Instruments</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Visit</a>
          <a href={whatsapp} target="_blank" className="nav-cta">Start an enquiry <ArrowRight size={16} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home" ref={heroRef} onMouseMove={moveHero}>
        <div className="hero-grid-lines" />
        <div className="particle-field" aria-hidden="true">
          {particles.map(([left, top, color, size], i) => (
            <span key={i} style={{ left: `${left}%`, top: `${top}%`, background: color, width: size, height: size, animationDelay: `${i * -0.35}s` }} />
          ))}
        </div>
        <div className="hero-shell container">
          <div className="hero-badge"><span><Sparkles /></span> Faridabad&apos;s neighbourhood music store</div>
          <h1>Find your <span>sound.</span><br />Make it yours.</h1>
          <p className="hero-lead">Instruments, accessories and reliable repair support—served with real guidance from KK Music House, Sector 86.</p>
          <div className="hero-actions">
            <a href="#instruments" className="button button-dark">Explore instruments <ArrowRight /></a>
            <a href={whatsapp} target="_blank" className="button button-soft whatsapp-button"><MessageCircle /> Ask on WhatsApp</a>
          </div>

          <div className="hero-stage" aria-label="Featured instruments">
            <div className="sound-disc">
              <div className="disc-ring ring-one" /><div className="disc-ring ring-two" /><div className="disc-center"><Music2 /></div>
            </div>
            <article className="float-card card-guitar"><span className="float-icon"><Guitar /></span><div><small>PLAY IT LOUD</small><strong>Guitars</strong></div><ArrowRight /></article>
            <article className="float-card card-keys"><span className="float-icon"><Piano /></span><div><small>FIND YOUR CHORD</small><strong>Keyboards</strong></div><ArrowRight /></article>
            <article className="float-card card-repair"><span className="float-icon"><Wrench /></span><div><small>KEEP IT PLAYING</small><strong>Repair desk</strong></div><ArrowRight /></article>
            <div className="rating-chip"><Star fill="currentColor" /><strong>4.7</strong><span>customer rating</span></div>
            <div className="equalizer" aria-hidden="true">{Array.from({ length: 21 }).map((_, i) => <span key={i} style={{ animationDelay: `${i * .08}s` }} />)}</div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Available instrument types">
        <div className="logo-track">
          {["GUITARS", "KEYBOARDS", "TABLA", "HARMONIUM", "DRUMS", "MICROPHONES", "ACCESSORIES", "REPAIRS", "GUITARS", "KEYBOARDS", "TABLA", "HARMONIUM"].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}
        </div>
      </section>

      <section className="section collection" id="instruments">
        <div className="container">
          <div className="section-head">
            <div><span className="eyebrow">EXPLORE THE STORE</span><h2>Every kind of sound,<br />under one roof.</h2></div>
            <p>Tap a category to ask what is available today. The shop can help you compare options before you decide.</p>
          </div>
          <div className="category-grid">
            {categories.map(({ title, caption, icon: Icon, image, tone }, index) => (
              <a href={whatsapp} target="_blank" className={`category-card ${tone}`} key={title} style={{ "--delay": `${index * .08}s` } as CSSProperties}>
                <div className="category-top"><span className="category-icon"><Icon /></span><span className="category-number">0{index + 1}</span></div>
                <div className="category-image"><img src={image} alt={title} /></div>
                <div className="category-bottom"><div><h3>{title}</h3><p>{caption}</p></div><span className="round-arrow"><ArrowRight /></span></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container service-wrap">
          <div className="service-intro">
            <span className="eyebrow light">WHY BUY HERE</span>
            <h2>A music shop should feel personal.</h2>
            <p>Not another anonymous marketplace. Visit, ask, compare and leave with an instrument that actually feels right.</p>
            <a href="tel:+919319583602" className="text-link"><Phone /> Speak with the shop <ArrowRight /></a>
          </div>
          <div className="service-cards">
            {services.map(({ icon: Icon, title, text }, i) => <article key={title} className="service-card" style={{ "--delay": `${i * .1}s` } as CSSProperties}><span><Icon /></span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section story" id="about">
        <div className="container story-grid">
          <div className="story-collage">
            <div className="story-image main"><img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=90" alt="Musical instruments" /></div>
            <div className="story-image small"><img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=700&q=88" alt="Guitar player" /></div>
            <div className="story-sticker"><Headphones /><span>PLACE FOR<br /><strong>MUSIC LOVERS</strong></span></div>
          </div>
          <div className="story-copy">
            <span className="eyebrow">KK MUSIC HOUSE</span>
            <h2>Built for first notes and next levels.</h2>
            <p>Located near Sai Dham Mandir in Sector 86, KK Music House supports learners, hobbyists and performers with instrument sales, accessories and repair assistance.</p>
            <div className="stat-row"><div><strong>4.7★</strong><span>Customer rating</span></div><div><strong>7</strong><span>Days a week</span></div><div><strong>2</strong><span>Direct phone lines</span></div></div>
            <a href={instagram} target="_blank" className="instagram-link"><Instagram /> Follow @kkmusichouse <ArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div className="cta-glow glow-a" /><div className="cta-glow glow-b" />
          <span className="eyebrow light">YOUR NEXT INSTRUMENT</span>
          <h2>Already hearing it<br />in your head?</h2>
          <p>Tell the shop what you want to play and get a quick availability update.</p>
          <div className="cta-actions"><a href={whatsapp} target="_blank" className="button button-white whatsapp-button"><MessageCircle /> WhatsApp now</a><a href="tel:+919319583602" className="button button-outline"><Phone /> Call the shop</a></div>
        </div>
      </section>

      <section className="section visit" id="contact">
        <div className="container">
          <div className="section-head visit-head"><div><span className="eyebrow">COME SAY HELLO</span><h2>Visit the store.</h2></div><a href={maps} target="_blank" className="button button-dark">Get directions <ArrowRight /></a></div>
          <div className="visit-grid">
            <div className="contact-card">
              <div className="contact-item"><span><MapPin /></span><div><small>ADDRESS</small><p>Near Sai Dham Mandir, behind Deepak Juice, Sector 86, Greater Faridabad, Haryana 121002</p></div></div>
              <div className="contact-item"><span><Phone /></span><div><small>CALL</small><a href="tel:+919319583602">+91 93195 83602</a><a href="tel:+919311008112">+91 93110 08112</a></div></div>
              <div className="contact-item"><span><Clock3 /></span><div><small>OPENING</small><p>Open daily · Call to confirm today&apos;s timing</p></div></div>
              <div className="socials"><a href={instagram} target="_blank"><Instagram /></a><a href={youtube} target="_blank"><Youtube /></a></div>
            </div>
            <div className="map-embed"><iframe title="KK Music House location" src="https://www.google.com/maps?q=KK%20Music%20House%20Sector%2086%20Faridabad&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main"><a href="#home" className="brand"><span className="brand-mark"><Music2 /></span><span className="brand-copy"><strong>KK</strong><small>MUSIC HOUSE</small></span></a><p>Instruments, accessories and repair support for music lovers in Faridabad.</p><div className="footer-links"><a href="#instruments">Instruments</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} KK Music House</span><span>Sector 86 · Faridabad</span></div>
      </footer>

      <a href={whatsapp} target="_blank" className="floating-whatsapp" aria-label="WhatsApp KK Music House"><MessageCircle /></a>
    </main>
  );
}
