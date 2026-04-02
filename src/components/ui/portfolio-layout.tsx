import type { ReactNode } from 'react'
import {
  ChevronRight,
  CircleUserRound,
  LayoutDashboard,
  Mail,
  Menu,
  NotebookText,
  Sparkles,
} from 'lucide-react'
import clsx from 'clsx'

export type NavItem = {
  label: string
  href: string
  description: string
  icon?: ReactNode
}

export type PortfolioLayoutProps = {
  brand: string
  headline: string
  description: string
  navItems: NavItem[]
  children: ReactNode
  footerNote?: string
}

const defaultIcons = [LayoutDashboard, NotebookText, Sparkles, Mail]

const iconForIndex = (index: number) => {
  const Icon = defaultIcons[index % defaultIcons.length]
  return <Icon aria-hidden="true" className="size-4 shrink-0" />
}

export const PortfolioLayout = ({
  brand,
  headline,
  description,
  navItems,
  children,
  footerNote = 'Available for software engineering roles and product-minded collaboration.',
}: PortfolioLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        href="#main-content"
      >
        Skip to content
      </a>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <aside className="border-b border-foreground/10 bg-surface/70 px-4 py-4 backdrop-blur sm:px-6 lg:w-80 lg:border-r lg:border-b-0 lg:px-6 lg:py-6">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-2xl bg-foreground text-background">
              <CircleUserRound aria-hidden="true" className="size-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                Portfolio
              </p>
              <p className="text-lg font-semibold">{brand}</p>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-6 text-foreground/70">
            {headline}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-foreground/60">
            {description}
          </p>

          <nav aria-label="Primary" className="mt-6">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    className={clsx(
                      'group flex items-start gap-3 rounded-2xl border border-transparent px-3 py-3 transition-colors',
                      'hover:border-foreground/10 hover:bg-background/70 focus-visible:border-foreground/20 focus-visible:bg-background/80 focus-visible:outline-none',
                    )}
                    href={item.href}
                  >
                    <span className="mt-0.5 rounded-xl bg-foreground/5 p-2 text-foreground">
                      {item.icon ?? iconForIndex(index)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight
                          aria-hidden="true"
                          className="size-4 shrink-0 text-foreground/40 transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                      <span className="mt-1 block text-sm leading-5 text-foreground/60">
                        {item.description}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 rounded-2xl border border-foreground/10 bg-background/70 p-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Menu aria-hidden="true" className="size-4" />
              Mobile-first layout
            </div>
            <p className="mt-2 text-sm leading-6 text-foreground/60">
              {footerNote}
            </p>
          </div>
        </aside>

        <main
          id="main-content"
          className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
        >
          <div className="min-h-[calc(100vh-2rem)] rounded-3xl border border-foreground/10 bg-background/80 p-4 shadow-[0_24px_80px_-50px_rgba(0,0,0,0.35)] sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
