# Ben Joshua — Advanced Interactive Portfolio

A responsive React portfolio with:
- Hybrid premium dark UI and light interactive SRM concept panel
- Animated hero, project filtering and search
- Project detail modal for each project
- Interactive SRM programme finder (illustrative results)
- Scripted admissions assistant prototype with visible caveat
- Next-step checklist
- Mobile navigation and responsive layouts
- Reduced-motion support and accessible button labels
- SRM UX brief accordion and contact email copy interaction

## Important honesty notes
- The SRM website work is a self-initiated concept, not an official SRM project or completed audit.
- The admissions assistant is scripted demo content, not a live AI system.
- Programme results are illustrative and not live admissions data.
- MotionLab AI is described as a technical exploration; rehabilitation and sports analysis are future directions.
- The interview-preparation platform is described as development/concept work. Update status only if you can verify it.
- The Java Swing/MySQL entry is limited to known details. Add a screenshot or verified features if available.

## Run locally
Install Node.js LTS, extract the project, then:
```bash
npm install
npm run dev
```
Open the local URL shown by Vite.

Build-check:
```bash
npm run build
npm run preview
```

## Deploy on Vercel (recommended)
1. Upload this folder's files to a new GitHub repository.
2. Sign in at https://vercel.com/ and choose **Add New → Project**.
3. Import your repository.
4. Framework preset: Vite (auto-detected).
5. Build command: `npm run build`
6. Output directory: `dist`
7. Install command: `npm install`
8. Click Deploy and copy your generated `https://....vercel.app` URL.

## Deploy using Vercel CLI
```bash
npm install
npm run build
npx vercel
npx vercel --prod
```
Follow the prompts and use the final production URL in the SRM application.

## Update your content
- Main page and project content: `src/main.jsx`
- Styling and breakpoints: `src/styles.css`
- Email is set to `benjoshuarajasingh@gmail.com` in `src/main.jsx`.
- Metadata: `index.html`
