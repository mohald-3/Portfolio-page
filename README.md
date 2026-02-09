# Mohanned | Senior Backend Engineer Portfolio

A dark, modern, and serious developer portfolio built with **React**, **TypeScript**, and **Tailwind CSS**. Designed with a "Content-as-Code" philosophy, allowing for easy updates without touching UI components.

## 🚀 Key Features
- **Data-Driven Architecture**: All projects and profile info are managed in clean TypeScript data files.
- **Deep Case Studies**: Dedicated routes for technical project breakdowns including architecture descriptions, challenges, and engineering responses.
- **High Performance**: Optimized for speed using a lightweight ESM-based architecture and Tailwind CSS.
- **Responsive & Accessible**: Mobile-first design with a focus on technical readability and high contrast.

---

## 📂 Project Structure

### Root Files
- `index.html`: Entry point. Uses ESM-based dependency management via Import Maps.
- `index.tsx`: React mounting logic.
- `App.tsx`: Main application shell with `HashRouter` for zero-config hosting.
- `types.ts`: Global TypeScript interfaces defining the data models.

### `/data` - Content Management
*This is the central location for updating portfolio content.*
- `profile.ts`: Name, bio, technical skills, professional experience, and socials.
- `projects.ts`: Array of detailed project objects including case study metadata.

### `/components` - UI Library
- `Navbar.tsx`: Sticky navigation with smooth section-aware scrolling.
- `Hero.tsx`: High-impact landing section with primary CTAs.
- `ProjectsGrid.tsx`: Searchable and filterable project gallery.
- `ProjectCard.tsx`: Project teaser cards with tech tags.
- `Experience.tsx`: Professional timeline with highlighted achievements.

### `/pages` - Views
- `Home.tsx`: One-page summary landing view.
- `ProjectDetails.tsx`: Dynamic case study template for detailed technical exploration.

---

## 🛠 How to Customize

### 1. Update Profile
Modify `data/profile.ts`. The changes will propagate across the Hero, About, and Skills sections automatically.

### 2. Add Projects
Append new entries to the `projects` array in `data/projects.ts`. The UI handles filtering and page generation dynamically based on the `slug`.

### 3. Change Styling
The site utilizes Tailwind's `purple` accent. You can swap this for any other brand color (e.g., `emerald`, `blue`) by updating the classes in the component files.

---

## 📦 Deployment
The project uses `HashRouter`, making it fully compatible with static hosting providers like **Vercel**, **GitHub Pages**, or **Netlify** without extra configuration.

1. Push this repository to GitHub.
2. Connect to Vercel/Netlify for automatic deployments on push.

---

## 📝 License
MIT License. Optimized for professional developer use.