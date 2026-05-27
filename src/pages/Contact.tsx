import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Star, ExternalLink } from "lucide-react";
import { locations } from "@/data/clinic";

const Contact = () => (
  <div>
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-pink-200/20 to-indigo-200/10 rounded-full blur-3xl" />
      <div className="container mx-auto text-center max-w-3xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-indigo-200/40 mb-6">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
          <span className="text-xs font-semibold text-indigo-700">Get In Touch</span>
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">Contact Us</h1>
        <p className="mt-4 text-lg text-slate-600">Visit Our Premium Clinics in Nagpur</p>
      </div>
    </section>

    {/* Two Locations */}
    <section className="container mx-auto py-20 grid lg:grid-cols-2 gap-8">
      {locations.map(l => (
        <div key={l.id} className="bg-background border border-border rounded-3xl overflow-hidden shadow-card flex flex-col">
          <div className="aspect-video bg-muted">
            <iframe
              title={`${l.name} – ${l.area}`}
              src={l.mapEmbed}
              width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-7 flex-1 flex flex-col">
            <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">{l.area}</span>
            <h2 className="font-serif text-3xl mt-2 mb-4">{l.name}</h2>
            <ul className="space-y-3 text-sm text-foreground/80 mb-6">
              <li className="flex items-start gap-3"><MapPin size={16} className="text-magenta mt-1 shrink-0"/> {l.address}</li>
              <li className="flex items-start gap-3"><Phone size={16} className="text-magenta mt-1 shrink-0"/> <a href={`tel:${l.phone}`} className="hover:text-primary">{l.phone}</a></li>
              <li className="flex items-start gap-3"><Clock size={16} className="text-magenta mt-1 shrink-0"/> Mon – Sat · 10:00 AM – 8:00 PM</li>
            </ul>
            <div className="mt-auto flex flex-wrap gap-2">
              <a href={l.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition">
                <MapPin size={14}/> Get Directions
              </a>
              <a href={l.reviewLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-magenta-light text-magenta text-sm font-semibold rounded-full hover:bg-magenta hover:text-white transition">
                <Star size={14}/> Read Reviews
              </a>
              <a href={`https://wa.me/91${l.phone}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-semibold rounded-full hover:border-primary transition">
                <MessageCircle size={14}/> WhatsApp
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>

    {/* Google Reviews CTA */}
    <section className="container mx-auto pb-20">
      <div className="bg-muted/40 rounded-3xl p-10 md:p-14 text-center">
        <div className="flex justify-center gap-1 text-magenta mb-3">
          {Array(5).fill(0).map((_,i) => <Star key={i} size={20} fill="currentColor" />)}
        </div>
        <h2 className="font-serif text-4xl mb-3">Loved by Our Patients</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Read genuine Google reviews from patients treated at both our clinics.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {locations.map(l => (
            <a key={l.id} href={l.reviewLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full font-semibold hover:border-primary transition">
              {l.name} · {l.area} <ExternalLink size={14}/>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Info Grid */}
    <section className="container mx-auto pb-20 grid md:grid-cols-3 gap-6">
      {[
        { icon: Phone, title: "Phone", v: "+91 8459323304", href: "tel:8459323304" },
        { icon: Mail, title: "Email", v: "info@laaesthetique.com", href: "mailto:info@laaesthetique.com" },
        { icon: MessageCircle, title: "WhatsApp", v: "Chat with us", href: "https://wa.me/918459323304" },
      ].map(c => {
        const Icon = c.icon;
        return (
          <a key={c.title} href={c.href} className="p-7 rounded-2xl border border-border bg-background hover:shadow-card transition flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-magenta-light flex items-center justify-center shrink-0">
              <Icon size={20} className="text-magenta" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
              <div className="font-medium mt-1">{c.v}</div>
            </div>
          </a>
        );
      })}
    </section>

    <section className="container mx-auto pb-20">
      <div className="bg-gradient-primary rounded-3xl p-10 md:p-14 text-center text-primary-foreground">
        <h2 className="font-serif text-3xl md:text-4xl mb-3">Book Your Consultation</h2>
        <p className="max-w-xl mx-auto mb-6 text-white/85">Choose your preferred clinic and a time that works for you.</p>
        <Link to="/appointment" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition">
          Schedule Appointment <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default Contact;
