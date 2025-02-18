import React from 'react'

export const useClickOutside = (
  ref: React.RefObject<Element>,
  callback: (event: MouseEvent | TouchEvent) => void,
  outerRef?: React.RefObject<Element>,
): void => {
  const handleClick = React.useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!event.target || outerRef?.current?.contains(event.target as Node)) {
        return
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event)
      }
    },
    [callback, ref, outerRef],
  )
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  })
}
