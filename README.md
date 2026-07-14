# Yash Mahajan — Next.js Portfolio

A production-ready personal portfolio built with Next.js, TypeScript, Framer Motion, and Vercel Analytics.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

Most personal content lives in `data/site.ts`.

Before deployment:

1. Add your resume as `public/resume.pdf` if you want a resume button.
2. Add a professional email in `siteConfig.email` when ready.
3. Verify all GitHub repository URLs.
4. Replace `public/yash-profile.png` if you want a higher-resolution portrait.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Sign in to Vercel with GitHub.
3. Click **Add New → Project**.
4. Import the repository.
5. Keep the detected Next.js settings and click **Deploy**.

No environment variables are required.
