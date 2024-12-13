import { ref } from 'vue'
import type { Article } from '@/types'

// This would eventually come from your API/backend
export const articles = ref<Article[]>([
  {
    id: 1,
    title: "Getting Started with Vue 3",
    summary: "Learn the basics of Vue 3 and its composition API",
    date: "2024-03-15",
    url: "/articles/vue-3-basics"
  },
  {
    id: 2,
    title: "State Management with Pinia",
    summary: "Modern state management solutions in Vue",
    date: "2024-03-20",
    url: "/articles/pinia-guide"
  },
  {
    id: 3,
    title: "Why TypeScript is Taking Over Frontend Development",
    summary: "Exploring the rise of TypeScript in modern web development and its impact on code quality",
    date: "2024-03-18",
    url: "/articles/typescript-takeover"
  },
  {
    id: 4,
    title: "Building Scalable Microservices with Node.js",
    summary: "A comprehensive guide to creating and managing microservices architecture",
    date: "2024-03-10",
    url: "/articles/nodejs-microservices"
  },
  {
    id: 5,
    title: "The Future of CSS: What's Coming in 2025",
    summary: "Exploring upcoming CSS features and how they'll revolutionize web design",
    date: "2024-03-05",
    url: "/articles/css-future"
  },
  {
    id: 6,
    title: "Optimizing React Performance",
    summary: "Advanced techniques for improving React application performance",
    date: "2024-03-01",
    url: "/articles/react-performance"
  },
  {
    id: 7,
    title: "Machine Learning in JavaScript",
    summary: "Implementing ML algorithms using TensorFlow.js",
    date: "2024-02-28",
    url: "/articles/ml-javascript"
  },
  {
    id: 8,
    title: "Docker for Frontend Developers",
    summary: "Containerization basics every frontend developer should know",
    date: "2024-02-25",
    url: "/articles/docker-frontend"
  },
  {
    id: 9,
    title: "Understanding Web Assembly",
    summary: "Deep dive into WASM and its applications in web development",
    date: "2024-02-20",
    url: "/articles/web-assembly"
  },
  {
    id: 10,
    title: "GraphQL vs REST: Making the Right Choice",
    summary: "Comparing API architectures for modern applications",
    date: "2024-02-15",
    url: "/articles/graphql-rest"
  },
  {
    id: 11,
    title: "Accessibility First Development",
    summary: "Building websites that work for everyone",
    date: "2024-02-10",
    url: "/articles/accessibility"
  },
  {
    id: 12,
    title: "Serverless Architecture Patterns",
    summary: "Best practices for building serverless applications",
    date: "2024-02-05",
    url: "/articles/serverless"
  },
  {
    id: 13,
    title: "The Rise of Edge Computing",
    summary: "How edge computing is changing web development",
    date: "2024-02-01",
    url: "/articles/edge-computing"
  },
  {
    id: 14,
    title: "Testing Vue Components",
    summary: "Comprehensive guide to testing Vue applications",
    date: "2024-01-28",
    url: "/articles/vue-testing"
  },
  {
    id: 15,
    title: "Web Security Best Practices",
    summary: "Protecting your web applications from common vulnerabilities",
    date: "2024-01-25",
    url: "/articles/web-security"
  },
  {
    id: 16,
    title: "Building Progressive Web Apps",
    summary: "Transform your website into a PWA",
    date: "2024-01-20",
    url: "/articles/pwa-guide"
  },
  {
    id: 17,
    title: "CSS Grid Mastery",
    summary: "Advanced techniques for layout design with CSS Grid",
    date: "2024-01-15",
    url: "/articles/css-grid"
  },
  {
    id: 18,
    title: "Real-time Applications with WebSockets",
    summary: "Building real-time features in web applications",
    date: "2024-01-10",
    url: "/articles/websockets"
  },
  {
    id: 19,
    title: "Modern Authentication Patterns",
    summary: "Implementing secure authentication in web apps",
    date: "2024-01-05",
    url: "/articles/authentication"
  },
  {
    id: 20,
    title: "State Machines in Frontend Development",
    summary: "Managing complex application states with XState",
    date: "2024-01-01",
    url: "/articles/state-machines"
  }
]);