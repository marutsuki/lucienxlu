import { ArrowUpRight, MapPin } from 'lucide-react'
import { AboutCard } from '../components/ui/about-card'
import { MetadataLine } from '../components/ui/metadata-line'
import { SplashLayout } from '../components/ui/splash-layout'
import { landingContent, resumeContent } from '../data/content'

const HomePage = () => {
  const { hero, about, navigationCues } = landingContent
  const { profile } = resumeContent

  return (
    <div className="flex flex-col">
      <div id="splash">
        <SplashLayout
          actions={[
            {
              label: navigationCues[0].label,
              href: navigationCues[0].href,
              variant: 'primary',
            },
            {
              label: profile.links[0].label,
              href: profile.links[0].href,
              variant: 'secondary',
            },
          ]}
          eyebrow={hero.eyebrow}
          portraitAlt={hero.portraitAlt}
          portraitSrc="/portrait-placeholder.svg"
          scrollTargetId="about"
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
                  profile.contact,
                ]}
              />
            </div>
          }
          title={hero.title}
        />
      </div>

      <section
        aria-labelledby="about-title"
        className="border-b border-foreground/10 bg-surface/55"
        id="about"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-foreground/50">
                {about.eyebrow}
              </p>
              <h2
                className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl"
                id="about-title"
              >
                {about.title}
              </h2>
            </div>
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
              href="#splash"
            >
              Back to top
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <p className="mt-5 max-w-3xl text-base leading-7 text-foreground/70 sm:text-lg">
            {about.summary}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {about.cards.map((card) => (
              <AboutCard
                accent={`${card.points.length}`.padStart(2, '0')}
                badge={card.eyebrow}
                description={
                  <div className="space-y-4">
                    <p>{card.summary}</p>
                    <ul className="space-y-2">
                      {card.points.map((point) => (
                        <li className="flex gap-3" key={point}>
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
        </div>
      </section>
    </div>
  )
}

export default HomePage
