import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { RouteLoading } from './components/RouteLoading'

const RootLayout = lazy(() => import('./pages/RootLayout'))
const HomePage = lazy(() => import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const RouteErrorPage = lazy(() => import('./pages/RouteErrorPage'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])

const App = () => {
  return (
    <Suspense fallback={<RouteLoading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
