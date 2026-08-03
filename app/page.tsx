"use client";

import {
  ArrowRight,
  Clock3,
  Facebook,
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
import { useState } from "react";

const instruments = [
  {
    title: "Guitars",
    subtitle: "Acoustic, electric & beginner-friendly options",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=85",
    icon: Guitar,
  },
  {
    title: "Keyboards",
    subtitle: "Portable keyboards, digital pianos & accessories",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=85",
    icon: Piano,
  },
  {
    title: "Indian Instruments",
    subtitle: "Tabla, harmonium and traditional instruments",
    image: "https://images.unsplash.com/photo-1601924357840-3e50ad4dd9fd?auto=format&fit=crop&w=1200&q=85",
    icon: Music2,
  },
  {
    title: "Drums & Percussion",
    subtitle: "Rhythm instruments for learners and performers",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1200&q=85",
    icon: Headphones,
  },
];

const features = [
  { icon: Sparkles, title: "Wide Selection", text: "Instruments and essentials for beginners, students and performers." },
  { icon: Wrench, title: "Repair Support", text: "Practical repair and maintenance support for musical instruments." },
  { icon: ShieldCheck, title: "Trusted Locally", text: "A well-rated neighbourhood music shop serving Greater Faridabad." },
];

const whatsapp = "https://wa.me/919319583602?text=Hi%20KK%20Music%20House%2C%20I%20want%20to%20enquire%20about%20a%20musical%20instrument.";
const maps = "https://www.google.com/maps/search/?api=1&query=KK+Music+House+Sector+86+Faridabad";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="KK Music House home">
          <span className="brand-mark"><Music2 size={24} /></span>
          <span><strong>KK</strong> MUSIC HOUSE</span>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#instruments" onClick={() => setMenuOpen(false)}>Instruments</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href={whatsapp} target="_blank">Enquire Now</a>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <div className="eyebrow"><span /> PLACE FOR MUSIC LOVERS</div>
          <h1>Find the instrument<br /><em>that finds your sound.</em></h1>
          <p>Explore musical instruments, accessories and reliable repair support at KK Music House in Sector 86, Greater Faridabad.</p>
          <div className="hero-actions">
            <a href="#instruments" className="button button-primary">Explore Instruments <ArrowRight size={18} /></a>
            <a href={whatsapp} target="_blank" className="button button-glass"><MessageCircle size={18} /> WhatsApp Us</a>
          </div>
          <div className="hero-meta">
            <div><Star size={18} fill="currentColor" /><span><strong>4.7</strong> local rating</span></div>
            <div><MapPin size={18} /><span>Sector 86, Faridabad</span></div>
            <div><Wrench size={18} /><span>Sales & repair</span></div>
          </div>
        </div>
        <a href="#instruments" className="scroll-cue" aria-label="Scroll to instruments"><span /></a>
      </section>

      <section className="intro-strip">
        <div className="container strip-grid">
          <p>Guitars</p><span>✦</span><p>Keyboards</p><span>✦</span><p>Tabla</p><span>✦</span><p>Harmonium</p><span>✦</span><p>Accessories</p><span>✦</span><p>Repairs</p>
        </div>
      </section>

      <section className="section instruments" id="instruments">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="kicker">OUR COLLECTION</span>
              <h2>Everything you need<br />to start playing.</h2>
            </div>
            <p>From your first instrument to your next upgrade, visit the store to explore available models and get help choosing what suits you.</p>
          </div>

          <div className="instrument-grid">
            {instruments.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className={`instrument-card card-${index + 1}`} key={item.title} style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="card-shade" />
                  <div className="instrument-icon"><Icon size={22} /></div>
                  <div className="card-copy">
                    <span>0{index + 1}</span>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <a href={whatsapp} target="_blank">Ask availability <ArrowRight size={17} /></a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container services-layout">
          <div className="service-image">
            <img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1200&q=85" alt="Guitar being maintained" />
            <div className="experience-badge"><strong>Sales</strong><span>&</span><strong>Repair</strong></div>
          </div>
          <div className="service-copy">
            <span className="kicker">MORE THAN A STORE</span>
            <h2>Keep your music<br /><em>playing beautifully.</em></h2>
            <p className="lead">An instrument should feel right, sound right and stay reliable. Get straightforward assistance for buying, maintaining and repairing your instrument.</p>
            <div className="feature-list">
              {features.map(({ icon: Icon, title, text }) => (
                <div className="feature" key={title}>
                  <div className="feature-icon"><Icon size={22} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
            <a href="tel:+919319583602" className="text-link"><Phone size={18} /> Call for repair enquiry <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container about-inner">
          <span className="big-note">♪</span>
          <span className="kicker">KK MUSIC HOUSE</span>
          <h2>Your neighbourhood destination<br />for every musical journey.</h2>
          <p>Located near Sai Dham Mandir in Sector 86, KK Music House serves music learners, hobbyists and performers with instrument sales and repair services. Visit the shop, explore the collection and speak directly with the team.</p>
          <div className="about-stats">
            <div><strong>4.7<span>★</span></strong><p>Public rating</p></div>
            <div><strong>2</strong><p>Direct contact numbers</p></div>
            <div><strong>7</strong><p>Days open weekly</p></div>
          </div>
        </div>
      </section>

      <section className="section visit" id="contact">
        <div className="container visit-grid">
          <div className="visit-copy">
            <span className="kicker">VISIT THE STORE</span>
            <h2>Come in. Tune up.<br /><em>Play something new.</em></h2>
            <div className="contact-lines">
              <a href={maps} target="_blank"><MapPin /><span><small>ADDRESS</small>Near Sai Dham Mandir, behind Deepak Juice,<br />Sector 86, Greater Faridabad, Haryana 121002</span></a>
              <a href="tel:+919319583602"><Phone /><span><small>CALL US</small>+91 93195 83602<br />+91 93110 08112</span></a>
              <div><Clock3 /><span><small>STORE HOURS</small>Open daily · Please call to confirm today&apos;s timing</span></div>
            </div>
            <div className="visit-actions">
              <a href={maps} target="_blank" className="button button-primary">Get Directions <ArrowRight size={18} /></a>
              <a href={whatsapp} target="_blank" className="button button-outline">WhatsApp</a>
            </div>
          </div>
          <a className="map-card" href={maps} target="_blank" aria-label="Open KK Music House on Google Maps">
            <div className="map-pattern" />
            <div className="map-pin"><MapPin size={28} /></div>
            <div className="map-label"><strong>KK Music House</strong><span>Sector 86, Faridabad</span></div>
          </a>
        </div>
      </section>

      <section className="instagram-section">
        <div className="container insta-inner">
          <div><Instagram size={25} /><span><small>FOLLOW ON INSTAGRAM</small><strong>@kkmusichouse</strong></span></div>
          <a href="https://www.instagram.com/kkmusichouse/" target="_blank">See latest updates <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand"><span className="brand-mark"><Music2 size={24} /></span><span><strong>KK</strong> MUSIC HOUSE</span></a>
            <p>Musical instruments sales and repair in Greater Faridabad.</p>
          </div>
          <div><h4>Explore</h4><a href="#instruments">Instruments</a><a href="#services">Services</a><a href="#about">About us</a></div>
          <div><h4>Contact</h4><a href="tel:+919319583602">+91 93195 83602</a><a href={whatsapp} target="_blank">WhatsApp enquiry</a><a href={maps} target="_blank">Get directions</a></div>
          <div><h4>Follow</h4><div className="socials"><a href="https://www.instagram.com/kkmusichouse/" target="_blank" aria-label="Instagram"><Instagram /></a><a href="#" aria-label="YouTube"><Youtube /></a><a href="#" aria-label="Facebook"><Facebook /></a></div></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} KK Music House. All rights reserved.</span><span>Made for music lovers.</span></div>
      </footer>

      <a href={whatsapp} target="_blank" className="floating-whatsapp" aria-label="Chat on WhatsApp"><MessageCircle /></a>
    </main>
  );
}
