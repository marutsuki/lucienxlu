import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border focus:border-foreground/10 focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:outline-none"
        href="#main-content"
      >
        Skip to content
      </a>

      <main id="main-content" className="min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
