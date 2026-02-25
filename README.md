## About this project

This repository is a small UI challenge for a fictional cake shop. It demonstrates a responsive landing page built with React + TypeScript and bundled with Vite. The app includes reusable components such as `Header`, `Hero`, `Categories`, `Category`, `Text`, and `Footer`, and uses plain CSS files in `src/components/*` for styling. Static assets (images and icons) live in `src/assets`, and the footer uses `react-icons` for vector icons.

Tech used:

- React 19
- TypeScript
- Vite
- react-icons
- ESLint (dev)

## How to run

From the project root run these commands in PowerShell or bash.

1. Install dependencies (already run if you followed earlier steps):

```bash
npm install
```

2. Install `react-icons` (used by `src/components/Footer/Footer.tsx`):

```bash
npm install react-icons
```

3. Start the development server with Vite:

```bash
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173) in your browser.

4. Build for production:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

Notes:
- The project uses React + TypeScript with Vite.
- `react-icons` is required for the footer icons; if you remove or change that component, you can omit the package.
- If you run into type issues when building, ensure `typescript` and the `@types/*` packages listed in `package.json` are installed.
