import {
  mobile,
  backend,
  creator,
  web,
  git,
  newgen,
  skillrisers,
  proximus,
  chessbotz,
  linkedIn,
  github,
  python,
  numpy,
  pandas,
  matplotlib,
  seaborn,
  excel,
  sql,
  powerbi,
  flask,
  ai,
  ml,
  sqlserver,
  wellbot,
  trendingstock,
  upiexcel,
  blinkpy,
  autoutube1,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Power BI Developer",
    icon: web,
  },
  {
    title: "SQL Analyst",
    icon: creator,
  },
  {
    title: "AI/ML Enthusisast",
    icon: mobile,
  },
  {
    title: "Excel Specialist",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Seaborn",
    icon: seaborn,
  },
  {
    name: "Artificial Intelligence",
    icon: ai,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
];

const experiences = [
  {
    title: "Data Science Intern (Remote)",
    company_name: "CodSoft",
    company_website: "https://www.codsoft.in/",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "15 Jul 2025 - 15 Aug 2025",
    points: [
      "Performing data cleaning, preprocessing, and EDA with Pandas, NumPy, and Matplotlib.",
      "Building and evaluating classification and regression models using Scikit-learn.",
      "Maintaining a GitHub repository to track task progress and share project work.",
      "Strengthening skills in data storytelling, visualization, and real-world problem-solving.",
    ],
  },
  {
    title: "IT Intern",
    company_name: "ITC Pvt Ltd, Saharanpur, Uttar Pradesh",
    company_website: "https://www.itcportal.com/",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "05 Jul 2024 - 05 Aug 2024",
    points: [
      "Collected daily data of contract workers and entered it in Excel with different attributes.",
      "Prepared and sent weekly reports to the senior officer for review.",
      "Analyzed employee performance based on given metrics and helped to shortlist workers for full time job .",
    ],
  },
  {
    title: "AI Intern",
    company_name: "Infowiz, Chandigarh",
    company_website: "https://www.linkedin.com/company/infowiz/",
    icon: proximus,
    iconBg: "#E6DEDD",
    date: "03 Jun 2024 - 03 Jul 2024",
    points: [
      "Guided and assisted students in developing AI-based projects during industrial training.",
      "Simplified complex concepts to ensure better understanding and project clarity.",
      "Collaborated on ML and automation tasks while gaining real-world development and mentoring experience.",
    ],
  },
];

const projects = [
  {
    name: "ChessBot-Z",
    description:
      "Developed an AI-powered chess game using Flask and python-chess, featuring real-time move evaluation and adjustable difficulty. It have. web-based frontend for interactive drag-and-drop gameplay and move tracking. NOTE: render link may take some time to load due to heaviness of project and please refresh it once when started.",
    tags: [
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "Artificial Intelligence",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: chessbotz,
    hosted_link: "https://chessbot-z.onrender.com/",
  },
  {
    name: "WellBot.AI",
    description:
      "Developed WellBot.AI, a web-based AI health assistant using React, Three.js, Flask, and SQLite with real-time diagnosis via Mistral 7B LLM. Included 3D body interaction, AI chatbot, text-to-speech, and downloadable medical reports for accessibility.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Mistral API key",
        color: "green-text-gradient",
      },
      {
        name: "AI Agent chatbot",
        color: "pink-text-gradient",
      },
    ],
    image: wellbot,
    hosted_link: "https://github.com/zodrickjohn/WellBot.AI_test",
  },
  {
    name: "Trending Stock's Analysis",
    description:
      "Designed an interactive Power BI dashboard to visualize historical stock performance of 10 major Indian companies from Aug 2019 to May 2024. Integrated slicers, dark/light modes, and DAX-driven visuals to compare daily metrics and analyze market behavior.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Power Query",
        color: "green-text-gradient",
      },
      {
        name: "DAX",
        color: "pink-text-gradient",
      },
    ],
    image: trendingstock,
    hosted_link: "https://github.com/zodrickjohn/Trending-Stocks-Analysis",
  },
  {
    name: "Automated Youtube Channel Analysis",
    description:
    "Created a Python tool that uses the YouTube Data API to fetch and visualize the most viewed videos from a channel. Generated an interactive HTML dashboard with Plotly, featuring video stats and clickable links in a dark-themed UI.",
    tags: [
      {
        name: "Plotly",
        color: "blue-text-gradient",
      },
      {
        name: "Youtube Data API",
        color: "green-text-gradient",
      },
      {
        name: "Web Automate",
        color: "pink-text-gradient",
      },
    ],
    image: autoutube1,
    hosted_link:
      "https://github.com/zodrickjohn/Automated-Youtube-Channel-Analytics",
  },
  {
    name: "EXCEL Based Analysis of UPI Transactions",
    description:
      "Analyzed UPI transaction data in Excel to uncover spending patterns, top payees, and high-value transactions. Used Pivot Tables, charts, slicers, and formulas to visualize monthly trends, category distribution, and refunds.",
    tags: [
      {
        name: "Excel",
        color: "blue-text-gradient",
      },
      {
        name: "Pivot Charts",
        color: "green-text-gradient",
      },
      {
        name: "Slicers",
        color: "pink-text-gradient",
      },
    ],
    image: upiexcel,
    hosted_link: "https://github.com/zodrickjohn/Data-Analysis-Excel-Project---UPI-Transactions",
  },
  {
    name: "PYTHON based Analysis of Blinkit Dataset",
    description:
      "Performed end-to-end analysis on Blinkit's grocery dataset using Python libraries, focusing on cleaning, EDA, and KPI extraction. Generated insights like total sales, average ratings, and visualized sales by item type, outlet size, and location.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "EDA",
        color: "green-text-gradient",
      },
      {
        name: "KPI Extraction",
        color: "pink-text-gradient",
      },
    ],
    image: blinkpy,
    hosted_link:
      "https://github.com/zodrickjohn/Data-Analysis-Python-Project---Blinkit",
  },
];

const personalInfo = {
  name: "Zodrick",
  fullName: "Zodrick John",
  email: "zodrickjohn007@gmail.com",
  mobile: "7302372880",
  role: "Data Analyst",
  about: `I'm a final-year Computer Science Engineering student at UIET, Panjab University, 
  with a strong foundation in data analysis and AI/ML. I have hands-on experience working with 
  Python, SQL, Excel and data visualization tools like Power BI. I’ve built AI-powered tools, 
  data-driven dashboards, and analytics solutions that address real-world challenges. My 
  participation in multiple national-level hackathons has sharpened my skills in collaboration, 
  leadership, and creative problem-solving. I’m passionate about building impactful, 
  scalable solutions—whether through data insights or intelligent automation.`,
  projectsIntro: `The following projects reflect my ability to apply data 
  analytics and AI/ML to real-world problems. Each project includes brief 
  descriptions and live demos, showcasing my expertise in Python, 
  visualization, APIs, and applied artficial intelligence and machine learning. These experiences 
  highlight my capability to extract insights and deliver practical, user-focused solutions.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1ohvr3Bun4IT0NuyVcvktN8eyXTeSyU_C/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/zodrick-john-1689a8256/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/zodrickjohn",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};