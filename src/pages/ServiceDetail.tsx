import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/clinic";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  return (
    <div>
      <section 
        className="relative py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100"
      >
        <div className="container mx-auto text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">{service.title}</h1>
          <p className="mt-4 text-lg text-foreground/80">{service.intro}</p>
        </div>
      </section>

      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary">← All Services</Link>
            <h1 className="font-serif text-5xl md:text-6xl mt-4">{service.title}</h1>
            <p className="mt-6 text-muted-foreground text-lg">{service.intro}</p>
            <p className="mt-3 text-muted-foreground">{service.short}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-magenta opacity-15 blur-3xl rounded-full" />
            <img src={service.image} alt={service.title} className="relative rounded-3xl shadow-soft object-cover w-full aspect-[4/3]" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20">
        <h2 className="font-serif text-3xl mb-10 text-center">Treatments We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.treatments.map(t => (
            <div key={t.name} className="p-7 rounded-2xl border border-border bg-background shadow-card hover:shadow-soft transition">
              <h3 className="font-serif text-xl mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto pb-20">
        <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Need Personalized Treatment Guidance?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-white/85">Book a consultation with Dr. Pradnya Asutkar to understand the most suitable treatment options.</p>
          <Link to="/appointment" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full">
            Book Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
