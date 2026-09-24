import { footerLinks } from '../data/projects.js'

export function Footer() {
  return (
    <footer className="footer">
      <span>Bangalore, IN</span>
      <span className="footer-links">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </span>
    </footer>
  )
}