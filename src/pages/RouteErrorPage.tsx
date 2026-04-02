import { isRouteErrorResponse, useRouteError } from 'react-router'

const RouteErrorPage = () => {
  const error = useRouteError()

  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : 'Something went wrong'

  return (
    <main className="flex min-h-[70vh] flex-1 items-center justify-center">
      <section className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-foreground/60">
          Route error
        </p>
        <h1 className="text-3xl font-semibold tracking-tight">{message}</h1>
      </section>
    </main>
  )
}

export default RouteErrorPage
