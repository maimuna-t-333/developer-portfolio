const courses = [
  {
    id: "course-react-dev",
    slug: "complete-react-development",
    title: "Complete React Development",
    description:
      "Build modern React applications with hooks, routing, state management, and real-world projects.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    price: 49,
    originalPrice: 99,
    duration: "12 weeks",
    students: 4280,
    rating: 4.9,
    level: "Beginner to Advanced",
    tags: ["React", "Projects", "Hooks"],
    featured: true,
  },
  {
    id: "course-nextjs-bootcamp",
    slug: "nextjs-fullstack-bootcamp",
    title: "Next.js Fullstack Bootcamp",
    description:
      "Learn App Router, server components, authentication, and deployment by shipping fullstack Next.js products.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    price: 59,
    originalPrice: 119,
    duration: "14 weeks",
    students: 3160,
    rating: 4.8,
    level: "Intermediate",
    tags: ["Next.js", "Fullstack", "SSR"],
    featured: true,
  },
  {
    id: "course-modern-css",
    slug: "modern-css-mastery",
    title: "Modern CSS Mastery",
    description:
      "Master layout systems, animations, responsive design, and component styling with current CSS techniques.",
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=1200&q=80",
    price: 39,
    originalPrice: 79,
    duration: "8 weeks",
    students: 2890,
    rating: 4.7,
    level: "Beginner",
    tags: ["CSS", "Responsive", "UI"],
    featured: true,
  },
  {
    id: "course-node-express",
    slug: "node-express-api-development",
    title: "Node & Express API Development",
    description:
      "Design secure REST APIs with Express, databases, validation, and production-ready backend patterns.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    price: 45,
    originalPrice: 89,
    duration: "10 weeks",
    students: 2410,
    rating: 4.8,
    level: "Intermediate",
    tags: ["Node.js", "Express", "API"],
    featured: false,
  },
];

export { courses };
export default courses;
