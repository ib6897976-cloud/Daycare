import React, { useState } from 'react';
import { INITIAL_DATA as data } from './constants';
import { Phone, MapPin, Clock, Star, ShieldCheck, BookOpen, Languages, Sparkles } from './components/Icons';

const LOGO_URL = "https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-1/487306608_122224605398214302_5911723855961414638_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=111fe6&_nc_ohc=1wlgSm6CFCkQ7kNvwFKVLil&_nc_oc=AdnrQD7xGvpGvOEXKisoz6OeaF-9heYb-NJBjeCkWRQFwCCYwrqqgJgLnjTd14tWJQiqDNIDuaY62BxtQVaXx2En&_nc_zt=24&_nc_ht=scontent-ord5-1.xx&_nc_gid=W-f9KvoShisBuAS6BAURTw&oh=00_AfsPfyB2zUdDaKLnKZHox8EMsgynMtMcBaqVAUvu6_IO2Q&oe=698884D2";

const scrollToSection = (id: string) => {
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
  }
};

const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-orange-100">
    <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img 
          src={LOGO_URL} 
          className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-amber-100" 
          alt="Children in Learning Logo" 
        />
        <span className="font-display font-extrabold text-xl text-stone-900 hidden sm:block tracking-tight">
          Children in Learning Home Daycare
        </span>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        {[
          { label: 'About', id: 'about' },
          { label: 'Programs', id: 'programs' },
          { label: 'Pricing', id: 'pricing' },
          { label: 'Reviews', id: 'reviews' },
          { label: 'Contact', id: 'contact' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="capitalize font-bold text-xs sm:text-sm text-stone-500 hover:text-amber-600 transition-all"
          >
            {item.label}
          </button>
        ))}
        <button 
          onClick={() => scrollToSection('contact')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-indigo-100 transition-all hover:-translate-y-0.5 hidden lg:block"
        >
          Enroll Now
        </button>
      </div>
    </div>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="bg-stone-950 text-stone-400 py-16 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-4">
        <h4 className="text-white font-display font-bold text-xl tracking-tight">Children in Learning Home Daycare</h4>
        <p className="text-sm leading-relaxed opacity-60">
          A licensed home daycare committed to providing a nurturing and safe environment for your children to thrive, learn, and grow.
        </p>
      </div>
      <div className="space-y-4">
        <h5 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-50">Legal</h5>
        <ul className="space-y-2 text-sm">
          <li className="hover:text-amber-400 transition-colors cursor-pointer">Privacy Policy</li>
          <li className="hover:text-amber-400 transition-colors cursor-pointer">Terms of Service</li>
          <li className="hover:text-amber-400 transition-colors cursor-pointer">Licensing Info</li>
        </ul>
      </div>
      <div className="space-y-4">
        <h5 className="text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-50">Follow Us</h5>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all cursor-pointer text-stone-400 font-bold text-sm uppercase">FB</div>
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all cursor-pointer text-stone-400 font-bold text-sm uppercase">IG</div>
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all cursor-pointer text-stone-400 font-bold text-sm uppercase">GM</div>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto border-t border-white/5 mt-12 pt-8 text-center text-[11px] font-medium tracking-widest uppercase opacity-30">
      &copy; {new Date().getFullYear()} Children in Learning Home Daycare. Licensed & Insured.
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
    <div className="min-h-screen flex flex-col selection:bg-amber-100">
      <Navbar />

      <main className="flex-grow">
        <section id="hero" className="relative h-[85vh] overflow-hidden">
          <img 
            src={data.images.hero} 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Happy children learning" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="relative max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-start">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full font-bold text-xs uppercase tracking-widest border border-amber-100">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                Licensed Home Daycare
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-stone-900 leading-[1.1] tracking-tight">
                {data.bio.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed font-medium">
                {data.bio.heroSubheadline}
              </p>
              <div className="pt-6 flex flex-wrap gap-4">
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-200 transition-all hover:scale-105 active:scale-95"
                >
                  {data.settings.ctaText}
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="bg-white border-2 border-stone-100 hover:border-amber-400 px-8 py-4 rounded-full font-bold text-lg transition-all text-stone-700 shadow-sm"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-stone-50 border-y border-stone-100">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block px-4 py-1.5 bg-amber-100/50 text-amber-700 rounded-full font-bold text-xs uppercase tracking-widest">
              Our Purpose
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
              {data.bio.visionHeadline}
            </h2>
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-8xl text-amber-200/50 font-serif">"</span>
              <p className="text-2xl md:text-3xl font-display font-medium text-stone-700 leading-relaxed italic relative z-10">
                {data.bio.visionText}
              </p>
              <span className="absolute -bottom-16 -right-6 text-8xl text-amber-200/50 font-serif">"</span>
            </div>
          </div>
        </section>

        <section id="about" className="py-32 px-6 bg-white overflow-hidden scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-rose-100 rounded-full blur-3xl opacity-50" />
                <img 
                  src={data.images.about} 
                  className="relative rounded-[2.5rem] shadow-2xl z-10 w-full aspect-square object-cover ring-8 ring-stone-50" 
                  alt="Safe learning environment" 
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full font-bold text-xs uppercase tracking-widest border border-indigo-100">
                  Our Story
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight leading-tight">
                  {data.bio.aboutHeadline}
                </h2>
                <p className="text-lg text-stone-600 leading-relaxed font-medium">
                  {data.bio.aboutText}
                </p>
                <div className="flex gap-6 pt-4">
                  <div className="flex items-center gap-3 bg-stone-50 px-5 py-3 rounded-2xl border border-stone-100">
                    <ShieldCheck className="text-amber-500 w-5 h-5" />
                    <span className="font-bold text-stone-700 text-sm">State Licensed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="py-32 px-6 bg-[#fffcf9] scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">
                {data.bio.programsHeadline}
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-lg font-medium">
                {data.bio.programsSubheadline}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.bio.programs.map((program, idx) => (
                <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-stone-100 hover:shadow-2xl hover:shadow-amber-100/20 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all text-amber-500">
                    {program.icon === 'Sparkles' && <Sparkles className="w-8 h-8" />}
                    {program.icon === 'BookOpen' && <BookOpen className="w-8 h-8" />}
                    {program.icon === 'Languages' && <Languages className="w-8 h-8" />}
                  </div>
                  <h3 className="font-bold text-2xl text-stone-900 mb-4 tracking-tight">{program.title}</h3>
                  <p className="text-stone-500 leading-relaxed font-medium">{program.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-32 px-6 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full font-bold text-xs uppercase tracking-widest border border-emerald-100">
                Fair & Transparent
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-stone-900 tracking-tight">
                {data.fees.title}
              </h1>
              <p className="text-stone-500 max-w-2xl mx-auto text-xl font-medium">
                {data.fees.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.fees.items.map((item) => (
                <div key={item.id} className="bg-stone-50 p-10 rounded-[3rem] border border-stone-100 hover:border-amber-200 transition-all hover:shadow-2xl hover:shadow-amber-100/30 flex flex-col h-full group">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">{item.title}</h3>
                    <span className="inline-block px-3 py-1 bg-white text-stone-500 rounded-full text-xs font-bold uppercase tracking-wider border border-stone-100">
                      {item.ageRange}
                    </span>
                  </div>
                  <p className="text-stone-500 mb-12 flex-grow leading-relaxed font-medium">
                    {item.description}
                  </p>
                  <div className="border-t border-stone-200/50 pt-10 mt-auto text-center">
                    <div className="text-4xl font-display font-black text-stone-900 mb-8">
                      {item.price}
                    </div>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="w-full bg-indigo-600 text-white py-5 rounded-[2rem] font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-32 px-6 bg-stone-50 border-t border-stone-100 scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full font-bold text-xs uppercase tracking-widest border border-blue-100">
                Community Voices
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-stone-900 tracking-tight">Parent Experiences</h1>
              <div className="flex justify-center gap-1.5 text-amber-400 py-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-8 h-8" />)}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.testimonials.map((review) => (
                <div key={review.id} className="bg-white p-10 rounded-[2.5rem] border border-stone-100 hover:shadow-xl transition-all relative group">
                  <div className="flex gap-1 text-amber-400 mb-6">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                  </div>
                  <p className="text-stone-600 text-lg leading-relaxed italic mb-10 font-medium">
                    "{review.review}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-stone-100 pt-8">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center font-bold text-indigo-600 text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-stone-900 text-lg">{review.name}</div>
                      <div className="text-xs text-stone-400 font-bold uppercase tracking-widest">Verified Parent</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 px-6 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2 space-y-12">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-rose-50 text-rose-700 rounded-full font-bold text-xs uppercase tracking-widest border border-rose-100">
                    Get In Touch
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 tracking-tight">Visit our home daycare</h2>
                  <p className="text-stone-500 text-lg font-medium leading-relaxed">
                    Ready to schedule a tour or have questions about enrollment? We are here to help your family start this exciting journey.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Call Us</div>
                      <div className="text-lg font-bold text-stone-900">{data.settings.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Location</div>
                      <div className="text-lg font-bold text-stone-900">{data.settings.address}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Hours</div>
                      <div className="text-lg font-bold text-stone-900">{data.settings.hours}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-stone-50 p-8 sm:p-12 rounded-[3rem] border border-stone-100 shadow-xl shadow-stone-100/50">
                  {formStatus === 'sent' ? (
                    <div className="py-20 text-center space-y-4 animate-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Sparkles className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-stone-900">Message Sent!</h3>
                      <p className="text-stone-500 font-medium">Thank you for reaching out. We'll get back to you shortly.</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-6 text-indigo-600 font-bold hover:underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">Parent Name</label>
                          <input 
                            required
                            type="text" 
                            className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-100 focus:border-amber-400 outline-none transition-all bg-white"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-100 focus:border-amber-400 outline-none transition-all bg-white"
                            placeholder="jane@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          type="tel" 
                          className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-100 focus:border-amber-400 outline-none transition-all bg-white"
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-stone-400 uppercase tracking-widest ml-1">How can we help?</label>
                        <textarea 
                          required
                          rows={4}
                          className="w-full px-6 py-4 rounded-2xl border border-stone-200 focus:ring-4 focus:ring-amber-100 focus:border-amber-400 outline-none transition-all bg-white resize-none"
                          placeholder="Tell us about your child's age and when you'd like to start..."
                        />
                      </div>
                      <button 
                        disabled={formStatus === 'sending'}
                        className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-stone-800 transition-all shadow-xl shadow-stone-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
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