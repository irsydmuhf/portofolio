export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  technologies: string[];
  image?: string;
  caseStudyLink?: string;
  githubLink?: string;
  dashboardLink?: string;
}

export interface Experience {
  id: string;
  year: string;
  role: string;
  organization: string;
  description: string;
  type: "experience" | "education";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Redigma Performance Dashboard",
    description:
      "Interactive Looker Studio dashboard designed to monitor business performance, sales trends, and key metrics in real time for data-driven decision making.",
    problem:
      "Stakeholders lacked a centralized and easy-to-read dashboard to track sales performance, revenue trends, and key operational metrics across time periods.",
    approach:
      "Integrated cleaned transactional data into Looker Studio and designed an interactive dashboard with filters, time-series analysis, and KPI cards to highlight performance trends and anomalies.",
    outcome:
      "Delivered a single source of truth dashboard that improved visibility into business performance and enabled faster, insight-driven strategic discussions.",
    technologies: [
      "Looker Studio",
      "Google Sheets",
      "SQL",
      "Data Cleaning",
      "Data Visualization",
    ],
    caseStudyLink: "https://lookerstudio.google.com/reporting/a9c54f7a-a0d9-42c9-9007-adf06b915c9d",
  },
  {
    id: "2",
    title: "Ride the Trend: Exploring Bike Rentals",
    description:
      "End-to-end data analysis project exploring bike rental demand patterns based on time, weather, and seasonal factors to support data-driven decision making.",
    problem:
      "Bike rental usage fluctuates significantly across seasons and time periods, making it difficult for operators to optimize bike availability and operational planning.",
    approach:
      "Performed exploratory data analysis and feature engineering using Python to analyze temporal and environmental variables. Built regression models to understand demand drivers and visualize insights through interactive dashboards.",
    outcome:
      "Identified key demand drivers such as temperature, working days, and peak hours, and delivered actionable insights that can help improve fleet distribution and service efficiency.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Streamlit",
    ],
    githubLink: "#",
    caseStudyLink: "https://data-analyst-irsyad.streamlit.app/",
  }
];

export const experience: Experience[] = [
  {
    id: "1",
    year: "2025 - Present",
    role: "Junior Data Analyst",
    organization: "Relasi Digital Marketing",
    description:
      "Lead data analysis initiatives for executive team. Design and maintain analytics infrastructure. Mentor junior analysts.",
    type: "experience",
  },
  {
    id: "2",
    year: "2022 - 2025",
    role: "Informatics Engineering",
    organization: "Universitas Muhammadiyah Magelang",
    description:
      "Focused on statistical analysis, machine learning, and data visualization. Thesis on predictive modeling.",
    type: "education",
  },
];

export const skills = [
  "SQL",
  "Python",
  "Pandas",
  "NumPy",
  "Data Visualization",
  "Excel",
  "Google Sheets",
  "Machine Learning",
  "Git",
];

export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Email", url: "mailto:hello@example.com", icon: "mail" },
];
