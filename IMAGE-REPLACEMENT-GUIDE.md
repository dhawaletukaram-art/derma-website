# Image Replacement Guide

This guide will help you replace all placeholder images with your actual clinic photos and patient transformation images.

---

## 📁 Step 1: Organize Your Images

Create these folders in your project:

```
src/assets/
├── clinic/          (for About page clinic photos)
└── gallery/         (for Gallery page before/after images)
```

---

## 🏥 About Page - Clinic Facility Images

**Location in code:** `src/pages/About.tsx`

**What you need:** 6 high-quality photos of your clinic facilities

### Images to Provide:

1. **Reception & Waiting Area**
   - File name: `clinic-reception.jpg`
   - Shows: Front desk, waiting area, comfortable seating
   - Recommended size: 800x600px

2. **Consultation Room**
   - File name: `clinic-consultation.jpg`
   - Shows: Doctor's consultation desk, examination area
   - Recommended size: 800x600px

3. **Treatment Room**
   - File name: `clinic-treatment.jpg`
   - Shows: Treatment bed, equipment, clean environment
   - Recommended size: 800x600px

4. **Laser Equipment**
   - File name: `clinic-laser.jpg`
   - Shows: Your laser machines, technology
   - Recommended size: 800x600px

5. **Procedure Room**
   - File name: `clinic-procedure.jpg`
   - Shows: Sterile procedure room setup
   - Recommended size: 800x600px

6. **Skin Analysis Station**
   - File name: `clinic-analysis.jpg`
   - Shows: Diagnostic equipment, analysis tools
   - Recommended size: 800x600px

### How to Replace:

1. Place all 6 images in: `src/assets/clinic/`
2. Open `src/pages/About.tsx`
3. Find the section with `facility.image`
4. Replace the image URLs with:
   ```typescript
   import clinicReception from "@/assets/clinic/clinic-reception.jpg";
   import clinicConsultation from "@/assets/clinic/clinic-consultation.jpg";
   import clinicTreatment from "@/assets/clinic/clinic-treatment.jpg";
   import clinicLaser from "@/assets/clinic/clinic-laser.jpg";
   import clinicProcedure from "@/assets/clinic/clinic-procedure.jpg";
   import clinicAnalysis from "@/assets/clinic/clinic-analysis.jpg";
   ```

---

## 🖼️ Gallery Page - Before & After Images

**Location in code:** `src/pages/Gallery.tsx`

**What you need:** 12 images (6 before + 6 after) showing patient transformations

### Images to Provide:

#### 1. Acne Treatment Results
- **Before:** `gallery/acne-before.jpg`
- **After:** `gallery/acne-after.jpg`
- Shows: Clear improvement in acne, reduced inflammation

#### 2. Pigmentation Correction
- **Before:** `gallery/pigmentation-before.jpg`
- **After:** `gallery/pigmentation-after.jpg`
- Shows: Even skin tone, reduced dark spots

#### 3. Hair Regrowth Transformation
- **Before:** `gallery/hair-before.jpg`
- **After:** `gallery/hair-after.jpg`
- Shows: Increased hair density, reduced bald patches

#### 4. Laser Hair Reduction
- **Before:** `gallery/laser-hair-before.jpg`
- **After:** `gallery/laser-hair-after.jpg`
- Shows: Smooth, hair-free skin

#### 5. Anti-Ageing Results
- **Before:** `gallery/antiaging-before.jpg`
- **After:** `gallery/antiaging-after.jpg`
- Shows: Reduced wrinkles, firmer skin

#### 6. Skin Rejuvenation
- **Before:** `gallery/rejuvenation-before.jpg`
- **After:** `gallery/rejuvenation-after.jpg`
- Shows: Brighter, glowing complexion

### Image Requirements:
- **Format:** JPG or PNG
- **Size:** 600x600px (square format works best)
- **Quality:** High resolution, well-lit
- **Consent:** Ensure patient consent for all images
- **Privacy:** Consider blurring faces if needed

### How to Replace:

1. Place all 12 images in: `src/assets/gallery/`
2. Open `src/pages/Gallery.tsx`
3. Import your images at the top:
   ```typescript
   import acneBefore from "@/assets/gallery/acne-before.jpg";
   import acneAfter from "@/assets/gallery/acne-after.jpg";
   // ... and so on for all 12 images
   ```
4. Update the `galleryItems` array with your image imports

---

## 💬 Testimonials - Real Google Reviews

**Location in code:** `src/data/clinic.ts`

**What you need:** 8-12 actual Google reviews from your patients

### Information to Provide for Each Review:

```
Name: [Patient name or initials]
Rating: [1-5 stars]
Treatment: [What treatment they received]
Review Text: [Their actual review]
Clinic: [Dermatiqua, Ramdaspeth OR La Aesthetique, Besa]
```

### Example Format:

```typescript
{
  name: "Mrs. Priya Sharma",
  role: "Acne Treatment",
  rating: 5,
  text: "Dr. Pradnya completely transformed my skin. After struggling with acne for years, her treatment plan cleared my skin in just 3 months. The clinic is very hygienic and the staff is caring.",
  clinic: "Dermatiqua, Ramdaspeth"
}
```

### How to Replace:

1. Open `src/data/clinic.ts`
2. Find the `testimonials` array
3. Replace the placeholder testimonials with your actual Google reviews
4. Keep the same structure (name, role, rating, text, clinic)

---

## 🎯 Quick Replacement Checklist

- [ ] Create `src/assets/clinic/` folder
- [ ] Create `src/assets/gallery/` folder
- [ ] Add 6 clinic facility photos
- [ ] Add 12 before/after transformation images
- [ ] Collect 8-12 Google reviews
- [ ] Update `About.tsx` with clinic images
- [ ] Update `Gallery.tsx` with before/after images
- [ ] Update `clinic.ts` with real testimonials
- [ ] Test website locally
- [ ] Commit and push to GitHub
- [ ] Verify on Vercel deployment

---

## 📝 Notes

### Image Optimization Tips:
- Compress images before uploading (use tools like TinyPNG)
- Keep file sizes under 500KB each
- Use JPG for photos, PNG for graphics
- Ensure good lighting and professional quality

### Patient Privacy:
- Always get written consent before using patient photos
- Consider blurring faces if patients prefer
- Remove any identifying information if needed
- Keep consent forms on file

### Testing:
After replacing images, test locally:
```bash
npm run dev
```

Then check:
- All images load correctly
- No broken image links
- Images look good on mobile and desktop
- Page load speed is acceptable

---

## 🚀 Deployment

Once all images are replaced:

1. **Commit changes:**
   ```bash
   git add .
   git commit -m "Add actual clinic photos and patient testimonials"
   git push
   ```

2. **Vercel will automatically deploy** your changes

3. **Check live site:** https://derma-authority-ready-main.vercel.app

---

## 💡 Need Help?

If you need assistance with:
- Image editing or optimization
- Updating the code
- Testing the changes
- Deployment issues

Just let me know and I'll help you through it!

---

*Last Updated: May 27, 2026*
