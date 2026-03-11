'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client/react';
import { GET_ARTICLES } from '@/graphql/queries/news';

export default function NewsClient() {
  const { data, loading, error } = useQuery(GET_ARTICLES, {
    variables: { limit: 20 }
  });

  const newsArticles = (data as any)?.articles || [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryLabel = (category: string) => {
    return category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };
  return (
    <main className="min-h-screen pt-16">
      <section className="bg-gradient-to-br from-navy-950 to-navy-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white font-playfair mb-4">Latest News</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay updated with all the latest news from Isiolo City FC
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-gold-500 mx-auto mt-6"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-video bg-gray-200 rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-10">
              <p className="text-gray-600">Using cached content. {error.message}</p>
            </div>
          )}

          {/* News Grid */}
          {!loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article: any) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug || article.id}`}
                  className="group cursor-pointer block"
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-video bg-navy-100 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {getCategoryLabel(article.category)}
                      </span>
                    </div>
                    {article.featuredImageUrl ? (
                      <Image
                        src={article.featuredImageUrl}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-navy-200 to-navy-300 transform group-hover:scale-110 transition-transform duration-500"></div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500 space-x-2">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span>•</span>
                      <span>{article.author.name}</span>
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 group-hover:text-red-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
                    <span className="inline-flex items-center text-red-600 font-semibold group-hover:text-red-700 mt-2">
                      Read More
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
