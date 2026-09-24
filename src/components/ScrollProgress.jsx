import { useEffect, useRef } from 'react'

/**
 * Thin progress bar pinned to the top of the viewport that fills as the
 * page scrolls. Respects prefers-reduced-motion: stays hidden.
 */
export function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    if (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    let ticking = false

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const progress = max > 0 ? doc.scrollTop / max : 0
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress})`
      ticking = false
    }

    const request = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" ref={barRef} />
    </div>
  )
}