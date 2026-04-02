import type { ReactNode } from 'react'
import clsx from 'clsx'

export type AboutCardProps = {
  title: string
  description: ReactNode
  accent?: string
  badge?: string
  className?: string
}

export const AboutCard = ({
  title,
  description,
  accent,
  badge,
  className,
}: AboutCardProps) => {
  return (
    <article
      className={clsx(
        'group rounded-[1.75rem] border border-foreground/10 bg-background/80 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-0.5 sm:p-6',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2">
          {badge ? (
            <p className="text-xs uppercase tracking-[0.28em] text-foreground/50">
              {badge}
            </p>
          ) : null}
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
        </div>
        {accent ? (
          <span className="shrink-0 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {accent}
          </span>
        ) : null}
      </div>
      <div className="mt-4 text-sm leading-7 text-foreground/72 sm:text-[0.95rem]">
        {description}
      </div>
    </article>
  )
}
