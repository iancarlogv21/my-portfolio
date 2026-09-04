// data/projects.ts
export interface ProjectItem {
  title: string;
  tag: string;
  category: "websites-apps" | "funnels-pages" | "automation-ai" | "console-application" | "design" | "ecommerce-posters";
  desc: string;
  src: string;
  link: string;
  actionText: string;
}

export const portfolioItems: ProjectItem[] = [
  // Websites & Apps
  {
    title: "FONZO AutoService",
    tag: "CAPSTONE PROJECT",
    category: "websites-apps",
    desc: "Enterprise automotive management system featuring client scheduling, maintenance tracking, and operational analytics.",
    src: "/FONZO.png",
    link: "https://fonzo-calibrations.onrender.com/",
    actionText: "{ VIEW PACKAGE } ↗",
  },
  {
  "title": "FELMS — Library Management System",
  "tag": "ACADEMIC SYSTEM",
  "category": "websites-apps",
  "desc": "High-performance digital catalog and circulation platform utilizing NoSQL MongoDB aggregation pipelines.",
  "src": "/FELMS.png",
  "link": "https://felms.onrender.com",
  "actionText": "{ PRIVATE REPOSITORY }"
},
  // Console Applications
  {
    title: "cs50p-review (CS50P Final Project)",
    tag: "PYTHON PACKAGE",
    category: "console-application",
    desc: "A custom command-line tool and code reviewer for Python. Install via terminal with `pip install cs50p-python-reviewer-ian`, then simply type `cs50p-review` to run it.",
    src: "/cs50project.png",
    link: "https://github.com/iancarlogv21/cs50p-python-reviewer",
    actionText: "{ VIEW REPOSITORY } ↗",
  },
  // Design (UI/UX)
  {
    title: "ZOL Esports Landing Page",
    tag: "UI / UX DESIGN",
    category: "design",
    desc: "Comprehensive esports organization layout featuring team rosters, tournament schedules, news blocks, and immersive yellow-gold branding.",
    src: "/zol.png",
    link: "https://iancarlo.my.canva.site/zol-esports",
    actionText: "{ VIEW LIVE } ↗",
  },
  {
    title: "Almost Heaven Hotel & Resort",
    tag: "UI / UX DESIGN",
    category: "design",
    desc: "Luxury hospitality booking interface highlighting room tiers, reservation selectors, resort amenities, and photo galleries.",
    src: "/Hotel.png",
    link: "https://iancarlo.my.canva.site/almost-heaven-hotel",
    actionText: "{ VIEW LIVE } ↗",
  },
  {
    title: "Taylor Swift TTPD Store & Tour Portal",
    tag: "UI / UX DESIGN",
    category: "design",
    desc: "The Tortured Poets Department album store and Eras Tour interactive concept page featuring music players and merch grids.",
    src: "/PrelimProj_Taylor.png",
    link: "https://iancarlo.my.canva.site/taylor-swift",
    actionText: "{ VIEW LIVE } ↗",
  },
  {
    title: "Cristiano Ronaldo Web Portal",
    tag: "UI / UX DESIGN",
    category: "design",
    desc: "Dynamic athletic tribute site featuring match countdowns, fixture schedules, career bios, and photo grids.",
    src: "/ronaldo-portal.png",
    link: "https://iancarlo.my.canva.site/ronaldo-portal",
    actionText: "{ VIEW LIVE } ↗",
  },
  {
    title: "Photography Portfolio & Visual Arts",
    tag: "VISUAL ARTS",
    category: "design",
    desc: "A curated collection of professional photography compositions, lighting studies, and visual storytelling works.",
    src: "/icgv-photography.png", // Update this filename if your image has a different name in public/gallery/ or public/
    link: "https://iancarlo.my.canva.site/icgv-photography", // Update with your actual photography link if different
    actionText: "{ VIEW LIVE } ↗",
  }
];