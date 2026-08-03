"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Clock3,
  Guitar,
  Headphones,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Phone,
  Piano,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Youtube,
} from "lucide-react";
import "./page.css";

const whatsapp = "https://wa.me/919319583602?text=Hi%20KK%20Music%20House%2C%20I%20want%20to%20enquire%20about%20a%20musical%20instrument.";
const maps = "https://www.google.com/maps/search/?api=1&query=KK+Music+House+Sector+86+Faridabad";

const instruments = [
  { title: "Guitars", subtitle: "Acoustic, electric & beginner-friendly options", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=85", icon: Guitar },
  { title: "Keyboards", subtitle: "Portable keyboards, digital pianos & accessories", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=85", icon: Piano },
  { title: "Indian Instruments", subtitle: "Tabla, harmonium and traditional instruments", image: "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?auto=format&fit=crop&w=1200&q=85", icon: Music2 },
  { title: "Drums & Percussion", subtitle: "Rhythm instruments for learners and performers", image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1200&q=85", icon: Headphones },
];

const features = [
  { icon: Sparkles, title: "Wide Selection", text: "Instruments and essentials for beginners, students and performers." },
  { icon: Wrench, title: "Repair Support", text: "Practical repair and maintenance support for musical instruments." },
  { icon: ShieldCheck, title: "Trusted Shop", text: "A well-rated neighbourhood music shop serving Greater Faridabad." },
];

export default function OriginalVersion() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <main className="v3">
      <header className="v3-header">
        <a href="#v3-home" className="v3-brand" onClick={() => setMenuOpen(false)}>
          <span><Music2 /></span><b>KK MUSIC HOUSE</b>
        </a>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#v3-home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#v3-instruments" onClick={() => setMenuOpen(false)}>Instruments</a>
          <a href="#v3-services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#v3-about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#v3-contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="v3-nav-cta" href={whatsapp} target="_blank">Enquire Now</a>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="v3-hero" id="v3-home">
        <div className="v3-overlay" />
        <div className="v3-container v3-hero-content">
          <div className="v3-eyebrow"><span /> PLACE FOR MUSIC LOVERS</div>
          <h1>Find the instrument<br /><em>that finds your sound.</em></h1>
          <p>Explore musical instruments, accessories and reliable repair support at KK Music House in Sector 86, Greater Faridabad.</p>
          <div className="v3-actions">
            <a href="#v3-instruments" className="v3-btn primary">Explore Instruments <ArrowRight /></a>
            <a href={whatsapp} target="_blank" className="v3-btn glass"><MessageCircle /> WhatsApp Us</a>
          </div>
          <div className="v3-meta">
            <div><Star fill="currentColor" /><span><strong>4.7</strong> rating</span></div>
            <div><MapPin /><span>Sector 86, Faridabad</span></div>
            <div><Wrench /><span>Sales & repair</span></div>
          </div>
        </div>
      </section>

      <section className="v3-strip"><div className="v3-container"><p>Guitars</p><span>✦</span><p>Keyboards</p><span>✦</span><p>Tabla</p><span>✦</span><p>Harmonium</p><span>✦</span><p>Accessories</p><span>✦</span><p>Repairs</p></div></section>

      <section className="v3-section v3-instruments" id="v3-instruments">
        <div className="v3-container">
          <div className="v3-heading"><div><span>OUR COLLECTION</span><h2>Everything you need<br />to start playing.</h2></div><p>From your first instrument to your next upgrade, visit the store to explore available models and get help choosing what suits you.</p></div>
          <div className="v3-grid">
            {instruments.map((item, index) => {
              const Icon = item.icon;
              return <article key={item.title} style={{ backgroundImage: `url(${item.image})` }}><div className="v3-card-shade"/><span className="v3-card-icon"><Icon /></span><div className="v3-card-copy"><small>0{index + 1}</small><h3>{item.title}</h3><p>{item.subtitle}</p><a href={whatsapp} target="_blank">Ask availability <ArrowRight /></a></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="v3-section v3-services" id="v3-services">
        <div className="v3-container v3-services-grid">
          <div className="v3-service-image"><img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85" alt="Guitar maintenance"/><div><strong>Sales</strong><span>&</span><strong>Repair</strong></div></div>
          <div className="v3-service-copy"><span className="v3-kicker">MORE THAN A STORE</span><h2>Keep your music<br/><em>playing beautifully.</em></h2><p>An instrument should feel right, sound right and stay reliable. Get straightforward assistance for buying, maintaining and repairing your instrument.</p>{features.map(({icon:Icon,title,text})=><div className="v3-feature" key={title}><span><Icon/></span><div><h3>{title}</h3><p>{text}</p></div></div>)}<a className="v3-call" href="tel:+919319583602"><Phone/> Call for repair enquiry <ArrowRight/></a></div>
        </div>
      </section>

      <section className="v3-section v3-about" id="v3-about"><div className="v3-container"><span>KK MUSIC HOUSE</span><h2>Your neighbourhood destination<br/>for every musical journey.</h2><p>Located near Sai Dham Mandir in Sector 86, KK Music House serves music learners, hobbyists and performers with instrument sales and repair services.</p><div className="v3-stats"><div><strong>4.7★</strong><small>Public rating</small></div><div><strong>2</strong><small>Direct numbers</small></div><div><strong>7</strong><small>Days open weekly</small></div></div></div></section>

      <section className="v3-section v3-contact" id="v3-contact"><div className="v3-container v3-contact-grid"><div><span className="v3-kicker">VISIT THE STORE</span><h2>Come in. Tune up.<br/><em>Play something new.</em></h2><div className="v3-contact-lines"><a href={maps} target="_blank"><MapPin/><span><small>ADDRESS</small>Near Sai Dham Mandir, behind Deepak Juice,<br/>Sector 86, Greater Faridabad, Haryana 121002</span></a><a href="tel:+919319583602"><Phone/><span><small>CALL US</small>+91 93195 83602<br/>+91 93110 08112</span></a><div><Clock3/><span><small>STORE HOURS</small>Open daily · Call to confirm today&apos;s timing</span></div></div><div className="v3-actions"><a href={maps} target="_blank" className="v3-btn primary">Get Directions <ArrowRight/></a><a href={whatsapp} target="_blank" className="v3-btn outline">WhatsApp</a></div></div><div className="v3-map"><iframe title="KK Music House location" src="https://www.google.com/maps?q=KK%20Music%20House%20Sector%2086%20Faridabad&output=embed" loading="lazy"/></div></div></section>

      <section className="v3-instagram"><div className="v3-container"><div><Instagram/><span><small>FOLLOW ON INSTAGRAM</small><strong>@kkmusichouse</strong></span></div><a href="https://www.instagram.com/kkmusichouse/" target="_blank">See latest updates <ArrowRight/></a></div></section>

      <footer className="v3-footer"><div className="v3-container"><div><a href="#v3-home" className="v3-brand"><span><Music2/></span><b>KK MUSIC HOUSE</b></a><p>Musical instruments sales and repair in Greater Faridabad.</p></div><div><h4>Explore</h4><a href="#v3-instruments">Instruments</a><a href="#v3-services">Services</a><a href="#v3-about">About us</a></div><div><h4>Contact</h4><a href="tel:+919319583602">+91 93195 83602</a><a href={whatsapp} target="_blank">WhatsApp enquiry</a><a href={maps} target="_blank">Get directions</a></div><div><h4>Follow</h4><div className="v3-social"><a href="https://www.instagram.com/kkmusichouse/" target="_blank"><Instagram/></a><a href="https://www.youtube.com/results?search_query=KK+MUSIC+HOUSE+SEC86+FBD" target="_blank"><Youtube/></a></div></div></div></footer>
      <a href={whatsapp} target="_blank" className="v3-whatsapp" aria-label="WhatsApp"><MessageCircle/></a>
    </main>
  );
}
