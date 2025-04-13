// src/data/projectsData.ts
import { Project } from "@/types";

export const projectsData: Project[] = [
  // Web Development Projects
  {
    id: "system-flow",
    title: "SystemFlow - Interactive Software Architecture Simulator",
    description:
      "A full-stack web application for simulating, visualizing, and analyzing software architecture designs with real-time performance metrics and data flow visualization. The platform enables architects and developers to design systems using drag & drop, test their performance, and identify bottlenecks before implementation.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "React Flow",
      "Tailwind CSS",
      "JWT Authentication",
      "Docker",
      "GitHub Actions",
      "Jest",
      "React Query",
    ],
    category: "web",
    links: {
      github: "https://github.com/ShalevAsor/system-flow",
      live: "https://system-flow.vercel.app",
    },
    features: [
      "Drag & Drop interface for building complex architecture diagrams",
      "Template library for common architecture patterns (microservices, monolithic, etc)",
      "Real-time simulation engine for performance analysis",
      "Dynamic visualization of data flow between system components",
      "Bottleneck identification and performance optimization recommendations",
      "Component property customization for realistic simulations",
      "User authentication and access control with JWT",
      "Flow saving and sharing capabilities",
      "Automated CI/CD pipeline with GitHub Actions",
      "Dockerized deployment for consistent environments",
    ],
  },
  {
    id: "channels",
    title: "Channels - Real-time Communication Platform",
    description:
      "A full-featured Discord-inspired communication platform built with Next.js 14 and TypeScript, featuring a custom WebSocket server for real-time communication. The project consists of both a client application and a dedicated backend server handling WebSocket connections, real-time events, and channel management.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Custom WebSocket Server",
      "Node.js",
      "Livekit",
      "Tailwind CSS",
      "shadcn/ui",
      "React Query",
      "Authentication",
      "WebRTC",
    ],
    category: "web",
    links: {
      github: "https://github.com/shalevasor/channels",
      live: "https://channels-livid.vercel.app",
    },
    features: [
      "Custom WebSocket server implementation for real-time event handling",
      "Real-time text, voice, and video chat capabilities",
      "Comprehensive authentication with email verification, password reset, and 2FA",
      "Role-based access control (Admin, Moderator, Guest) with granular permissions",
      "Server management with public/private servers, categories, and custom invites",
      "Direct messaging and conversation system between users",
      "File sharing with support for multiple file types",
      "Real-time typing indicators and message status",
      "Server discovery with categories and tags",
      "Message editing, deletion, and history tracking",
    ],
  },
  {
    id: "ludus-master",
    title: "LudusMaster - Gladiatorial Management Game",
    description:
      "A sophisticated browser-based game where players take on the role of a Lanista (gladiator manager). Built with Next.js 14, TypeScript, and real-time multiplayer capabilities, featuring complex game mechanics, economy system, and player progression.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "Supabase",
      "Clerk",
      "Tailwind CSS",
      "Framer Motion",
      "WebSockets",
      "i18n",
      "Jest/Playwright",
    ],
    category: "web",
    links: {
      github: "https://github.com/shalevasor", // Update with actual link
      live: "https://ludus-master.vercel.app", // Update with actual link
    },
    features: [
      "Real-time card-based gladiator combat system with unique mechanics",
      "Complex marketplace with auction house and trading system",
      "Multi-tier gear and gladiator system (Unique, Rare, Common)",
      "Arena system with different difficulty levels and rewards",
      "Training facilities for gladiator progression and development",
      "International support with i18n localization",
      "Comprehensive admin dashboard and analytics",
      "Real-time notifications and game state management",
      "Secure authentication and authorization with Clerk",
      "Responsive design with interactive animations and effects",
    ],
  },
  {
    id: "home-away",
    title: "HomeAway - Property Rental Platform",
    description:
      "A comprehensive property rental platform inspired by Airbnb, built with Next.js 14 and TypeScript. Features a modern, responsive design with real-time booking system, property management, user reviews, and interactive maps.",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "Supabase",
      "Tailwind CSS",
      "shadcn/ui",
      "React",
      "Clerk Auth",
      "Maps Integration",
      "Calendar API",
    ],
    category: "web",
    links: {
      github: "https://github.com/ShalevAsor/home-away", // Update with actual link
      live: "https://home-away-lyart.vercel.app", // Update with actual link
    },
    features: [
      "Advanced property search with filtering by location, dates, and amenities",
      "Interactive booking system with real-time calendar and availability checking",
      "User authentication with profile management and booking history",
      "Property listing creation with multiple image uploads and amenity selection",
      "Review and rating system for properties and hosts",
      "Favorites system for saving preferred properties",
      "Interactive maps for property locations",
      "Dark mode support and responsive design",
      "Real-time notifications for bookings and messages",
      "Server-side rendering for optimal performance and SEO",
    ],
  },
  {
    id: "comfy-store",
    title: "Comfy Store - Modern E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with React and Vite, featuring a modern shopping experience with Redux state management, React Query for data fetching, and DaisyUI components. Includes advanced filtering, cart management, and checkout process.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "DaisyUI",
      "React Router",
      "Axios",
      "React Toastify",
    ],
    category: "web",
    links: {
      github: "https://github.com/ShalevAsor/comfy-store",
      live: "https://comfy-store-mocha.vercel.app", // Update with actual link
    },
    features: [
      "Responsive product catalog with grid and list views",
      "Advanced filtering and search functionality",
      "Redux-powered shopping cart with persistent storage",
      "User authentication and profile management",
      "Real-time inventory tracking and updates",
      "Secure checkout process with form validation",
      "Order history and tracking system",
      "Featured products showcase",
      "Pagination for product listings",
      "Toast notifications for user feedback",
    ],
  },
  {
    id: "mixmaster",
    title: "MixMaster - Cocktail Recipe Explorer",
    description:
      "A modern web application built with React and Vite that allows users to explore, search, and discover cocktail recipes. Features a clean UI, real-time search, and detailed recipe information using the CocktailDB API.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "React Router",
      "React Query",
      "Styled Components",
      "Axios",
      "CocktailDB API",
    ],
    category: "web",
    links: {
      github: "https://github.com/ShalevAsor/comfy-store",
      live: "https://mix-master-cocktail-recipe-explorer.vercel.app/", // Update with your actual link
    },
    features: [
      "Real-time cocktail search functionality",
      "Detailed recipe pages with ingredients and instructions",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Error handling and loading states",
      "React Router data loading and error boundaries",
      "Optimized API requests with React Query",
      "Newsletter subscription feature",
      "About page with project information",
      "Modern styling with Styled Components",
    ],
  },
  {
    id: "backroads-tours",
    title: "Backroads - Travel Tours Company",
    description:
      "A responsive travel tours company landing page built with React and styled with custom CSS. Features a modern, clean design with smooth scrolling navigation, service highlights, and featured tours display.",
    technologies: [
      "React",
      "CSS",
      "JavaScript",
      "Font Awesome",
      "Responsive Design",
      "Component-Based Architecture",
    ],
    category: "web",
    links: {
      github: "https://github.com/ShalevAsor/backroads-app",
      live: "https://backroads-tours-company-demo.netlify.app",
    },
    features: [
      "Responsive navigation with smooth scrolling",
      "Dynamic hero section with call-to-action",
      "Featured tours showcase with pricing",
      "Services overview with icons",
      "About us section with image",
      "Social media integration",
      "Footer with quick links",
      "Mobile-friendly design",
      "Custom CSS animations",
      "Font Awesome integration",
    ],
  },

  // Mobile Projects
  {
    id: "geo-champ",
    title: "Geo-Champ - Geography Challenge Game",
    description:
      "An exhilarating Android game that combines geography, knowledge, and speed challenges into one thrilling experience. Features real-time location-based gameplay, interactive maps, and competitive leaderboards to make learning geography fun and engaging.",
    technologies: [
      "Kotlin",
      "Android SDK",
      "Google Maps API",
      "Firebase",
      "Material Design",
      "Location Services",
      "Coroutines",
      "ViewBinding",
    ],
    category: "mobile",
    links: {
      github: "https://github.com/ShalevAsor/ChallengesGame",
    },
    features: [
      "Real-time location-based geography challenges",
      "Interactive mini-games (city guessing, flag identification)",
      "Global leaderboard with top scores tracking",
      "Detailed user statistics and progress monitoring",
      "Google Maps integration with current location",
      "User authentication and profile management",
      "Real-time multiplayer capabilities",
      "Math challenges with timer functionality",
      "Dynamic difficulty progression",
      "Achievements and rewards system",
    ],
  },
  {
    id: "tutor-time",
    title: "TutorTime - Private Tutoring Platform",
    description:
      "A comprehensive mobile application designed to connect students with tutors. The app facilitates private tutoring sessions by providing a platform for scheduling, rating, and managing educational interactions, with real-time chat capabilities and advanced filtering options.",
    technologies: [
      "Java",
      "Android SDK",
      "Firebase Realtime Database",
      "Firebase Authentication",
      "Firebase Cloud Storage",
      "Firebase Cloud Messaging",
      "Google Maps API",
      "Material Design",
      "Custom Image View",
      "Glide Image Loading",
      "RecyclerView",
      "Custom Animations",
    ],
    category: "mobile",
    links: {
      github: "https://github.com/AlmogJakov/TutorTime",
    },
    features: [
      "User role system (Student/Tutor profiles)",
      "Real-time chat functionality",
      "Tutor search with advanced filters",
      "Rating and review system",
      "Profile customization with images",
      "Location-based tutor finding",
      "Session scheduling system",
      "Push notifications",
      "Educational subjects management",
      "Intuitive user interface with animations",
    ],
  },

  // Algorithm Projects
  {
    id: "tile-puzzle",
    title: "Tile Puzzle Solver",
    description:
      "A C++ implementation of the classic sliding tile puzzle solver using various search algorithms. The program employs multiple informed and uninformed search strategies to efficiently find optimal solutions for given puzzle configurations.",
    technologies: [
      "C++",
      "STL (Standard Template Library)",
      "Search Algorithms (A*, IDA*, BFS, Dfbnb, etc)",
      "Data Structures",
      "Object-Oriented Programming",
      "Memory Management",
    ],
    category: "algorithms",
    links: {
      github: "https://github.com/ShalevAsor/TilePuzzleGame",
    },
    features: [
      "Multiple search algorithm implementations:",
      "- A* (A-Star) with multiple heuristics",
      "- IDA* (Iterative Deepening A*)",
      "- BFS (Breadth-First Search)",
      "Command-line interface for puzzle input",
      "Efficient state representation and manipulation",
      "Solution path reconstruction and display",
      "Performance metrics (time, memory, nodes expanded)",
      "Custom puzzle size support",
      "Detailed solution steps output",
    ],
  },
  {
    id: "pokemon-catcher",
    title: "Catch The Pokemons",
    description:
      "A strategic Pokemon catching game implemented in Java. The game uses directed weighted graphs to simulate Pokemon hunting, where agents need to navigate efficiently to catch Pokemons in a time-constrained environment.",
    technologies: [
      "Java",
      "Graph Algorithms",
      "JSON Parsing",
      "GUI (Swing/AWT)",
      "Multi-threading",
      "Data Structures",
      "Client-Server Architecture",
      "REST API",
    ],
    category: "algorithms",
    links: {
      github: "https://github.com/ShalevAsor/Catch-The-Pokemons",
    },
    features: [
      "Real-time Pokemon catching simulation",
      "Graph-based movement system",
      "Multi-agent coordination",
      "Dynamic scoring system",
      "Efficient pathfinding algorithms",
      "Interactive game visualization",
      "JSON-based game state management",
      "Performance statistics tracking",
      "Competitive gameplay mechanics",
      "Server communication handling",
    ],
  },
  {
    id: "algo-solver-cpp",
    title: "AlgoSolver - Algorithm Problems Solution Kit",
    description:
      "A comprehensive C++ implementation of various algorithmic solutions for classic computer science problems. Features multiple paradigms including dynamic programming, divide and conquer, recursion, and greedy approaches.",
    technologies: [
      "C++",
      "Dynamic Programming",
      "Divide and Conquer",
      "Recursive Algorithms",
      "STL (Standard Template Library)",
      "Object-Oriented Programming",
      "Algorithm Optimization",
    ],
    category: "algorithms",
    links: {
      github: "https://github.com/ShalevAsor/AlgoSolverCPP",
    },
    features: [
      "Dynamic programming solutions for optimization problems",
      "Divide and conquer algorithm implementations",
      "Recursive problem-solving approaches",
      "Greedy algorithm solutions",
      "Classic algorithmic problem solutions",
      "Space and time complexity optimizations",
      "Problem categorization by solution type",
      "Multiple solution approaches for each problem",
      "Detailed solution explanations",
      "Efficient data structure usage",
    ],
  },
];
