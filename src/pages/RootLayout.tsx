import { Mail, NotebookText, Sparkles } from 'lucide-react'
import { Outlet } from 'react-router'
import { PortfolioLayout } from '../components/ui/portfolio-layout'
import { resumeContent } from '../data/content'

const RootLayout = () => {
  const navItems = [
    {
      label: 'Overview',
      href: '#overview',
      description: 'Profile snapshot and current focus areas.',
    },
    {
      label: 'Experience',
      href: '#experience',
      description: 'Recent engineering roles and impact.',
      icon: <NotebookText aria-hidden="true" className="size-4 shrink-0" />,
    },
    {
      label: 'Skills',
      href: '#skills',
      description: 'Technical strengths across frontend and backend.',
      icon: <Sparkles aria-hidden="true" className="size-4 shrink-0" />,
    },
    {
      label: 'Contact',
      href: '#contact',
      description: 'Direct links and ways to get in touch.',
      icon: <Mail aria-hidden="true" className="size-4 shrink-0" />,
    },
  ]

  return (
    <PortfolioLayout
      brand={resumeContent.profile.name}
      headline={resumeContent.profile.headline}
      description={resumeContent.profile.summary}
      footerNote={resumeContent.profile.contact}
      navItems={navItems}
    >
        <Outlet />
    </PortfolioLayout>
  )
}

export default RootLayout
