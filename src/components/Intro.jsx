import { introLinks } from '../data/projects.js'
import { Status } from './Status.jsx'

export function Intro() {
  return (
    <header className="intro">
      <Status />
      <h1>
        Small, working things{' '}
        <em>
          shipped by me
          <span aria-hidden="true">.</span>
        </em>
      </h1>
      <p className="sub">
        I&apos;m Zeen(Abhijeet),  a BCA student in Bangalore building apps end to
        end, from the first line of code to the Play Store. This is a log of
        how I spent my free time.{' '}
        {introLinks.map((link, i) => (
          <span key={link.label}>
            {i > 0 && <span aria-hidden="true"> · </span>}
            <a href={link.href}>{link.label}</a>
          </span>
        ))}
      </p>
    </header>
  )
}