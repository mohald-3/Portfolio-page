import { Profile } from '../types';

export const profile: Profile = {
  name: "Mohanad Al-Daghestani",
  role: "Fullstack Developer",
  summary: "I'm a full-stack developer with a backend focus and a background in architectural engineering. I mainly work with .NET, and I also build web and mobile applications with React and TypeScript.",
  aboutBullets: [
    "I moved into software development after working in architectural engineering. That background still shapes how I break down problems and consider how the parts of a system affect each other.",
    "Most of my backend work is in the .NET ecosystem, using EF Core and patterns such as Clean Architecture and CQRS with MediatR where they fit the problem.",
    "On the frontend, I work with React, TypeScript, and Tailwind CSS to build responsive web applications.",
    "I have worked with REST API design, JWT authentication, role-based access, and API documentation with Swagger.",
    "I use Docker, GitHub Actions, and Azure to automate testing and deployment and keep the path to production repeatable.",
    "I care about readable code, useful tests, and solutions that can be maintained without adding unnecessary complexity."
  ],
  skills: [
    {
      category: "Backend & APIs",
      items: ["C#", ".NET", "ASP.NET Core", "EF Core", "REST APIs", "Identity", "CQRS (MediatR)", "Clean Architecture"]
    },
    {
      category: "Frontend & UI",
      items: ["React.js", "Next.js", "TypeScript", "Angular", "TailwindCSS", "React Query", "Vite", "Zod", "React Hook Form"]
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo", "EAS Build", "iOS", "Android", "Apple IAP", "Google Play Billing"]
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Docker", "GitHub Actions", "CI/CD", "EAS Build", "Caddy", "Azure", "Swagger", "Postman", "JWT Auth"]
    },
    {
      category: "Database",
      items: ["SQL Server", "PostgreSQL", "SQLite", "MongoDB"]
    },
    {
      category: "Principles",
      items: ["Clean Code", "TDD", "SOLID", "Agile/Scrum", "API-first", "Separation of Concerns"]
    }
  ],
  experience: [
    {
      title: "Full-Stack Developer",
      company: "Go-Do AB",
      period: "Aug 2025 – Jun 2026",
      description: "Designed and built the GODO platform across three repositories: the backend API, organiser web app, and consumer mobile app, from the initial architecture through production deployment.",
      techLine: ".NET 10 · C# · ASP.NET Core · EF Core · PostgreSQL · Next.js · TypeScript · React Native · Expo · Docker · GitHub Actions · EAS Build",
      groups: [
        {
          heading: "Backend",
          bullets: [
            "Built a production REST API with 60+ endpoints using Clean Architecture and CQRS (MediatR), with a consistent OperationResult<T> response contract consumed by both web and mobile clients",
            "Designed and integrated external data sync pipelines against two municipal APIs (Municipio, Svenska Kyrkan), processing and deduplicating events across 197 Swedish cities with AI-assisted classification",
            "Built a full subscription system with in-app purchase receipt validation for both Google Play and Apple App Store, including acknowledgment and renewal handling",
            "Implemented dual authentication (JWT + refresh token rotation) with email verification, social login (Google/Apple), password reset, and failed-login lockout",
            "Wrote 343 automated tests (unit + integration) and maintained CI/CD with GitHub Actions and Docker deployment to a GleSYS VPS"
          ]
        },
        {
          heading: "Web",
          bullets: [
            "Built the organiser-facing web platform from scratch, including multi-step event creation with complex scheduling modes, Cloudinary image uploads, and a full review and submission flow",
            "Implemented a complete auth system with JWT + refresh token handling via Axios interceptors and TanStack Query for server state",
            "Developed an admin moderation dashboard for reviewing submitted events and an organiser profile page with full CRUD",
            "Localised the entire frontend to Swedish, including all form steps, validation messages, and auth flows"
          ]
        },
        {
          heading: "Mobile",
          bullets: [
            "Built and shipped a cross-platform event discovery app (iOS & Android) from scratch, now live on both app stores",
            "Delivered in-app subscription monetisation (Go.More Premium) with Apple IAP and Google Play Billing, including purchase restoration and paywall-gated features",
            "Integrated GPS-based location filtering with radius control and interactive map view, consuming the same backend geospatial API",
            "Implemented full i18n (Swedish/English) across 80+ translation keys and built an end-to-end CI/CD pipeline using EAS Build with tag-triggered automated releases"
          ]
        }
      ]
    },
    {
      title: "Civil Engineer",
      company: "Dala Trähus, Ljungskile",
      period: "2022/06 - 2024/02",
      description: "Managed technical documentation and coordinated complex construction projects. Maintained internal IT systems including server management and VPN infrastructure."
    },
    {
      title: "Freelance Architect & Business Owner",
      company: "Partille",
      period: "2022/01 - 2022/06",
      description: "Managed architectural design projects and business operations for local clients."
    },
    {
      title: "Architectural Civil Engineer",
      company: "Volunteer Work, EWB, Gothenburg",
      period: "2020/11 - 2022/05",
      description: "Applied engineering expertise to volunteer infrastructure projects with Engineers Without Borders."
    }
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/mohald-3" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/al-daghestani" },
    { platform: "Email", url: "mailto:mohanad.aldaghestani@gmail.com" },
    { platform: "CV", url: "/downloads/Mohanad_Al-Daghestani_CV.pdf" }
  ]
};
