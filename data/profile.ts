
import { Profile } from '../types';

export const profile: Profile = {
  name: "Mohanned",
  role: "Senior Backend Engineer",
  summary: "Architecting scalable cloud-native systems with a focus on high-performance C# and distributed systems. Expert in Domain-Driven Design and Clean Architecture.",
  aboutBullets: [
    "Expertise in designing and implementing high-throughput microservices using .NET Core and Node.js.",
    "Committed to Clean Architecture principles, ensuring maintainability and testability of complex domain logic.",
    "Proficient in both SQL and NoSQL databases, optimizing queries and schemas for massive scale.",
    "Strong focus on automation, CI/CD, and infrastructure as code to streamline development lifecycles.",
    "Proven track record of solving bottleneck issues in legacy monoliths by transitioning to event-driven architectures."
  ],
  skills: [
    {
      category: "Backend",
      items: ["C#", "ASP.NET Core", "Node.js", "Go", "gRPC", "REST APIs", "SignalR"]
    },
    {
      category: "Architecture & Patterns",
      items: ["DDD", "CQRS", "MediatR", "Microservices", "Clean Architecture", "Unit Testing", "TDD"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "SQL Server", "Redis", "MongoDB", "Elasticsearch", "Entity Framework Core"]
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "AWS", "Azure", "GitHub Actions", "Terraform", "Prometheus"]
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    }
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "TechScale Solutions",
      period: "2021 - Present",
      description: "Leading the transition of a monolithic payment gateway to a distributed microservices architecture, improving system uptime to 99.99%."
    },
    {
      title: "Backend Developer",
      company: "DataFlow Systems",
      period: "2019 - 2021",
      description: "Optimized data processing pipelines for real-time analytics, reducing processing latency by 45% through Redis caching strategies."
    },
    {
      title: "Full Stack Developer",
      company: "Innovate Labs",
      period: "2017 - 2019",
      description: "Developed and maintained several customer-facing web applications using ASP.NET Core and React."
    }
  ],
  socials: [
    { platform: "GitHub", url: "https://github.com/mohanned" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/mohanned" },
    { platform: "Email", url: "mailto:contact@mohanned.dev" },
    { platform: "CV", url: "#" }
  ]
};
