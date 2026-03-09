import { gql } from '@apollo/client';

export const GET_LATEST_NEWS = gql`
  query GetLatestNews($limit: Int) {
    latestNews(limit: $limit) {
      id
      title
      slug
      excerpt
      category
      publishedAt
      viewCount
      author {
        id
        name
      }
      featuredImageUrl
      tags
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticle($slug: String!) {
    article(slug: $slug) {
      id
      title
      slug
      excerpt
      content
      category
      status
      publishedAt
      viewCount
      author {
        id
        name
        avatar
      }
      featuredImageUrl
      tags
      createdAt
      updatedAt
    }
  }
`;

export const GET_ARTICLES = gql`
  query GetArticles($category: ContentCategory, $limit: Int, $offset: Int) {
    articles(category: $category, status: PUBLISHED, limit: $limit, offset: $offset) {
      id
      title
      slug
      excerpt
      category
      publishedAt
      viewCount
      author {
        id
        name
      }
      featuredImageUrl
      tags
    }
  }
`;
