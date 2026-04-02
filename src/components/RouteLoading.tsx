export const RouteLoading = () => {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground"
      role="status"
    >
      <div className="flex w-full max-w-sm flex-col items-center gap-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
          <div className="h-full w-1/3 animate-pulse rounded-full bg-accent" />
        </div>
        <p className="text-sm text-foreground/70">Loading section...</p>
      </div>
    </div>
  )
}
