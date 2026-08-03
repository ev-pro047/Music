"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Clock3, Guitar, Headphones, Instagram, MapPin, Menu, MessageCircle, Music2, Phone, Piano, Play, Star, Wrench, X, Youtube } from "lucide-react";
import "./page.css";

const whatsapp="https://wa.me/919319583602?text=Hi%20KK%20Music%20House%2C%20I%20want%20to%20enquire%20about%20a%20musical%20instrument.";
const maps="https://www.google.com/maps/search/?api=1&query=KK+Music+House+Sector+86+Faridabad";

const sounds=[
 {n:"01",title:"Guitars",sub:"Acoustic · Electric · Bass",icon:Guitar,img:"https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1400&q=90"},
 {n:"02",title:"Keys",sub:"Keyboards · Digital pianos",icon:Piano,img:"https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1400&q=90"},
 {n:"03",title:"Rhythm",sub:"Drums · Tabla · Percussion",icon:Music2,img:"https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1400&q=90"},
 {n:"04",title:"Audio",sub:"Microphones · Speakers · Gear",icon:Headphones,img:"https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=90"}
];

export default function MusicTwo(){
 const [open,setOpen]=useState(false);
 const [intro,setIntro]=useState(true);
 useEffect(()=>{document.body.style.overflow=open||intro?"hidden":"";return()=>{document.body.style.overflow=""}},[open,intro]);
 return <main className="m2">
   {intro&&<div className="m2-intro">
     <div className="m2-intro-noise"/>
     <div className="m2-intro-top"><span>KK MUSIC HOUSE</span><button onClick={()=>setIntro(false)}>Skip <X/></button></div>
     <div className="m2-intro-center">
       <p>SECTOR 86 · FARIDABAD</p>
       <h1>Every sound<br/>begins with<br/><em>one touch.</em></h1>
       <button className="m2-play" onClick={()=>setIntro(false)}><span><Play fill="currentColor"/></span><b>ENTER THE STORE</b></button>
     </div>
     <div className="m2-record"><i/><i/><i/><span><Music2/></span></div>
     <div className="m2-intro-foot"><span>INSTRUMENTS · ACCESSORIES · REPAIRS</span><span>SOUND ON YOUR TERMS</span></div>
   </div>}

   <header className="m2-header">
    <a href="#top" className="m2-brand"><span><Music2/></span><b>KK MUSIC HOUSE</b></a>
    <nav className={open?"open":""}><a href="#sounds" onClick={()=>setOpen(false)}>Sounds</a><a href="#repair" onClick={()=>setOpen(false)}>Repair</a><a href="#story" onClick={()=>setOpen(false)}>Story</a><a href="#visit" onClick={()=>setOpen(false)}>Visit</a><a href={whatsapp} target="_blank" className="m2-nav-cta">Enquire <ArrowRight/></a></nav>
    <button className="m2-menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
   </header>

   <section className="m2-hero" id="top">
    <div className="m2-hero-noise"/>
    <div className="m2-hero-copy">
      <span className="m2-kicker">A PLACE FOR MUSIC LOVERS</span>
      <h1>Don&apos;t just buy<br/>an instrument.<br/><em>Meet your sound.</em></h1>
      <p>Walk in, try it, feel it and choose with real guidance at KK Music House.</p>
      <div className="m2-actions"><a href="#sounds">Explore the store <ArrowDown/></a><a href={whatsapp} target="_blank"><MessageCircle/> WhatsApp</a></div>
    </div>
    <div className="m2-hero-object">
      <div className="m2-halo"/><div className="m2-vinyl"><i/><i/><i/><span><Music2/></span></div>
      <div className="m2-floating-note note1">♪</div><div className="m2-floating-note note2">♫</div>
      <div className="m2-rating"><Star fill="currentColor"/><b>4.7</b><span>customer rating</span></div>
    </div>
    <div className="m2-hero-side"><span>SCROLL TO DISCOVER</span><i/></div>
   </section>

   <section className="m2-manifesto"><p>For the first chord.</p><p>For the next stage.</p><p>For the sound that stays.</p></section>

   <section className="m2-sounds" id="sounds">
    <div className="m2-section-intro"><span>01 / COLLECTION</span><h2>Choose by the feeling<br/>you want to create.</h2></div>
    <div className="m2-sound-list">
      {sounds.map(({n,title,sub,icon:Icon,img})=><a href={whatsapp} target="_blank" className="m2-sound-row" key={title}>
        <span className="m2-num">{n}</span><span className="m2-sound-icon"><Icon/></span><div><h3>{title}</h3><p>{sub}</p></div><div className="m2-row-image"><img src={img} alt={title}/></div><ArrowRight className="m2-row-arrow"/>
      </a>)}
    </div>
   </section>

   <section className="m2-repair" id="repair">
    <div className="m2-repair-image"><img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1500&q=90" alt="Instrument repair"/><div className="m2-repair-stamp"><Wrench/><span>SALES<br/>& REPAIR</span></div></div>
    <div className="m2-repair-copy"><span>02 / KEEP IT PLAYING</span><h2>Your instrument has a life after the purchase.</h2><p>Get practical support for setup, maintenance and repair. Speak directly with the shop before bringing your instrument in.</p><a href="tel:+919319583602">Call repair desk <ArrowRight/></a></div>
   </section>

   <section className="m2-story" id="story">
    <div className="m2-story-top"><span>03 / THE STORE</span><p>Near Sai Dham Mandir · Sector 86</p></div>
    <h2>A neighbourhood shop<br/>with a musician&apos;s heart.</h2>
    <div className="m2-story-grid"><div className="m2-story-card"><strong>4.7★</strong><span>PUBLIC RATING</span></div><div className="m2-story-card"><strong>7</strong><span>DAYS OPEN</span></div><div className="m2-story-text">For learners, hobbyists and performers—real instruments, real guidance and direct support without endless online confusion.</div></div>
   </section>

   <section className="m2-visit" id="visit">
    <div className="m2-map"><iframe title="KK Music House location" src="https://www.google.com/maps?q=KK%20Music%20House%20Sector%2086%20Faridabad&output=embed" loading="lazy"/></div>
    <div className="m2-contact"><span>04 / VISIT</span><h2>Come in.<br/>Play something.</h2><div><MapPin/><p>Near Sai Dham Mandir, behind Deepak Juice, Sector 86, Greater Faridabad, Haryana 121002</p></div><div><Phone/><p><a href="tel:+919319583602">+91 93195 83602</a><br/><a href="tel:+919311008112">+91 93110 08112</a></p></div><div><Clock3/><p>Open daily · Call to confirm timing</p></div><a className="m2-direction" href={maps} target="_blank">Open directions <ArrowRight/></a></div>
   </section>

   <footer className="m2-footer"><div><span className="m2-brand"><span><Music2/></span><b>KK MUSIC HOUSE</b></span><p>Place for music lovers.</p></div><div className="m2-social"><a href="https://www.instagram.com/kkmusichouse/" target="_blank"><Instagram/></a><a href="https://www.youtube.com/results?search_query=KK+MUSIC+HOUSE+SEC86+FBD" target="_blank"><Youtube/></a></div><small>© {new Date().getFullYear()} · SECTOR 86, FARIDABAD</small></footer>
   <a href={whatsapp} target="_blank" className="m2-whatsapp"><MessageCircle/></a>
 </main>
}
