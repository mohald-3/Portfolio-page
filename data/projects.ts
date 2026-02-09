
import { Project } from '../types';

export const projects: Project[] = [
  {
    slug: "nexus-commerce-api",
    title: "Nexus E-Commerce Engine",
    summary: "A high-performance, event-driven e-commerce backend built with .NET 8 and RabbitMQ.",
    description: "Nexus is a complete overhaul of a traditional retail backend, focusing on eventual consistency and massive horizontal scalability. It handles thousands of concurrent transactions per second while maintaining strict audit trails.",
    tags: ["C#", "RabbitMQ", "PostgreSQL", "Redis", "Docker", "DDD"],
    highlights: [
      "Event-driven architecture for order processing and inventory management.",
      "Distributed locking using Redis to prevent double-spending in race conditions.",
      "Comprehensive API documentation using Swagger/OpenAPI.",
      "95% unit test coverage for core domain logic using xUnit and Moq."
    ],
    architecture: {
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000&auto=format&fit=crop",
      description: "The system utilizes the Clean Architecture pattern (Domain, Application, Infrastructure, WebAPI). External events are ingested via RabbitMQ, processed by specialized worker services, and persisted to a sharded PostgreSQL cluster."
    },
    challenges: [
      {
        problem: "Race conditions in inventory updates during high-velocity flash sales.",
        solution: "Implemented a distributed lock mechanism using RedLock on a Redis cluster, ensuring atomic inventory decrements with sub-millisecond overhead."
      },
      {
        problem: "High latency when searching millions of product SKU variations with complex metadata.",
        solution: "Integrated Elasticsearch as the primary read-model for catalog searches, reducing average query response time from 850ms to 18ms."
      }
    ],
    lessons: [
      "The critical importance of idempotent consumers in distributed message-based systems.",
      "How to manage complex sagas for long-running business processes without relying on global transactions.",
      "Fine-tuning PostgreSQL indexing strategies for large-scale JSONB data storage."
    ],
    githubUrl: "https://github.com/mohanned/nexus-commerce",
    liveUrl: "https://nexus-demo.mohanned.dev"
  },
  {
    slug: "stream-analytics-mesh",
    title: "Stream Analytics Mesh",
    summary: "Real-time telemetry processing system for IoT sensors with sub-second latency.",
    description: "A specialized data mesh designed to ingest, process, and visualize telemetry from over 100,000 concurrent IoT devices across multiple regions.",
    tags: ["Go", "gRPC", "InfluxDB", "Kafka", "Kubernetes"],
    highlights: [
      "Sub-100ms end-to-end latency for critical system alerts.",
      "Multi-region deployment on AWS using Terraform for Infrastructure as Code.",
      "Highly efficient gRPC communication between internal mesh nodes.",
      "Dynamic auto-scaling based on real-time ingest volume metrics."
    ],
    architecture: {
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2000&auto=format&fit=crop",
      description: "A Kafka-based pipeline where raw telemetry is validated, enriched via micro-enrichers, and stored in a time-series database (InfluxDB) while triggering real-time anomaly detection webhooks."
    },
    challenges: [
      {
        problem: "Memory leaks in the data ingestor during peak traffic spikes.",
        solution: "Refactored the Go worker pool to use zero-allocation techniques and optimized memory management by reusing buffers."
      }
    ],
    lessons: [
      "Scaling WebSocket connections across multiple server nodes using a Redis-backed pub/sub system.",
      "Effective monitoring and alerting with Prometheus and Grafana in a containerized environment."
    ],
    githubUrl: "https://github.com/mohanned/stream-mesh"
  },
  {
    slug: "guardian-auth-service",
    title: "Guardian Identity Provider",
    summary: "OAuth2/OpenID Connect implementation focused on high security and auditability.",
    description: "Guardian provides a centralized identity management solution for enterprise microservices, featuring biometric support and advanced MFA workflows.",
    tags: ["C#", "OIDC", "JWT", "SQL Server", "Security"],
    highlights: [
      "Strict adherence to OAuth2 and OpenID Connect specifications.",
      "Support for WebAuthn/FIDO2 biometric authentication methods.",
      "Encryption of user data at rest with automatic key rotation via AWS KMS.",
      "Detailed security event logging and real-time anomaly detection."
    ],
    architecture: {
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
      description: "A centralized authority built on Duende IdentityServer, using a decoupled persistent layer to support multiple database backends and high-availability caching."
    },
    challenges: [
      {
        problem: "Mitigating brute-force and credential stuffing attacks on legacy user accounts.",
        solution: "Implemented an adaptive rate-limiting layer based on IP, user-agent heuristics, and geo-location using a sliding window algorithm."
      }
    ],
    lessons: [
      "Managing complex certificate hierarchies for JWT signing and validation.",
      "The nuances of Refresh Token rotation for Single Page Applications (SPAs)."
    ],
    githubUrl: "https://github.com/mohanned/guardian-auth"
  },
  {
    slug: "edge-cache-proxy",
    title: "Edge Cache Proxy",
    summary: "Custom reverse proxy with intelligent caching and load balancing.",
    description: "A lightweight, high-performance reverse proxy designed for specialized caching of dynamic content at the edge.",
    tags: ["Rust", "Tokio", "HTTP/2", "Cache"],
    highlights: [
      "Asynchronous I/O using the Tokio runtime for maximum throughput.",
      "Custom LRU caching algorithm optimized for high-hit ratios.",
      "Integrated health checks and automatic failover for backend clusters.",
      "Low-overhead metrics export for monitoring."
    ],
    architecture: {
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
      description: "A multi-threaded proxy layer that sits in front of application servers, managing SSL termination and request routing based on custom weighted algorithms."
    },
    challenges: [
      {
        problem: "Handling high concurrency with minimal CPU overhead.",
        solution: "Leveraged Rust's ownership model and the Tokio ecosystem to achieve thread-safe, non-blocking I/O operations."
      }
    ],
    lessons: [
      "The performance benefits of zero-copy parsing in network applications.",
      "Designing for high availability in the face of partial system failures."
    ],
    githubUrl: "https://github.com/mohanned/edge-cache"
  }
];
