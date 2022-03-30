export function dateForHumans(timestamp, locale = 'en-US') {
  if (!timestamp) return

  const date = new Date(timestamp)

  return Intl.DateTimeFormat(locale, {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(date)
}
