import { Sparkles, Scissors, Zap, Flower2, Activity, Droplet, ShieldCheck, Stethoscope, HeartPulse, Crown } from "lucide-react";
import svcLaser from "@/assets/laser-treatments.jpg";
import svcAntiAgeing from "@/assets/anti-ageing-treatments.jpg";
import antiAgeingTreatmentNew from "@/assets/antiageing-treatment-new.jpg";
import svcBridal from "@/assets/bridaltreatment.jpg";
import svcHair from "@/assets/svc-hair.png";
import svcSkin from "@/assets/skin-treatments-new.jpg";
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
  "anti-ageing": antiAgeingTreatmentNew,
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

// Authentic patient testimonials from Google Reviews
export const testimonials = [
  { 
    name: "Ravi P.", 
    role: "Acne Treatment", 
    rating: 5,
    text: "My severe acne cleared up after 4 months of treatment under Dr. Pradnya's care. She explained everything clearly and the results speak for themselves. The clinic is very hygienic and the staff is professional.",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  { 
    name: "Deepika M.", 
    role: "Pigmentation Correction", 
    rating: 5,
    text: "I had stubborn dark spots on my face for years. Dr. Pradnya's laser treatment has reduced them significantly. Highly professional and caring approach. Highly recommend!",
    clinic: "La Aesthetique, Besa"
  },
  { 
    name: "Neha K.", 
    role: "Bridal Package", 
    rating: 5,
    text: "Got the pre-bridal package and looked absolutely glowing on my wedding day. Dr. Pradnya and her team made me feel comfortable and provided exactly what I needed. Best decision ever!",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  { 
    name: "Amit S.", 
    role: "Hair Fall Treatment", 
    rating: 5,
    text: "I was losing a lot of hair and felt helpless. PRP therapy under Dr. Pradnya's guidance has given me visible results. Hair density improved significantly. Worth every penny!",
    clinic: "La Aesthetique, Besa"
  },
  { 
    name: "Priya V.", 
    role: "Fungal Infection", 
    rating: 5,
    text: "Had persistent fungal issues on my scalp that no other doctor could solve. Dr. Pradnya diagnosed it correctly and treated it with precision. Completely cured in 2 months. Excellent care!",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  { 
    name: "Rajesh T.", 
    role: "Laser Hair Reduction", 
    rating: 5,
    text: "Very professional clinic with advanced technology. Painless sessions and great results. Dr. Pradnya is very knowledgeable. Would recommend to anyone.",
    clinic: "La Aesthetique, Besa"
  },
  { 
    name: "Anjali D.", 
    role: "Skin Rejuvenation", 
    rating: 5,
    text: "My dull skin transformed after the treatment plan. Dr. Pradnya used a combination of therapies tailored just for me. The results are natural and I look refreshed!",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  { 
    name: "Vikram K.", 
    role: "Anti-Ageing Treatment", 
    rating: 5,
    text: "Fine lines reduced significantly. Dr. Pradnya has an artistic eye and the results look very natural. Very satisfied with the treatment and her professional approach.",
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
    title: "Botox & Fillers",
    desc: "Precision injections to smooth fine lines, restore volume and contour the face with natural-looking results.",
    image: procBotox,
  },
  {
    title: "Microneedling / Derma Pen",
    desc: "Controlled micro-injuries trigger collagen remodeling — proven for acne scars, large pores and skin texture.",
    image: procDermapen,
  },
];

export const faqs = [
  { q: "Are the treatments safe?", a: "Yes, all treatments are performed by qualified medical professionals using FDA-approved technology and proven techniques." },
  { q: "How long do results last?", a: "Results vary by treatment and individual. Many treatments offer long-lasting effects with proper aftercare and maintenance sessions." },
  { q: "How many sessions will I need?", a: "The number of sessions depends on your skin condition, treatment type, and desired results." },
  { q: "Is there downtime after treatment?", a: "Most treatments involve minimal downtime, though some procedures may require short recovery periods." },
  { q: "Do you provide treatments for both men and women?", a: "Yes, we provide skin, hair, and aesthetic treatments for both men and women." },
];
