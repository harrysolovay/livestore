import { MenuContext } from '@/app/contexts'
import { Icon } from '@/components/icons'
import React from 'react'
import { Button } from 'react-aria-components'

export const MenuButton = ({ className }: { className?: string }) => {
  const { setShowMenu } = React.useContext(MenuContext)!

  return (
    <Button
      aria-label="Show menu"
      onPress={() => setShowMenu(true)}
      className={`size-8 shrink-0 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-hidden focus:bg-neutral-100 dark:focus:bg-neutral-800 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-sm ${className}`}
    >
      <Icon name="sidebar" className="size-4" />
    </Button>
  )
}
