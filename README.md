# Sazan — Personal Bio Website

Vercel-ready Next.js bio page with looping video background, avatar, glass-style profile card, and social links.

## Profile details included
- Display name: Sazan The greatest Muthbazz Sher
- Bio: Developer • Programmer
- Telegram: https://t.me/RCBWON
- Instagram: https://instagram.com/sazan.olds
- YouTube and GitHub omitted because `nah` was provided instead of profile links.

## Add your own media
Add these files to `public/`:
- `background.mp4` — background video (MP4/H.264 recommended)
- `poster.jpg` — still image displayed before the video loads
- `avatar.jpg` — profile picture

Use media you own or have permission to use.

## Run locally
Install Node.js LTS, then run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy on Vercel
1. Upload the project files to a GitHub repository.
2. Open https://vercel.com/new and import the repository.
3. Keep the default Next.js settings and click Deploy.

## Autoplay
The background video uses muted autoplay, looping, and `playsInline`. Mobile browsers commonly block autoplay with sound, so the sound button lets visitors turn audio on after interacting with the page.
