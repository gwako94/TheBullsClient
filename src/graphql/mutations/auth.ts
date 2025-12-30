import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      token
      refreshToken
      user {
        id
        email
        name
        role
        membershipTier
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      refreshToken
      user {
        id
        email
        name
        role
        membershipTier
        avatar
      }
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      token
      refreshToken
      user {
        id
        email
        name
      }
    }
  }
`;

export const GET_ME = gql`
  query GetMe {
    me {
      id
      email
      name
      role
      membershipTier
      avatar
      phone
      nationality
      isActive
      createdAt
    }
  }
`;
