import type { ReactNode } from 'react'
import { Clock3, MapPin } from 'lucide-react'
import clsx from 'clsx'
import { cn } from '../../lib/cn'
import type { ExperienceEntry } from '../../types/schema'

export type ExperienceTimelineProps = {
  id?: string
  eyebrow: string
  title: string
  summary?: ReactNode
  entries: ExperienceEntry[]
  activeIndex?: number
  className?: string
}

export const ExperienceTimeline = ({
  id = 'experience',
  eyebrow,
  title,
  summary,
  entries,
  activeIndex,
  className,
}: ExperienceTimelineProps) => {
  return (
    <section
      aria-labelledby={`${id}-title`}
      className={cn(
        'relative overflow-hidden border-y border-foreground/10 bg-[linear-gradient(180deg,rgba(248,250,252,1),rgba(255,255,255,0.96))] px-4 py-16 sm:px-6 lg:px-8 lg:py-24',
        className,
      )}
      id={id}
    >
      <div className="mx-auto max-w-7xl">
        <header className="max-w-3xl">
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
            <div className="mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">
              {summary}
            </div>
          ) : null}
        </header>

        <ol
          aria-label={`${title} timeline`}
          className="relative mt-12 space-y-6 before:absolute before:bottom-0 before:left-3 before:top-0 before:w-px before:bg-gradient-to-b before:from-accent/30 before:via-foreground/10 before:to-transparent sm:mt-16 lg:before:left-4"
        >
          {entries.map((entry, index) => {
            const isActive = activeIndex === index

            return (
              <li className="relative pl-10 sm:pl-12 lg:pl-14" key={`${entry.company}-${entry.role}-${entry.startDate}`}>
                <span
                  aria-hidden="true"
                  className={clsx(
                    'absolute left-[0.4375rem] top-6 size-3 rounded-full border border-background shadow-[0_0_0_8px_rgba(15,23,42,0.03)] transition-all duration-500 motion-reduce:transition-none sm:left-[0.5625rem] lg:left-[0.6875rem]',
                    isActive
                      ? 'bg-accent ring-8 ring-accent/10 scale-110'
                      : 'bg-foreground/30',
                  )}
                />
                <article
                  aria-current={isActive ? 'step' : undefined}
                  data-experience-entry="true"
                  className={clsx(
                    'rounded-[1.75rem] border bg-background/85 p-5 shadow-[0_24px_80px_-60px_rgba(15,23,42,0.45)] transition-all duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:p-6 lg:p-7',
                    isActive
                      ? 'border-accent/20 shadow-[0_28px_90px_-55px_rgba(15,118,110,0.45)] ring-1 ring-accent/10'
                      : 'border-foreground/10 hover:-translate-y-0.5 hover:border-foreground/15',
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
                        <MapPin aria-hidden="true" className="size-4 shrink-0" />
                        <span>{entry.location}</span>
                      </p>
                    </div>

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
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
