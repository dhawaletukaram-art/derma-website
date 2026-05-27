import acneTreatment from "@/assets/gallery/acne-treatment.jpg";
import antiAgeing from "@/assets/gallery/anti-ageing.jpg";
import hairRegrowth from "@/assets/gallery/hair-regrowth.jpg";
import laserHair from "@/assets/gallery/laser-hair.jpg";
import pigmentation from "@/assets/gallery/pigmentation.jpg";
import skinRejuvenation from "@/assets/gallery/skin-rejuvenation.jpg";

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
    image: acneTreatment,
    description: "Clear, smooth skin after personalized acne treatment plan",
  },
  {
    title: "Pigmentation Correction",
    category: "Skin Brightening",
    image: pigmentation,
    description: "Even skin tone achieved through targeted pigmentation therapy",
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
    title: "Anti-Ageing Transformations",
    category: "Anti-Ageing",
    image: antiAgeing,
    description: "Youthful, rejuvenated skin with Botox & dermal fillers",
  },
  {
    title: "Skin Rejuvenation",
    category: "Skin Glow",
    image: skinRejuvenation,
    description: "Radiant, glowing complexion after skin rejuvenation therapy",
  },
];

const Gallery = () => (
  <div>
    <section 
      className="relative py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      <div className="container mx-auto text-center max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Real Transformations</h1>
        <p className="mt-4 text-lg text-foreground/80">Before & After Results</p>
        <p className="mt-4 text-foreground/70 text-lg">Witness visible improvements through our advanced dermatology and aesthetic treatments</p>
      </div>
    </section>

    <section className="container mx-auto py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-serif text-5xl md:text-6xl font-bold">Real Transformations</h1>
        <p className="mt-4 text-lg text-muted-foreground">Before & After Results</p>
        <p className="mt-4 text-muted-foreground text-lg">Witness visible improvements through our advanced dermatology and aesthetic treatments</p>
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
