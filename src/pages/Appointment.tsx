import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import doctor from "@/assets/doctor.jpg";
import {
  Stethoscope, Languages, GraduationCap, MapPin, Clock, Video, User, Calendar, ArrowRight, Phone, MessageCircle, BadgeCheck,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const specialisations = ["Dermatologist", "Cosmetologist", "Trichologist", "Dermatosurgery"];

const treats = [
  "Acne Scar","Acne","PRP","GFC","Hydrafacial","Mole removal","Skin biopsy","Chemical peel",
  "Laser hair removal","Pigmentation","Hair fall","Wart removal","Skin tag removal","Dermal Fillers",
  "Botox","Vitiligo","Melasma","Stretch marks","Tattoo removal","Microneedling","Skin rejuvenation",
];

const generateSlots = () => {
  const slots: string[] = [];
  for (let h = 10; h < 20; h++) {
    ["00", "30"].forEach(m => slots.push(`${String(h).padStart(2,"0")}:${m}`));
  }
  return slots;
};

const next7Days = () => {
  const days = [];
  const d = new Date();
  for (let i = 0; i < 7; i++) {
    const x = new Date(d);
    x.setDate(d.getDate() + i);
    days.push({
      iso: x.toISOString().slice(0, 10),
      label: x.toLocaleDateString(undefined, { weekday: "short" }),
      day: x.getDate(),
      month: x.toLocaleDateString(undefined, { month: "short" }),
    });
  }
  return days;
};

const Appointment = () => {
  const { toast } = useToast();
  const [mode, setMode] = useState<"clinic" | "tele">("clinic");
  const [date, setDate] = useState<string | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [patient, setPatient] = useState({ name: "", phone: "", email: "", notes: "" });
  const days = useMemo(next7Days, []);
  const slots = useMemo(generateSlots, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !slot || !patient.name || !patient.phone) {
      toast({ title: "Missing information", description: "Please pick a date, slot, and enter your name & phone.", variant: "destructive" });
      return;
    }
    toast({
      title: "Appointment Requested",
      description: `${mode === "clinic" ? "In-Clinic" : "Tele-Consult"} on ${date} at ${slot}. We'll confirm shortly.`,
    });
    setSlot(null);
    setPatient({ name: "", phone: "", email: "", notes: "" });
  };

  return (
    <div className="bg-muted/30 min-h-screen">
      <div className="container mx-auto py-10 grid lg:grid-cols-3 gap-6">
        {/* LEFT — doctor profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* header card */}
          <div className="bg-background rounded-2xl shadow-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <img src={doctor} alt="Dr. Pradnya Asutkar" loading="lazy" width={160} height={160} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-magenta-light" />
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">Registration No : MH-DERM-21458</div>
              <h1 className="font-serif text-3xl md:text-4xl mt-1">Dr. Pradnya Asutkar</h1>
              <div className="text-magenta font-semibold mt-1">Dermatologist · Cosmetologist</div>
              <p className="text-sm italic text-muted-foreground mt-2">
                MD (Skin & VD), Fellowship in Lasers & Aesthetic Medicine — board certified Dermatologist.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-light text-primary text-xs font-semibold">
                <BadgeCheck size={14} /> IN-CLINIC VISITS
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="font-semibold">10+ Yrs</div>
                    <div className="text-muted-foreground text-xs">Overall Experience</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Languages className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="font-semibold">English | हिंदी | मराठी</div>
                    <div className="text-muted-foreground text-xs">Languages</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* about */}
          <div className="bg-background rounded-2xl shadow-card p-6 md:p-8">
            <h2 className="font-serif text-2xl mb-3">About the Doctor</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Dr. Pradnya Asutkar is a board-certified dermatologist known for her compassionate and ethical approach to patient care.
              She specializes in advanced skin, hair, and laser treatments, combining medical expertise with aesthetic precision to deliver
              safe, effective, and result-oriented procedures for skin rejuvenation, pigmentation, hair restoration, and anti-ageing care.
            </p>
          </div>

          {/* specialisations */}
          <div className="bg-background rounded-2xl shadow-card p-6 md:p-8">
            <h2 className="font-serif text-2xl mb-4">Specialisations</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {specialisations.map(s => (
                <div key={s} className="flex items-center gap-3 p-3 rounded-lg bg-muted/40">
                  <Stethoscope size={16} className="text-primary" /> <span className="text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* commonly treats */}
          <div className="bg-background rounded-2xl shadow-card p-6 md:p-8">
            <h2 className="font-serif text-2xl mb-4">Commonly Treats</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {treats.map(t => (
                <div key={t} className="px-4 py-2.5 rounded-lg bg-muted/40 text-sm text-foreground/80 text-center">
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — booking */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-24 bg-background rounded-2xl shadow-card p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl">Book an Appointment</h2>
            </div>

            {/* mode tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-muted/50 rounded-xl">
              <button
                onClick={() => setMode("clinic")}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition ${mode==="clinic" ? "bg-gradient-primary text-primary-foreground shadow" : "text-foreground/70"}`}
              >
                <User size={16} /> In-Clinic
              </button>
              <button
                onClick={() => setMode("tele")}
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition ${mode==="tele" ? "bg-gradient-primary text-primary-foreground shadow" : "text-foreground/70"}`}
              >
                <Video size={16} /> Tele-Consult
              </button>
            </div>

            {/* clinic info */}
            <div className="p-4 rounded-xl border border-border">
              <div className="font-semibold text-sm">Dermatiqua Clinic</div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground mt-1">
                <MapPin size={14} className="shrink-0 mt-0.5" /> Nagpur, Maharashtra
              </div>
              <div className="flex items-start gap-2 text-xs text-muted-foreground mt-1">
                <Clock size={14} className="shrink-0 mt-0.5" /> Mon–Sat · 10:00 AM – 8:00 PM
              </div>
            </div>

            <form onSubmit={submit} className="space-y-4">
              {/* date picker */}
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold mb-2">
                  <Calendar size={14} /> Select Date
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
                  {days.map(d => (
                    <button type="button" key={d.iso} onClick={() => setDate(d.iso)}
                      className={`shrink-0 w-16 py-2 rounded-xl border text-center transition ${date===d.iso ? "bg-gradient-primary text-primary-foreground border-transparent" : "bg-background border-border hover:border-primary/40"}`}>
                      <div className="text-[10px] uppercase tracking-wider opacity-80">{d.label}</div>
                      <div className="font-serif text-xl leading-none mt-1">{d.day}</div>
                      <div className="text-[10px] mt-0.5 opacity-80">{d.month}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* slots */}
              <div>
                <div className="text-sm font-semibold mb-2">Select Time Slot</div>
                <div className="grid grid-cols-3 gap-2 max-h-44 overflow-y-auto">
                  {slots.map(s => (
                    <button type="button" key={s} onClick={() => setSlot(s)}
                      className={`py-2 rounded-lg border text-xs font-medium transition ${slot===s ? "bg-magenta text-white border-transparent" : "bg-background border-border hover:border-magenta/50"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* patient details */}
              <div className="grid gap-3 pt-2">
                <input required value={patient.name} onChange={e => setPatient({ ...patient, name: e.target.value })}
                  placeholder="Full Name" className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input required type="tel" value={patient.phone} onChange={e => setPatient({ ...patient, phone: e.target.value })}
                  placeholder="Phone Number" className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="email" value={patient.email} onChange={e => setPatient({ ...patient, email: e.target.value })}
                  placeholder="Email (optional)" className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <textarea value={patient.notes} onChange={e => setPatient({ ...patient, notes: e.target.value })}
                  placeholder="Reason for visit (optional)" rows={2} className="px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-gradient-primary text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition">
                Confirm Appointment <ArrowRight size={16} />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a href="tel:8459323304" className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border text-sm font-semibold hover:border-primary transition">
                  <Phone size={14} /> Call
                </a>
                <a href="https://wa.me/918459323304" className="inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-magenta text-white text-sm font-semibold hover:opacity-90 transition">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </form>

            <p className="text-[11px] text-muted-foreground text-center pt-2">
              By confirming you agree to our <Link to="/" className="underline">terms</Link>. We will contact you to verify the slot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
