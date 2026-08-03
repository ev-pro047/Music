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
  Play,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  Volume2,
  Wrench,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const whatsapp = "https://wa.me/919319583602?text=Hi%20KK%20Music%20House%2C%20I%20want%20to%20enquire%20about%20a%20musical%20instrument.";
const maps = "https://www.google.com/maps/search/?api=1&query=KK+Music+House+Sector+86+Faridabad";
const instagram = "https://www.instagram.com/kkmusichouse/";
const youtube = "https://www.youtube.com/results?search_query=KK+MUSIC+HOUSE+SEC86+FBD";

const categories = [
  { title: "Guitars", count: "Acoustic & electric", icon: Guitar, image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=88", accent: "orange" },
  { title: "Keyboards", count: "Keys & digital pianos", icon: Piano, image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=900&q=88", accent: "blue" },
  { title: "Percussion", count: "Drums, tabla & rhythm", icon: Drum, image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=900&q=88", accent: "pink" },
  { title: "Audio Gear", count: "Mics, speakers & more", icon: Mic2, image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=88", accent: "green" },
  { title: "Accessories", count: "Strings, stands & cables", icon: SlidersHorizontal, image: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=900&q=88", accent: "purple" },
  { title: "Indian Instruments", count: "Harmonium, tabla & more", icon: Music2, image: "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?auto=format&fit=crop&w=900&q=88", accent: "yellow" },
];

const benefits = [
  { icon: BadgeCheck, title: "Helpful guidance", text: "Get simple, honest help choosing an instrument that matches your level and budget." },
  { icon: Wrench, title: "Repair support", text: "Bring your instrument for practical maintenance, setup and repair assistance." },
  { icon: ShieldCheck, title: "Shop with confidence", text: "Visit the store, inspect the instrument and speak directly with the team before buying." },
  { icon: Zap, title: "Quick enquiries", text: "Check current stock, availability and repair details instantly over WhatsApp or call." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark"><Music2 /></span>
          <span className="brand-copy"><strong>KK</strong><small>MUSIC HOUSE</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#instruments" onClick={closeMenu}>Instruments</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Visit Store</a>
          <a href={whatsapp} target="_blank" className="nav-cta">WhatsApp <ArrowRight size={16} /></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="status-pill"><span className="pulse-dot" /> Musical instruments · Sales & repair</div>
            <h1>Turn up<br />your <span>sound.</span></h1>
            <p>Explore instruments, accessories and reliable repair support at KK Music House in Sector 86, Faridabad.</p>
            <div className="hero-actions">
              <a href="#instruments" className="button button-dark">Explore collection <ArrowRight /></a>
              <a href={whatsapp} target="_blank" className="button button-light whatsapp-button"><MessageCircle /> Ask on WhatsApp</a>
            </div>
            <div className="hero-trust">
              <div className="avatars"><span>G</span><span>K</span><span>♪</span></div>
              <div><div className="stars"><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/></div><p><strong>4.7 rating</strong> from customers</p></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit orbit-one"><Music2 /></div>
            <div className="hero-orbit orbit-two"><Headphones /></div>
            <div className="hero-image-card">
              <img src="https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=1100&q=92" alt="Electric guitar" />
              <div className="image-badge"><span><Volume2 /></span><div><small>FIND YOUR</small><strong>PERFECT TONE</strong></div></div>
            </div>
            <div className="mini-card mini-card-top"><span className="mini-icon"><Sparkles /></span><div><strong>Fresh choices</strong><small>For every player</small></div></div>
            <div className="mini-card mini-card-bottom"><span className="mini-icon"><Wrench /></span><div><strong>Repair desk</strong><small>Support available</small></div></div>
          </div>
        </div>
        <div className="sound-wave" aria-hidden="true">{Array.from({ length: 34 }).map((_, i) => <span key={i} style={{ animationDelay: `${i * 0.05}s` }} />)}</div>
      </section>

      <section className="quick-strip">
        <div className="marquee-track">
          {["GUITARS", "KEYBOARDS", "TABLA", "HARMONIUM", "DRUMS", "MICROPHONES", "ACCESSORIES", "REPAIRS", "GUITARS", "KEYBOARDS", "TABLA", "HARMONIUM"].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}
        </div>
      </section>

      <section className="section collection" id="instruments">
        <div className="container">
          <div className="section-title-row">
            <div><span className="section-label">SHOP BY SOUND</span><h2>Pick your instrument.</h2></div>
            <p>Different sounds, different journeys. Start with the category that feels right and ask us what is currently available in store.</p>
          </div>
          <div className="category-grid">
            {categories.map(({ title, count, icon: Icon, image, accent }, index) => (
              <a href={whatsapp} target="_blank" className={`category-card ${accent}`} key={title} style={{ "--delay": `${index * .07}s` } as React.CSSProperties}>
                <div className="category-image"><img src={image} alt={title} /></div>
                <div className="category-content">
                  <span className="category-icon"><Icon /></span>
                  <div><h3>{title}</h3><p>{count}</p></div>
                  <span className="round-arrow"><ArrowRight /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience" id="services">
        <div className="container experience-grid">
          <div className="experience-copy">
            <span className="section-label light">THE IN-STORE EXPERIENCE</span>
            <h2>More than shelves<br />full of instruments.</h2>
            <p>Choosing an instrument is personal. Visit the shop, compare options, ask questions and get straightforward support without the confusion of endless online listings.</p>
            <a href="tel:+919319583602" className="inline-link"><Phone /> Talk to the shop <ArrowRight /></a>
          </div>
          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, text }, i) => (
              <article className="benefit-card" key={title} style={{ "--delay": `${i * .1}s` } as React.CSSProperties}>
                <span><Icon /></span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section feature-showcase" id="about">
        <div className="container showcase-grid">
          <div className="showcase-visual">
            <div className="showcase-main"><img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=90" alt="Music studio instruments" /></div>
            <div className="showcase-small"><img src="https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&w=700&q=88" alt="Musician playing guitar" /></div>
            <div className="play-chip"><span><Play fill="currentColor" /></span><div><small>PLACE FOR</small><strong>MUSIC LOVERS</strong></div></div>
          </div>
          <div className="showcase-copy">
            <span className="section-label">WHY KK MUSIC HOUSE</span>
            <h2>A local shop with a real human touch.</h2>
            <p>Located near Sai Dham Mandir in Sector 86, KK Music House serves learners, hobbyists and performers with musical instrument sales and repair support.</p>
            <div className="stat-cards">
              <div><strong>4.7<span>★</span></strong><small>Customer rating</small></div>
              <div><strong>7</strong><small>Days open weekly</small></div>
              <div><strong>2</strong><small>Direct phone lines</small></div>
            </div>
            <a href={instagram} target="_blank" className="instagram-link"><Instagram /> See the shop on Instagram <ArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div className="cta-note note-a">♪</div><div className="cta-note note-b">♫</div>
          <span className="section-label light">READY TO START?</span>
          <h2>Tell us what you want to play.</h2>
          <p>Message the shop to check availability, ask about repairs or plan your visit.</p>
          <div className="cta-actions"><a href={whatsapp} target="_blank" className="button button-white whatsapp-button"><MessageCircle /> WhatsApp now</a><a href="tel:+919319583602" className="button button-outline"><Phone /> Call the shop</a></div>
        </div>
      </section>

      <section className="section visit" id="contact">
        <div className="container">
          <div className="visit-header"><div><span className="section-label">FIND THE STORE</span><h2>Drop in and play.</h2></div><a href={maps} target="_blank" className="button button-dark">Get directions <ArrowRight /></a></div>
          <div className="visit-layout">
            <div className="contact-card">
              <div className="contact-item"><span><MapPin /></span><div><small>ADDRESS</small><p>Near Sai Dham Mandir, behind Deepak Juice, Sector 86, Greater Faridabad, Haryana 121002</p></div></div>
              <div className="contact-item"><span><Phone /></span><div><small>PHONE</small><a href="tel:+919319583602">+91 93195 83602</a><a href="tel:+919311008112">+91 93110 08112</a></div></div>
              <div className="contact-item"><span><Clock3 /></span><div><small>OPENING</small><p>Open daily · Call to confirm today&apos;s timing</p></div></div>
              <div className="social-row"><a href={instagram} target="_blank"><Instagram /></a><a href={youtube} target="_blank"><Youtube /></a></div>
            </div>
            <div className="map-embed"><iframe title="KK Music House location" src="https://www.google.com/maps?q=KK%20Music%20House%20Sector%2086%20Faridabad&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-main">
          <a href="#home" className="brand"><span className="brand-mark"><Music2 /></span><span className="brand-copy"><strong>KK</strong><small>MUSIC HOUSE</small></span></a>
          <p>Instruments, accessories and repair support for music lovers in Faridabad.</p>
          <div className="footer-links"><a href="#instruments">Instruments</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} KK Music House</span><span>Sector 86 · Faridabad</span></div>
      </footer>

      <a href={whatsapp} target="_blank" className="floating-whatsapp" aria-label="WhatsApp KK Music House"><MessageCircle /></a>
    </main>
  );
}
