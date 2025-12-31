export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://isiolocityfc.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Isiolo City Football Club",
    "alternateName": "The Bulls",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Official website of Isiolo City Football Club - The Bulls. A Kenyan football club committed to excellence on and off the field.",
    "sport": "Football",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Isiolo",
      "addressRegion": "Eastern",
      "addressCountry": "KE"
    },
    "sameAs": [
      "https://twitter.com/isiolocityfc",
      "https://facebook.com/isiolocityfc",
      "https://instagram.com/isiolocityfc"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@isiolocityfc.com"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Isiolo City FC",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/news?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
