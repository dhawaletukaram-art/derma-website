import { Link } from "react-router-dom";
import doctor from "@/assets/doctor.jpg";
import { ArrowRight, GraduationCap, Award } from "lucide-react";

const Doctor = () => (
  <div>
    <section className="relative py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/30 to-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-cyan-200/20 to-emerald-200/10 rounded-full blur-3xl" />
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur border border-emerald-200/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
            <span className="text-xs font-semibold text-emerald-700">Meet Your Doctor</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-black bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 bg-clip-text text-transparent leading-tight">Dr. Pradnya Asutkar</h1>
          <p className="mt-5 text-lg font-medium text-slate-700">Consultant Dermatologist · Cosmetologist · Aesthetic Physician · Trichologist · Dermatosurgeon · Venerologist</p>
        </div>
      </div>
    </section>

    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <img src={doctor} alt="Dr. Pradnya Asutkar" loading="lazy" width={800} height={1024} className="rounded-3xl shadow-soft object-cover w-full max-w-md" />
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Doctor Profile</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-3">Dr. Pradnya Asutkar</h1>
          <p className="mt-3 text-lg text-muted-foreground">Dermatologist · Cosmetologist · Aesthetic Physician · Trichologist · Dermatosurgeon · Venerologist</p>
          <div className="mt-6 space-y-2">
            {["MBBS","MD (Skin & VD — Dermatology & Venereology)","Fellowship in Lasers","Fellowship in Cosmetology & Aesthetic Medicine","Trichology Specialist","Dermatosurgery Specialist"].map(q => (
              <div key={q} className="flex items-center gap-2 text-foreground/80">
                <GraduationCap size={16} className="text-primary" /> {q}
              </div>
            ))}
          </div>
          <Link to="/appointment" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-full">
            Book Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20 max-w-4xl">
      <h2 className="font-serif text-4xl mb-6">Specializations & Expertise</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {["Acne & Acne Scar Management","Hair Fall & Hair Restoration","PRP & GFC Therapy","Laser Treatments","Pigmentation Solutions","Cosmetic Dermatology","Anti-Ageing Procedures","Leprosy & Chronic Skin Conditions","Sexually Transmitted Infections (STD/VD)","Fungal & Bacterial Infections","Psoriasis & Eczema Management","Vitiligo Treatment","Dermatosurgery & Laser Surgery","Trichology & Scalp Disorders"].map(a => (
          <div key={a} className="p-4 rounded-xl bg-muted/40 border border-border flex items-center gap-3">
            <Award size={18} className="text-magenta" /> {a}
          </div>
        ))}
      </div>

      <h2 className="font-serif text-4xl mt-16 mb-4">Comprehensive Dermatological Care</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          Dr. Pradnya Asutkar offers comprehensive dermatological services covering medical, surgical, and aesthetic aspects of skin and hair care. Her expertise extends to treating complex conditions including leprosy and sexually transmitted infections (STD/VD), ensuring compassionate and confidential care.
        </p>
        <p>
          As a qualified Consultant Dermatologist with specializations in Cosmetology, Aesthetic Medicine, Trichology, and Dermatosurgery, she provides holistic solutions for all dermatological concerns — from chronic skin diseases to modern cosmetic procedures.
        </p>
      </div>

      <h2 className="font-serif text-4xl mt-16 mb-4">Patient-Focused Treatment Philosophy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dr. Pradnya Asutkar believes every patient deserves a personalized, ethical, and result-oriented treatment plan. Combining modern dermatology techniques with attentive care, she ensures each treatment is safe, effective, and tailored to individual concerns. She maintains complete confidentiality and provides non-judgmental medical care for all conditions, including sensitive issues.
      </p>
    </section>
  </div>
);

export default Doctor;
