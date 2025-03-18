export const EXPERIENCES = [
  {
    title: 'Technical Lead & Senior Software Developer',
    company: 'GitStart Community (YC S19)',
    startDate: '06/2021',
    endDate: 'Present',
    location: 'San Francisco · Remote',
    description: `
      <li>Operated as a full-stack developer for a distributed engineering team, delivering scalable public-facing web applications.</li>
      <li>Developed advanced features across multiple client projects using <strong>React.js, Next.js, React Native, Redux, Node.js. and TypeScript</strong>,
      enhancing user experience and functionality.</li>
      <li>Optimized application performance for Core Web Vitals using <strong>Server-Side
      Rendering (SSR)</strong> and <strong>Static Site Generation (SSG)</strong> with Next.js.</li>
      <li>Led a team of six developers, managing Agile workflows, code reviews
      and stand-ups to deliver projects on time and withing budget.</li>
      <li>Merged 100+ pull requests, shipping 3,000+ credits in features and
      driving significant revenue growth for the team.</li>
      <li>Built API endpoints with Express.js and databases like PostgreSQL.</li>
      <li>Ensured code quality through unit testing (React Testing Library).</li>
    `
  },
  {
    title: 'Frontend Developer',
    company: 'The Sports Media Agency',
    startDate: '01/2022',
    endDate: '12/2023',
    location: 'London · Remote',
    description: `
      <li>Revamped, and redesigned various sports media websites using Angular and TypeScript, achieving improvements in performance optimization
        and load times.</li>
      <li>Developed and maintained new features to enhance SEO and WCAG accessibility compliance.</li>
      <li>Collaborated with designers and backend engineers to integrate APIs, delivering seamless user-centric features.</li>
      <li>Conducted code reviews and peer mentoring to uphold quality standards in a collaborative Agile environment</li>
    `
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Renter',
    startDate: '03/2019',
    endDate: '04/2021',
    location: 'Cameroon · Hybrid',
    description: `
      <li>Designed and developed the Digital Rental cross-platform mobile application using React Native, achieving over 1,000+ downloads across iOS and Android platforms.</li>
      <li>Created a Facebook Messenger bot with Node.js, reducing customer support costs by 25% and driving more traffic to the company website.</li>
      <li>Leveraged React Native to build cross platform mobile application, driving revenue up and user satisfaction.</li>
      <li>Built API endpoints with Express.js and databases like PostgreSQL.</li>
      <li>Provided coaching and mentorship to junior developers, fostering a collaborative and proactive development culture.</li>
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
  {
    id: 4,
    title: 'Xceed',
    featuredImage: '/project-imgs/project-4.png',
    images: ['/project-imgs/project-4.png'],
    description: '',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    date: '01/2025',
    link: 'https://xceed-frontend-assessment.vercel.app/'
  },
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