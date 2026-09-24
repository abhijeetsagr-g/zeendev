import { Status } from './Status.jsx'

export function Intro() {
  return (
    <header className="intro">
      <Status />
      <h1>
        Small, working things{' '}
          shipped by me
          <span aria-hidden="true">.</span>
        
      </h1>
      <p className="sub">
        I&apos;m Zeen(Abhijeet),  a BCA student living in Bangalore; loves building usable app,
        from the first line of code to the Play Store
        
      </p>
    </header>
  )
}