# Fitness Bar — Panjim, Goa 🏋️

A high-converting, single-page landing site for **Fitness Bar**, Santa Inez, Panjim — built to fix their biggest gap: **no owned web presence** (they currently rely on Google Maps + Justdial/Magicpin, and leak leads to competitors with online booking).

🔗 **Live demo target:** `yugaldoddamani.github.io/fitnessbar/` (push to `main` or enable Pages on this branch)

---

## ✅ Verified business data (pulled from the public Google Maps listing)

| Field | Value |
|---|---|
| Name | Fitness Bar (फिटनेस बार) |
| Address | 2nd Floor, Esmeralda Casa Da Povo, St Inez Rd, Santa Inez, Panjim, Goa 403002 (opposite Panjim Gymkhana, Campal) |
| GPS | 15.4824351, 73.8200217 |
| Phone | +91 89991 74016 |
| Email | fnlalvares@gmail.com |
| Rating | ⭐ 4.7 (242 Google reviews) |
| Hours | Mon–Sat: 5:30 AM–12 PM & 3–10 PM · Sun: Closed |
| Highlights | 6,500 sq ft, Precor equipment, Les Mills classes, Zumba, kickboxing/MMA, steam room + showers, DJ cabin with videotheque screens |
| Directory prices | Day pass ₹500 · Monthly ₹4,500 · Annual ~₹21,000–24,000 |
| Facebook | facebook.com/FitnessBarPanjim |

> ⚠️ Prices vary by aggregator (LBB lists ₹3,000/mo; Justdial ₹4,500/mo). Confirm current rates with the owner before publishing.

## 🚧 Demo content to replace before launch

- **Class timetable** (`SCHEDULE` in `script.js`) — realistic sample; swap for the real weekly schedule + instructor names.
- **Transformation gallery** — placeholder cards in `index.html` (`.trans-card`); drop in consented client photos.
- **Google review quotes** — paraphrased from public reviews; verify or swap for exact quotes.
- **Lead forms** — validate + store to `localStorage`. For production, wire to Formspree, WhatsApp Business API, or email (see PITCH.md).

## 🛠 Stack

Zero frameworks — `index.html` + `styles.css` + `script.js`. Vanilla JS: sticky nav, scroll-spy, mobile menu, scroll reveals (IntersectionObserver), filterable day/type timetable, accessible trial modal (focus trap, ESC), lead capture with validation + toast, floating WhatsApp button. Google Fonts (Bebas Neue + Inter). Mobile-first, `prefers-reduced-motion` respected.

## 🎨 Design

Dark `#0c0c0e` base, electric lime `#c8ff00` neon accent, punchy Bebas Neue display type, marquee strip, glowing featured pricing tier.
