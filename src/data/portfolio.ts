// Central portfolio data — update links here. Links are placeholders until you fill them in.

export const profile = {
  name: 'Shodhan',
  role: 'Cloud Engineer',
  tagline:
    'Building reliable cloud-powered systems and turning ideas into scalable digital experiences.',
  location: 'Karnataka, India',
  degree: 'BE — Information Science & Engineering',
  college: 'Moodlakatte Institute of Technology',
  collegeLocation: 'Kundapura, Karnataka',
  duration: '2023 — 2027',
  links: {
    github: 'https://github.com/', // TODO: replace with real URL
    linkedin: 'https://www.linkedin.com/', // TODO: replace with real URL
    email: 'mailto:shodhan@example.com', // TODO: replace with real email
    resume: '/resume.pdf', // TODO: place resume.pdf in /public
  },
  metaTags: ['AWS', 'CLOUD', 'LINUX', 'SQL', 'GIT', 'WEB'],
} as const;

export const aboutCards = [
  {
    label: 'CURRENT FOCUS',
    title: 'Cloud Engineering',
    description:
      'Deepening expertise in AWS services, cloud architecture and infrastructure automation.',
    icon: 'cloud',
  },
  {
    label: 'ENGINEERING MINDSET',
    title: 'Build → Learn → Improve → Deploy',
    description:
      'Every project is a loop — build, break, understand, and ship something better.',
    icon: 'refresh',
  },
  {
    label: 'CURRENT MISSION',
    title: 'Become a strong Cloud Engineer',
    description:
      'Designing, deploying and maintaining reliable cloud infrastructure that solves real problems.',
    icon: 'rocket',
  },
] as const;

export const education = {
  degree: 'BE — Information Science & Engineering',
  institution: 'Moodlakatte Institute of Technology',
  location: 'Kundapura, Karnataka',
  period: '2023 — 2027',
  status: 'In Progress',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Database Management Systems',
    'Cloud Computing',
    'Software Engineering',
  ],
} as const;

export type Skill = { name: string; description: string };

export const skillCategories: {
  title: string;
  icon: string;
  accent: string;
  skills: Skill[];
}[] = [
  {
    title: 'CLOUD',
    icon: 'cloud',
    accent: 'electric',
    skills: [
      { name: 'AWS', description: 'Core cloud platform — hands-on with EC2, S3, IAM, VPC and more.' },
      { name: 'Cloud Computing', description: 'Fundamentals of compute, storage, networking and scaling in the cloud.' },
      { name: 'IAM', description: 'Identity & access management, roles, policies and least-privilege design.' },
      { name: 'EC2', description: 'Provisioning and managing virtual compute instances.' },
      { name: 'S3', description: 'Object storage, bucket policies and static hosting.' },
      { name: 'VPC', description: 'Virtual networking — subnets, route tables, security groups.' },
      { name: 'Cloud Fundamentals', description: 'Shared-responsibility model, regions, availability and cost basics.' },
    ],
  },
  {
    title: 'SYSTEMS',
    icon: 'terminal',
    accent: 'aurora',
    skills: [
      { name: 'Linux', description: 'Command-line fluency, file systems, processes and permissions.' },
      { name: 'Networking Fundamentals', description: 'IP addressing, DNS, ports, TCP/UDP and subnets.' },
    ],
  },
  {
    title: 'DEVELOPMENT',
    icon: 'code',
    accent: 'electric',
    skills: [
      { name: 'HTML', description: 'Semantic structure and accessible markup.' },
      { name: 'JavaScript', description: 'Language fundamentals — DOM, async, ES modules.' },
      { name: 'React', description: 'Component architecture, hooks and state management basics.' },
      { name: 'Node.js', description: 'Server-side JavaScript and runtime fundamentals.' },
      { name: 'REST APIs', description: 'Designing and consuming resource-oriented HTTP endpoints.' },
    ],
  },
  {
    title: 'DATABASE',
    icon: 'database',
    accent: 'aurora',
    skills: [
      { name: 'MySQL', description: 'Relational modeling, queries, joins and indexing basics.' },
      { name: 'SQL', description: 'Query language for defining and manipulating relational data.' },
    ],
  },
  {
    title: 'TOOLS',
    icon: 'wrench',
    accent: 'electric',
    skills: [
      { name: 'Git', description: 'Version control — branching, merging and history management.' },
      { name: 'GitHub', description: 'Remote repositories, PRs and collaboration workflows.' },
      { name: 'VS Code', description: 'Primary editor — extensions, debugging and terminal integration.' },
      { name: 'Thunder Client', description: 'Lightweight REST API testing inside VS Code.' },
    ],
  },
];

export const cloudJourney = [
  { phase: 'LEARNING', desc: 'Grasping cloud fundamentals, AWS services and the shared-responsibility model.', nodes: ['Cloud Concepts', 'AWS Console'] },
  { phase: 'BUILDING', desc: 'Provisioning compute and storage — EC2 instances, S3 buckets and basic networking.', nodes: ['EC2', 'S3'] },
  { phase: 'DEPLOYING', desc: 'Connecting services with VPCs, subnets and security groups for real deployments.', nodes: ['VPC', 'IAM'] },
  { phase: 'AUTOMATING', desc: 'Reducing manual work through scripting, infrastructure patterns and monitoring.', nodes: ['RDS', 'CloudWatch'] },
  { phase: 'ENGINEERING', desc: 'Designing reliable, secure and scalable cloud infrastructure end-to-end.', nodes: ['Architecture', 'Best Practices'] },
] as const;

export type Project = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  features: string[];
  architecture: string[];
  github?: string;
  demo?: string;
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    id: 'smart-village',
    name: 'Smart Village Management System',
    tagline: 'AI-powered platform for village issue reporting & Panchayat administration.',
    problem:
      'Village residents lack a fast, transparent way to report local issues, and Panchayat administrators struggle to track, route and resolve them efficiently.',
    solution:
      'A digital platform with role-based access for residents, Panchayat admins and field workers — complaint submission with image upload, department-based routing and end-to-end status tracking.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt', 'Multer', 'REST APIs'],
    features: [
      'User authentication & verification',
      'Complaint submission with image upload',
      'Panchayat administration dashboard',
      'Worker / solver workflow',
      'Complaint status tracking',
      'Notifications',
      'Department-based issue routing',
      'AI integration planned for intelligent classification',
    ],
    architecture: [
      'USER',
      'AUTHENTICATION',
      'API SERVER',
      'MYSQL DATABASE',
      'PANCHAYAT ADMIN',
      'ISSUE SOLVER',
    ],
    github: 'https://github.com/', // TODO: replace
    flagship: true,
  },
  {
    id: 'cloud-storage',
    name: 'Personal Cloud Storage Platform',
    tagline: 'A Google Drive–style cloud storage application.',
    problem: 'Users need a personal, secure place to store, organize and retrieve files from anywhere.',
    solution:
      'A web app with authentication, file upload, management and a user dashboard backed by cloud storage.',
    tech: ['React', 'TypeScript', 'Supabase'],
    features: [
      'File upload & management',
      'User authentication',
      'Cloud storage integration',
      'User dashboard',
    ],
    architecture: ['USER', 'AUTH', 'REACT APP', 'SUPABASE STORAGE', 'DASHBOARD'],
    github: 'https://github.com/', // TODO: replace
  },
  {
    id: 'portfolio',
    name: 'Developer Portfolio',
    tagline: 'An interactive portfolio showcasing frontend, UI/UX and web experiences.',
    problem: 'Most student portfolios look the same — a resume in webpage form.',
    solution:
      'A cinematic, scroll-driven portfolio with motion design, interactive sections and a futuristic cloud-engineering aesthetic.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Scroll-driven storytelling',
      'Interactive skill matrix',
      'Animated cloud architecture',
      'Project case studies',
    ],
    architecture: ['DESIGN', 'REACT', 'TAILWIND', 'MOTION', 'DEPLOY'],
    github: 'https://github.com/', // TODO: replace
  },
];

export const certifications = [
  {
    name: 'AWS Cloud Quest: Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: 'cloud',
  },
  {
    name: 'AWS Cloud Practitioner — Skill Builder',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: 'award',
  },
  {
    name: 'AWS Cloud Essentials Training Badge',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: 'badge',
  },
  {
    name: 'HackerRank SQL (Basic)',
    issuer: 'HackerRank',
    date: '2024',
    icon: 'database',
  },
] as const;

export const pillars = [
  { icon: 'cloud', title: 'CLOUD', desc: 'Build cloud-based infrastructure and services.' },
  { icon: 'settings', title: 'SYSTEMS', desc: 'Design practical backend and API-driven systems.' },
  { icon: 'shield', title: 'SECURITY', desc: 'Understand authentication, authorization and secure application design.' },
  { icon: 'rocket', title: 'PROJECTS', desc: 'Turn real-world problems into working software.' },
] as const;

export const philosophy = ['LEARN.', 'BUILD.', 'BREAK.', 'FIX.', 'IMPROVE.'] as const;

export const sections = [
  { id: 'hero', label: 'IDENTITY', number: '00' },
  { id: 'about', label: 'ABOUT', number: '01' },
  { id: 'education', label: 'EDUCATION', number: '02' },
  { id: 'skills', label: 'SKILLS', number: '03' },
  { id: 'cloud', label: 'CLOUD', number: '04' },
  { id: 'projects', label: 'PROJECTS', number: '05' },
  { id: 'certifications', label: 'CERTIFICATIONS', number: '06' },
  { id: 'contact', label: 'CONTACT', number: '07' },
] as const;
