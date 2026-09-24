import { useState } from 'react'
import './index.css'
import { ScrollProgress } from './components/ScrollProgress.jsx'
import { Intro } from './components/Intro.jsx'
import { ProjectEntry } from './components/ProjectEntry.jsx'
import { Footer } from './components/Footer.jsx'
import { projects, statusMeta } from './data/projects.js'

const FILTERS = [
  { value: 'all', label: 'All' },
  ...Object.entries(statusMeta).map(([value, meta]) => ({
    value,
    label: meta.label,
  })),
]

function App() {
  const [filter, setFilter] = useState('all')

  const visible =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.status === filter)

  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#log-heading">
        Skip to build log
      </a>
      <div className="wrap">
        <Intro />
        <main id="log">
          <div className="log-bar">
            <h2 className="log-title" id="log-heading">
              Build log
            </h2>
            <div className="filters" role="group" aria-label="Filter build log">
              {FILTERS.map(({ value, label }) => {
                const count =
                  value === 'all'
                    ? projects.length
                    : projects.filter((project) => project.status === value)
                        .length
                const active = filter === value
                return (
                  <button
                    key={value}
                    type="button"
                    className={[
                      'filter',
                      value !== 'all' ? value : '',
                      active ? 'active' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-pressed={active}
                    onClick={() => setFilter(value)}
                  >
                    {label}
                    <span className="filter-count">{count}</span>
                  </button>
                )
              })}
            </div>
          </div>
          {visible.map((project) => (
            <ProjectEntry key={project.id} project={project} />
          ))}
          {visible.length === 0 && (
            <p className="empty">No entries in this status yet.</p>
          )}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App