'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@apollo/client/react';
import { GET_ARTICLE } from '@/graphql/queries/news';
import { marked } from 'marked';

// Mock news data - fallback if API fails
const newsArticles = {
  '1': {
    id: 1,
    title: 'Northern Bulls Charge to Victory: 4-1 Triumph Over Rivals',
    category: 'Match Report',
    date: 'December 12, 2024',
    author: 'Match Correspondent',
    readTime: '5 min read',
    excerpt: 'Isiolo City FC delivers a stunning performance at home, showcasing attacking prowess and solid defense in front of passionate fans',
    content: `
      <p>In a spectacular display of footballing excellence, Isiolo City FC demolished their rivals 4-1 at Isiolo Stadium on Saturday evening, sending the home crowd into raptures and cementing their position at the top of the table.</p>

      <h2>First Half Domination</h2>
      <p>Northern Bulls started the match with intent, pressing high and creating chances from the opening whistle. Captain James Mwangi opened the scoring in the 15th minute with a stunning long-range effort that left the opposition goalkeeper with no chance.</p>

      <p>The home side doubled their advantage just ten minutes later when striker David Omondi latched onto a through ball and calmly slotted past the keeper. The stadium erupted as fans celebrated what was turning into a dominant performance.</p>

      <h2>Second Half Brilliance</h2>
      <p>Any hopes of a comeback were quickly extinguished when Omondi grabbed his second of the night in the 52nd minute, rising highest to meet a corner kick with a powerful header.</p>

      <p>Though the visitors pulled one back through a well-taken free kick in the 68th minute, Isiolo City FC's response was immediate. Substitute winger John Kamau restored the three-goal cushion with a brilliant solo effort, weaving past three defenders before firing into the top corner.</p>

      <h2>Manager's Reaction</h2>
      <p>"I'm incredibly proud of the team today," said head coach after the match. "We executed our game plan perfectly and showed the quality that has made us one of the most exciting teams in the league. The support from our fans was phenomenal - they really are our 12th man."</p>

      <h2>What's Next</h2>
      <p>Northern Bulls will look to continue this momentum as they travel away next weekend. With performances like this, the championship dream is very much alive.</p>

      <p>All home matches are FREE to attend - join us at Isiolo Stadium and be part of the journey!</p>
    `,
    tags: ['Match Report', 'Victory', 'Home Match', 'David Omondi'],
    relatedArticles: [2, 3],
  },
  '2': {
    id: 2,
    title: 'Community First: Free Football Clinic for Local Youth',
    category: 'Community',
    date: 'December 10, 2024',
    author: 'Foundation Team',
    readTime: '4 min read',
    excerpt: 'Isiolo City FC partners with Java Events to bring professional coaching to 200 aspiring young footballers in our community',
    content: `
      <p>Isiolo City FC, in partnership with main sponsor Java Events, hosted a successful free football clinic this weekend that brought joy and professional training to over 200 young aspiring footballers from across Isiolo County.</p>

      <h2>Grassroots Development</h2>
      <p>The clinic, held at our training facilities, saw first-team players and coaching staff working directly with children aged 8-16, teaching fundamental skills, tactical awareness, and the values that make football a beautiful game.</p>

      <p>"This is what football is all about," said youth academy director. "Giving back to the community that supports us and nurturing the next generation of talent. Some of these kids could be wearing our shirt in a few years."</p>

      <h2>Java Events Partnership</h2>
      <p>Our main sponsor, Java Events, made this initiative possible through their generous support. "We believe in investing in youth development," said a Java Events representative. "Football teaches discipline, teamwork, and determination - values that extend far beyond the pitch."</p>

      <h2>Skills and Drills</h2>
      <p>Participants were divided into age groups and rotated through various stations focusing on:</p>
      <ul>
        <li>Ball control and dribbling techniques</li>
        <li>Passing accuracy and vision</li>
        <li>Shooting and finishing</li>
        <li>Defensive positioning</li>
        <li>Small-sided games</li>
      </ul>

      <h2>Future Stars</h2>
      <p>Several standout performers were identified for potential inclusion in our youth academy programs. "We saw some exceptional talent today," noted our head of youth recruitment. "This is exactly how we discover and develop future stars."</p>

      <p>The clinic concluded with a Q&A session where first-team players shared their journey to professional football, inspiring the young participants to chase their dreams.</p>

      <h2>Monthly Initiative</h2>
      <p>Due to the overwhelming success, Isiolo City FC and Java Events have committed to making this a monthly initiative. Registration details for the next clinic will be announced on our social media channels.</p>

      <p>For more information about our community programs, contact us at foundation@isiolocityfc.com</p>
    `,
    tags: ['Community', 'Youth Development', 'Java Events', 'Football Clinic'],
    relatedArticles: [1, 3],
  },
  '3': {
    id: 3,
    title: 'Record Crowd Expected for Next Home Match',
    category: 'Fan Zone',
    date: 'December 8, 2024',
    author: 'Fan Engagement',
    readTime: '3 min read',
    excerpt: 'With free entry and unbeaten home record, fans rally behind Northern Bulls for crucial weekend fixture at Isiolo Stadium',
    content: `
      <p>Excitement is building across Isiolo County as Northern Bulls prepare to host their biggest home match of the season this weekend. With our unbeaten home record on the line and FREE entry for all fans, stadium officials are expecting record attendance.</p>

      <h2>Fortress Isiolo</h2>
      <p>Isiolo Stadium has become a fortress this season, with Northern Bulls yet to drop a single point at home. This impressive run has captured the imagination of football fans across the region, with many traveling from neighboring counties to witness the spectacle.</p>

      <p>"The atmosphere at our home matches is electric," said our fan liaison officer. "The support from our community has been phenomenal, and we expect this weekend to be extra special."</p>

      <h2>Free Entry Policy</h2>
      <p>Our commitment to making football accessible to everyone continues with FREE entry to all home matches. No tickets, no hassle - just show up and support Northern Bulls!</p>

      <p>Gates open 2 hours before kickoff, and we encourage fans to arrive early to:</p>
      <ul>
        <li>Secure the best viewing positions</li>
        <li>Enjoy pre-match entertainment</li>
        <li>Visit our merchandise stands</li>
        <li>Grab refreshments from local vendors</li>
        <li>Participate in fan activities and giveaways</li>
      </ul>

      <h2>Fan Safety</h2>
      <p>With large crowds expected, we've implemented enhanced safety measures:</p>
      <ul>
        <li>Additional security personnel</li>
        <li>Clearly marked emergency exits</li>
        <li>First aid stations throughout the stadium</li>
        <li>Family-friendly viewing sections</li>
        <li>Free parking nearby</li>
      </ul>

      <h2>Make Some Noise!</h2>
      <p>The team has specifically requested maximum vocal support from the crowd. "Our fans are our 12th man," said team captain. "When Isiolo Stadium is rocking, it gives us an incredible boost. We feed off that energy."</p>

      <h2>Match Details</h2>
      <p><strong>Date:</strong> This Saturday<br>
      <strong>Kickoff:</strong> 3:00 PM<br>
      <strong>Venue:</strong> Isiolo Stadium<br>
      <strong>Entry:</strong> FREE for all fans</p>

      <p>Let's pack the stadium and roar Northern Bulls to another home victory! See you there!</p>

      <p>#TheBulls #IsiolocityFC #FreEntry #PackTheStadium</p>
    `,
    tags: ['Fan Zone', 'Match Preview', 'Free Entry', 'Home Match'],
    relatedArticles: [1, 2],
  },
};

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.id as string;

  // Fetch article from GraphQL
  const { data, loading, error } = useQuery(GET_ARTICLE, {
    variables: { slug },
  });

  // Use GraphQL data or fallback to mock data
  const article = (data as any)?.article || newsArticles[slug as keyof typeof newsArticles];

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

  if (!article) {
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

  const relatedNews = article.relatedArticles
    ? article.relatedArticles.map((id: any) => newsArticles[id.toString() as keyof typeof newsArticles]).filter(Boolean)
    : [];

  // Convert markdown to HTML
  const getContentHTML = () => {
    if (!article.content) return '';

    // Check if content is already HTML (from mock data) or markdown (from API)
    if (article.content.includes('<p>') || article.content.includes('<h2>')) {
      return article.content;
    }

    // Parse markdown to HTML
    return marked.parse(article.content) as string;
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
              {article.author?.name || article.author}
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {article.publishedAt ? formatDate(article.publishedAt) : article.date}
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
        <div className="w-full aspect-video max-h-96">
          <img
            src={article.featuredImageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
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
              <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </button>
            </div>
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
