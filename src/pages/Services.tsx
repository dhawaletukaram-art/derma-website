import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Clock, Building2, Users, Shield, Zap, Award } from "lucide-react";
import { services, testimonials, locations } from "@/data/clinic";
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Services = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector('[data-carousel-next]');
        if (nextButton) {
          nextButton.click();
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <section className="relative py-28 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-cyan-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-blue-200/20 to-teal-200/10 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-teal-200/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" />
            <span className="text-xs font-semibold text-teal-700">Our Treatments</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-teal-800 to-slate-900 bg-clip-text text-transparent leading-tight">Our Services</h1>
          <p className="mt-5 text-lg font-medium text-slate-700">Comprehensive Skin, Hair & Laser Treatments</p>
          <p className="mt-2 font-medium text-slate-700">Advanced Aesthetic & Dermatology Solutions Tailored for You</p>
        </div>
      </div>
    </section>

    {/* Features Banner */}
    <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 py-8 border-y border-amber-200/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          <div className="flex flex-col items-center text-center">
            <Zap className="w-8 h-8 md:w-10 md:h-10 text-amber-700 mb-2" />
            <p className="text-xs md:text-sm font-bold text-slate-900">ADVANCED<br />TECHNOLOGY</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-8 h-8 md:w-10 md:h-10 text-amber-700 mb-2" />
            <p className="text-xs md:text-sm font-bold text-slate-900">EXPERT<br />DERMATOLOGIST</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-amber-700 mb-2" />
            <p className="text-xs md:text-sm font-bold text-slate-900">PERSONALIZED<br />CARE</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-amber-700 mb-2" />
            <p className="text-xs md:text-sm font-bold text-slate-900">SAFE &<br />HYGIENIC</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-amber-700 mb-2" />
            <p className="text-xs md:text-sm font-bold text-slate-900">PROVEN<br />RESULTS</p>
          </div>
        </div>
      </div>
    </section>

    {/* Consultation Timings */}
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 py-12">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-amber-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Clock className="w-full h-full text-amber-700" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm md:text-base text-slate-600 font-medium mb-2">Consultation Timings</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Monday to Saturday</h3>
              <div className="inline-block md:inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 md:px-8 py-3 rounded-full font-bold text-lg md:text-xl">
                10:00 AM to 5:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20 space-y-20">
      {services.map((s, i) => (
        <div key={s.slug} className="grid lg:grid-cols-2 gap-12 items-center group">
          <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""} transition-transform duration-700 group-hover:scale-105`}>
            <div className="absolute -inset-4 bg-gradient-magenta opacity-15 blur-3xl rounded-full group-hover:opacity-25 transition-opacity duration-700" />
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              className="relative rounded-3xl shadow-soft object-cover w-full aspect-[4/3] group-hover:shadow-lg transition-all duration-700"
            />
          </div>
          <div className="transition-all duration-700 group-hover:translate-x-2">
            <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Service</span>
            <h2 className="font-serif text-4xl mt-2 mb-4 group-hover:text-primary transition-colors duration-500">{s.title}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{s.short}</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-7">
              {s.treatments.slice(0, 6).map((t, idx) => (
                <div key={t.name} className="flex items-center gap-2 text-sm text-foreground/80 opacity-0 animate-fade-up" style={{ animationDelay: `${idx * 50}ms` }}>
                  <CheckCircle2 size={14} className="text-primary shrink-0 group-hover:scale-125 transition-transform duration-500" /> {t.name}
                </div>
              ))}
            </div>
            <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 hover:gap-3 transition-all duration-500 group-hover:shadow-lg">
              {s.cta} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ))}
    </section>

    {/* Testimonials */}
    <section className="container mx-auto py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="flex gap-0.5 justify-center mb-3 text-magenta">
          {Array(5).fill(0).map((_,i) => <Star key={i} size={18} fill="currentColor" />)}
        </div>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-4">What Our Patients Say</h2>
        <p className="text-muted-foreground">
          Real reviews from patients who have experienced our treatments
        </p>
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
  </div>
  );
};

export default Services;
