import { MetadataRoute } from 'next'

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://thebullsgraphql.onrender.com/graphql'

async function fetchGraphQL(query: string, variables?: Record<string, unknown>) {
  try {
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    })
    const json = await res.json()
    return json.data
  } catch {
    return null
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://isiolocityfc.com'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
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
    '/academy',
    '/highlights',
    '/shop',
    '/donate',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-03-19'),
    changeFrequency: route === '' || route === '/news' || route === '/matches'
      ? 'daily' as const
      : 'weekly' as const,
    priority: route === '' ? 1 : route === '/team' || route === '/news' ? 0.9 : 0.8,
  }))

  // Fetch published articles
  const articlesData = await fetchGraphQL(`
    query {
      articles(status: PUBLISHED, limit: 100) {
        id
        slug
        updatedAt
        publishedAt
      }
    }
  `)

  const articleRoutes: MetadataRoute.Sitemap = (articlesData?.articles ?? []).map(
    (article: { id: string; slug?: string; updatedAt?: string; publishedAt?: string }) => ({
      url: `${baseUrl}/news/${article.slug || article.id}`,
      lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(article.publishedAt || '2026-03-19'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })
  )

  // Fetch active players
  const playersData = await fetchGraphQL(`
    query {
      players(status: ACTIVE) {
        id
      }
    }
  `)

  const playerRoutes: MetadataRoute.Sitemap = (playersData?.players ?? []).map(
    (player: { id: string }) => ({
      url: `${baseUrl}/team/${player.id}`,
      lastModified: new Date('2026-03-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  )

  return [...staticRoutes, ...articleRoutes, ...playerRoutes]
}
