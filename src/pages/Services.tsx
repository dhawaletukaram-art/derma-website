import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
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
    <section 
      className="relative py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      <div className="container mx-auto text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Our Services</h1>
        <p className="mt-4 text-lg text-foreground/80">Comprehensive Skin, Hair & Laser Treatments</p>
        <p className="mt-4 text-foreground/70 text-lg">Advanced Aesthetic & Dermatology Solutions Tailored for You</p>
      </div>
    </section>

    <section className="container mx-auto py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-serif text-5xl md:text-6xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">Comprehensive Skin, Hair & Laser Treatments</p>
        <p className="mt-4 text-muted-foreground text-lg">Advanced Aesthetic & Dermatology Solutions Tailored for You</p>
      </div>
    </section>

    <section className="container mx-auto py-20 space-y-20">
      {services.map((s, i) => (
        <div key={s.slug} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
            <div className="absolute -inset-4 bg-gradient-magenta opacity-15 blur-3xl rounded-full" />
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              className="relative rounded-3xl shadow-soft object-cover w-full aspect-[4/3]"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Service</span>
            <h2 className="font-serif text-4xl mt-2 mb-4">{s.title}</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">{s.short}</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-7">
              {s.treatments.slice(0, 6).map(t => (
                <div key={t.name} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 size={14} className="text-primary shrink-0" /> {t.name}
                </div>
              ))}
            </div>
            <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:opacity-90 transition">
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
