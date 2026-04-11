import type { ReactNode } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import clsx from "clsx";

export type SplashAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type SplashLayoutProps = {
  eyebrow: string;
  title: ReactNode;
  summary: ReactNode;
  portraitSrc?: string;
  portraitAlt: string;
  actions?: SplashAction[];
  scrollTargetId?: string;
  className?: string;
};

export const SplashLayout = ({
  eyebrow,
  title,
  summary,
  portraitSrc,
  portraitAlt,
  actions = [],
  scrollTargetId = "about-me",
  className,
}: SplashLayoutProps) => {
  return (
    <section
      aria-labelledby="splash-title"
      className={clsx(
        "w-screen! relative isolate overflow-hidden border-b border-foreground/10 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.16),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,1))] px-4 py-8 sm:px-6 lg:min-h-[100svh] lg:px-10",
        className,
      )}
    >
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-3xl flex-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/70 px-4 py-2 text-xs uppercase tracking-[0.32em] text-foreground/60 backdrop-blur">
            <Sparkles aria-hidden="true" className="size-3.5" />
            {eyebrow}
          </p>
          <h1
            className="mt-5 text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl"
            id="splash-title"
          >
            {title}
          </h1>
          <div className="mt-5 max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
            {summary}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <a
                className={clsx(
                  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                  action.variant === "secondary"
                    ? "border border-foreground/15 bg-background/75 text-foreground hover:bg-background focus-visible:ring-foreground"
                    : "bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-foreground/60",
                )}
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>

          <a
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
            href={`#${scrollTargetId}`}
          >
            <span>Scroll to the next section</span>
            <ArrowDownRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="flex flex-1 justify-center lg:justify-end">
          <figure className="relative w-full max-w-xl">
            <div className="absolute inset-0 -z-10 rounded-4xl bg-[linear-gradient(135deg,rgba(15,23,42,0.12),rgba(15,118,110,0.2))] blur-3xl" />
            <div className="overflow-hidden rounded-4xl border border-foreground/10 bg-background/80 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] backdrop-blur">
              {portraitSrc ? (
                <img
                  alt={portraitAlt}
                  className="aspect-4/5 w-full object-cover"
                  src={portraitSrc}
                />
              ) : (
                <div
                  aria-label={portraitAlt}
                  className="grid aspect-4/5 w-full place-items-center bg-[radial-gradient(circle_at_top,rgba(15,118,110,0.2),transparent_40%),linear-gradient(160deg,rgba(15,23,42,0.95),rgba(30,41,59,0.92))] p-8 text-center text-background"
                  role="img"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.34em] text-background/60">
                      Portrait placeholder
                    </p>
                    <p className="mt-3 text-2xl font-semibold">{portraitAlt}</p>
                    <p className="mt-2 text-sm leading-6 text-background/72">
                      Replace this block with the final image asset when it
                      becomes available.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
