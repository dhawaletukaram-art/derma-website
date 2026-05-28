import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Star, ExternalLink } from "lucide-react";
import { locations } from "@/data/clinic";
import logo from "@/assets/dermatiqua-logo.png";

const Footer = () => (
  <footer className="bg-teal-deep text-white/90 mt-20">
    <div className="container mx-auto py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Dermatiqua logo" className="w-12 h-12 rounded-full object-cover ring-2 ring-magenta/40" />
          <span className="font-serif text-xl font-semibold">Dermatiqua</span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          Modern Skin, Hair & Laser Clinic in Nagpur led by Dr. Pradnya Asutkar. Now operating at two premium locations as <strong>Dermatiqua</strong> (Ramdaspeth) and <strong>La Aesthetique</strong> (Besa).
        </p>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-white"><Instagram size={18}/></a>
          <a href="https://wa.me/918459323304" className="hover:text-white"><MessageCircle size={18}/></a>
        </div>
      </div>

      {locations.map(l => (
        <div key={l.id}>
          <h4 className="font-serif text-lg mb-4">{l.name}</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0"/>
              <a href={l.mapLink} target="_blank" rel="noreferrer" className="hover:text-white hover:underline transition">
                {l.area}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0"/>
              <a href={`tel:${l.phone}`} className="hover:text-white hover:underline transition">
                {l.phone}
              </a>
            </li>
            <li>
              <a href={l.reviewLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white hover:underline transition">
                <Star size={14}/> Google Reviews
              </a>
            </li>
            <li>
              <a 
                href="https://share.google/9ouaX9Y66PbcQL9Fw" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1 hover:text-white hover:underline transition"
              >
                <ExternalLink size={14}/> Business Page
              </a>
            </li>
          </ul>
        </div>
      ))}

      <div>
        <h4 className="font-serif text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-white/70">
          {[
            {l:"Home", to:"/"},
            {l:"About", to:"/about"},
            {l:"Services", to:"/services"},
            {l:"Doctor", to:"/doctor"},
            {l:"Gallery", to:"/gallery"},
            {l:"Contact", to:"/contact"},
            {l:"Book Appointment", to:"/appointment"},
          ].map(x => (
            <li key={x.l}><Link to={x.to} className="hover:text-white">{x.l}</Link></li>
          ))}
        </ul>
        <div className="mt-4 text-sm text-white/70 flex items-center gap-2">
          <Mail size={16}/> info@laaesthetique.com
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
      © {new Date().getFullYear()} La Aesthetique. All rights reserved.
    </div>
  </footer>
);

export default Footer;
