import { useEffect, useState } from 'react'

/**
 * Hash routing keeps the site a single static file: `base: './'` means a deep
 * link like /project/gamypad would 404 on a GitHub Pages project site, but
 * #/project/gamypad resolves against the same index.html everywhere.
 *
 * Routes:
 *   #/                 → build log
 *   #/project/<id>     → detail page for that project
 */

function readRoute() {
  const path = window.location.hash.replace(/^#\/?/, '')
  const [section, id] = path.split('/')

  if (section === 'project' && id) return { name: 'project', id }
  return { name: 'log' }
}

export function useHashRoute() {
  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    // called, not passed: a bare function would be treated as a setState updater
    const onHashChange = () => setRoute(readRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

export function projectHref(id) {
  return `#/project/${id}`
}
