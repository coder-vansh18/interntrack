export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#timeline" },
  { label: "Testimonials", href: "#testimonials" },
];

export const FEATURES = [
  {
    icon: "Brain",
    title: "AI-Powered Tracking",
    description:
      "Our intelligent engine analyzes your applications in real-time, predicting outcomes and suggesting optimizations.",
    gradient: "from-violet-500/20 to-purple-500/10",
    glow: "rgba(124, 58, 237, 0.2)",
    tag: "AI",
  },
  {
    icon: "BarChart3",
    title: "Progress Monitoring",
    description:
      "Visualize every step of your application journey with interactive dashboards and real-time status updates.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    glow: "rgba(6, 182, 212, 0.2)",
    tag: "Analytics",
  },
  {
    icon: "FileText",
    title: "Resume Management",
    description:
      "Store, version, and tailor your resume for each application. AI scoring highlights what recruiters look for.",
    gradient: "from-emerald-500/20 to-teal-500/10",
    glow: "rgba(16, 185, 129, 0.2)",
    tag: "Docs",
  },
  {
    icon: "LayoutDashboard",
    title: "Smart Dashboard",
    description:
      "A unified command center for all your applications with priority queues, reminders, and action items.",
    gradient: "from-orange-500/20 to-amber-500/10",
    glow: "rgba(245, 158, 11, 0.2)",
    tag: "Dashboard",
  },
  {
    icon: "Zap",
    title: "Real-Time Updates",
    description:
      "Instant notifications for status changes, recruiter messages, and deadline reminders via email or in-app.",
    gradient: "from-pink-500/20 to-rose-500/10",
    glow: "rgba(236, 72, 153, 0.2)",
    tag: "Live",
  },
];

export const TIMELINE_STEPS = [
  {
    id: 1,
    label: "Apply",
    description: "Submit your application with tailored resume",
    icon: "Send",
    color: "#7c3aed",
  },
  {
    id: 2,
    label: "Review",
    description: "Recruiter reviews your profile",
    icon: "Eye",
    color: "#9333ea",
  },
  {
    id: 3,
    label: "Screening",
    description: "Initial phone or online screening",
    icon: "Phone",
    color: "#a855f7",
  },
  {
    id: 4,
    label: "Shortlisted",
    description: "Selected for the next round",
    icon: "Star",
    color: "#06b6d4",
  },
  {
    id: 5,
    label: "Interview",
    description: "Technical or HR interview rounds",
    icon: "Users",
    color: "#0891b2",
  },
  {
    id: 6,
    label: "Offer",
    description: "Congratulations — you got the offer!",
    icon: "Trophy",
    color: "#10b981",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Software Engineer Intern @ Google",
    avatar: "SC",
    content:
      "InternTrack completely changed how I approached my job search. The AI suggestions helped me tailor every application and I landed my dream internship in 3 weeks.",
    rating: 5,
    color: "#7c3aed",
  },
  {
    name: "Marcus Williams",
    role: "Product Design Intern @ Figma",
    avatar: "MW",
    content:
      "The dashboard is insanely clean. I could see exactly where every application stood at a glance. Went from total chaos to complete clarity.",
    rating: 5,
    color: "#06b6d4",
  },
  {
    name: "Priya Nair",
    role: "Data Science Intern @ Stripe",
    avatar: "PN",
    content:
      "I applied to 40+ companies and tracked everything perfectly. The progress analytics kept me motivated even during the toughest weeks.",
    rating: 5,
    color: "#10b981",
  },
  {
    name: "Alex Turner",
    role: "ML Engineer Intern @ OpenAI",
    avatar: "AT",
    content:
      "The resume AI scoring feature is a game-changer. It told me exactly what was missing before I even sent my application out.",
    rating: 5,
    color: "#f59e0b",
  },
];

export const APPLICATION_STATUSES = [
  { key: "applied", label: "Applied", color: "#7c3aed" },
  { key: "review", label: "Under Review", color: "#06b6d4" },
  { key: "screening", label: "Screening", color: "#a855f7" },
  { key: "shortlisted", label: "Shortlisted", color: "#f59e0b" },
  { key: "interview", label: "Interview", color: "#0891b2" },
  { key: "offer", label: "Offer Received", color: "#10b981" },
];

export const DASHBOARD_STATS = [
  { label: "Applications Sent", value: 1, icon: "Send", color: "#7c3aed" },
  { label: "Under Review", value: 1, icon: "Eye", color: "#06b6d4" },
  { label: "Profile Score", value: 87, icon: "Star", color: "#10b981", suffix: "%" },
  { label: "Response Rate", value: 100, icon: "TrendingUp", color: "#f59e0b", suffix: "%" },
];

export const RECENT_UPDATES = [
  {
    title: "Application Received",
    description: "Your application has been successfully submitted.",
    time: "Just now",
    icon: "CheckCircle",
    color: "#10b981",
  },
  {
    title: "Profile Viewed",
    description: "A recruiter viewed your profile.",
    time: "2 mins ago",
    icon: "Eye",
    color: "#06b6d4",
  },
  {
    title: "Status Updated",
    description: "Application moved to Under Review.",
    time: "5 mins ago",
    icon: "RefreshCw",
    color: "#7c3aed",
  },
];

export const PREFERRED_ROLES = [
  "Software Engineering",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Data Science",
  "Machine Learning / AI",
  "Product Management",
  "UI/UX Design",
  "DevOps / Cloud",
  "Cybersecurity",
  "Mobile Development",
  "Blockchain / Web3",
];
