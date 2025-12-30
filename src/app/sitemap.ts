import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  // Static routes
  const routes = [
    '',
    '/team',
    '/news',
    '/matches',
    '/tickets',
    '/membership',
    '/sponsors',
    '/contact',
    '/programs',
    '/community',
    '/coming-soon',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/news' || route === '/matches'
      ? 'daily' as const
      : 'weekly' as const,
    priority: route === '' ? 1 : route === '/team' || route === '/news' ? 0.9 : 0.8,
  }))

  // TODO: Add dynamic routes (team members, news articles)
  // These will be fetched from your GraphQL API
  // Example:
  // const players = await fetchPlayers()
  // const playerRoutes = players.map(player => ({
  //   url: `${baseUrl}/team/${player.id}`,
  //   lastModified: new Date(player.updatedAt),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }))

  return routes
}
