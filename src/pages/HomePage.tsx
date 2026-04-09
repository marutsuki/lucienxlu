import { useEffect, useState } from "react";
import clsx from "clsx";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { AboutCard } from "../components/ui/about-card";
import { ExperienceTimeline } from "../components/ui/experience-timeline";
import { MetadataLine } from "../components/ui/metadata-line";
import { SplashLayout } from "../components/ui/splash-layout";
import { landingContent, resumeContent } from "../data/content";

const HomePage = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  useEffect(() => {
    const experienceSection = document.getElementById(landingContent.experience.id);

    if (!experienceSection) {
      return;
    }

    const entries = Array.from(experienceSection.querySelectorAll("article"));

    if (entries.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (observedEntries) => {
        const visibleEntries = observedEntries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        const activeEntry = visibleEntries[0];

        if (!activeEntry) {
          return;
        }

        const index = entries.indexOf(activeEntry.target as HTMLElement);

        if (index >= 0) {
          setActiveExperienceIndex(index);
        }
      },
      {
        rootMargin: "-18% 0px -28% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8],
      },
    );

    entries.forEach((entry) => {
      observer.observe(entry);
    });

    return () => {
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  const handleShortcutClick = () => {
    const experienceSection = document.getElementById(landingContent.experience.id);

    if (!experienceSection) {
      return;
    }

    experienceSection.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="relative flex flex-col">
      <ExperienceShortcutButton onClick={handleShortcutClick} />
      <SplashSection />
      <AboutSection prefersReducedMotion={prefersReducedMotion} />
      <ExperienceSection
        activeIndex={prefersReducedMotion ? 0 : activeExperienceIndex}
      />
    </div>
  );
};

export default HomePage;

type AboutSectionProps = {
  prefersReducedMotion: boolean;
};

type ExperienceSectionProps = {
  activeIndex: number;
};

const SplashSection = () => {
  const { about, hero, navigationCues } = landingContent;
  const { profile } = resumeContent;

  return (
    <div id="splash">
      <SplashLayout
        actions={[
          {
            label: navigationCues[0].label,
            href: navigationCues[0].href,
            variant: "primary",
          },
          {
            label: profile.links[0].label,
            href: profile.links[0].href,
            variant: "secondary",
          },
        ]}
        eyebrow={hero.eyebrow}
        portraitAlt={hero.portraitAlt}
        portraitSrc={hero.portraitSrc}
        scrollTargetId={about.id}
        summary={
          <div className="space-y-5">
            <p className="max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
              {hero.summary}
            </p>
            <MetadataLine
              className="text-sm text-foreground/60"
              items={hero.specialties}
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {navigationCues.map((cue) => (
                <a
                  className="rounded-2xl border border-foreground/10 bg-background/70 p-4 text-sm leading-6 text-foreground/70 transition-colors hover:border-foreground/20 hover:bg-background"
                  href={cue.href}
                  key={cue.href}
                >
                  <span className="block font-medium text-foreground">
                    {cue.label}
                  </span>
                  <span className="mt-1 block">{cue.description}</span>
                </a>
              ))}
            </div>
            <MetadataLine
              className="text-sm text-foreground/60"
              items={[
                <span className="inline-flex items-center gap-2" key="location">
                  <MapPin aria-hidden="true" className="size-4" />
                  {profile.location}
                </span>,
                <span className="inline-flex items-center gap-2" key="email">
                  <Mail aria-hidden="true" className="size-4" />
                  {profile.contact.email}
                </span>,
                <span className="inline-flex items-center gap-2" key="phone">
                  <Phone aria-hidden="true" className="size-4" />
                  {profile.contact.phone}
                </span>,
              ]}
            />
          </div>
        }
        title={hero.title}
      />
    </div>
  );
};

const AboutSection = ({ prefersReducedMotion }: AboutSectionProps) => {
  const { about } = landingContent;
  const { profile } = resumeContent;
  const [isAboutVisible, setIsAboutVisible] = useState(() => prefersReducedMotion);
  const shouldShowAbout = prefersReducedMotion || isAboutVisible;

  useEffect(() => {
    const aboutSection = document.getElementById(about.id);

    if (!aboutSection || shouldShowAbout || prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsAboutVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(aboutSection);

    return () => {
      observer.disconnect();
    };
  }, [about.id, prefersReducedMotion, shouldShowAbout]);

  return (
    <section
      aria-labelledby="about-title"
      className="scroll-mt-6 border-b border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.9))]"
      id={about.id}
    >
      <div
        className={clsx(
          "mx-auto grid max-w-7xl gap-8 px-4 py-16 transition-all duration-700 ease-out sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(21rem,0.9fr)] lg:px-8 lg:py-20",
          shouldShowAbout
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0",
        )}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.28em] text-foreground/50">
                {about.eyebrow}
              </p>
              <h2
                className="my-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                id="about-title"
              >
                {about.title}
              </h2>
              {about.paragraphs.map((paragraph, index) => (
                <div className="mt-5" key={`about-paragraph-${index}`}>
                  <small className="font-semibold tracking-widest">
                    {paragraph.label}
                  </small>
                  <p
                    className="text-base leading-7 text-foreground/70 sm:text-lg"
                  >
                    {paragraph.content}
                  </p>
                </div>
              ))}
            </div>
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-4"
              href="#splash"
            >
              Back to top
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <AboutCard
            badge={profile.headline}
            description={
              <div className="space-y-5">
                <p>{profile.summary}</p>
                <div className="flex flex-row justify-between gap-6">
                  <div className="flex flex-col space-y-3 text-sm text-foreground/68">
                    <p className="inline-flex items-start gap-2">
                      <MapPin
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0"
                      />
                      <span>{profile.location}</span>
                    </p>
                    <p className="inline-flex items-start gap-2">
                      <Phone
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0"
                      />
                      <span>{profile.contact.phone}</span>
                    </p>
                    <p className="inline-flex items-start gap-2">
                      <Mail
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0"
                      />
                      <span>{profile.contact.email}</span>
                    </p>
                  </div>
                  <div className="flex flex-col space-y-3 text-sm text-foreground/68">
                    <ul className="flex flex-col space-y-3">
                      {about.quickLinks.map((link) => (
                        <li
                          className="inline-flex items-start gap-2"
                          key={link.href}
                        >
                          <a
                            className="inline-flex w-full items-center justify-between gap-3 px-4 text-sm font-medium text-foreground/72 transition-colors hover:border-foreground/20 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2"
                            href={link.href}
                            rel={
                              link.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            target={
                              link.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                          >
                            <span>{link.label}</span>
                            {link.icon}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            }
            title="Profile details"
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {about.cards.map((card) => (
              <AboutCard
                badge={card.eyebrow}
                className="h-full"
                description={
                  <div className="space-y-4">
                    <p>{card.summary}</p>
                    <ul className="space-y-3">
                      {card.points.map((point) => (
                        <li
                          className="flex items-start gap-3 text-sm leading-6 text-foreground/70"
                          key={point}
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                }
                key={card.title}
                title={card.title}
              />
            ))}
          </div>
          <div className="space-y-8">
            <div className="rounded-4xl border border-foreground/10 bg-background/80 p-6 shadow-[0_24px_80px_-52px_rgba(15,23,42,0.45)]">
              <div className="flex gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    Core skills and tools
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-foreground/62">
                    My bread and butter.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {about.skills.map((skill) => (
                  <li
                    className="flex gap-3 rounded-2xl border border-foreground/8 bg-surface/80 px-4 py-3 text-sm leading-6 text-foreground/72"
                    key={skill}
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {about.metrics.map((metric) => (
              <article
                className="rounded-[1.75rem] border border-foreground/10 bg-background/85 p-5 shadow-[0_20px_60px_-48px_rgba(15,23,42,0.4)]"
                key={metric.label}
              >
                <p className="text-xs uppercase tracking-[0.22em] text-foreground/45">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {metric.value}
                </p>
                {metric.detail ? (
                  <p className="mt-2 text-sm leading-6 text-foreground/65">
                    {metric.detail}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ activeIndex }: ExperienceSectionProps) => {
  const { experience } = landingContent;
  const rolesLabel = `${experience.entries.length} roles across product, platform, and teaching work`;

  return (
    <ExperienceTimeline
      activeIndex={activeIndex}
      className="scroll-mt-24"
      entries={experience.entries}
      eyebrow={experience.eyebrow}
      id={experience.id}
      summary={
        <div className="space-y-4">
          <p>{experience.summary}</p>
          <MetadataLine
            className="text-sm text-foreground/58"
            items={[
              rolesLabel,
              "Performance, delivery, and reliability themes",
              "Scroll to move through the timeline",
            ]}
          />
        </div>
      }
      title={experience.title}
    />
  );
};

type ExperienceShortcutButtonProps = {
  onClick: () => void;
};

const ExperienceShortcutButton = ({
  onClick,
}: ExperienceShortcutButtonProps) => {
  const { shortcut } = landingContent.experience;

  return (
    <button
      aria-label={shortcut.description}
      className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-background/90 px-4 py-3 text-left text-sm font-medium text-foreground shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/25 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 sm:bottom-8 sm:right-8"
      onClick={onClick}
      type="button"
    >
      <span className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
        <BriefcaseBusiness aria-hidden="true" className="size-4" />
      </span>
      <span className="flex flex-col">
        <span>{shortcut.label}</span>
        <span className="text-xs font-normal text-foreground/60">
          Timeline shortcut
        </span>
      </span>
      <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
    </button>
  );
};

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
};
