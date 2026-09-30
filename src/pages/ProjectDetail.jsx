import { useEffect } from 'react'
import { getProject, projects, statusMeta } from '../data/projects.js'
import { projectHref } from '../hooks/useHashRoute.js'
import { ShotFrame } from '../components/ShotFrame.jsx'
import { ScrollProgress } from '../components/ScrollProgress.jsx'
import { Footer } from '../components/Footer.jsx'

export function ProjectDetail({ id }) {
  const project = getProject(id)
  const status = project ? statusMeta[project.status] : null
  const index = project ? projects.indexOf(project) : -1
  const next = index >= 0 ? projects[(index + 1) % projects.length] : null

  useEffect(() => {
    if (!project) return
    document.title = `${project.name} — zeen`
    return () => {
      document.title = 'zeen — build log'
    }
  }, [project])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  if (!project) {
    return (
      <>
        <ScrollProgress />
        <a className="skip-link" href="#pd-body">
          Skip to details
        </a>
        <div className="wrap">
          <main id="pd-body">
            <div className="pd-bar">
              <p className="pd-crumbs">
                <a href="#/">← build log</a>
              </p>
            </div>
            <h1 className="pd-title">Not found</h1>
            <p className="pd-lede">
              No project with the id <code>{id}</code>. It may have been renamed — the
              build log has everything that still exists.
            </p>
          </main>
          <Footer />
        </div>
      </>
    )
  }

  const manifest = [
    { label: 'shipped', value: project.date },
    { label: 'version', value: project.version },
    { label: 'platform', value: project.platform },
    { label: 'license', value: project.license },
  ].filter((cell) => cell.value)

  return (
    <>
      <ScrollProgress />
      <a className="skip-link" href="#pd-body">
        Skip to details
      </a>
      <div className="wrap">
        <main id="pd-body">
          <div className="pd-bar">
            <p className="pd-crumbs">
              <a href="#/">← build log</a>
              <span>/</span>
              {project.id}
            </p>
            {status && <span className={`pd-status ${status.className}`}>{status.label}</span>}
          </div>

          <h1 className="pd-title">{project.name}</h1>

          <p className="pd-lede">{project.lede || project.description}</p>

          {manifest.length > 0 && (
            <dl className="pd-manifest">
              {manifest.map((cell) => (
                <div key={cell.label}>
                  <dt>{cell.label}</dt>
                  <dd>{cell.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {project.sections?.map((section) => (
            <section key={section.heading}>
              <h2 className="pd-h2">
                <b aria-hidden="true">##</b>
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="pd-body">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {project.steps?.length > 0 && (
            <section>
              <h2 className="pd-h2">
                <b aria-hidden="true">##</b>
                how it works
              </h2>
              <ol className="pd-steps">
                {project.steps.map((step) => (
                  <li key={step.term}>
                    <b>{step.term}</b>
                    <span>{step.desc}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {project.screenshots?.length > 0 && (
            <section>
              <h2 className="pd-h2">
                <b aria-hidden="true">##</b>
                screens
              </h2>
              {project.screenshots.map((shot, i) => (
                <ShotFrame key={shot.caption ?? shot.title ?? i} shot={shot} index={i} />
              ))}
            </section>
          )}

          {project.changelog?.length > 0 && (
            <section>
              <h2 className="pd-h2">
                <b aria-hidden="true">##</b>
                changelog
              </h2>
              <ol className="pd-log">
                {project.changelog.map((entry) => (
                  <li key={entry.date}>
                    <b>{entry.date}</b>
                    <span>{entry.text}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <div className="pd-actions">
            {project.links?.map((link) => (
              <a
                key={link.label}
                className={`pd-btn ${link.primary ? 'primary' : ''}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pd-foot">
            <a href="#/">← all projects</a>
            {next && next.id !== project.id && (
              <a href={projectHref(next.id)}>next: {next.name} →</a>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
