/**
 * Build-log entries. Add a new object here and it shows up in the log,
 * the filter chips, and the status line automatically.
 *
 * `status` drives filtering + stats: 'live' | 'building' | 'in-progress'
 * `badge` is the subtitle line under the name (optional).
 * `href`  → replace '#' with real links (GitHub, Play Store, …).
 *
 * Detail pages (route `#/project/<id>`) read everything below that line, so a
 * project with no extra keys still renders — it just gets a shorter page.
 *
 *   version / platform / license  → manifest strip (any key can be left out)
 *   lede                          → opening line, defaults to `description`
 *   sections[]                    → { heading, body: [para, para] }
 *   steps[]                       → { term, desc } — the numbered flow list
 *   screenshots[]                 → { title, caption, chrome, ratio, src }
 *                                   or { title, caption, chrome, pair: { light, dark } }
 *                                   — a pair lays both themes out side by side
 *   changelog[]                   → { date, text } — reverse-chronological
 *   links[]                       → { label, href, primary } — action buttons
 *
 * Screenshot `src` is relative to the deployed base, so `projects/<id>/01.webp`
 * works at a domain root and on a github.io project site. Drop the files in
 * `public/projects/<id>/`; without one, a labelled placeholder is shown.
 */

export const projects = [
  {
    id: 'gamypad',
    date: 'March 2025',
    name: 'Gamypad',
    href: 'https://github.com/abhijeetsagr-g/gamypad',
    status: 'live',
    badge: { tone: 'live', label: 'GitHub releases' },
    description:
      'Turns an Android phone into an Xbox 360 controller for a Linux PC over WiFi. The PC side writes real uinput events, so games see a normal gamepad.',
    meta: ['Flutter', ' C++', 'Open Source'],

    version: 'v1.2.0+1',
    platform: 'Android 8.0+ → Linux x86_64',
    license: 'MIT',
    lede: 'Two Flutter apps that speak one wire protocol. The phone streams button and stick events over UDP; the Linux side feeds them into /dev/uinput as a virtual Xbox 360 pad.',
    sections: [
      
    ],
    steps: [
      { term: 'hotspot', desc: 'turn on the hotspot from the phone you want to use as the pad' },
      { term: 'join', desc: 'connect the PC to that hotspot' },
      { term: 'serve', desc: 'open Gamypad on the PC and start the server' },
      { term: 'scan', desc: 'tap the QR scanner in the Android app' },
      { term: 'pair', desc: 'scan the code on screen — the connection details fill themselves in' },
      { term: 'play', desc: 'hit connect; the PC now has a gamepad attached' },
    ],
    screenshots: [
      {
        title: 'linux · server idle',
        caption: 'fig. 1 — the server waiting, with the pairing code on screen',
        chrome: 'gamypad-host',
        ratio: '16/9',
        src: 'projects/gamypad/linux_idle.png',
      },
      {
        title: 'linux · QR code',
        caption: 'fig. 2 — the phone fills in the connection details by scanning this',
        chrome: 'gamypad-host',
        ratio: '16/9',
        src: 'projects/gamypad/linux_qr.png',
      },
      {
        title: 'android · home',
        caption: 'fig. 3 — the phone app, before a host has been picked',
        chrome: 'gamypad · android',
        ratio: '9/20.5',
        src: 'projects/gamypad/android_home.png',
      },
      {
        title: 'android · controller',
        caption: 'fig. 4 — sticks, triggers and buttons, laid out to fit your hands',
        chrome: 'gamypad · android',
        ratio: '41/18',
        src: 'projects/gamypad/android_controller.png',
      },
      {
        title: 'linux · server running',
        caption: 'fig. 5 — the server up and receiving from a connected phone',
        chrome: 'gamypad-host',
        ratio: '16/9',
        src: 'projects/gamypad/linux_running.png',
      },
    ],
    changelog: [
      {
        date: '2026-09-26',
        text: 'repo hygiene pass',
      },
      { date: '2026-03-03', text: 'rebuilt the PC app; new Android UI with QR pairing' },
      { date: '2025-10-02', text: 'downloadable install script, AppImage and APK on the releases tab' },
      { date: '2025-09-22', text: 'switched both ends from TCP to UDP' },
    ],
    links: [
      { label: 'source on github', href: 'https://github.com/abhijeetsagr-g/gamypad', primary: true },
      { label: 'releases', href: 'https://github.com/abhijeetsagr-g/gamypad/releases' },
      { label: 'report an issue', href: 'https://github.com/abhijeetsagr-g/gamypad/issues' },
    ],
  },
  {
    id: 'tunely',
    date: 'Sept 2026',
    name: 'Tunely',
    href: 'https://abhijeetsagr-g.github.io/tunelygp/',
    status: 'in-progress',
    badge: { tone: 'building', label: 'Closed testing' },
    description:
      'Offline music player built on BLoC. scans your local library, pulls artist art, synced lyrics, use daily mixes and get the streaming app feel without being offline!',
    meta: ['Flutter', 'BLoC', 'Play Store'],

    version: 'v0.9.0',
    platform: 'Android',
    license: 'Proprietary',
    lede: 'The streaming-app feel, on files that never left your phone. Tunely scans the library, fetches artwork and lyrics, and builds mixes offline.',
    sections: [
      {
        heading: 'what it does',
        body: [
          'Tunely is a local-first player. It indexes on-device audio, then treats the result like a catalogue worth browsing — artist pages, album grids, synced lyrics, and a daily mix built from what you actually play.',
          'Everything stateful lives in a BLoC, which kept the messy parts (indexing progress, playback, downloads) from bleeding into the UI. The indexer reports progress like a real sync engine and never blocks the main isolate.',
        ],
      },
    ],
    steps: [
      { term: 'scan', desc: 'walk the media store, build the library index' },
      { term: 'enrich', desc: 'fetch artist art and album metadata once, then cache' },
      { term: 'mix', desc: 'generate a daily mix from recent listens, fully offline' },
      { term: 'listen', desc: 'gapless playback, lyrics, and a queue you can edit' },
    ],
    screenshots: [
      {
        title: 'tunely · home',
        caption: 'the home shelf: recents, mixes and the pick for today',
        chrome: 'tunely · home',
        pair: {
          light: 'projects/tunely/home.webp',
          dark: 'projects/tunely/home_dark.webp',
        },
      },
      {
        title: 'tunely · player',
        caption: 'now playing, with the artwork as the backdrop',
        chrome: 'tunely · player',
        pair: {
          light: 'projects/tunely/player.webp',
          dark: 'projects/tunely/player_dark.webp',
        },
      },
      {
        title: 'tunely · lyrics',
        caption: 'synced lyrics, scrolled to the current line',
        chrome: 'tunely · lyrics',
        pair: {
          light: 'projects/tunely/lyrics.webp',
          dark: 'projects/tunely/lyrics_dark.webp',
        },
      },
      {
        title: 'tunely · album',
        caption: 'an album page with the tracklist and its up-next queue',
        chrome: 'tunely · album',
        pair: {
          light: 'projects/tunely/album.webp',
          dark: 'projects/tunely/album_dark.webp',
        },
      },
      {
        title: 'tunely · search',
        caption: 'searching the on-device catalogue',
        chrome: 'tunely · search',
        pair: {
          light: 'projects/tunely/search.webp',
          dark: 'projects/tunely/search_dark.webp',
        },
      },
      {
        title: 'tunely · settings',
        caption: 'theme, indexing and playback preferences',
        chrome: 'tunely · settings',
        pair: {
          light: 'projects/tunely/settings.webp',
          dark: 'projects/tunely/settings_dark.webp',
        },
      },
    ],
    changelog: [
      { date: '2026-09-20', text: 'v0.9.0 — closed testing build on the Play Store' },
      { date: '2026-09-08', text: 'v0.8.0 — daily mix generation' },
      { date: '2026-08-27', text: 'v0.7.0 — library indexer moved off the main isolate' },
    ],
    links: [
      { label: 'sign up for testing', href: 'https://docs.google.com/forms/d/e/1FAIpQLScYmhV9hRzuqwAPOl9jQL8zs5LWDhC_qoiMDrX4g0gJrv32jQ/viewform', primary: true },
      { label: 'closed testing', href: 'https://abhijeetsagr-g.github.io/tunelygp/', },
    ],
  },
  {
    id: 'spotirip',
    date: 'Sept 2026',
    name: 'Spotirip',
    href: 'https://github.com/abhijeetsagr-g/spotirip-downloads/releases/tag/v1',
    status: 'live',
    badge: { tone: 'live', label: 'Get it on GitHub' },
    description:
      'Search up tracks, then download them with correct tags and artwork sourced from the iTunes API!',
    meta: ['Flutter', 'Android', 'Metatagger'],

    version: 'v1.0',
    platform: 'Android',
    license: 'MIT',
    lede: 'Search a track, hand it to the app, and get a file your music library actually recognises — right tags, right cover, right folder.',
    sections: [
      {
        heading: 'what it does',
        body: [
          'Spotirip is a search-and-download front end. You find a track, and the app writes it to disk with a full ID3 tag set — title, artist, album, year, track number — plus embedded artwork and the folder structure your library expects.',
          'Metadata comes from the iTunes API, so the tags match what streaming services already know about the track instead of whatever filename the download arrived with.',
        ],
      },
    ],
    steps: [
      { term: 'search', desc: 'type a track, artist or album into the search bar' },
      { term: 'pick', desc: 'choose the right version from the results' },
      { term: 'tag', desc: 'ID3 written from the iTunes metadata' },
      { term: 'file', desc: 'saved to Music/Artist/Album with embedded art' },
    ],
    screenshots: [
      {
        title: 'spotirip · search',
        caption: 'fig. 1 — search results with artwork',
        chrome: 'spotirip · search',
        ratio: '4/3',
        src: 'projects/spotirip/01-search.webp',
      },
      {
        title: 'spotirip · library',
        caption: 'fig. 2 — what landed on disk, tagged and sorted',
        chrome: 'spotirip · downloads',
        ratio: '4/3',
        src: 'projects/spotirip/02-library.webp',
      },
    ],
    changelog: [{ date: '2026-09-12', text: 'v1.0 — public release with tag + artwork writing' }],
    links: [
      { label: 'get the release', href: 'https://github.com/abhijeetsagr-g/spotirip-downloads/releases/tag/v1', primary: true },
      { label: 'source', href: 'https://github.com/abhijeetsagr-g/spotirip' },
    ],
  },
]

export function getProject(id) {
  return projects.find((project) => project.id === id)
}

export const statusMeta = {
  live: { label: 'Live', className: 'live' },
  building: { label: 'Building', className: 'building' },
  'in-progress': { label: 'In progress', className: 'in-progress' },
}

export const introLinks = [
  { label: 'GitHub', href: 'https://github.com/abhijeetsagr-g/' },
]

export const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/abhijeetsagr-g/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhijeet-sagar-gilead/' },
]