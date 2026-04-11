import { use, useEffect, useRef, useState, type ReactNode } from "react";
import { Clock3, MapPin } from "lucide-react";
import clsx from "clsx";
import { cn } from "../../lib/cn";
import type { ExperienceEntry } from "../../types/schema";

export type ExperienceTimelineProps = {
  id?: string;
  eyebrow: string;
  title: string;
  summary?: ReactNode;
  entries: ExperienceEntry[];
  activeIndex?: number;
  className?: string;
};

const SCROLL_THRESHOLD = 50;
const SCROLL_DEBOUNCE_MS = 100;

export const ExperienceTimeline = ({
  id = "experience",
  eyebrow,
  title,
  summary,
  entries,
  activeIndex,
  className,
}: ExperienceTimelineProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeEntryIndex, setActiveEntryIndex] = useState(0);

  // Use a ref that persists across renders to track whether the user is in a timeout after scrolling
  const scrollTimeout = useRef<boolean>(false);

  useEffect(() => {
    let scrollStartY = 0;
    // The maximum window (ms) to wait after the last scroll event before considering the scroll "ended"
    let deltaCalcTimeoutId: number | null = null;

    if (!timelineRef.current) return;
    const timelineElement = timelineRef.current;

    const onScroll = (e: WheelEvent) => {
      e.preventDefault();

      if (scrollTimeout.current) return;

      if (
        scrollStartY > SCROLL_THRESHOLD &&
        activeEntryIndex < entries.length - 1
      ) {
        setActiveEntryIndex((index) => index + 1);
        scrollStartY = 0;
        scrollTimeout.current = true;
      } else if (scrollStartY < -SCROLL_THRESHOLD && activeEntryIndex > 0) {
        setActiveEntryIndex((index) => index - 1);
        scrollStartY = 0;
        scrollTimeout.current = true;
      } else {
        scrollStartY += e.deltaY;
      }

      if (deltaCalcTimeoutId !== null) {
        clearTimeout(deltaCalcTimeoutId);
      }

      deltaCalcTimeoutId = setTimeout(() => {
        scrollStartY = 0;
        deltaCalcTimeoutId = null;
        scrollTimeout.current = false;
      }, SCROLL_DEBOUNCE_MS);
    };

    const onScrollEnd = () => {
      console.log("scroll end", scrollStartY);
    };

    timelineElement.addEventListener("wheel", onScroll, { passive: false });
    window.addEventListener("scrollend", onScrollEnd);

    return () => {
      timelineElement.removeEventListener("wheel", onScroll);
      timelineElement.removeEventListener("scrollend", onScrollEnd);
    };
  }, [activeEntryIndex]);

  useEffect(() => {
    if (!timelineRef.current) return;
    timelineRef.current.style.transform = `translateY(-${activeEntryIndex * 50}vh)`;
  }, [activeEntryIndex]);

  return (
    <section
      aria-labelledby={`${id}-title`}
      className={cn(
        "relative h-screen place-self-center overflow-hidden border-y border-foreground/10 bg-[linear-gradient(180deg,rgba(248,250,252,1),rgba(255,255,255,0.96))] px-4 py-16 sm:px-6 lg:px-8 lg:py-24",
        className,
      )}
      id={id}
    >
      <div className="w-full flex flex-col items-end">
        <header className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.28em] text-foreground/50">
            {eyebrow}
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            id={`${id}-title`}
          >
            {title}
          </h2>
          {summary ? (
            <div className="mt-4 max-w-full text-base leading-7 text-foreground/70 sm:text-lg">
              {summary}
            </div>
          ) : null}
        </header>

        <ol
          aria-label={`${title} timeline`}
          className="relative w-[75vw] w-full h-[50vh] overflow-hidden mt-12 space-y-6 before:absolute before:bottom-24 before:right-3 before:top-0 before:w-px before:bg-linear-to-t before:from-accent/30 before:via-foreground/10 before:to-transparent sm:mt-16 lg:before:right-4"
        >
          <div
            ref={timelineRef}
            className="relative flex flex-col items-end transition-all duration-300"
          >
            {[...entries].reverse().map((entry, index) => {
              const isActive = activeIndex === index;

              return (
                <li
                  className="relative h-[50vh] w-full p4-10 sm:pr-12 lg:pr-14 flex flex-col justify-center items-end"
                  key={`${entry.company}-${entry.role}-${entry.startDate}`}
                >
                  <div className="w-full flex flex-row justify-between gap-4">
                    <div className="mx-auto">
                      <div className="space-y-5">
                        <p className="text-sm leading-6 text-foreground/68 sm:text-[0.95rem]">
                          {entry.summary}
                        </p>
                        <ul className="grid gap-3">
                          {entry.highlights.map((highlight) => (
                            <li
                              className="rounded-2xl border border-foreground/8 bg-surface/75 px-4 py-3 text-sm leading-6 text-foreground/74"
                              key={highlight}
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>

                        <div>
                          <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">
                            Skills and tools
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {entry.technologies.map((technology) => (
                              <li
                                className="rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs font-medium text-foreground/68"
                                key={technology}
                              >
                                {technology}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span
                        aria-hidden="true"
                        className={clsx(
                          "absolute right-1.75 top-1/2 -translate-y-1/2 size-3 rounded-full border border-background shadow-[0_0_0_8px_rgba(15,23,42,0.03)] transition-all duration-500 motion-reduce:transition-none sm:right-2.25 lg:right-2.75",
                          isActive
                            ? "bg-accent ring-8 ring-accent/10 scale-110"
                            : "bg-foreground/30",
                        )}
                      />
                      <article
                        aria-current={isActive ? "step" : undefined}
                        data-experience-entry="true"
                        className={clsx(
                          "w-96 rounded-[1.75rem] border bg-background/85 p-5 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.45)] transition-all duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:p-6 lg:p-7",
                          isActive
                            ? "border-accent/20 shadow-[0_28px_90px_-55px_rgba(15,118,110,0.45)] ring-1 ring-accent/10"
                            : "border-foreground/10 hover:-translate-y-0.5 hover:border-foreground/15",
                        )}
                      >
                        <div className="grid gap-5 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-8">
                          <div className="space-y-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-surface/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-foreground/55">
                              <Clock3 aria-hidden="true" className="size-3.5" />
                              <time>{`${entry.startDate} - ${entry.endDate}`}</time>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                                {entry.role}
                              </h3>
                              <p className="mt-1 text-sm font-medium text-foreground/65">
                                {entry.company}
                              </p>
                            </div>
                            <p className="inline-flex items-center gap-2 text-sm text-foreground/60">
                              <MapPin
                                aria-hidden="true"
                                className="size-4 shrink-0"
                              />
                              <span>{entry.location}</span>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </ol>
      </div>
    </section>
  );
};
