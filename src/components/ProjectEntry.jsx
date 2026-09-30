import { projectHref } from '../hooks/useHashRoute.js'

export function ProjectEntry({ project }) {
  return (
    <article className="entry">
      <div className="entry-body">
        <h3 className="entry-name">
          <a href={projectHref(project.id)}>{project.name}</a>
        </h3>
        {project.badge && (
          <p className={`entry-sub ${project.badge.tone}`}>
            {project.badge.label}
          </p>
        )}
        <p className="entry-desc">{project.description}</p>
        {project.meta?.length > 0 && (
          <ul className="entry-meta">
            {project.meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
