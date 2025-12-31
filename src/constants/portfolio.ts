// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string;
  name: string;
  initials: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  description?: any[];
  summary?: any[];
  location?: string;
  skills?: string[];
  skillCategories?: {
    category: string;
    items: string[];
  }[];
  resumeUrl?: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  video?: string;
  links?: {
    title: string | null;
    url: string | null;
    type: string | null;
  }[];
}

// Portfolio data
export const AUTHOR: Author = {
  _id: "author-1",
  name: "Shehzad Akhtar",
  initials: "SA",
  avatar: {
    asset: {
      url: "/avatar.png",
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Full Stack Developer & Project Manager.",
        },
      ],
    },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Versatile Full Stack Developer and Project Manager with 3+ years of experience in web development, team leadership, and workflow automation. Expertise in React, Next.js, and n8n automation.",
        },
      ],
    },
  ],
  location: "Pakistan",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "n8n",
    "Node.js",
    "Python",
    "Agile/Scrum",
    "Project Management",
    "API Integration",
    "Git",
  ],
  skillCategories: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      category: "Backend & Tools",
      items: ["Node.js", "Python", "API Integration", "Git"],
    },
    {
      category: "Automation & Management",
      items: ["n8n", "Agile/Scrum", "Project Management"],
    },
  ],
  resumeUrl: "#", // You can update this with your actual resume URL
  social: {
    github: "https://github.com/shehz-max",
    linkedin: "https://www.linkedin.com/in/shehzad-khan-bb23a6342",
    email: "shehzad.akhtar124@gmail.com",
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "White Label Resell Company",
    title: "Project Manager",
    location: "Remote",
    startDate: "Apr 2025",
    endDate: "Dec 2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Led cross-functional team of 15-18 members for SCAI Platform development. Managed full-stack development of SEO-optimized content generation platform with integrated automation features.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-1b",
    company: "White Label Resell Company",
    title: "Frontend Developer",
    location: "Remote",
    startDate: "Oct 2024",
    endDate: "Apr 2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed responsive user interfaces using React and Next.js. Collaborated with backend team to integrate APIs and implement full-stack features for the SCAI Platform.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-2",
    company: "Alarabservices",
    title: "Junior Front-End Developer",
    location: "On-site",
    startDate: "Jun 2024",
    endDate: "Sep 2024",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Designed and developed intuitive user interfaces resulting in increased customer satisfaction. Collaborated with design and backend teams to implement full-stack features.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-3",
    company: "CYPHION Technologies",
    title: "Web Development Intern",
    location: "Remote",
    startDate: "2023",
    endDate: "2023",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Designed and coded responsive websites using HTML, CSS, JavaScript, and modern frameworks. Contributed to CMS development with focus on automated content management.",
          },
        ],
      },
    ],
  },
  {
    _id: "work-4",
    company: "Self-Employed",
    title: "Freelance Frontend Developer",
    location: "Remote",
    startDate: "2022",
    endDate: "2023",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed responsive full-stack web applications for diverse clients. Created custom automation solutions streamlining business processes and workflows.",
          },
        ],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    _id: "edu-1",
    school: "COMSATS University Islamabad",
    degree: "Bachelor of Software Engineering",
    startDate: "2020",
    endDate: "2024",
    logo: {
      asset: {
        url: "",
      },
    },
  },
];

export const PROJECTS: Project[] = [
  {
    _id: "project-1",
    title: "SEO Sentinel",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A comprehensive website to check Spam Score and Domain Authority. Helps users analyze website metrics for better SEO performance.",
          },
        ],
      },
    ],
    technologies: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
    image: {
      asset: {
        url: "/projects/seo-sentinel.png",
      },
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/shehz-max/seo-sentinel",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "https://seo-sentinel-rose.vercel.app",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-2",
    title: "AI ATS Resume",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "An ATS-optimized resume builder that helps users create professional resumes tailored for Applicant Tracking Systems.",
          },
        ],
      },
    ],
    technologies: ["TypeScript", "React", "PDF.js"],
    image: {
      asset: {
        url: "/projects/ai-ats-resume.png",
      },
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/shehz-max/ai-ats-resume",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "https://ai-ats-resume.vercel.app",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-3",
    title: "Moverly Website",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "A modern, responsive website for a moving company featuring service details, quote estimation, and contact forms.",
          },
        ],
      },
    ],
    technologies: ["TypeScript", "Next.js", "Framer Motion"],
    image: {
      asset: {
        url: "/projects/moverly-website.png",
      },
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/shehz-max/moverly-website",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "https://moverly-website.vercel.app",
        type: "demo",
      },
    ],
  },
  {
    _id: "project-4",
    title: "TaskFlow AI",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "An intelligent task management application integrated with AI to help users prioritize and organize their daily workflow efficiently.",
          },
        ],
      },
    ],
    technologies: ["TypeScript", "React", "OpenAI API"],
    image: {
      asset: {
        url: "/projects/taskflow-ai.png",
      },
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/shehz-max/taskflow-ai",
        type: "code",
      },
      {
        title: "Live Demo",
        url: "https://taskflow-ai-sandy.vercel.app",
        type: "demo",
      },
    ],
  },
];

