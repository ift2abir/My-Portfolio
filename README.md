# Md. Ifta Khirul Haque Abir — Persona-Style Personal Portfolio

A bold, cinematic personal portfolio website for **Md. Ifta Khirul Haque Abir**, Software Engineering Undergraduate at **Daffodil International University**, Bangladesh, inspired by the **Persona** design language.

---

## 🎨 Persona Visual System

- **Background Canvas:** `#191919` (Deep Charcoal Black)
- **Panels & Surfaces:** `#202020`
- **Cards & Elevated Elements:** `#242424` / `#262626`
- **Accent Color:** `#F45116` (Bold Persona Orange)
- **Primary Typography:** `#FFFFFF` (Crisp White with massive display headings)
- **Secondary Typography:** `#B7B7B7` & `#7A7A7A`

---

## 📸 Authentic Photography Integration

- **Photo 1 — Hero Section (Top):**
  - Path: [`public/images/abir-hero.jpg`](file:///d:/Potfolio%20for%20me/public/images/abir-hero.jpg)
  - Formal portrait wearing dark suit, white shirt, and black tie.
  - Oversized, cinematic framing integrated with subtle edge overlays and dark gradient blending into `#191919`.
- **Photo 2 — Final Contact Section (Bottom):**
  - Path: [`public/images/abir-contact.jpg`](file:///d:/Potfolio%20for%20me/public/images/abir-contact.jpg)
  - Blue polo shirt portrait against vibrant red background.
  - Anchored on the right of the wide charcoal contact panel (`#202020`), extending to the bottom edge.

---

## 📄 CV Integration

- **Resume File:** [`public/files/abir-cv.pdf`](file:///d:/Potfolio%20for%20me/public/files/abir-cv.pdf) (153 KB)
- **Download CV Buttons:** Located in both the Hero Section and accessible via direct download links.

---

## 🚀 Running the Project

```bash
# Start development server
npm run dev

# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```
Visit `http://localhost:3000/` to explore the live website.

---

## 🤖 Ask Abir AI Assistant Configuration (Google Gemini)

The portfolio includes an integrated AI assistant powered by Google Gemini API.

1. Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey) (no credit card required).
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Set your `GEMINI_API_KEY`:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   GEMINI_MODEL=gemini-3.8-flash
   ```
4. Supported free-tier models:
   - `gemini-3.8-flash` (Default, recommended latest flash model)
   - `gemini-flash-latest` (Always points to the current stable flash model)

