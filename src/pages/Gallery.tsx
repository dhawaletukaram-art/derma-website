import doctor from "@/assets/doctor.jpg";
import { Award } from "lucide-react";
import acneTreatmentFinal from "@/assets/gallery/acne-treatment-final.jpg";
import pigmentationCorrectionFinal from "@/assets/gallery/pigmentation-correction-final.jpg";
import antiAgeingTreatmentFinal from "@/assets/gallery/anti-ageing-treatment-final.jpg";
import skinRejuvenationFinal from "@/assets/gallery/skin-rejuvenation-final.jpg";
import hairRegrowth from "@/assets/gallery/hair-regrowth.jpg";
import laserHair from "@/assets/gallery/laser-hair.jpg";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  description: string;
};

// Real patient transformation images
const galleryItems: GalleryItem[] = [
  {
    title: "Acne Treatment Results",
    category: "Acne Care",
    image: acneTreatmentFinal,
    description: "Clear, smooth skin after personalized acne treatment plan",
  },
  {
    title: "Pigmentation Correction - Final Results",
    category: "Skin Brightening",
    image: pigmentationCorrectionFinal,
    description: "Dramatic pigmentation improvement with visible results",
  },
  {
    title: "Hair Regrowth Transformation",
    category: "Hair Restoration",
    image: hairRegrowth,
    description: "Visible hair density improvement with PRP & GFC therapy",
  },
  {
    title: "Laser Hair Reduction",
    category: "Laser Treatments",
    image: laserHair,
    description: "Smooth, hair-free skin after laser hair removal sessions",
  },
  {
    title: "Anti-Ageing Treatment - Final Results",
    category: "Anti-Ageing",
    image: antiAgeingTreatmentFinal,
    description: "Visible skin tightening and rejuvenation with advanced therapy",
  },
  {
    title: "Skin Rejuvenation - Final Results",
    category: "Skin Glow",
    image: skinRejuvenationFinal,
    description: "Complete skin transformation with enhanced glow and texture",
  },
];

const Gallery = () => (
  <div>
    <section className="relative py-28 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-rose-200/20 to-amber-200/10 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-amber-200/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400" />
            <span className="text-xs font-semibold text-amber-700">Results Gallery</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-amber-800 to-slate-900 bg-clip-text text-transparent leading-tight">Real Transformations</h1>
          <p className="mt-5 text-lg font-medium text-slate-700">Before & After Results</p>
          <p className="mt-2 font-medium text-slate-700">Witness visible improvements through our advanced dermatology and aesthetic treatments</p>
        </div>
      </div>
    </section>

    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <img src={doctor} alt="Dr. Pradnya Asutkar" loading="lazy" width={800} height={1024} className="rounded-3xl shadow-soft object-cover w-full max-w-md" />
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Meet Your Dermatologist</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-3">Dr. Pradnya Asutkar</h1>
          <p className="mt-3 text-lg text-muted-foreground font-semibold">Consultant Dermatologist · Cosmetologist · Aesthetic Physician · Trichologist · Dermatosurgeon · Venerologist</p>
          <div className="mt-6 space-y-3">
            <div className="p-4 rounded-xl bg-muted/40 border border-border">
              <p className="text-foreground leading-relaxed"><span className="font-semibold">Specialized Expertise:</span> Comprehensive treatment of all dermatological conditions including medical, surgical, and aesthetic procedures. Also treats complex conditions like leprosy and sexually transmitted infections (STD/VD) with confidential, non-judgmental care.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {["MBBS","MD (Skin & VD — Dermatology & Venereology)","Fellowship in Lasers","Fellowship in Cosmetology & Aesthetic Medicine","Trichology Specialist","Dermatosurgery Specialist"].map(q => (
                <div key={q} className="flex items-center gap-2 text-foreground/80">
                  <Award size={16} className="text-magenta" /> <span className="text-sm">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl">Patient Transformation Gallery</h2>
        <p className="text-muted-foreground mt-3">Real patient transformations showcasing the effectiveness of our treatments</p>
        <p className="text-xs text-muted-foreground mt-2 italic">*Individual results may vary. All images shared with patient consent.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-background rounded-3xl shadow-card overflow-hidden border border-border hover:shadow-soft transition-shadow">
            <div className="relative group overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="p-6">
              <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">{item.category}</span>
              <h3 className="font-serif text-2xl mt-2 mb-3 font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-semibold">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
        <h2 className="font-serif text-3xl mb-4">Ready for Your Transformation?</h2>
        <p className="mb-6 text-primary-foreground/90">Book a consultation to discuss your skin and hair goals</p>
        <a
          href="tel:8459323304"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:opacity-90 transition"
        >
          Book Appointment Now
        </a>
      </div>
    </section>
  </div>
);

export default Gallery;
