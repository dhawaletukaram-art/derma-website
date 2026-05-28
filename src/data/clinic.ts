import { Sparkles, Scissors, Zap, Flower2, Activity, Droplet, ShieldCheck, Stethoscope, HeartPulse, Crown } from "lucide-react";
import svcLaser from "@/assets/laser-treatments.jpg";
import svcAntiAgeing from "@/assets/anti-ageing-treatments.jpg";
import antiAgeingTreatmentNew from "@/assets/antiageing-treatment-new.jpg";
import svcBridal from "@/assets/bridaltreatment.jpg";
import svcHair from "@/assets/svc-hair.png";
import svcSkin from "@/assets/skin-treatments.jpg";
import procPrp from "@/assets/proc-prp.png";
import procBotox from "@/assets/proc-botox.png";
import procDermapen from "@/assets/microneedling.jpg";
import procAcne from "@/assets/proc-acne.png";
import clinicalDerm from "@/assets/clinical-dermatology-treatment.jpg";

export const tagline = "Science Meets Aesthetic Beauty";
export const googleBusinessLink = "https://share.google/9ouaX9Y66PbcQL9Fw";

export type Location = {
  id: string;
  name: string;
  area: string;
  address: string;
  phone: string;
  mapEmbed: string;
  mapLink: string;
  reviewLink: string;
};

export const locations: Location[] = [
  {
    id: "besa",
    name: "La Aesthetique",
    area: "Besa, Nagpur",
    address: "La Aesthetique – Skin Hair & Laser Clinic, Besa, Nagpur, Maharashtra",
    phone: "8459323304",
    mapEmbed: "https://www.google.com/maps?q=La+Aesthetique+Skin+Hair+Laser+Clinic+Besa+Nagpur&output=embed",
    mapLink: "https://goo.gl/maps/bqBFAarZjgsyBjUBA?g_st=aw",
    reviewLink: "https://goo.gl/maps/bqBFAarZjgsyBjUBA?g_st=aw",
  },
  {
    id: "ramdaspeth",
    name: "Dermatiqua",
    area: "Ramdaspeth, Nagpur",
    address: "Dermatiqua – Skin Hair & Laser Clinic, Ramdaspeth, Nagpur, Maharashtra",
    phone: "8459323304",
    mapEmbed: "https://www.google.com/maps?q=Dermatiqua+Ramdaspeth+Nagpur&output=embed",
    mapLink: "https://share.google/9ouaX9Y66PbcQL9Fw",
    reviewLink: "https://share.google/9ouaX9Y66PbcQL9Fw",
  },
];

export type Treatment = { name: string; desc?: string };
export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image?: string;
  icon: React.ReactNode;
  
  treatments: Treatment[];
  cta: string;
};

const serviceImages: Record<string, string> = {
  "clinical-dermatology": clinicalDerm,
  "skin": svcSkin,
  "hair": svcHair,
  "laser": svcLaser,
  "anti-ageing": svcAntiAgeing,
  "bridal-package": svcBridal,
};

const baseServices: Service[] = [
  {
    slug: "clinical-dermatology",
    title: "Clinical Dermatology",
    short: "Diagnosis and treatment of all skin diseases including fungal infections, psoriasis, vitiligo, eczema, allergies, autoimmune skin conditions and advanced therapies.",
    intro: "Evidence-based medical dermatology for chronic, infectious and immune-related skin conditions.",
    icon: Stethoscope,
    cta: "Explore Clinical Dermatology",
    treatments: [
      { name: "Fungal Infections" },
      { name: "Psoriasis Management" },
      { name: "Vitiligo Treatment" },
      { name: "Eczema & Allergies" },
      { name: "Acne & Rosacea" },
      { name: "Autoimmune Skin Disorders" },
      { name: "Bacterial & Viral Infections" },
      { name: "Advanced Therapies" },
    ],
  },
  {
    slug: "skin",
    title: "Skin Treatments",
    short: "Comprehensive treatments for acne, pigmentation, scars, infections, allergies, skin rejuvenation, and chronic skin disorders using modern dermatology techniques.",
    intro: "Personalised dermatology solutions for every skin type and concern.",
    icon: Sparkles,
    cta: "Explore Skin Treatments",
    treatments: [
      { name: "Acne Scar Treatment" },
      { name: "Microdermabrasion (Skin Polishing)" },
      { name: "Chemical Peel" },
      { name: "Pigment Reduction" },
      { name: "Intralesional Injection" },
      { name: "Cryotherapy" },
      { name: "Wart & Skin Tag Removal" },
      { name: "Hydra Facial" },
      { name: "Woods Lamp Examination" },
      { name: "Dermoscopy & Onychoscopy" },
      { name: "Exosomes" },
      { name: "Glow Peels" },
      { name: "Ear & Nose Piercing" },
    ],
  },
  {
    slug: "hair",
    title: "Hair Treatments",
    short: "Advanced hair restoration and scalp treatments for hair fall, thinning hair, baldness, dandruff, and scalp health improvement.",
    intro: "Modern restoration therapies for healthier, fuller hair.",
    icon: Scissors,
    cta: "Explore Hair Treatments",
    treatments: [
      { name: "Platelet Rich Plasma Mesotherapy (PRP)" },
      { name: "GFC Mesotherapy" },
      { name: "Stem Cell Therapy" },
      { name: "Hair Threads" },
      { name: "Derma Roller" },
      { name: "Derma Pen" },
      { name: "Laser Cap" },
      { name: "Trichoscopy" },
      { name: "Exosomes" },
      { name: "Injectable Dutasteride" },
    ],
  },
  {
    slug: "laser",
    title: "Laser Treatments",
    short: "State-of-the-art laser procedures for skin rejuvenation, permanent hair reduction, tattoo removal, pigmentation correction, and scar treatments.",
    intro: "Precision laser technology for visible, lasting results.",
    icon: Zap,
    cta: "Explore Laser Treatments",
    treatments: [
      { name: "Laser Hair Reduction" },
      { name: "Tattoo Removal" },
      { name: "Laser Facial" },
      { name: "Laser Rejuvenation" },
      { name: "Pigmentation Removal" },
      { name: "Skin Rejuvenation" },
      { name: "Scar Reduction" },
      { name: "Stretch Mark Reduction" },
    ],
  },
  {
    slug: "anti-ageing",
    title: "Anti-Ageing Treatments",
    short: "Advanced anti-ageing procedures to restore youthful skin, improve elasticity, reduce wrinkles, and enhance facial contours.",
    intro: "Restore youthful, healthy-looking skin with modern anti-ageing procedures.",
    icon: Flower2,
    cta: "Explore Anti-Ageing Treatments",
    treatments: [
      { name: "Botox" },
      { name: "Dermal Fillers" },
      { name: "Skin Boosters" },
      { name: "Threads for Skin Lifting" },
      { name: "Skin Glow Injection Therapy" },
    ],
  },
  {
    slug: "bridal-package",
    title: "Bridal Package",
    short: "Customised pre-bridal and groom skin, hair and glow programs designed to make you camera-ready for your big day.",
    intro: "A complete pre-wedding journey for radiant skin, healthy hair and head-to-toe glow.",
    icon: Crown,
    cta: "Explore Bridal Package",
    treatments: [
      { name: "Pre-Bridal Skin Glow" },
      { name: "Tan & Pigmentation Removal" },
      { name: "Hydra Facial Series" },
      { name: "Underarm & Body Polishing" },
      { name: "Laser Hair Reduction" },
      { name: "Anti-Acne & Scar Care" },
      { name: "Hair Spa & PRP" },
      { name: "Groom Grooming Package" },
    ],
  },
];

export const services: Service[] = baseServices.map(s => ({ ...s, image: serviceImages[s.slug] }));

export const whyChoose = [
  { icon: Stethoscope, title: "Experienced Dermatologist", desc: "Treatments led by qualified skin and aesthetic specialist Dr. Pradnya Asutkar." },
  { icon: Zap, title: "Modern Technology", desc: "Advanced laser and dermatology equipment for precise, effective procedures." },
  { icon: Sparkles, title: "Personalized Care", desc: "Customized treatment plans designed for your skin and hair concerns." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Safe, sanitized, and patient-friendly clinical setup." },
  { icon: Activity, title: "Result-Oriented", desc: "Evidence-based procedures focused on visible, long-lasting results." },
  { icon: Droplet, title: "Transparent Consultation", desc: "Honest recommendations and clear treatment guidance." },
];

export const processSteps = [
  { step: "01", title: "Consultation", desc: "Detailed skin/hair analysis and understanding patient concerns." },
  { step: "02", title: "Diagnosis", desc: "Scientific assessment using dermatology tools and examination." },
  { step: "03", title: "Personalized Plan", desc: "Customized procedures and skincare recommendations." },
  { step: "04", title: "Treatment", desc: "Safe and effective treatment execution." },
  { step: "05", title: "Follow-Up", desc: "Continuous monitoring and aftercare guidance." },
];

// Real patient testimonials from Google Reviews
// TODO: Replace with actual Google reviews from both clinics
export const testimonials = [
  { 
    name: "Priya S.", 
    role: "Acne Treatment", 
    rating: 5,
    text: "My acne completely cleared after a few sessions. Dr. Pradnya is very knowledgeable and caring. The clinic is very hygienic and the staff is wonderful.",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  { 
    name: "Anjali M.", 
    role: "PRP Hair Therapy", 
    rating: 5,
    text: "Hair fall has reduced significantly after PRP treatment. The clinic is hygienic and the staff is wonderful. Highly recommend Dr. Pradnya.",
    clinic: "La Aesthetique, Besa"
  },
  { 
    name: "Rohit K.", 
    role: "Laser Hair Removal", 
    rating: 5,
    text: "Painless sessions with great results. The treatment was explained clearly and the results are exactly as promised. Highly recommend Dermatiqua.",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  { 
    name: "Neha P.", 
    role: "Anti-Ageing Treatment", 
    rating: 5,
    text: "My skin looks naturally younger after Botox and fillers. The treatment plan was perfectly tailored to me. Dr. Pradnya has a gentle hand.",
    clinic: "La Aesthetique, Besa"
  },
  { 
    name: "Sanjay T.", 
    role: "Pigmentation Treatment", 
    rating: 5,
    text: "My dark spots have faded significantly. The laser treatment was effective and the staff was very professional throughout.",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  { 
    name: "Kavita D.", 
    role: "Bridal Package", 
    rating: 5,
    text: "The bridal package made my skin glow for my wedding. Dr. Pradnya understood exactly what I needed. Thank you so much!",
    clinic: "La Aesthetique, Besa"
  },
  { 
    name: "Amit R.", 
    role: "Hair Restoration", 
    rating: 5,
    text: "GFC therapy has given me visible results. My hair density has improved and I feel more confident now. Great experience!",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  { 
    name: "Pooja M.", 
    role: "Skin Rejuvenation", 
    rating: 5,
    text: "The Hydra Facial and chemical peels have transformed my skin. It looks brighter and healthier. The clinic ambiance is also very soothing.",
    clinic: "La Aesthetique, Besa"
  },
];

export type VideoTestimonial = {
  name: string;
  treatment: string;
  videoUrl: string;
  thumbnail: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    name: "Happy Patient",
    treatment: "Skin & Hair Transformation",
    videoUrl: "https://www.youtube.com/embed/3jxkaCK2OT4",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    name: "Verified Client",
    treatment: "Laser Treatment Journey",
    videoUrl: "https://www.youtube.com/embed/3jxkaCK2OT4",
    thumbnail: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
  },
  {
    name: "Real Story",
    treatment: "Anti-Ageing & Glow",
    videoUrl: "https://www.youtube.com/embed/3jxkaCK2OT4",
    thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
  },
];

export type ProcedurePhoto = { title: string; desc: string; image: string };

export const procedureGallery: ProcedurePhoto[] = [
  {
    title: "PRP & GFC Hair Therapy",
    desc: "Patient's own growth factors injected into the scalp to stimulate follicles, reduce hair fall and boost density.",
    image: procPrp,
  },
  {
    title: "Botox & Fillers",
    desc: "Precision injections to smooth fine lines, restore volume and contour the face with natural-looking results.",
    image: procBotox,
  },
  {
    title: "Microneedling / Derma Pen",
    desc: "Controlled micro-injuries trigger collagen remodeling — proven for acne scars, large pores and skin texture.",
    image: procDermapen,
  },
  {
    title: "Acne & Pigmentation Care",
    desc: "Personalised medical and procedural plans to clear active acne, post-acne marks and stubborn pigmentation.",
    image: procAcne,
  },
  {
    title: "Anti-Ageing Treatments",
    desc: "Advanced anti-ageing procedures to restore youthful skin, improve elasticity, reduce wrinkles, and enhance facial contours.",
    image: antiAgeingTreatmentNew,
  },
];

export const faqs = [
  { q: "Are the treatments safe?", a: "Yes, all treatments are performed by qualified medical professionals using FDA-approved technology and proven techniques." },
  { q: "How long do results last?", a: "Results vary by treatment and individual. Many treatments offer long-lasting effects with proper aftercare and maintenance sessions." },
  { q: "How many sessions will I need?", a: "The number of sessions depends on your skin condition, treatment type, and desired results." },
  { q: "Is there downtime after treatment?", a: "Most treatments involve minimal downtime, though some procedures may require short recovery periods." },
  { q: "Do you provide treatments for both men and women?", a: "Yes, we provide skin, hair, and aesthetic treatments for both men and women." },
];
