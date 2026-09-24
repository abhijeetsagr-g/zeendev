import { useTypewriter } from '../hooks/useTypewriter.js'


const statusLine = `looking for an internship`

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