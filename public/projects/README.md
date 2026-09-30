# Project screenshots

Drop files here and they appear on that project's detail page automatically,
in the order listed under `screenshots` in `src/data/projects.js`.

    public/projects/<id>/01-pairing.webp
    public/projects/<id>/02-editor.webp

The `src` value in the data file is already wired up — until the file exists the
page shows a labelled placeholder, so nothing shifts when you add them.

Use `.webp` (or `.png` / `.jpg` — just update the extension in the data file).
`ratio` controls the slot: `16/10` for desktop shots, `4/3` for phone screen
captures in landscape, `9/19.5` for a full phone frame.
