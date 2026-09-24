import { useEffect, useMemo, useState } from 'react'

/**
 * Types out `text` character by character.
 * Respects prefers-reduced-motion: appears fully-formed instantly.
 *
 * @returns {{ text: string, done: boolean }}
 */
export function useTypewriter(text, { speed = 22, startDelay = 250 } = {}) {
  const reduced = useMemo(
    () =>
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced) return

    let i = 0
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length) clearInterval(id)
      }, speed)
    }, startDelay)

    return () => clearTimeout(start)
  }, [text, speed, startDelay, reduced])

  const shown = reduced ? text : text.slice(0, count)
  return { text: shown, done: reduced || count >= text.length }
}