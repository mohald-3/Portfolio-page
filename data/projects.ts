import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: "plugg-kompis",
    title: "PluggKompis",
    summary: "A fullstack collaborative academic platform connecting parents, students, volunteers, and venues to organize free homework help across Sweden.",

    description: "PluggKompis is a multi-role web platform designed to facilitate academic support. It features a robust booking system, venue management, and analytics for volunteers tracking their hours.",
    thumbnail: "/projects/plugg-kompis/thumbnail.jpg",
    gallery: [
      "/projects/plugg-kompis/gallery-1.jpg",
      "/projects/plugg-kompis/gallery-2.jpg",
      "/projects/plugg-kompis/gallery-3.jpg",
      "/projects/plugg-kompis/gallery-4.jpg",
      "/projects/plugg-kompis/gallery-5.jpg"
    ],
    tags: [".NET 8", "React", "TypeScript", "Clean Architecture", "CQRS", "Azure SQL", "QuestPDF"],
    highlights: [
      "Designed multi-role system for parents, students, venues, and volunteers with tailored functionality.",
      "Implemented JWT authentication and role-based access control.",
      "Built booking system with real-time availability validation.",
      "Developed analytics dashboard with automated PDF export using QuestPDF.",
      "Contributed to domain modeling, scheduling logic, and CI/CD pipelines."
    ],
    architecture: {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
      description: "The backend follows Clean Architecture principles with MediatR for CQRS, ensuring a strict separation of concerns. Data persistence is handled by EF Core and Azure SQL, with CI/CD pipelines managing the deployment lifecycle."
    },
    challenges: [
      {
        problem: "Managing complex scheduling and venue availability for multiple user roles.",
        solution: "Implemented a custom booking engine within the Application layer that validates venue capacity and volunteer availability in real-time."
      }
    ],
    lessons: [
      "Advanced domain modeling for multi-tenant collaborative platforms.",
      "Optimizing SQL queries for dashboard analytics and reporting."
    ],
    githubUrl: "https://github.com/PluggKompis/pluggkompis-client",
    repositories: [
      { label: "Frontend Repo", url: "https://github.com/PluggKompis/pluggkompis-client" },
      { label: "Backend Repo", url: "https://github.com/PluggKompis/pluggkompis-api" }
    ],
    liveUrl: "https://pluggkompis-client.vercel.app/"
  },
  {
    slug: "fridge-pal",
    title: "FridgePal",
    summary: "AI-powered mobile application that reduces food waste by tracking fridge and freezer inventory using image recognition and OCR.",
    description: "Developed during a hackathon, FridgePal helps users track fridge/freezer inventory. It integrates AI for product identification and expiration date tracking to notify users before food spoils.",
    thumbnail: "/projects/fridge-pal/thumbnail.jpg",
    gallery: [
      "/projects/fridge-pal/gallery-1.jpg",
      "/projects/fridge-pal/gallery-2.jpg",
      "/projects/fridge-pal/gallery-3.jpg",
      "/projects/fridge-pal/gallery-4.jpg",
      "/projects/fridge-pal/gallery-5.jpg",
      "/projects/fridge-pal/gallery-6.jpg"

    ],
    tags: [".NET", "AI", "OCR", "Azure SQL", "Clean Architecture", "FluentValidation"],
    highlights: [
      "Integrated AI-based image recognition and OCR for automated product and expiration date detection.",
      "Built backend using Clean Architecture, CQRS (MediatR), DTOs, and FluentValidation.",
      "Designed modular and scalable API with Azure SQL storage.",
      "Led business logic implementation and validation layers."
    ],
    architecture: {
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
      description: "A specialized backend integrating external AI services. The system uses Azure SQL for storage and is built to be cloud-ready and highly scalable for mobile clients."
    },
    challenges: [
      {
        problem: "Accurate extraction of expiration dates from varied packaging types via OCR.",
        solution: "Implemented a normalization layer that uses pattern matching and domain-specific rules to validate OCR results."
      }
    ],
    lessons: [
      "Agile development and rapid prototyping in a hackathon environment.",
      "Integrating third-party AI/ML services into a .NET Core backend."
    ],
    githubUrl: "https://github.com/mohald-3/FridgePalBE",
    repositories: [
      { label: "Frontend Repo", url: "https://github.com/mohald-3/FridgePalFE" },
      { label: "Backend Repo", url: "https://github.com/mohald-3/FridgePalBE" }
    ]
  }
];