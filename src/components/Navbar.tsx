import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/dermatiqua-logo-v2.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctor", label: "Doctor" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-background/95 backdrop-blur shadow-card" : "bg-background/80 backdrop-blur"}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center group">
          <img 
            src={logo} 
            alt="Dermatiqua — Skin Hair Laser Clinic" 
            className="h-12 w-auto object-contain group-hover:opacity-90 transition" 
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`}>
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/appointment"
            className="px-5 py-2.5 bg-magenta text-white text-sm font-semibold rounded-full hover:opacity-90 transition"
          >
            Book Appointment
          </Link>
          <a href="tel:8459323304" className="text-magenta hover:text-magenta/80 transition" aria-label="Call">
            <Phone size={18} />
          </a>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} className="text-sm font-medium py-2">{l.label}</NavLink>
            ))}
            <Link
              to="/appointment"
              className="px-5 py-3 bg-magenta text-white text-sm font-semibold rounded-full text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
