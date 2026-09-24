import { useTypewriter } from '../hooks/useTypewriter.js'
import { projects, statusMeta } from '../data/projects.js'

const countsByStatus = Object.fromEntries(
  Object.keys(statusMeta).map((status) => [
    status,
    projects.filter((project) => project.status === status).length,
  ]),
)

const summary = Object.entries(statusMeta)
  .filter(([status]) => countsByStatus[status] > 0)
  .map(([status]) => `${countsByStatus[status]} ${status}`)
  .join(' · ')

const statusLine = `${summary} — open to a Flutter internship`

export function Status() {
  const { text, done } = useTypewriter(statusLine)

  return (
    <p className="status" aria-live="polite">
      <span className="status-label">status</span>
      <span aria-hidden="true">:&nbsp;</span>
      {text}
      <span
        className={`cursor ${done ? 'blink' : 'steady'}`}
        aria-hidden="true"
      />
    </p>
  )
}