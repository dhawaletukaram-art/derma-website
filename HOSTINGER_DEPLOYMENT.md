# 🚀 Derma Website - Hostinger Deployment Guide

## ✅ PRE-DEPLOYMENT CHECKLIST

- [x] React app built successfully (`dist/` folder ready)
- [x] .htaccess file configured for React Router
- [x] All latest changes committed to GitHub
- [x] Environment variables configured

---

## 📋 DEPLOYMENT STEPS (Copy-Paste Ready)

### STEP 1: Build the App (Run Locally First)
```bash
cd derma-website-new
npm install
npm run build
```
✅ Output: `dist/` folder created with all production files

---

### STEP 2: Login to Hostinger Dashboard
1. Go to: https://www.hostinger.com/login
2. Login with your credentials
3. Navigate to your domain dashboard

---

### STEP 3: Open File Manager
1. Click **"Manage"** on your domain
2. Click **"File Manager"**
3. You should see your hosting account files

---

### STEP 4: Navigate to Root Folder
1. Go to: `public_html/`
2. Delete any default `index.html` file (if present)
3. Delete any `.htaccess` file (we'll upload ours)

---

### STEP 5: Upload Production Files
⚠️ **IMPORTANT:** Upload contents of `dist/`, NOT the `dist/` folder itself

**Correct Structure:**
```
public_html/
├── index.html
├── .htaccess
└── assets/
    ├── index-xyz.css
    ├── index-xyz.js
    └── [all image files]
```

**Steps:**
1. In File Manager, click **"Upload"**
2. Select all contents from your local `dist/` folder
3. Upload everything to `public_html/`
4. Verify `.htaccess` is uploaded (it might be hidden - enable "Show Hidden Files")

---

### STEP 6: Enable SSL Certificate 🔒
1. In Hostinger dashboard, find **"SSL Certificate"** section
2. Click **"Activate"** or **"Install"**
3. Wait for activation (usually instant)

---

### STEP 7: Test Your Website
1. Open browser
2. Go to: `https://yourdomain.com`
3. Should load without errors

---

## ✅ VERIFICATION CHECKLIST

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Navigation works (click "Services", "Doctor", "Gallery", etc.)
- [ ] No CSS/JS errors (Open DevTools with F12)
- [ ] Images load properly
- [ ] Forms work (Appointment booking)
- [ ] WhatsApp button works
- [ ] Phone call button works
- [ ] SSL certificate shows (green lock in URL bar)

---

## 🐛 TROUBLESHOOTING

### ❌ Blank Page
**Fix:**
- Check DevTools Console (F12)
- Look for CSS/JS path errors
- Ensure `.htaccess` is uploaded

### ❌ CSS/JS Not Loading
**Check:**
```
- browser console (F12) for errors
- verify files exist in public_html/assets/
- check file permissions (644 for files, 755 for folders)
```

### ❌ Page Refresh → 404 Error
**Fix:**
- Verify `.htaccess` file is in `public_html/`
- Enable mod_rewrite on Hostinger (usually enabled by default)
- Check file has proper permissions

### ❌ Images Not Loading
**Fix:**
- Verify all image files are in `public_html/assets/`
- Check file names match exactly (case-sensitive)

### ❌ WhatsApp/Phone Links Not Working
**Fix:**
- These should work out of the box
- If not, check if links start with `https://` or `tel:`

---

## 🔄 UPDATE WORKFLOW (Future Updates)

When you make changes to the code:

1. Make changes locally
2. Commit to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

3. Build again:
   ```bash
   npm run build
   ```

4. Delete old files from `public_html/` on Hostinger
5. Upload new `dist/` contents

---

## 📁 FILE STRUCTURE REFERENCE

### Local Project:
```
derma-website-new/
├── src/
├── public/
│   └── .htaccess
├── dist/                    ← This gets uploaded
│   ├── index.html
│   ├── .htaccess
│   └── assets/
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### Hostinger Public HTML:
```
public_html/                 ← Everything goes here
├── index.html               ← From dist/
├── .htaccess                ← From dist/
└── assets/                  ← From dist/
```

---

## 📞 SUPPORT

If you encounter issues:

1. Check Hostinger's support panel
2. Verify .htaccess syntax
3. Check file permissions
4. Look at browser DevTools console (F12)
5. Contact Hostinger support if mod_rewrite not working

---

## ✨ SUCCESS! 🎉

Your Derma website should now be live at:
```
https://yourdomain.com
```

All features working:
✅ Services page with all treatments
✅ Doctor profile with credentials
✅ Appointment booking
✅ Gallery & testimonials
✅ Contact & location info
✅ SSL secured

---

**Last Updated:** June 2026
**Deployment Ready:** ✅ YES
