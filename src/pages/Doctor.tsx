import { Link } from "react-router-dom";
import doctor from "@/assets/doctor.jpg";
import { ArrowRight, GraduationCap, Award } from "lucide-react";

const Doctor = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <img src={doctor} alt="Dr. Pradnya Asutkar" loading="lazy" width={800} height={1024} className="rounded-3xl shadow-soft object-cover w-full max-w-md" />
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-magenta font-semibold">Doctor Profile</span>
          <h1 className="font-serif text-5xl md:text-6xl mt-3">Dr. Pradnya Asutkar</h1>
          <p className="mt-3 text-lg text-muted-foreground">Dermatologist & Aesthetic Medicine Specialist</p>
          <div className="mt-6 space-y-2">
            {["MBBS","MD (Skin & VD)","Fellowship in Lasers","Fellowship in Cosmetology & Aesthetic Medicine"].map(q => (
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
      <h2 className="font-serif text-4xl mb-6">Areas of Expertise</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {["Acne & Acne Scar Management","Hair Fall & Hair Restoration","PRP & GFC Therapy","Laser Treatments","Pigmentation Solutions","Cosmetic Dermatology","Anti-Ageing Procedures"].map(a => (
          <div key={a} className="p-4 rounded-xl bg-muted/40 border border-border flex items-center gap-3">
            <Award size={18} className="text-magenta" /> {a}
          </div>
        ))}
      </div>

      <h2 className="font-serif text-4xl mt-16 mb-4">Patient-Focused Treatment Philosophy</h2>
      <p className="text-muted-foreground leading-relaxed">
        Dr. Pradnya Asutkar believes every patient deserves a personalized, ethical, and result-oriented treatment plan. Combining modern dermatology techniques with attentive care, she ensures each treatment is safe, effective, and tailored to individual concerns.
      </p>
    </section>
  </div>
);

export default Doctor;
