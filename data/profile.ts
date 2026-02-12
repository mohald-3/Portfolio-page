import { Profile } from '../types';

export const profile: Profile = {
  name: "Mohanad Al-Daghestani",
  role: "Fullstack Developer",
  summary: "Self-motivated .NET Developer with a background in structural engineering. I build scalable, testable applications using Clean Architecture, CQRS, and DevOps practices, with hands-on experience in React and TypeScript.",
  aboutBullets: [
    "Transitioned from a successful career in Structural Engineering to Software Developer, bringing unique problem-solving perspectives.",
    "Specialized in the .NET ecosystem, implementing Clean Architecture and CQRS patterns with MediatR and EF Core.",
    "Experienced in building modern, responsive frontends using React 18, TypeScript, and TailwindCSS.",
    "Strong focus on API design, secure authentication mechanisms (JWT), and thorough documentation using Swagger.",
    "Committed to DevOps excellence with Azure, Docker, and GitHub Actions CI/CD pipelines.",
    "Passionate about clean code, SOLID principles, and delivering value-driven engineering solutions."
  ],
  skills: [
    {
      category: "Backend & APIs",
      items: ["C#", ".NET", "ASP.NET Core", "EF Core", "REST APIs", "Identity", "CQRS (MediatR)", "Clean Architecture"]
    },
    {
      category: "Frontend & UI",
      items: ["React.js", "TypeScript", "Angular", "TailwindCSS", "React Query", "Vite", "Zod", "React Hook Form"]
    },
    {
      category: "Infrastructure & DevOps",
      items: ["Azure", "Docker", "GitHub Actions", "CI/CD", "Swagger", "Postman", "JWT Auth"]
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
      title: "Software Developer Intern",
      company: "Go.Do. AB",
      period: "2025/09 - 2025/11",
      description: "Built modular backend APIs using .NET and Clean Architecture. Contributed to frontend development with React 18 and TanStack Query, implementing form validation and secure authentication."
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
    { platform: "CV", url: "/Mohanad_Al_Daghestani_CV.pdf" }
  ]
};