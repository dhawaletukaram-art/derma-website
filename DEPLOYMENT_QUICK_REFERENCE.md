# ⚡ QUICK DEPLOYMENT REFERENCE

## 🎯 3-Step Deployment

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Upload Contents of `dist/` to `public_html/`
- ✅ Do upload: `index.html`, `assets/`, `.htaccess`
- ❌ Don't upload: `dist/` folder itself

### Step 3: Enable SSL & Test
- Enable SSL in Hostinger
- Visit `https://yourdomain.com`

---

## 📦 What to Upload

| File/Folder | Upload? |
|:---|:---|
| `index.html` | ✅ |
| `.htaccess` | ✅ |
| `assets/` | ✅ |
| `dist/` folder | ❌ |

---

## 🔗 Hostinger Steps
1. Login → https://www.hostinger.com/login
2. Manage domain
3. File Manager → public_html
4. Delete old index.html
5. Upload `dist/` contents
6. Enable SSL

---

## ✅ Test Checklist
- [ ] Homepage loads
- [ ] Navigation works
- [ ] CSS loads (styled page)
- [ ] Images show
- [ ] Forms work
- [ ] WhatsApp button works
- [ ] Green lock (SSL) shows

---

## 🐛 Common Fixes

| Issue | Fix |
|:---|:---|
| Blank page | Check F12 console for errors |
| CSS not loading | Verify `.htaccess` uploaded |
| 404 on refresh | Enable `.htaccess` rewrite rules |
| Images missing | Check `assets/` folder uploaded |

---

## 📝 Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test locally before uploading
npm run preview
```

---

**Status: Ready for Deployment ✅**
