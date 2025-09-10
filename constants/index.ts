export const EXPERIENCES = [
  {
    title: 'Technical Lead & Senior Software Developer',
    company: 'GitStart Community (YC S19)',
    startDate: '06/2021',
    endDate: 'Present',
    location: 'Full Time · San Francisco · Remote',
    description: `
      <li>Led a team of <strong>6 developers</strong> across high-stakes projects (e.g., Hive, Valid, Upnext), reviving underperforming accounts, doubling client credit volume, and increasing overall delivery success by over <strong>50%</strong>.</li>
      <li>Revamped the Hive project post-client dissatisfaction, restoring confidence in just <strong>2 months</strong>, which resulted in additional project scope and extended engagement until the company pivoted.</li>
      <li>Took over the Valid project, significantly improving collaboration and code velocity — client satisfaction soared, with more complex work assigned and PR volume doubling.</li>
      <li>Delivered SSR-based deep linking features on Upnext, enabling state-sharing via URLs and improving engagement and user retention through faster load times.</li>
      <li>Ensured <strong>75%+</strong> test coverage across all Valid features using React Testing Library and Playwright, strengthening delivery confidence and reducing post-deployment bugs.</li>
      <li>Built custom CI/CD pipelines to enforce linting, formatting, and seamless testing/deployments, accelerating QA turnaround and increasing shipping speed.</li>
      <li>Introduced Kanban tracking, async documentation (Notion), and structured dev workflows that improved communication, delivery predictability, and overall team alignment.</li>
      <li>Promoted twice: from Software Engineer to Project Manager, and later to PM Domain Lead, mentoring fellow PMs and defining frameworks to improve delivery success across the organization.</li>
    `
  },
  {
    title: 'Frontend Developer',
    company: 'The Sports Media Agency',
    startDate: '01/2022',
    endDate: '12/2023',
    location: 'Contract · London · Remote',
    description: `
      <li>Led the redesign and rebuild of multiple high-traffic websites and content platforms across the Sports Media Agency and its clients (e.g., Run-Through), modernizing UI/UX and optimizing performance.</li>
      <li>Owned core landing pages, event detail views, and checkout features that powered the majority of user conversions and traffic; implemented and maintained wishlist, cart, and payment flows.</li>
      <li>Rebuilt the internal CMS and admin dashboard, delivering key modules like event management, including complex form flows, bulk editing, and state handling (draft/archive/delete).</li>
      <li>Achieved <strong>100%</strong> Lighthouse accessibility scores and implemented SEO optimizations verified via SEO 1 Click and other auditing tools, improving discoverability and compliance.</li>
      <li>Built scalable, reactive Angular applications using NgRx and RxJS for state management, enabling predictable data flow and performance optimization across high-traffic modules.</li>
    `
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Renter',
    startDate: '03/2019',
    endDate: '04/2021',
    location: 'Full Time · Cameroon · Hybrid',
    description: `
      <li>Took ownership of major features in a cross-platform Digital Renter app built with React Native, achieving <strong>1,000+ downloads</strong> and a <strong>4.4</strong> rating on iOS and Android stores with <strong>70+</strong> user reviews.</li>
      <li>Designed and implemented a Facebook Messenger chatbot with Node.js to automate property search, previews, and booking flows, reducing support workload by <strong>25%</strong> and improving lead conversion directly from Facebook.</li>
      <li>Built user-facing modules including property listings, filtering, contact forms, and booking interactions, contributing to increased engagement and user retention.</li>
      <li>Mentored <strong>3</strong> university interns during their internships through hands-on guidance, code reviews, and feature delivery coaching.</li>
      <li>Collaborated with a cross-functional team under a lead developer, contributing proactively to planning, implementation, and performance tuning across key user journeys.</li>
    `
  },
]

export type PlatformProp = 'linkedIn' | 'twitter' | 'github' | 'instagram';

export interface ActivityProp {
  id: number;
  title: string;
  description?: string;
  image: string;
  date: string;
  platform: PlatformProp;
  link: string;
}

export const RECENT_ACTIVITIES: ActivityProp[] = [
  {
    id: 1,
    title: 'Intelli-Vin (POC)',
    image: '/recent-activities/activity-1.png',
    description: '',
    date: '11/02/2025',
    platform: 'linkedIn',
    link: 'https://www.linkedin.com/posts/usmaila-abdoul_ai-automation-openai-activity-7295067724425166848-veIR?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRkxkBIc-Zu4LE3oUaHJMi2PyzTdYszsQ'
  },
  {
    id: 2,
    title: 'Google Stitch',
    image: '/recent-activities/activity-2.png',
    description: '',
    date: '15/06/2025',
    platform: 'linkedIn',
    link: 'https://www.linkedin.com/posts/usmaila-abdoul_stitch-ai-google-activity-7332348917361111040-4Bh_?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRkxkBIc-Zu4LE3oUaHJMi2PyzTdYszsQ'
  },
  {
    id: 2,
    title: 'Mock Social Media Post',
    image: '/project-imgs/project-6.png',
    description: '',
    date: '21/07/2025',
    platform: 'linkedIn',
    link: 'https://www.linkedin.com/posts/usmaila-abdoul_social-post-mockup-generator-activity-7353056966790770688-LlLH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRkxkBIc-Zu4LE3oUaHJMi2PyzTdYszsQ'
  }
]

export interface ProjectProp {
  id: number;
  title: string;
  description?: string;
  images: string[];
  featuredImage: string;
  date: string;
  link: string;
  techStack: string[];
}

export const PROJECTS: ProjectProp[] = [
  {
    id: 6,
    title: 'Social Post Mockup Generator',
    featuredImage: '/project-imgs/project-6.png',
    images: ['/project-imgs/project-6.png'],
    description: 'Design and create realistic, pixel-perfect mockups of social media posts for Facebook, Twitter, and Instagram. Customize every detail and download a high-quality PNG instantly.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    date: '21/07/2025',
    link: 'https://social-mocker.vercel.app/'
  },
  {
    id: 1,
    title: 'Touch of Grace (ToG) - Business Website',
    featuredImage: '/project-imgs/project-1.png',
    images: ['/project-imgs/project-1.png'],
    description: 'Built to showcase of the businesses services, reward programs, with a built in CMS integration to track all request quotes. It is highly optimized for great SEO perfomance and mobile responsiveness',
    techStack: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript'],
    date: '10/2024',
    link: 'https://touchofgracecleaningservices.com/'
  },
  {
    id: 2,
    title: 'Intelli VIN (POC)',
    featuredImage: '/project-imgs/project-2.png',
    images: ['/project-imgs/project-2.png'],
    description: "This platform aims to simplify and streamline car dealerships' data workflow by automating their processes. The app leverages OpenAI APIs to extract key information (e.g. VIN, make, and model) from PDFs and performs targeted web searches for similar car models and specifications. After gathering all this data it selects the most profitable and provides useful insights into prices and profit margins.",
    techStack: ['OpenAI APIs', 'Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'TypeScript'],
    date: '12/2024',
    link: 'https://www.linkedin.com/posts/usmaila-abdoul_ai-automation-openai-activity-7295067724425166848-veIR?utm_source=share&utm_medium=member_desktop&rcm=ACoAACtRkxkBIc-Zu4LE3oUaHJMi2PyzTdYszsQ'
  },
  {
    id: 3,
    title: 'Buea Regional Mosque',
    featuredImage: '/project-imgs/project-3.png',
    images: ['/project-imgs/project-3.png'],
    description: '',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    date: '01/2025',
    link: 'https://buea-regional-mosque.vercel.app/'
  },
  // {
  //   id: 4,
  //   title: 'Xceed',
  //   featuredImage: '/project-imgs/project-4.png',
  //   images: ['/project-imgs/project-4.png'],
  //   description: '',
  //   techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
  //   date: '01/2025',
  //   link: 'https://xceed-frontend-assessment.vercel.app/'
  // },
  {
    id: 5,
    title: 'Matchable',
    featuredImage: '/project-imgs/project-5.png',
    images: ['/project-imgs/project-5.png'],
    description: '',
    techStack: ['Next.js', 'Shadcn/ui' ,'Tailwind CSS', 'TypeScript'],
    date: '01/2025',
    link: 'https://matchable-ui.vercel.app/'
  },
]