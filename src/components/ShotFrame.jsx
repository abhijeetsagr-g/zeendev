const RATIOS = {
  '16/9': 'desktop',
  '16/10': 'wide',
  '41/18': 'ultrawide',
  '4/3': 'standard',
  '9/20.5': 'phone',
}

/**
 * One framed screenshot slot. Shows the real image as soon as a file exists at
 * `shot.src`; until then it holds the space with a labelled placeholder so the
 * page never reflows when the screenshots land.
 *
 * A shot can instead carry `pair: { light, dark }` — the same screen in both
 * themes, laid out side by side and labelled. Each variant keeps its own ratio,
 * so paired portrait shots need no `ratio` of their own.
 */
export function ShotFrame({ shot, index }) {
  const ratio = RATIOS[shot.ratio] ?? RATIOS['4/3']
  const variants = shot.pair
    ? [
        ['light', shot.pair.light],
        ['dark', shot.pair.dark],
      ].filter(([, src]) => src)
    : null

  return (
    <div className="pd-frame">
      <div className="pd-frame-bar">
        <i />
        <i />
        <i />
        <span>{shot.chrome || `screenshot ${index + 1}`}</span>
      </div>

      {variants?.length ? (
        <div className="pd-shot pd-shot-pair">
          {variants.map(([theme, src]) => (
            <figure className="pd-variant" key={theme}>
              <img
                src={src}
                alt={`${shot.title || shot.caption || 'Project screenshot'} (${theme})`}
                loading="lazy"
              />
              <figcaption>{theme}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className={`pd-shot pd-shot-${ratio}`}>
          {shot.src ? (
            <img src={shot.src} alt={shot.title || shot.caption || 'Project screenshot'} loading="lazy" />
          ) : (
            <p className="pd-shot-ph">
              screenshot {String(index + 1).padStart(2, '0')}
              <span>{shot.title}</span>
            </p>
          )}
        </div>
      )}

      {shot.caption && <p className="pd-frame-cap">{shot.caption}</p>}
    </div>
  )
}
