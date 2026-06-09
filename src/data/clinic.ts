import { Sparkles, Scissors, Zap, Flower2, Activity, Droplet, ShieldCheck, Stethoscope, HeartPulse, Crown } from "lucide-react";
import svcLaser from "@/assets/laser-treatments.jpg";
import svcAntiAgeing from "@/assets/antiageing-treatment-new.jpg";
import svcBridal from "@/assets/bridaltreatment.jpg";
import svcHair from "@/assets/svc-hair.png";
import svcSkinTreatments from "@/assets/skin-treatments-final.jpg";
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
  icon: any;
  
  treatments: Treatment[];
  cta: string;
};

const serviceImages: Record<string, string> = {
  "clinical-dermatology": clinicalDerm,
  "skin": svcSkinTreatments,
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
      { name: "Fungal Infections", desc: "Diagnosis and treatment of ringworm, candidiasis and resistant fungal infections." },
      { name: "Psoriasis Management", desc: "Comprehensive care including topical, systemic and biologic therapies." },
      { name: "Vitiligo Treatment", desc: "Phototherapy, topical and advanced surgical options for repigmentation." },
      { name: "Eczema & Allergies", desc: "Patch testing and personalised plans for atopic dermatitis and skin allergies." },
      { name: "Acne & Rosacea", desc: "Medical management of inflammatory acne, cystic acne and rosacea." },
      { name: "Autoimmune Skin Disorders", desc: "Care for lichen planus, pemphigus, lupus and connective tissue disorders." },
      { name: "Bacterial & Viral Infections", desc: "Treatment of impetigo, herpes, warts and molluscum contagiosum." },
      { name: "Advanced Therapies", desc: "Biologics, immunomodulators and phototherapy for resistant skin diseases." },
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
      { name: "Acne Scar Treatment", desc: "Targeted procedures to reduce acne scars and improve skin texture." },
      { name: "Microdermabrasion (Skin Polishing)", desc: "Gentle exfoliation for smoother, fresher-looking skin." },
      { name: "Chemical Peels", desc: "Exfoliating treatments to brighten skin tone and texture." },
      { name: "Pigmentation Reduction", desc: "Treatments for melasma, dark spots, and uneven skin tone." },
      { name: "Intralesional Injections", desc: "Precision treatment for specific skin conditions." },
      { name: "Wart & Skin Tag Removal", desc: "Safe, in-clinic removal of warts and skin tags." },
      { name: "Hydra Facial", desc: "Deep cleansing and hydration for glowing, refreshed skin." },
      { name: "Dermoscopy & Onychoscopy", desc: "Advanced diagnostics for skin and nail examination." },
      { name: "Glow Peels", desc: "Brightening peels for luminous, radiant skin." },
      { name: "Ear & Nose Piercing", desc: "Safe, hygienic piercing services." },
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
      { name: "Platelet Rich Plasma Mesotherapy (PRP)", desc: "Platelet-rich plasma to stimulate natural hair growth." },
      { name: "GFC Mesotherapy", desc: "Growth factor concentrate therapy for hair density." },
      { name: "Stem Cell Therapy", desc: "Advanced regenerative treatment for hair restoration." },
      { name: "Hair Threads", desc: "Thread-based stimulation for follicle health." },
      { name: "Derma Roller", desc: "Microneedling for scalp stimulation and hair growth." },
      { name: "Derma Pen", desc: "Precision microneedling for hair regrowth therapy." },
      { name: "Laser Cap", desc: "Low-level laser therapy for hair density." },
      { name: "Exosomes", desc: "Advanced regenerative therapy for hair restoration." },
      { name: "Trichoderma Undateride", desc: "Specialized treatment for scalp and hair health." },
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
      { name: "Laser Hair Reduction", desc: "Long-lasting laser hair reduction for all body areas." },
      { name: "Tattoo Removal", desc: "Safe laser removal of unwanted tattoos." },
      { name: "Laser Facial Rejuvenation", desc: "Brightening laser facial for radiant skin." },
      { name: "Pigmentation Removal", desc: "Targeted laser treatment for pigmentation and dark spots." },
      { name: "Skin Rejuvenation", desc: "Laser therapy for youthful, radiant skin." },
      { name: "Scar Reduction", desc: "Laser procedures to minimise scars and irregularities." },
      { name: "Stretch Mark Reduction", desc: "Advanced treatments to reduce stretch marks." },
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
      { name: "Botox", desc: "Reduces fine lines and wrinkles for a smoother appearance." },
      { name: "Dermal Fillers", desc: "Restores volume and enhances facial contours." },
      { name: "Skin Boosters", desc: "Hydrating injectables for radiant, plump skin." },
      { name: "Threads for Skin Lifting", desc: "Non-surgical lifting and tightening using threads." },
      { name: "Skin Glow Injection Therapy", desc: "Treatments for luminous, glowing complexion." },
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
      { name: "Pre-Bridal Skin Glow", desc: "Customised facials, peels and skin boosters for a luminous complexion." },
      { name: "Tan & Pigmentation Removal", desc: "Targeted treatments for even, bright skin tone before the wedding." },
      { name: "Hydra Facial Series", desc: "Multi-session hydration and deep cleansing for radiant skin." },
      { name: "Underarm & Body Polishing", desc: "Brightening treatments for underarms, neck, back and feet." },
      { name: "Laser Hair Reduction", desc: "Long-term smooth, hair-free skin for full body or selected areas." },
      { name: "Anti-Acne & Scar Care", desc: "Medical plans to clear active acne and reduce scars before the big day." },
      { name: "Hair Spa & PRP", desc: "Scalp care, hair density and shine boosters for bride and groom." },
      { name: "Groom Grooming Package", desc: "Tailored skin and hair plans for the groom's wedding-ready look." },
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
    name: "Satisfied Patient",
    role: "General Recommendation",
    rating: 5,
    text: "Very good clinic to be recommended for any type of skin treatment. Dr Pradnya is very soft spoken and cooperative. ❤️",
    clinic: "La Aesthetique, Besa"
  },
  {
    name: "Face Pores Patient",
    role: "Online Consultation - Facial Pores",
    rating: 5,
    text: "I found the Dr. Pradnya very helpful for my face pores through online consultation. It's in Pushpkunj Complex, Ramdaspeth, Nagpur.",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  {
    name: "Manish Gaydhane",
    role: "Pigmentation & Acne Marks",
    rating: 5,
    text: "I have consulted Dr Pradnya mam for pigmentation and acne marks and got very good results. Thank you mam. Staff is very polite. I highly recommend her ❤️",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  {
    name: "Navin Bais",
    role: "Acne Treatment",
    rating: 5,
    text: "I am taking treatment from Dr. Pradnya mam for acne and got good results. She explains everything in detail and clearly. She is very knowledgeable and the best doctor. I highly recommend her.",
    clinic: "La Aesthetique, Besa"
  },
  {
    name: "Pravin B. Sanap",
    role: "Pigmentation & Wrinkles",
    rating: 5,
    text: "Best dermatologist in Nagpur. I visited the clinic for wrinkles and pigmentation and got wonderful results. I highly recommend her. Dr. Pradnya is an excellent dermatologist.",
    clinic: "La Aesthetique, Besa"
  },
  {
    name: "Anvesha Wandile",
    role: "Skin Glow Treatment",
    rating: 5,
    text: "First time we visited mam, she was so kind and her treatment was so good. After treatment my skin glow. She explains me very well. I love her nature and her treatment.",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  {
    name: "Asmita Khonde",
    role: "Hair Fall Treatment",
    rating: 5,
    text: "I visited Dr. Pradnya mam's clinic and got wonderful results for my hairfall problem. Mam is very experienced and the best dermatologist I have ever visited. The way she talks, you feel your half problem is solved. I highly recommend her.",
    clinic: "Dermatiqua, Ramdaspeth"
  },
  {
    name: "Sakshi Bisen",
    role: "Skin Infection Treatment",
    rating: 5,
    text: "I have been with Dr. Pradnya mam for 2 years. She is very kind and gives 100% good treatment. Got great results for my infection treatment. I highly recommend her. Happy to be a part of La Aesthetique clinic.",
    clinic: "La Aesthetique, Besa"
  },
  {
    name: "Rashmi Sakharwade",
    role: "Pre-Bridal Beauty Treatment",
    rating: 5,
    text: "I consulted Dr. Pradnya Asutkar ma'am for pre-bridal beauty treatment and skin polishing for my wedding. I got excellent results with the treatment she suggested. She is very talented and skilled — the best dermatologist I've ever met. I highly recommend her. Thank you ma'am!",
    clinic: "La Aesthetique, Besa"
  },
  {
    name: "Kiran Gokhale",
    role: "Hair Fall & Allergy Treatment",
    rating: 5,
    text: "I got excellent results in hairfall treatment. I was also suffering from allergy for the last 5 years. Dr. Pradnya advised me blood tests and after following her advice and treatment, I am now free from allergy. She has great expertise in hair procedures and her counseling is very nice. I recommend everyone to visit her clinic.",
    clinic: "La Aesthetique, Besa"
  },
  {
    name: "Pragati Kul",
    role: "Acne Treatment",
    rating: 5,
    text: "I visited La Aesthetique for persistent acne and within a few weeks my skin improved drastically. Dr. Asutkar explained the root cause of my pimples instead of just prescribing creams. Clean clinic, professional staff, and visible results. Thank you so much ma'am for making me feel confident!",
    clinic: "La Aesthetique, Besa"
  },
  {
    name: "Sameer Moon",
    role: "Father-in-Law Psoriasis Treatment",
    rating: 5,
    text: "I consulted Dr. Pradnya mam for my father-in-law who was suffering from long-term psoriasis. He was admitted to the hospital under her guidance and recovered within a week of starting treatment. We are very happy with her consultation. I strongly recommend Dr. Pradnya mam for any skin-related issues.",
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
