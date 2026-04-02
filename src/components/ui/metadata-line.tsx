import type { ReactNode } from 'react'
import clsx from 'clsx'

export type MetadataLineProps = {
  items: ReactNode[]
  className?: string
  separator?: ReactNode
}

export const MetadataLine = ({
  items,
  className,
  separator = '\u00b7',
}: MetadataLineProps) => {
  if (items.length === 0) {
    return null
  }

  return (
    <p className={clsx('flex flex-wrap items-center gap-x-2 gap-y-1', className)}>
      {items.map((item, index) => (
        <span className="inline-flex items-center gap-x-2" key={index}>
          <span>{item}</span>
          {index < items.length - 1 ? (
            <span aria-hidden="true" className="text-foreground/35">
              {separator}
            </span>
          ) : null}
        </span>
      ))}
    </p>
  )
}
