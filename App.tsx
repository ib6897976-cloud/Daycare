import React, { useState, useEffect } from 'react';
import { INITIAL_DATA as data } from './constants';
import { Phone, MapPin, Clock, Star, ShieldCheck, BookOpen, Languages, Sparkles } from './components/Icons';

// Simple mobile menu icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const scrollToSection = (id: string, callback?: () => void) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    if (callback) callback();
  }
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Brand Name - Logo Removed, Size Increased, Colors Kept */}
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-stone-900 tracking-tight leading-none transition-colors group-hover:text-stone-700">
              Children in Learning <br className="xs:block sm:hidden" />
              <span className="text-amber-600">Home Daycare</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-bold text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-indigo-100 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 gap-6">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, () => setIsMenuOpen(false))}
              className="text-2xl font-display font-extrabold text-stone-800 text-left hover:text-amber-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('contact', () => setIsMenuOpen(false))}
            className="mt-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white w-full py-4 rounded-2xl font-bold text-lg shadow-xl"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-stone-950 text-stone-400 py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-6">
        <h4 className="text-white font-display font-bold text-xl tracking-tight leading-tight">Children in Learning <br/><span className="text-amber-500/80">Home Daycare</span></h4>
        <p className="text-sm leading-relaxed opacity-60 max-w-xs">
          Providing a safe, loving, and learning-focused environment for over 20 years. Licensed and dedicated to your child's growth.
        </p>
      </div>
      <div className="space-y-6">
        <h5 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-50">Quick Links</h5>
        <ul className="grid grid-cols-1 gap-3 text-sm">
          {['About', 'Programs', 'Pricing', 'Reviews', 'Contact'].map(link => (
            <li key={link}>
              <button 
                onClick={() => scrollToSection(link.toLowerCase())}
                className="hover:text-amber-400 transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-6">
        <h5 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-50">Contact Us</h5>
        <div className="space-y-4 text-sm font-medium">
          <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-amber-500" /> {data.settings.phone}</p>
          <p className="flex items-start gap-3 leading-tight"><MapPin className="w-5 h-5 text-amber-500 mt-0.5" /> {data.settings.address}</p>
          <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-amber-500" /> {data.settings.hours}</p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase opacity-40">
      <span>&copy; {new Date().getFullYear()} Children in Learning.</span>
      <span>State Licensed & Insured.</span>
    </div>
  </footer>
);

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-amber-100 bg-[#fffdfa]">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
          <img 
            src={data.images.hero} 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Happy children learning" 
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 w-full py-16 md:py-32">
            <div className="max-w-2xl space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-amber-50 text-amber-800 rounded-full font-bold text-xs uppercase tracking-widest border border-amber-100 shadow-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Licensed Home Daycare Since 2004
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-stone-900 leading-[1.1] tracking-tight">
                {data.bio.heroHeadline}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-xl leading-relaxed font-medium">
                {data.bio.heroSubheadline}
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-orange-200/50 transition-all hover:scale-105 active:scale-95"
                >
                  Schedule a Tour
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="bg-stone-100 hover:bg-stone-200 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all text-stone-700"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20 md:py-32 px-6 bg-white border-y border-stone-50">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-[10px] font-extrabold uppercase tracking-[0.4em] border border-amber-100">
              Our Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
              {data.bio.visionHeadline}
            </h2>
            <div className="relative py-4 px-4 sm:px-8">
              <span className="absolute top-0 left-0 text-7xl sm:text-9xl text-amber-100 font-serif">"</span>
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-stone-700 leading-relaxed italic relative z-10">
                {data.bio.visionText}
              </p>
              <span className="absolute bottom-0 right-0 text-7xl sm:text-9xl text-amber-100 font-serif">"</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 px-6 bg-white overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-64 sm:h-64 bg-amber-50 rounded-full blur-3xl opacity-60" />
                <img 
                  src={data.images.about} 
                  className="relative rounded-[2rem] sm:rounded-[3rem] shadow-2xl z-10 w-full aspect-[4/5] sm:aspect-square object-cover border-4 sm:border-8 border-white ring-1 ring-stone-100" 
                  alt="Child interacting in learning environment" 
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-8 sm:space-y-10">
                <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full font-bold text-xs uppercase tracking-widest border border-indigo-100">
                  Our Story
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-stone-900 tracking-tight leading-tight">
                  {data.bio.aboutHeadline}
                </h2>
                <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-medium">
                  {data.bio.aboutText}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: ShieldCheck, label: 'State Licensed' },
                    { icon: Sparkles, label: 'Safe & Clean' },
                    { icon: BookOpen, label: 'Pre-K Readiness' },
                    { icon: Languages, label: 'Bilingual Support' }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl border border-stone-100">
                      <feat.icon className="text-amber-500 w-5 h-5 flex-shrink-0" />
                      <span className="font-bold text-stone-800 text-sm">{feat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-24 md:py-32 px-6 bg-[#fffcf9] scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-stone-900 tracking-tight">
                {data.bio.programsHeadline}
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
                {data.bio.programsSubheadline}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.bio.programs.map((program) => (
                <div key={program.id} className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 transition-all text-amber-500 group-hover:text-white">
                    {program.icon === 'Sparkles' && <Sparkles className="w-8 h-8" />}
                    {program.icon === 'BookOpen' && <BookOpen className="w-8 h-8" />}
                    {program.icon === 'Languages' && <Languages className="w-8 h-8" />}
                  </div>
                  <h3 className="font-bold text-2xl text-stone-900 mb-4 tracking-tight">{program.title}</h3>
                  <p className="text-stone-500 leading-relaxed font-medium text-base sm:text-lg">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 md:py-32 px-6 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-20 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full font-bold text-xs uppercase tracking-widest border border-emerald-100">
                Transparent Enrollment
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-stone-900 tracking-tight">
                {data.fees.title}
              </h1>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
                {data.fees.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.fees.items.map((item) => (
                <div key={item.id} className="bg-stone-50 p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-stone-100 flex flex-col h-full group hover:border-amber-200 transition-all shadow-sm hover:shadow-xl hover:shadow-amber-100/30">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">{item.title}</h3>
                    <span className="inline-block px-4 py-1.5 bg-white text-stone-500 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-stone-100 shadow-sm">
                      {item.ageRange}
                    </span>
                  </div>
                  <p className="text-stone-500 mb-8 sm:mb-12 flex-grow leading-relaxed font-medium">
                    {item.description}
                  </p>
                  <div className="border-t border-stone-200 pt-8 sm:pt-10 mt-auto text-center">
                    <div className="text-3xl sm:text-4xl font-display font-black text-stone-900 mb-8 sm:mb-10 tracking-tight">
                      {item.price}
                    </div>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-indigo-600 text-white py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100/50"
                    >
                      Check Availability
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-sm text-stone-400 font-medium italic px-4">
              {data.fees.disclaimer}
            </p>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="py-24 md:py-32 px-6 bg-[#fffcf9] scroll-mt-20 border-y border-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-amber-100">
                Community Voices
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-stone-900 tracking-tight">Parent Experiences</h2>
              <div className="flex justify-center gap-1.5 text-amber-400 py-2">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8" />)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {data.testimonials.map((review) => (
                <div key={review.id} className="bg-white p-8 sm:p-10 rounded-[2rem] border border-stone-100 shadow-sm relative group hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-1 text-amber-400 mb-6">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                  </div>
                  <p className="text-stone-600 text-base sm:text-lg leading-relaxed italic mb-8 sm:mb-12 font-medium">
                    "{review.review}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center font-bold text-indigo-600 text-xl uppercase">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-base">{review.name}</div>
                      <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Verified Parent</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 px-6 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
              <div className="lg:w-1/2 space-y-10 md:space-y-12">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-rose-50 text-rose-700 rounded-full font-bold text-xs uppercase tracking-widest border border-rose-100">
                    Get In Touch
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-stone-900 tracking-tight leading-tight">Visit our home <br/>and meet our family</h2>
                  <p className="text-stone-500 text-lg sm:text-xl font-medium leading-relaxed max-w-lg">
                    Ready to see where your child's journey begins? Fill out the form or reach out directly to schedule a tour.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 transition-colors group-hover:bg-amber-100">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Call Us</div>
                      <div className="text-xl font-bold text-stone-900">{data.settings.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 transition-colors group-hover:bg-indigo-100">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Our Location</div>
                      <div className="text-xl font-bold text-stone-900">{data.settings.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="bg-stone-50 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] border border-stone-100 shadow-2xl shadow-stone-200/40">
                  {formStatus === 'sent' ? (
                    <div className="py-20 text-center space-y-6 animate-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Sparkles className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">Talk to you soon!</h3>
                      <p className="text-stone-500 text-base sm:text-lg font-medium leading-relaxed px-4">Your inquiry has been sent successfully. We will get back to you within 24 hours.</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-6 text-indigo-600 font-bold hover:underline text-lg transition-all"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Parent Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-5 py-4 sm:py-5 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-100 outline-none transition-all bg-white text-base"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-5 py-4 sm:py-5 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-100 outline-none transition-all bg-white text-base"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Message</label>
                        <textarea 
                          required
                          rows={4}
                          className="w-full px-5 py-4 sm:py-5 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-100 outline-none transition-all bg-white resize-none text-base"
                          placeholder="Tell us about your child's age or your specific questions..."
                        />
                      </div>
                      <button 
                        disabled={formStatus === 'sending'}
                        className="w-full bg-stone-900 text-white py-5 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl hover:bg-stone-800 transition-all shadow-xl shadow-stone-200 disabled:opacity-50"
                      >
                        {formStatus === 'sending' ? 'Sending...' : 'Request a Tour'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
