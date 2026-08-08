/**
 * All page content lives here so you only ever edit one file.
 * Components read from this — never hard-code copy in a component.
 */

export const profile = {
  firstName: "Bhavya",
  lastName: "Kundalia",
  role: "Full-Stack Web Developer & DSA Enthusiast",
  status: "Available for internships & freelance work",
  bio: "I'm an Information Technology undergraduate at Manipal University Jaipur who builds full-stack web applications — real-time systems with WebRTC and Socket.IO, and data-driven apps on Node and Express. I've solved 150+ algorithmic problems on LeetCode, and that groundwork shows up in how I approach a problem, not just how I ship it.",
  email: "kundaliabhavya2@gmail.com",
  location: "Uttarakhand, India",
  // Your CV lives at public/resume.pdf — overwrite that file to update it.
  resume: "/resume.pdf",
  // The name the file gets when a visitor downloads it.
  resumeFileName: "Bhavya-Kundalia-Resume.pdf",
};

export const socials = [
  { label: "GitHub", handle: "MishieCodes7777", url: "https://github.com/MishieCodes7777" },
  {
    label: "LinkedIn",
    handle: "bhavya-k",
    url: "https://www.linkedin.com/in/bhavya-k-805485317/",
  },
  { label: "LeetCode", handle: "150+ solved", url: "https://leetcode.com/u/MishB7183/" },
];

// Shown in the Contact section. The full set of profiles lives in `socials`
// and appears in the hero — this is deliberately the shorter list.
export const contactLinks = [
  {
    label: "LinkedIn",
    handle: "bhavya-k",
    url: "https://www.linkedin.com/in/bhavya-k-805485317/",
  },
];

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
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
      repo: "",
      demo: "",
    },
  },
];

export const projects = [
  {
    name: "Akio — Food Ordering System",
    year: "2026 — Present",
    tag: "Team project · built the admin side",
    description:
      "A full-stack food ordering platform with a customer storefront and a separate admin panel. I built the admin side end to end — backend and frontend — covering menu and category management, the order status pipeline, table management and the analytics dashboard.",
    highlights: [
      "Admin CRUD for menu items, categories and restaurant tables",
      "Order status flow from pending through to completed, with Razorpay refunds on cancellation",
      "Analytics dashboard: revenue trends, popular items and payment breakdown charts",
      "Role-based admin authentication with JWT and Cloudinary image uploads",
    ],
    stack: ["React 19", "Node.js", "Express 5", "PostgreSQL", "Tailwind CSS", "JWT", "Razorpay"],
    repo: "https://github.com/MishieCodes7777/Food-ordering-system",
    demo: ""
  },
  {
    name: "WebRTC Video Conferencing App",
    year: "2025 — Present",
    tag: "Individual project",
    description:
      "A real-time video conferencing application supporting peer-to-peer audio and video, with meeting creation and joining via unique room IDs and URL-based routing.",
    highlights: [
      "Peer-to-peer media streaming over WebRTC",
      "Unique room IDs with URL-based join routing",
      "Real-time connection and disconnect handling",
    ],
    stack: ["WebRTC", "JavaScript", "Node.js", "Socket.IO"],
    repo: "https://github.com/MishieCodes7777",
    demo: "",
  },
];

export const skills = [
  { group: "Languages", items: ["C++", "C", "Java", "Python", "JavaScript", "PHP", "SQL"] },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT / OAuth"] },
  { group: "Real-time & 3D", items: ["WebRTC", "Socket.IO", "Three.js"] },
  { group: "Databases", items: ["PostgreSQL"] },
  {
    group: "Core CS",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems (OS)",
      "RDBMS",
      "DBMS",

    ],
  },
  { group: "Tools", items: ["Git", "GitHub", "Vite", "npm", "VS Code"] },
];

export const education = [
  {
    qualification: "B.Tech, Information Technology",
    institution: "Manipal University Jaipur",
    period: "2024 — 2028",
  },
  {
    qualification: "Class 12 (CBSE)",
    institution: "Baluni Public School",
    period: "2024",
  },
  {
    qualification: "Class 10 (ICSE)",
    institution: "Wynberg-Allen School",
    period: "2022",
  },
];

export const certificates = [
  {
    title: "Data Structures & Algorithms using Java",
    issuer: "NPTEL · IIT Kharagpur",
    image: "dsaNPTEL",
    width: 1000,
    height: 678,
    alt: "NPTEL certificate for Data Structures and Algorithms using Java",
    description:
      "Completed a 12-week NPTEL certification in Java-based data structures and algorithms, clearing both the online assessments and the proctored examination under IIT Kharagpur's evaluation.",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL · IIT Madras",
    image: "python",
    width: 953,
    height: 679,
    alt: "NPTEL Elite grade certificate for Python for Data Science",
    description:
      "Earned Elite certification with a 70% consolidated score, clearing both the online assignments and the proctored examination. Covered Python programming and foundational data science techniques.",
  },
];
