import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts($category: ProductCategory, $featured: Boolean, $limit: Int) {
    products(category: $category, featured: $featured, limit: $limit) {
      id
      name
      slug
      description
      price
      comparePrice
      category
      stock
      sku
      featured
      isActive
      sizes
      colors
      imageUrls
      createdAt
    }
  }
`;

export const GET_PRODUCT = gql`
  query GetProduct($slug: String!) {
    product(slug: $slug) {
      id
      name
      slug
      description
      price
      comparePrice
      category
      stock
      sku
      featured
      isActive
      sizes
      colors
      imageUrls
      createdAt
    }
  }
`;
