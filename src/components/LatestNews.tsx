'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client/react';
import { GET_LATEST_NEWS } from '@/graphql/queries/news';

const LatestNews = () => {
  const { data, loading, error } = useQuery(GET_LATEST_NEWS, {
    variables: { limit: 3 }
  });

  const newsArticles = (data as any)?.latestNews || [];

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-14">
          <div>
            <p className="text-sm font-semibold text-red-600 tracking-widest uppercase mb-3">Latest Updates</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 font-playfair">
              Club News
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden md:inline-flex items-center text-red-600 hover:text-red-700 font-semibold group"
          >
            View All News
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl aspect-video mb-4"></div>
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

        {/* Empty State */}
        {!loading && !error && newsArticles.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No articles published yet.</p>
          </div>
        )}

        {/* News Grid */}
        {!loading && newsArticles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article: any, index: number) => (
              <Link
                key={article.id}
                href={`/news/${article.slug || article.id}`}
                className="group cursor-pointer animate-fade-in-up block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-video bg-navy-100 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10"></div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {getCategoryLabel(article.category)}
                    </span>
                  </div>
                  {/* Featured Image or Placeholder */}
                  {article.featuredImageUrl ? (
                    <Image
                      src={article.featuredImageUrl}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-navy-800 to-navy-900 transform group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                      <svg className="w-16 h-16 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
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

                  <p className="text-gray-600 line-clamp-2">
                    {article.excerpt}
                  </p>

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

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden text-center">
          <Link
            href="/news"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-navy-950 text-white font-semibold rounded-full hover:bg-navy-900 transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
