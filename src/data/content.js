/**
 * All page content lives here so you only ever edit one file.
 * Components read from this — never hard-code copy in a component.
 */

export const profile = {
  firstName: "Bhavya",
  lastName: "Kundalia",
  role: "MERN Stack Developer & DSA Enthusiast",
  status: "Available for internships & freelance work",
  bio: "I'm a B.Tech student who builds full-stack web applications with the MERN stack. I care about interfaces that feel fast and obvious to use, and I back that up with consistent Data Structures and Algorithms practice — the kind of groundwork that shows up in how I approach a problem, not just how I ship it.",
  email: "kundaliabhavya2@gmail.com",
  // Put your CV at public/resume.pdf and this link works.
  resume: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", handle: "MishieCodes7777", url: "https://github.com/MishieCodes7777" },
  {
    label: "LinkedIn",
    handle: "bhavya-k",
    url: "https://www.linkedin.com/in/bhavya-k-805485317/",
  },
  { label: "LeetCode", handle: "MishB7183", url: "https://leetcode.com/u/MishB7183/" },
];

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    role: "Full Stack Web Development Intern",
    company: "Blend Vidya EdTech",
    period: "Dec 2025 — Feb 2026",
    location: "Internship",
    summary:
      "Worked across the stack on production education software, from UI components through to data handling.",
    bullets: [
      "Developed and optimised responsive web applications using HTML, CSS and JavaScript.",
      "Built reusable interactive UI components and improved the user experience across multiple pages.",
      "Integrated frontend and backend workflows for reliable end-to-end data handling.",
      "Collaborated on real-world development projects using structured, review-based development practices.",
    ],
    // Project delivered during this role — rendered inside the experience entry.
    project: {
      name: "Self-Tracking System",
      tagline: "Delivered during this internship",
      description:
        "A full-stack MERN application for employee productivity monitoring and workforce management, covering activity logging, per-employee dashboards and role-based access for managers.",
      stack: ["MongoDB", "Express.js", "React", "Node.js"],
      // Add these when the repo/demo is public.
      repo: "",
      demo: "",
    },
  },
];

export const projects = [
  {
    name: "WebRTC Video Conference App",
    year: "2026",
    description:
      "A real-time video conferencing platform supporting peer-to-peer audio and video calls, with a signalling server handling room join, offer/answer exchange and ICE candidate negotiation.",
    highlights: [
      "Peer-to-peer media streaming over WebRTC",
      "Room-based signalling with live participant sync",
      "Mute, camera toggle and graceful disconnect handling",
    ],
    stack: ["WebRTC", "JavaScript", "Node.js", "Socket.io"],
    repo: "https://github.com/MishieCodes7777",
    demo: "",
  },
  {
    name: "E-Commerce Platform",
    year: "2025",
    description:
      "A dynamic e-commerce storefront with product catalogue, cart management and order flow, backed by a server-rendered PHP application and a relational schema.",
    highlights: [
      "Product catalogue with search and category filtering",
      "Session-based cart and checkout flow",
      "Admin views for product and order management",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    repo: "https://github.com/MishieCodes7777",
    demo: "",
  },
];

export const skills = [
  { group: "Languages", items: ["C++", "JavaScript", "Java", "Python"] },
  { group: "Frontend", items: ["React", "HTML", "CSS", "Responsive Design"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Databases", items: ["MongoDB", "MySQL"] },
  { group: "Core CS", items: ["Data Structures", "Algorithms", "OOP"] },
  { group: "Tools", items: ["Git", "GitHub", "Vite", "Postman"] },
];

export const certificates = [
  {
    title: "Data Structures & Algorithms using Java",
    issuer: "NPTEL",
    image: "dsaNPTEL",
    width: 1000,
    height: 678,
    alt: "NPTEL certificate for Data Structures and Algorithms using Java",
    description:
      "Completed NPTEL's 12-week Data Structures and Algorithms using Java course, finishing among 3,234 successful candidates. Covered core data structures, algorithm design and complexity analysis.",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
    image: "python",
    width: 953,
    height: 679,
    alt: "NPTEL Elite grade certificate for Python for Data Science",
    description:
      "Earned an Elite grade in NPTEL's Python for Data Science course, building fundamentals in Python programming, data handling and analysis workflows.",
  },
];
