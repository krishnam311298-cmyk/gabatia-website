# Gabatia Engineers & Consultants - Corporate Website

This is a modern, responsive corporate website built with Next.js and Tailwind CSS for Gabatia Engineers and Consultants LLP. 

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Chivo, IBM Plex Sans, IBM Plex Mono)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Deployment Guide (Netlify)

We recommend deploying this Next.js application to **Netlify** rather than GitHub Pages to take full advantage of Next.js features like Image Optimization and Server-Side Rendering.

### Steps to Deploy on Netlify:

1. **Push your code to GitHub**:
   - Initialize a git repository if you haven't already: `git init`
   - Add your files: `git add .`
   - Commit your code: `git commit -m "docs: update deployment instructions with base directory config"`
   - Push to a new repository on your GitHub account.

2. **Connect to Netlify**:
   - Log in to [Netlify](https://app.netlify.com).
   - Click **"Add new site"** -> **"Import an existing project"**.
   - Select **GitHub** and authorize Netlify.
   - Choose your newly created repository.

3. **Deploy settings (Crucial Step)**:
   - Since your Next.js project is inside a subfolder, you **must set the Base directory**.
   - **Base directory**: `gabatia-website` (Type this exactly as the folder name)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (Netlify will usually auto-fill this after setting the Base directory)
   - Click **Deploy Site**.

4. **Add Custom Domain** (Optional):
   - Once deployed, go to "Domain management" in Netlify to add your custom Gabatia domain (e.g., `gabatia.com`).
