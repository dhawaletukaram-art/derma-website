import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, CheckCircle2, Star } from "lucide-react";
import hero from "@/assets/heroimage.jpg";
import { services, whyChoose, processSteps, testimonials, faqs, locations, procedureGallery } from "@/data/clinic";
import doctorImg from "@/assets/doctor.jpg";
import { Award, GraduationCap } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { MapPin, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector('[data-carousel-next]');
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    {/* Hero */}
    <section className="bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur border border-primary/10 text-xs font-medium text-primary mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-magenta" />
            Skin · Hair · Laser Clinic in Nagpur
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] text-foreground">
            Transform Your <span className="text-gradient-primary">Skin, Hair</span> & Confidence
          </h1>
          <p className="mt-4 font-serif italic text-xl text-magenta">Science Meets Aesthetic Beauty</p>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Advanced Skin, Hair & Laser Treatments by Dr.&nbsp;Pradnya Asutkar — personalized care using modern technology and medically proven&nbsp;procedures.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/appointment" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition shadow-soft">
              Book Appointment <ArrowRight size={18} />
            </Link>
            <a href="tel:8459323304" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-foreground font-semibold rounded-full border border-border hover:border-primary transition">
              <Phone size={16} /> Call Now
            </a>
            <a href="https://wa.me/918459323304" className="inline-flex items-center gap-2 px-7 py-3.5 bg-magenta/10 text-magenta font-semibold rounded-full hover:bg-magenta hover:text-white transition border border-magenta/20">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl">
            {["Advanced Laser Tech","Personalized Solutions","Expert Dermatology","Modern Treatments","Hygienic & Safe"].map(f => (
              <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 size={16} className="text-primary shrink-0" /> {f}
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-gradient-magenta opacity-20 blur-3xl rounded-full animate-float" />
          <img src={hero} alt="Modern dermatology clinic" width={1280} height={1280} className="relative rounded-3xl shadow-soft object-cover w-full aspect-square hover:scale-[1.02] transition-transform duration-700" />
        </div>
      </div>
    </section>

    {/* Trust strip */}
    <section className="border-y border-border bg-muted/40">
      <div className="container mx-auto py-10 grid md:grid-cols-4 gap-6 text-center">
        {[
          { k: "MBBS, MD", v: "Skin & VD" },
          { k: "Fellowship", v: "Lasers" },
          { k: "Fellowship", v: "Cosmetology & Aesthetic Medicine" },
          { k: "Trusted by", v: "1000+ Patients in Nagpur" },
        ].map(c => (
          <div key={c.v}>
            <div className="font-serif text-2xl text-primary">{c.k}</div>
            <div className="text-sm text-muted-foreground">{c.v}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Meet the Doctor — credibility */}
    <section className="container mx-auto py-20">
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 relative">
          <div className="absolute -inset-4 bg-gradient-magenta opacity-20 blur-3xl rounded-full" />
          <img
            src={doctorImg}
            alt="Dr. Pradnya Asutkar — Dermatologist & Aesthetic Medicine Specialist"
            width={900}
            height={1200}
            className="relative rounded-3xl shadow-soft object-cover w-full aspect-[3/4]"
          />
          <div className="absolute -bottom-5 -right-5 bg-background border border-border shadow-card rounded-2xl px-5 py-4 hidden md:flex items-center gap-3">
            <Award size={22} className="text-magenta" />
            <div>
              <div className="font-serif text-lg leading-none">10+ Years</div>
              <div className="text-xs text-muted-foreground">Clinical Experience</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Meet Your Dermatologist</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-5">Dr. Pradnya Asutkar</h2>
          <p className="text-primary font-medium mb-5">Dermatologist · Cosmetologist · Laser & Aesthetic Specialist</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dr. Pradnya Asutkar is a qualified dermatologist with a decade of experience in clinical dermatology, advanced laser procedures and aesthetic medicine. She has successfully treated thousands of patients across Nagpur for chronic skin conditions including psoriasis, vitiligo, fungal infections, eczema and severe acne — alongside hair restoration and modern cosmetic dermatology.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Her practice combines evidence-based medical dermatology with the latest FDA-approved laser and aesthetic technologies. Every treatment plan is personalised after a detailed skin analysis, with a focus on safety, ethics, transparent pricing and long-term, natural-looking results.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-7">
            {[
              "MBBS, MD (Skin & VD)",
              "Fellowship in Lasers",
              "Fellowship in Cosmetology",
              "Member — IADVL & ACSI",
            ].map(q => (
              <div key={q} className="flex items-center gap-2 text-sm text-foreground/80">
                <GraduationCap size={16} className="text-primary shrink-0" /> {q}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/doctor" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-full shadow-soft hover:opacity-90 transition">
              Full Profile <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* About preview */}
    <section className="container mx-auto pb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">About</span>
          <h2 className="font-serif text-5xl md:text-6xl font-black mt-3 mb-6 leading-tight">A Modern Skin, Hair & Laser Destination</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Dermatiqua is one of Nagpur's most trusted dermatology destinations — offering full-spectrum care from medical skin disease management to high-end laser, hair restoration and anti-ageing procedures, all under one roof.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We treat fungal infections, psoriasis, vitiligo, eczema, allergies, autoimmune skin disorders, acne, pigmentation and hair fall using internationally accepted protocols — supported by advanced diagnostics like dermoscopy, trichoscopy and patch testing.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            On the aesthetic side, our clinic is equipped with FDA-approved diode lasers, Q-switched Nd:YAG, fractional CO₂, microneedling RF, HydraFacial and a complete range of injectables — delivering visible, lasting results in a calm, hygienic and luxurious setting.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Read More About Us <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {["Acne Treatment Results","Pigmentation Correction","Hair Regrowth","Skin Rejuvenation"].map((c,i) => (
            <div key={c} className={`rounded-2xl p-6 shadow-card hover:shadow-soft transition ${i%2===0 ? "bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-100" : "bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-100"}`}>
              <div className="font-serif text-lg font-black text-foreground leading-snug">{c}</div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">Real patient transformations</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Procedure gallery */}
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Inside The Clinic</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">See Our Procedures In Action</h2>
          <p className="text-muted-foreground mt-4">
            A look at the advanced treatments we perform — so you know exactly what to expect on your visit.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {procedureGallery.map(p => (
            <article key={p.title} className="group bg-background rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-soft transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} procedure at Dermatiqua clinic`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section id="services" className="bg-muted/40 py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Services</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Our Specialized Treatments</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              style={{ animationDelay: `${idx * 80}ms` }}
              className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-500 border border-border/50 hover:border-primary/40 hover:-translate-y-1 opacity-0 animate-fade-up"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">{s.short}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  {s.cta} <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="container mx-auto py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Why Choose Us</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">Why Patients Choose Dermatiqua</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChoose.map(w => {
          const Icon = w.icon;
          return (
            <div key={w.title} className="p-7 rounded-2xl border border-border bg-background hover:bg-muted/40 transition">
              <Icon size={28} className="text-magenta mb-4" />
              <h3 className="font-serif text-xl mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          );
        })}
      </div>
    </section>

    {/* Process */}
    <section className="bg-teal-deep text-white py-20">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Our Clinics</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Visit Our Clinics</h2>
          <p className="text-muted-foreground mt-4">
            Visit us at <strong>Dermatiqua</strong> in Ramdaspeth or <strong>La&nbsp;Aesthetique</strong> in Besa — same trusted expertise, two convenient&nbsp;locations.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {locations.map(l => (
            <div key={l.id} className="bg-background rounded-3xl border border-border overflow-hidden shadow-card">
              <a href={l.mapLink} target="_blank" rel="noreferrer" className="aspect-[16/9] bg-muted block">
                <iframe title={l.name} src={l.mapEmbed} width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="pointer-events-none" />
              </a>
              <div className="p-7">
                <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">{l.area}</span>
                <a href={l.mapLink} target="_blank" rel="noreferrer" className="block group">
                  <h3 className="font-serif text-2xl mt-2 mb-3 group-hover:text-primary transition-colors">{l.name}</h3>
                </a>
                <p className="text-sm text-muted-foreground flex items-start gap-2 mb-5"><MapPin size={14} className="mt-1 shrink-0"/>{l.address}</p>
                <div className="flex flex-wrap gap-2">
                  <a href={l.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition">
                    Get Directions <ExternalLink size={12}/>
                  </a>
                  <a href={l.reviewLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2 bg-magenta-light text-magenta text-sm font-semibold rounded-full hover:bg-magenta hover:text-white transition">
                    <Star size={12}/> Google Reviews
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials - Loved by Our Patients */}
    <section className="container mx-auto py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="flex gap-0.5 justify-center mb-3 text-magenta">
          {Array(5).fill(0).map((_,i) => <Star key={i} size={18} fill="currentColor" />)}
        </div>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">Loved by Our Patients</h2>
        <p className="text-muted-foreground">
          Read genuine Google reviews from patients treated at both our&nbsp;clinics.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          <a href={locations[0].reviewLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            La Aesthetique - Besa, Nagpur <ExternalLink size={14}/>
          </a>
          <span className="text-muted-foreground">·</span>
          <a href={locations[1].reviewLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Dermatiqua - Ramdaspeth, Nagpur <ExternalLink size={14}/>
          </a>
        </div>
      </div>
      
      <Carousel
        ref={carouselRef}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((t, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-7 rounded-2xl bg-muted/40 border border-border hover:shadow-card transition h-full">
                <div className="flex gap-0.5 mb-3 text-magenta">
                  {Array(t.rating).fill(0).map((_,i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="font-serif text-lg">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
                <div className="text-xs text-primary mt-2 font-medium">{t.clinic}</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" data-carousel-next />
      </Carousel>
    </section>


    {/* FAQ */}
    <section className="bg-muted/40 py-20">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">FAQs</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f,i) => (
            <AccordionItem key={i} value={`f-${i}`} className="bg-background rounded-xl border border-border px-5">
              <AccordionTrigger className="text-left text-lg font-bold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="container mx-auto py-20">
      <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 text-center text-primary-foreground relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-magenta/30 blur-3xl" />
        <h2 className="font-serif text-4xl md:text-5xl mb-4 relative">Book Your Consultation Today</h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/85 relative">
          Your journey to healthy skin and beautiful confidence starts here. Experience advanced dermatology and aesthetic care.
        </p>
        <Link to="/appointment" className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition">
          Book Appointment <ArrowRight size={18} />
        </Link>
      </div>
    </section>
    </div>
  );
};

export default Home;
