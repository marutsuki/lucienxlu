export type MonthAbbreviation =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

export type ResumeDate = `${string} ${MonthAbbreviation} ${string}` | "Present";

export type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export type Contact = {
  email: string;
  phone: string;
};

export type Profile = {
  name: string;
  headline: string;
  summary: string;
  location: string;
  contact: Contact;
  links: SocialLink[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  role: string;
  summary: string;
  technologies: string[];
  startDate: ResumeDate;
  endDate: ResumeDate;
  highlights: string[];
};

export type EducationEntry = {
  institution: string;
  location: string;
  qualification: string;
  startDate: ResumeDate;
  endDate: ResumeDate;
  highlights: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type LandingSectionId = "splash" | "about" | "about-me" | "experience";

export type LandingNavigationCue = {
  label: string;
  description: string;
  href: `#${LandingSectionId}`;
};

export type LandingQuickLink = SocialLink;

export type LandingMetric = {
  label: string;
  value: string;
  detail?: string;
};

export type ResumeContent = {
  profile: Profile;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  coreSkills: SkillGroup[];
  otherSkills: SkillGroup[];
};

export type LandingAboutCard = {
  eyebrow: string;
  title: string;
  summary: string;
  points: string[];
};

export type LandingHero = {
  portraitSrc: string;
  portraitAlt: string;
  eyebrow: string;
  title: string;
  summary: string;
  specialties: string[];
};

export type LandingAboutSection = {
  id: LandingSectionId;
  eyebrow: string;
  title: string;
  summary: string;
  paragraphs: LandingAboutParagraph[];
  skills: string[];
  quickLinks: LandingQuickLink[];
  metrics: LandingMetric[];
  cards: LandingAboutCard[];
};

export type LandingAboutParagraph = {
  label: string;
  content: string;
};

export type LandingExperienceSection = {
  id: LandingSectionId;
  eyebrow: string;
  title: string;
  summary: string;
  shortcut: LandingNavigationCue;
  entries: ExperienceEntry[];
};

export type LandingPageContent = {
  hero: LandingHero;
  navigationCues: LandingNavigationCue[];
  about: LandingAboutSection;
  experience: LandingExperienceSection;
};
