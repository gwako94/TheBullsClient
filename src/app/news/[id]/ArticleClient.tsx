'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@apollo/client/react';
import { GET_ARTICLE } from '@/graphql/queries/news';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';


export default function ArticleClient() {
  const [copied, setCopied] = useState(false);
  const params = useParams();
  const slug = params.id as string;

  // Fetch article from GraphQL
  const { data, loading, error } = useQuery(GET_ARTICLE, {
    variables: { slug },
  });

  const article = (data as any)?.article;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getCategoryLabel = (category: string) => {
    return category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  if (loading) {
    return (
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!article && !loading) {
    return (
      <main className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy-950 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-4">{error?.message || 'The article you are looking for does not exist.'}</p>
            <Link href="/news" className="text-red-600 hover:text-red-700 font-semibold">
              ← Back to News
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const relatedNews: any[] = [];

  const getContentHTML = () => {
    if (!article.content) return '';
    const raw = marked.parse(article.content) as string;
    return DOMPurify.sanitize(raw);
  };

  const getShareUrl = () => typeof window !== 'undefined' ? window.location.href : '';

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(article.title)}`, '_blank', 'noopener,noreferrer');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${article.title} ${getShareUrl()}`)}`, '_blank', 'noopener,noreferrer');
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <article className="py-12 bg-gradient-to-br from-navy-950 to-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/news" className="inline-flex items-center text-white/80 hover:text-white mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {article.author?.name}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(article.publishedAt)}
            </div>
            {article.readTime && (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {article.readTime}
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Featured Image */}
      {article.featuredImageUrl ? (
        <div className="w-full aspect-video max-h-96 relative">
          <Image
            src={article.featuredImageUrl}
            alt={article.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div className="w-full bg-gradient-to-br from-navy-100 to-gray-100 aspect-video max-h-96 flex items-center justify-center">
          <span className="text-8xl">📰</span>
        </div>
      )}

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-semibold">
              {article.excerpt}
            </p>

            <div
              className="article-content prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: getContentHTML() }}
            />
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag: any, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-navy-50 text-navy-950 rounded-full text-sm font-semibold hover:bg-navy-100 transition-colors"
                  >
                    #{typeof tag === 'string' ? tag.replace(/\s+/g, '') : tag.name?.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-navy-950 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button onClick={shareOnFacebook} aria-label="Share on Facebook" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button onClick={shareOnTwitter} aria-label="Share on Twitter" className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button onClick={shareOnWhatsApp} aria-label="Share on WhatsApp" className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
              <button onClick={copyLink} aria-label="Copy link" className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                {copied ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                )}
              </button>
            </div>
            {copied && <p className="text-sm text-green-600 mt-2">Link copied to clipboard!</p>}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedNews.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-950 mb-8 font-playfair">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedNews.map((related: any) => (
                <Link
                  key={related.id}
                  href={`/news/${related.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-navy-100 to-gray-100 flex items-center justify-center">
                    <span className="text-6xl">📰</span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-red-600">{related.category}</span>
                    <h3 className="text-xl font-bold text-navy-950 mt-2 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">{related.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{related.date}</span>
                      <span className="mx-2">•</span>
                      <span>{related.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/news"
                className="inline-flex items-center px-8 py-4 bg-navy-950 text-white font-bold rounded-full hover:bg-navy-900 transition-all duration-300"
              >
                View All News
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <style jsx global>{`
        .article-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          color: #071b2e;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
        }

        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #071b2e;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .article-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .article-content ul {
          list-style-type: disc;
          margin-left: 2rem;
          margin-bottom: 1.5rem;
        }

        .article-content li {
          margin-bottom: 0.5rem;
          line-height: 1.8;
        }

        .article-content strong {
          font-weight: 600;
          color: #071b2e;
        }
      `}</style>
    </main>
  );
}
