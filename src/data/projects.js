/**
 * Build-log entries. Add a new object here and it shows up in the log,
 * the filter chips, and the status line automatically.
 *
 * `status` drives filtering + stats: 'live' | 'building' | 'in-progress'
 * `badge` is the subtitle line under the name (optional).
 * `href`  → replace '#' with real links (GitHub, Play Store, …).
 */

export const projects = [
  {
    id: 'gamypad',
    date: 'Jul 2026',
    name: 'Gamypad',
    href: 'https://github.com/abhijeetsagr-g/gamypad',
    status: 'live',
    badge: { tone: 'live', label: 'Get it on GitHub' },
    description:
      'Turns a phone into a wireless gamepad for a Linux PC: dual joysticks, full button mapping, QR-code pairing, and a watchdog that catches disconnects. Flutter app talking UDP to a native Linux companion.',
    meta: ['Flutter', 'Linux / uinput', 'Open source'],
  },
  {
    id: 'tunely',
    date: 'Sept 2026',
    name: 'Tunely',
    href: 'https://abhijeetsagr-g.github.io/tunelygp/',
    status: 'In progress',
    badge: { tone: 'building', label: 'Closed testing' },
    description:
      'Offline music player built on BLoC. scans your local library, pulls artist art, synced lyrics, use daily mixes and get the streaming app feel without being offline!',
    meta: ['Flutter', 'BLoC', 'Play Store'],
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
  },

]

export const statusMeta = {
  live: { label: 'Live', className: 'live' },
  building: { label: 'Building', className: 'building' },
  'in-progress': { label: 'In progress', className: 'in-progress' },
}

export const introLinks = [
  { label: 'GitHub', href: 'https://github.com/abhijeetsagr-g/' },
]

export const footerLinks = [
  // Replace '#' with a real contact link (mailto:, etc.)
  { label: 'Get in touch', href: '#' },
  { label: 'GitHub', href: 'https://github.com/abhijeetsagr-g/' },
]