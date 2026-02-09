# Mohanned | Senior Backend Engineer Portfolio

A dark, modern, and serious developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. Designed with a "Content-as-Code" philosophy, allowing for easy updates without touching UI components.

## 🚀 Key Features
- **Data-Driven Architecture**: All projects and profile info are managed in TypeScript data files.
- **Deep Case Studies**: Dedicated routes for technical project breakdowns including architecture descriptions and challenges.
- **Modern Tech Stack**: React 19, Tailwind CSS 3, Lucide Icons, and ESM-based dependency management.
- **Responsive & Accessible**: Mobile-first design with high contrast and semantic HTML.

---

## 📂 Project Structure

### Root Files
- `index.html`: Entry point. Contains the **Import Map** for managing dependencies via ESM.sh and Tailwind configuration.
- `index.tsx`: Standard React mounting logic.
- `App.tsx`: Main application shell containing routing (`HashRouter`) and global layout.
- `types.ts`: Global TypeScript interfaces for the profile and project data models.

### `/data` - Content Management
*This is the only place you need to go to update your site content.*
- `profile.ts`: Contains your name, bio, technical skills (grouped by category), and social links.
- `projects.ts`: An array of project objects. Each project includes metadata, tags, and detailed case study sections (highlights, architecture, challenges).

### `/components` - UI Library
- `Logo.tsx`: A custom SVG brand mark.
- `Navbar.tsx`: Sticky navigation with section-aware scrolling.
- `Hero.tsx`: High-impact landing section.
- `About.tsx`: Narrative-focused bullet points.
- `Skills.tsx`: Grid of technical proficiency chips.
- `ProjectsGrid.tsx`: Searchable and filterable project gallery.
- `ProjectCard.tsx`: Individual project teaser cards.
- `Experience.tsx`: Professional timeline.
- `Contact.tsx`: Reach out section with social icons and a placeholder form.
- `Footer.tsx`: Simple brand mark and copyright info.

### `/pages` - Views
- `Home.tsx`: The primary one-page landing view.
- `ProjectDetails.tsx`: The dynamic template for `/projects/[slug]`.

---

## 🛠 How to Customize

### 1. Update your Profile
Open `data/profile.ts` and modify the `profile` object. The UI will automatically reflect your changes in the Hero, About, and Skills sections.

### 2. Add a New Project
Open `data/projects.ts` and add a new entry to the `projects` array. 
- Ensure the `slug` is unique (used for the URL).
- Add high-quality Unsplash or local image URLs to the `architecture.image` field.
- The project will automatically appear in the `ProjectsGrid` and generate its own detail page.

### 3. Change Brand Colors
The site uses Tailwind's `purple` and `zinc` palettes. To change the primary accent, find and replace `purple` with your preferred color (e.g., `blue` or `emerald`) across the `.tsx` files.

---

## 📦 Deployment
The site is configured to use `HashRouter`, making it fully compatible with **GitHub Pages**, Vercel, or Netlify without any special server-side configuration.

1. Push this repository to GitHub.
2. Enable GitHub Pages in Settings -> Pages.
3. Select the branch and folder (usually `/root` or `/docs`).

---

## 📝 License
MIT License. Feel free to use this as a base for your own professional portfolio.