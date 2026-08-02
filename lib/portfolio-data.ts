export const resumeUrl = "/resume.pdf";

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
  fileLink?: string;
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
    githubLink: "https://github.com/irsydmuhf/data_analyst_idcamp",
    caseStudyLink: "https://data-analyst-irsyad.streamlit.app/",
  },
  {
    id: "3",
    title: "Employee Bonus & Annual Review Tool",
    description:
      "A 7-tab Google Sheets/Excel system for freelance client work (Upwork) combining employee annual reviews with a two-part, performance-based raise calculator.",
    problem:
      "The client calculated annual raises and bonuses manually across cost-of-living adjustments, project performance, and values-based eligibility — a slow, error-prone process with no single source of truth per employee.",
    approach:
      "Built a Cost of Living Increase engine with a dedicated dollar pool per role, a quarterly Project Performance Bonus that rolls up annually, and a Core Values scorecard that gates bonus eligibility without touching base pay. A printable per-employee Annual Review pulls it all together via INDEX/MATCH and SUMIFS, with every formula verified against a full recalculation.",
    outcome:
      "Delivered an audit-ready bonus and review system that automated pay decisions across roles and metrics, replacing manual spreadsheet work with a consistent, error-checked calculator.",
    technologies: [
      "Google Sheets",
      "Excel",
      "Excel Formulas",
      "Dashboard Design",
      "Financial Modeling",
    ],
    caseStudyLink:
      "https://docs.google.com/spreadsheets/d/1P93U1oZXXa1fH957GW4-ZedMmleLTsg6exlxq_7Q16k/edit?gid=601964232#gid=601964232",
  },
  {
    id: "4",
    title: "BigQuery + Looker Studio Dashboard for Kimia Farma",
    description:
      "Project-based internship (Kimia Farma × Rakamin Academy) turning 600K+ retail transactions into an interactive performance dashboard.",
    problem:
      "Kimia Farma needed visibility into retail performance across branches, products, and inventory from raw transaction data, with no consolidated reporting spanning 2020–2023.",
    approach:
      "Imported and joined 600K+ retail transaction records in Google BigQuery across branches, products, and inventory, then built an interactive Looker Studio dashboard covering revenue by quarter, top-performing branches/provinces, and customer rating vs. branch rating analysis.",
    outcome:
      "Delivered a dashboard revealing Jawa Barat as the top-performing province (Rp94.9bn in nett sales) and surfacing branch rating gaps, supporting data-driven retail strategy.",
    technologies: [
      "BigQuery",
      "Looker Studio",
      "SQL",
      "Data Visualization",
      "Data Analysis",
    ],
    caseStudyLink:
      "https://datastudio.google.com/reporting/3144dcc9-9e60-4d0d-bb0a-8ab8d76c6485",
  },
  {
    id: "5",
    title: "SQL Sales Analysis & Business Insights for E-commerce",
    description:
      "Deeper SQL analysis on Kanaya Living's cleaned order data to answer business questions spreadsheets alone couldn't solve.",
    problem:
      "Spreadsheet formulas alone couldn't answer harder business questions: channel profitability, top products, monthly growth, repeat-purchase rate, and unpaid orders.",
    approach:
      "Wrote SQL queries (SQLite) to analyze channel-level revenue and order volume, repeat customer behavior, and payment status, documenting every finding in plain business language rather than raw numbers.",
    outcome:
      "Found a 61% repeat customer rate worth building a referral program on, identified Shopee as the top channel by AOV, flagged 40 unpaid orders needing follow-up, and spotted a data quality gap for further cleanup.",
    technologies: [
      "SQL",
      "SQLite",
      "Data Analysis",
      "Business Intelligence",
      "Data Visualization",
    ],
    caseStudyLink:
      "https://docs.google.com/document/d/19Y6OGi07WUMiZSj5ep-fqUif-YrMo9_KbPVci5X0Mq8/edit?usp=sharing",
    fileLink:
      "https://drive.google.com/file/d/1Rbh96KbH7c55pG9lEm47uq1mXjBAH9cE/view?usp=sharing",
  },
  {
    id: "6",
    title: "Cleaning 3 Months of Messy Multi-Channel Order Data",
    description:
      "Self-initiated project simulating a common small e-commerce scenario: standardizing 320+ orders from Instagram, Shopee, Tokopedia, and WhatsApp with no consistent format.",
    problem:
      "Raw order data had inconsistent date formats, duplicate entries, inconsistent product/channel naming, mixed text/number prices, missing phone/city data, and negative-quantity errors — unusable for reporting.",
    approach:
      "Cleaned and standardized the dataset in Excel/Google Sheets, added Month and Revenue columns, and documented every fix in a Process Notes sheet for full transparency.",
    outcome:
      "Delivered 320 clean, deduplicated rows ready for reporting — the foundation for the SQL sales analysis that followed.",
    technologies: [
      "Microsoft Excel",
      "Google Sheets",
      "Data Cleaning",
      "Data Entry",
      "Data Analysis",
    ],
    caseStudyLink:
      "https://docs.google.com/spreadsheets/d/10qDfK2A9dEFi4B1JlT8T0x1OlHUhQtdKaOdrsmAFWsU/edit?usp=drive_link",
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    year: "2025 - Present",
    role: "Junior Data Analyst",
    organization: "Relasi Digital Marketing",
    description:
      "Lead data analysis initiatives for executive team. Design and maintain analytics infrastructure.",
    type: "experience",
  },
  {
    id: "2",
    year: "February 2025 - February 2026",
    role: "Teaching Assistant – Database Systems",
    organization: "Universitas Muhammadiyah Magelang",
    description:
      "Assisted students in understanding database concepts and SQL queries. Supported practical sessions and helped troubleshoot database-related tasks. Guided students in organizing and managing data effectively.",
    type: "experience",
  },
  {
    id: "3",
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
