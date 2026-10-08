export const myProjects = [
  {
    id: 1,
    title: "Textile Manufacturing ERP",
    description:
      "A comprehensive Textile Manufacturing ERP MVP built on Odoo 19 Community, containerized with Docker & Docker Compose, and powered by PostgreSQL 16. Designed for fabric roll management, production tracking, and strict quality control gates.",
    subDescription: [
      "Built as a domain-driven ERP MVP on Odoo 19 Community to solve operational challenges in textile mills, bridging the gap between generic continuous meter accounting and discrete physical roll tracking.",
      "Engineered 4 modular custom addons (textile_core, textile_inventory, textile_mrp, textile_quality) enforcing a 1 Roll = 1 Stock Lot invariant, a production roll registration wizard with mass/length balance checks, and a 4-location QC quarantine workflow (QC-Hold, Stock, Rework, Scrap).",
      "Features server-side delivery validation blocking uninspected/rejected rolls or partial roll quantities, complete bi-directional traceability from raw yarn lots to customer shipments, and an automated 32-step integration test runner with 41 passing unit tests.",
    ],
    href: "",
    github: "https://github.com/uzaannnnnn/odoo19-textile-erp",
    logo: "",
    image: "/assets/projects/odoo-textile-erp.jpg",
    tags: [
      {
        id: 1,
        name: "Odoo 19",
        path: "/assets/logos/odoo.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 3,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 4,
        name: "PostgreSQL 16",
        path: "/assets/logos/postgresql.svg",
      },
    ],
  },
  {
    id: 2,
    title: "DSS News - Age-Adaptive News Portal",
    description:
      "A fullstack Decision Support System (DSS) news portal with age-targeted content recommendations using the Profile Matching algorithm. Built with Next.js & Golang, powered by Supabase (PostgreSQL), and deployed across Vercel and Render.",
    subDescription: [
      "Developed an intelligent Decision Support System (DSS) news portal that dynamically tailors and recommends news content based on reader age groups (Anak-anak 7–12, Remaja 13–20, Dewasa 21+), promoting safe and age-appropriate information consumption.",
      "Frontend is built with Next.js 15, React 19, TypeScript, and TailwindCSS, deployed on Vercel (GitHub: uzaannnnnn/dss-news). Features intuitive age category selection, dynamic card filtering, and responsive article layouts.",
      "Backend microservice (pm-service) is implemented in Go (Golang) with Gin framework, connected to a Supabase (PostgreSQL) database via pgx driver for persistent data storage, deployed on Render (GitHub: uzaannnnnn/pm-service). It handles high-performance Profile Matching calculations, age-targeted query filters, and RESTful API endpoints.",
    ],
    href: "https://dss-news.vercel.app",
    github: "https://github.com/uzaannnnnn/dss-news",
    logo: "",
    image: "/assets/projects/dss-news.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "Golang",
        path: "/assets/logos/golang.svg",
      },
      {
        id: 3,
        name: "Supabase (PostgreSQL)",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 4,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 5,
        name: "Vercel",
        path: "/assets/logos/vercel.svg",
      },
      {
        id: 6,
        name: "Render",
        path: "/assets/logos/render.svg",
      },
    ],
  },
  {
    id: 3,
    title: "KabarLokal - Regional News & Community Portal",
    description:
      "A modern local news web platform featuring category-based filtering, rich article editor, Google OAuth authentication, interactive maps, and AWS S3 media storage. Built with Next.js 14 and MongoDB.",
    subDescription: [
      "Built KabarLokal, an interactive fullstack regional news platform designed to deliver community updates, regional culture, local economy, tourism, and trending news across various specific categories.",
      "Developed with Next.js 14, React, TypeScript, and TailwindCSS, incorporating Google OAuth & JWT authentication, Swiper carousels for featured news banners, Quill rich text editor, and React-Leaflet for location-based news mapping.",
      "Powered by MongoDB & Mongoose for flexible NoSQL document storage (articles, categories, comments, users) and AWS S3 for cloud media asset uploads. Deployed on Vercel (GitHub: uzaannnnnn/berita-lokal).",
    ],
    href: "https://kabar-lokal.vercel.app",
    github: "https://github.com/uzaannnnnn/berita-lokal",
    logo: "",
    image: "/assets/projects/kabar-lokal.png",
    tags: [
      {
        id: 1,
        name: "Next.js 14",
        path: "/assets/logos/nextjs.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/logos/typescript.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 5,
        name: "Vercel",
        path: "/assets/logos/vercel.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Modifikasi Ori - Warehouse & Inventory System",
    description:
      "An end-to-end multi-location warehouse and inventory management system designed for motorcycle speedshops and automotive workshops. Built with React 19, Node.js, Express, and MongoDB.",
    subDescription: [
      "Developed a fullstack warehouse management system (WMS) and workshop landing page for Modifikasi Ori, handling multi-branch inventory, product tracking, raw materials, and production invoicing across 4 active branches.",
      "Frontend is engineered with React 19, Vite, TailwindCSS, Framer Motion, and React Router v7, featuring JsBarcode integration for automated product and raw material barcode labeling, and responsive speedshop operational dashboards.",
      "Backend REST API service built with Node.js and Express, connected to MongoDB via Mongoose. Features secure JWT authentication, Zod input validation schemas, Pino structured logging, rate limiting, and role-based access control (Admin & Manager) for inventory transfers.",
    ],
    href: "https://modifikasiori.com/",
    github: "https://github.com/uzaannnnnn/warehouse",
    logo: "",
    image: "/assets/projects/modifikasi-ori.png",
    tags: [
      {
        id: 1,
        name: "React 19",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/logos/nodejs.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/express.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Smart Home AI Chatbot with Hugging Face Integration",
    description:
      "An AI-powered smart home chatbot built using React.js for the frontend and Go (Golang) for the backend, integrated with Hugging Face NLP models for intelligent responses and data processing.",
    subDescription: [
      "This smart home AI chatbot features a React.js frontend and a Golang backend, enabling users to control devices, monitor energy usage, and get personalized suggestions via natural language.",
      "It integrates multiple Hugging Face models, including Phi for general natural language processing and reasoning, Tapas for answering questions over CSV/tabular data, and NLP-Helsinki for multilingual translation—enabling smart, contextual, and language-flexible interactions.",
      "The backend handles model integration, CSV processing, and session tracking, while the frontend offers a responsive UI for voice/text interaction — enhancing home automation and energy efficiency.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/image1.png",
    tags: [
      {
        id: 1,
        name: "ReactJS",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Golang",
        path: "/assets/logos/golang.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Roblox-Inspired Profile UI Design",
    description:
      "Designed a Roblox-style profile UI using HTML, TailwindCSS, and JavaScript, with a focus on responsive, mobile-first UX. Collaborated in a small team to ensure smooth user interaction and accessibility.",
    subDescription: [
      "Created a dynamic, Roblox-inspired profile user interface using HTML, TailwindCSS, and JavaScript. The design prioritized mobile-first responsiveness and engaging user experience (UX), ensuring consistent performance across devices.",
      "Worked closely with a small team, applying modern web design practices and collaborative workflows to prototype, test, and refine the interface based on feedback and usability goals.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/image3.png",
    tags: [
      {
        id: 1,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 2,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 7,
    title: "Pharma Distribution Web App (B2B Model)",
    description:
      "Built a B2B pharmaceutical distribution system using Laravel, TailwindCSS, and JavaScript. Developed full-stack features in a two-person team with a focus on responsive and clean UI design.",
    subDescription: [
      "Developed a full-stack web application for B2B pharmaceutical distribution using Laravel for the backend, TailwindCSS for styling, and JavaScript for frontend interactivity.",
      "Worked in a two-person team where responsibilities included designing database schemas, implementing business logic, and building a responsive user interface tailored for wholesalers and suppliers. The project emphasized scalability, data accuracy, and a clean, professional look across devices.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/image4.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Mysql",
        path: "/assets/logos/mysql.svg",
      },
    ],
  },
  {
    id: 8,
    title: "Restaurant Self-Ordering App with Midtrans Integration",
    description:
      "Built a fullstack restaurant web app featuring QR code scanning, menu browsing, shopping cart, and checkout. Developed with a mobile-first approach and integrated Midtrans for real-time payments.",
    subDescription: [
      "Developed a fullstack restaurant ordering system where users can scan a QR code to access a digital menu, add items to their cart, and complete checkout seamlessly.",
      "The frontend was built using modern web technologies, focusing on responsive, mobile-first design.",
      "The backend handles order processing, menu data management, and integrates with Midtrans for secure and flexible payment options (VA, QRIS, e-wallets). Session data is managed to ensure smooth checkout and real-time order tracking.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/image5.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Mysql",
        path: "/assets/logos/mysql.svg",
      },
    ],
  },
  {
    id: 9,
    title: "MUA Booking System with Round-Robin Scheduling",
    description:
      "Built a Makeup Artist (MUA) booking system using Laravel, TailwindCSS, and JavaScript. Implemented a round-robin scheduling algorithm to assign available MUAs fairly based on availability.",
    subDescription: [
      "Developed a web-based MUA (Makeup Artist) booking platform with Laravel as the backend, TailwindCSS for UI styling, and JavaScript for interactive frontend features.",
      "The system uses a round-robin scheduling algorithm to automatically assign clients to available MUAs, ensuring a fair distribution of bookings and preventing overbooking. Users can choose preferred time slots, while the system smartly redirects requests to the next available MUA if the selected one is fully booked.",
      "Admin and user dashboards were also implemented to manage bookings, schedules, and MUA availability efficiently.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/image2.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 4,
        name: "Mysql",
        path: "/assets/logos/mysql.svg",
      },
    ],
  },
  {
    id: 10,
    title: "Stationery Inventory Management System (Java EE + MySQL)",
    description:
      "Developed a stationery inventory management system using Java EE with JSP and JSTL, integrated with a MySQL database to manage incoming and outgoing stock efficiently.",
    subDescription: [
      "Created a web-based inventory system for a stationery (ATK) store using Java EE, with JSP and JSTL for the frontend and Servlets for backend logic. The application allows admins to manage product data, record stock entries and withdrawals, and monitor real-time inventory levels.",
      "The system connects to a MySQL database, handling CRUD operations for products, categories, and transaction logs. Features include stock alerts, input validation, and user-friendly interfaces for managing warehouse activities.",
      "Designed with a modular architecture, the app supports easy future expansion for features like user roles, reporting, and barcode support.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/image.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "Mysql",
        path: "/assets/logos/mysql.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/muhamad-fauzan-58204b275/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/uzaannnnnn",
    icon: "/assets/socials/github.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6283890575720",
    icon: "/assets/socials/whatsApp.svg",
  },
];

export const experiences = [
  {
    title: "Master Teacher",
    job: "PT. Ruang Raya Indonesia – Ruangguru",
    date: "Jun 2025 – Present",
    contents: [
      "Teaching foundational and applied programming using MIT App Inventor, Roblox Studio (Lua), and Python for middle to high school students.",
      "Served as an official semifinal judge for Ruangguru Code Fest, assessing participants across the Bandung region in a nationwide coding competition.",
      "Mentored students on individual and group software projects, fostering algorithmic thinking, computational problem-solving, and clean code principles.",
    ],
    skills: ["Python", "Roblox Studio (Lua)", "MIT App Inventor", "Algorithms", "Mentoring"],
  },
  {
    title: "Fullstack Developer (Internship)",
    job: "PT. Winnicode Garuda Indonesia",
    date: "Sep 2025 – Jan 2026",
    contents: [
      "Engineered the KabarLokal regional news and community web portal using Next.js 14, React, TypeScript, and TailwindCSS with mobile-first UX.",
      "Integrated secure authentication with Google OAuth & JWT, document data persistence with MongoDB & Mongoose, and cloud media storage via AWS S3.",
      "Implemented interactive geospatial news mapping with Leaflet, dynamic category filters, and continuous deployment on Vercel with GitHub version control.",
    ],
    skills: ["Next.js 14", "React", "TypeScript", "TailwindCSS", "MongoDB", "AWS S3", "Vercel"],
  },
  {
    title: "ERP & Warehouse Systems Developer",
    job: "Enterprise Engineering & Projects",
    date: "2025 – 2026",
    contents: [
      "Textile Manufacturing ERP: Built an ERP MVP on Odoo 19 Community, Docker Compose, and PostgreSQL 16. Engineered 4 custom addons (textile_core, textile_inventory, textile_mrp, textile_quality) enforcing 1 Roll = 1 Stock Lot traceability, 4-location QC quarantine gates, and delivery validation rules with 41 passing unit tests and 32 integration test steps.",
      "Modifikasi Ori (Warehouse & Speedshop): Architected a multi-branch warehouse management system (WMS) for 4 active branches using React 19, Vite, TailwindCSS, Node.js Express, and MongoDB. Integrated JsBarcode for real-time barcode generation and tracking across motorcycle parts and workshop raw materials.",
    ],
    skills: ["Odoo 19", "Python", "Docker", "PostgreSQL", "React 19", "Node.js", "Express", "MongoDB", "JsBarcode"],
  },
  {
    title: "Fullstack & AI Developer (Internship)",
    job: "PT. Ruang Raya Indonesia – Ruangguru",
    date: "Sep 2024 – Dec 2024",
    contents: [
      "Developed fullstack web applications using ReactJS and Golang with RESTful APIs, JWT authentication, and PostgreSQL using the Gin framework.",
      "Integrated Hugging Face AI models into Golang microservices: NLP-Helsinki for multilingual machine translation, TAPAS for CSV/tabular data question answering, and Phi-4 for reasoning.",
      "Engineered DSS News: An age-adaptive Decision Support System news portal utilizing the Profile Matching algorithm with Golang/Gin backend on Render and Supabase (PostgreSQL), paired with Next.js 15 on Vercel.",
      "Collaborated in an Agile Scrum sprint cycle using Git; conducted comprehensive endpoint API testing with Postman, Firebase, and json-server.",
    ],
    skills: ["ReactJS", "Golang (Gin)", "Hugging Face AI", "PostgreSQL", "Supabase", "REST APIs", "Agile/Scrum"],
  },
  {
    title: "Assistant Lecturer & Lab Instructor",
    job: "STMIK Mardira Indonesia",
    date: "Aug 2023 – Aug 2024",
    contents: [
      "Led and assisted Web Programming laboratory sessions covering JavaScript, PHP, and Laravel, including syllabus design and student practical exam grading.",
      "Supported practical IoT lab sessions involving ESP8266 microcontrollers, electronic sensors, and RESTful data communication.",
      "Guided undergraduate students in debugging, database design, and algorithmic problem-solving for coursework and practical exams.",
    ],
    skills: ["PHP", "Laravel", "JavaScript", "IoT (ESP8266)", "Database Design", "Mentoring"],
  },
  {
    title: "Fullstack Web Developer",
    job: "Freelance & Collaborative Projects",
    date: "2022 – 2023",
    contents: [
      "B2B Pharma Distribution: Built a B2B pharmaceutical ordering system with Laravel, TailwindCSS, JavaScript, MySQL, and Midtrans payment gateway.",
      "Restaurant Self-Ordering: Developed a QR-code menu self-ordering system with mobile cart, checkout, and automated Midtrans payment verification.",
      "MUA Booking System: Implemented a makeup artist booking platform with a round-robin scheduling algorithm to distribute appointments fairly.",
      "Stationery Inventory: Built an inventory management system for a stationery store using Java EE (JSP, JSTL, Servlets) and MySQL.",
      "Roblox Profile UI: Crafted a responsive, mobile-first profile user interface inspired by Roblox using HTML, TailwindCSS, and JavaScript.",
    ],
    skills: ["Laravel", "TailwindCSS", "Java EE", "MySQL", "Midtrans", "JavaScript"],
  },
];
export const reviews = [
  {
    name: "Quotes",
    username: "@quotes1",
    body: "Programs must be written for people to read, and only incidentally for machines to execute.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Quotes",
    username: "@quotes2",
    body: "Talk is cheap. Show me the code.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Quotes",
    username: "@quotes3",
    body: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    img: "https://robohash.org/john",
  },
  {
    name: "Quotes",
    username: "@quotes4",
    body: "First, solve the problem. Then, write the code.",
    img: "https://robohash.org/alice",
  },
  {
    name: "Quotes",
    username: "@quotes5",
    body: "The best error message is the one that never shows up.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Quotes",
    username: "@quotes6",
    body: "Clean code always looks like it was written by someone who cares.",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Quotes",
    username: "@quotes7",
    body: "Good code is its own best documentation.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Quotes",
    username: "@quotes8",
    body: "Simplicity is the soul of efficiency.",
    img: "https://robohash.org/eve",
  },
];
