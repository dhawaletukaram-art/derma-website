import { Link } from "react-router-dom";
import doctor from "@/assets/doctor.jpg";
import reception from "@/assets/clinic/reception.jpg";
import consultationRoom from "@/assets/clinic/consultation-room.jpg";
import treatmentRoom from "@/assets/clinic/treatment-room.jpg";
import laserEquipment from "@/assets/clinic/laser-equipment.jpg";
import procedureRoom from "@/assets/clinic/procedure-room.jpg";
import skinAnalysis from "@/assets/clinic/skin-analysis.jpg";
import { ArrowRight } from "lucide-react";

const About = () => (
  <div>
    <section className="relative py-28 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-purple-200/20 to-rose-200/10 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-rose-200/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 to-pink-400" />
            <span className="text-xs font-semibold text-rose-700">Our Story</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-rose-800 to-slate-900 bg-clip-text text-transparent leading-tight">About Dermatiqua</h1>
          <p className="mt-5 text-lg font-medium text-slate-700">A modern Skin, Hair & Laser Clinic</p>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20 grid lg:grid-cols-2 gap-12 items-center">
      <img src={doctor} alt="Dr. Pradnya Asutkar" loading="lazy" width={800} height={1024} className="rounded-3xl shadow-soft object-cover w-full" />
      <div>
        <h2 className="font-serif text-4xl mb-6">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Dermatiqua was founded with a vision to deliver advanced dermatology and aesthetic solutions in a comfortable, professional, and patient-focused environment.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We believe that healthy skin and hair are essential for confidence and overall well-being. Our goal is to offer treatments that are effective, ethical, and tailored to each patient's unique concerns.
        </p>
      </div>
    </section>

    <section className="bg-muted/40 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-background p-10 rounded-2xl shadow-card">
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Mission</span>
          <h3 className="font-serif text-3xl mt-3 mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To provide world-class dermatology and aesthetic treatments using modern technology, personalized care, and ethical practice — helping patients feel confident in their skin and hair.
          </p>
        </div>
        <div className="bg-background p-10 rounded-2xl shadow-card">
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Values</span>
          <h3 className="font-serif text-3xl mt-3 mb-4">Our Values</h3>
          <ul className="space-y-2 text-muted-foreground">
            {["Patient-Centered Care","Ethical Treatment Approach","Hygiene & Safety Standards","Transparency & Trust","Advanced Technology","Continuous Learning & Innovation"].map(v => (
              <li key={v} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-magenta" /> {v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl">Our Clinic Facilities</h2>
        <p className="text-muted-foreground mt-3">Modern dermatology and laser technology for safe, effective treatments.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {["Advanced Laser Equipment","Modern Consultation Rooms","Skin Analysis Technology","Hygienic Procedure Rooms","Comfortable Patient Waiting Area","Personalized Consultation Support"].map(f => (
          <div key={f} className="p-6 rounded-2xl border border-border bg-muted/30">
            <div className="font-serif text-xl">{f}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="container mx-auto py-20">
      <div className="text-center mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Inside Our Clinics</span>
        <h2 className="font-serif text-4xl mt-3">Experience Our Premium Facilities</h2>
        <p className="text-muted-foreground mt-3">Take a virtual tour of our state-of-the-art dermatology clinics in Nagpur</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Reception & Waiting Area",
            desc: "Comfortable and welcoming space for our patients",
            image: reception,
          },
          {
            title: "Consultation Room",
            desc: "Private consultation spaces with Dr. Pradnya Asutkar",
            image: consultationRoom,
          },
          {
            title: "Treatment Room",
            desc: "Hygienic and modern treatment facilities",
            image: treatmentRoom,
          },
          {
            title: "Laser Equipment",
            desc: "FDA-approved advanced laser technology",
            image: laserEquipment,
          },
          {
            title: "Procedure Room",
            desc: "Sterile environment for all procedures",
            image: procedureRoom,
          },
          {
            title: "Skin Analysis Station",
            desc: "Advanced diagnostic equipment for accurate assessment",
            image: skinAnalysis,
          },
        ].map((facility) => (
          <div
            key={facility.title}
            className="group relative overflow-hidden rounded-2xl shadow-card cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => window.open(facility.image, '_blank')}
          >
            <img
              src={facility.image}
              alt={facility.title}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
              <h3 className="font-serif text-white text-xl mb-1">{facility.title}</h3>
              <p className="text-white/80 text-sm">{facility.desc}</p>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={16} className="text-primary" />
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">Click on any image to view in full size</p>
      </div>
    </section>

    <section className="container mx-auto pb-20">
      <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground">
        <h2 className="font-serif text-4xl mb-4">Begin Your Transformation</h2>
        <Link to="/appointment" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full">
          Book Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </div>
);

export default About;
