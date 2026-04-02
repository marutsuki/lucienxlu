import { MetadataLine } from '../components/ui/metadata-line'
import { resumeContent } from '../data/content'

const HomePage = () => {
  const featuredExperience = resumeContent.experience.slice(0, 3)
  const featuredSkills = resumeContent.coreSkills.slice(0, 3)

  return (
    <div className="flex flex-1 flex-col gap-8">
      <section
        className="rounded-3xl border border-foreground/10 bg-surface/70 p-6 sm:p-8"
        id="overview"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-foreground/60">
          Portfolio scaffold
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {resumeContent.profile.headline} building product-facing systems with
          strong frontend foundations.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-foreground/70 sm:text-lg">
          {resumeContent.profile.summary}
        </p>
      </section>

      <section className="space-y-4" id="experience">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.28em] text-foreground/60">
            Experience
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Recent roles and measurable delivery
          </h2>
        </div>

        <div className="grid gap-4">
          {featuredExperience.map((entry) => (
            <article
              className="rounded-3xl border border-foreground/10 bg-background p-5"
              key={`${entry.company}-${entry.startDate}`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium">{entry.role}</h3>
                  <MetadataLine
                    className="mt-1 text-sm text-foreground/60"
                    items={[entry.company, entry.location]}
                  />
                </div>
                <p className="text-sm text-foreground/60">
                  {entry.startDate} - {entry.endDate}
                </p>
              </div>

              <MetadataLine
                className="mt-3 text-sm leading-6 text-foreground/70"
                items={entry.technologies}
              />

              <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/75">
                {entry.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4" id="skills">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.28em] text-foreground/60">
            Skills
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            Typed content is ready for deeper section builds
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {featuredSkills.map((group) => (
            <article
              className="rounded-3xl border border-foreground/10 bg-background p-5"
              key={group.label}
            >
              <h3 className="text-lg font-medium">{group.label}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-foreground/70">
                {group.items.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="rounded-3xl border border-foreground/10 bg-surface/60 p-6"
        id="contact"
      >
        <p className="text-sm uppercase tracking-[0.28em] text-foreground/60">
          Contact
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <address className="not-italic text-sm leading-6 text-foreground/70">
            <a className="block hover:underline" href="tel:+61468435818">
              +61 468 435 818
            </a>
            <a
              className="block hover:underline"
              href="mailto:lucienlu2000@gmail.com"
            >
              lucienlu2000@gmail.com
            </a>
          </address>
          <div className="flex flex-wrap gap-3">
            {resumeContent.profile.links.map((link) => (
              <a
                className="rounded-full border border-foreground/10 px-4 py-2 text-sm text-foreground transition-colors hover:bg-background"
                href={link.href}
                key={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
