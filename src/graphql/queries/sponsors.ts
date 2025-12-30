import { gql } from '@apollo/client';

export const GET_SPONSORS = gql`
  query GetSponsors($tier: SponsorTier, $isActive: Boolean) {
    sponsors(tier: $tier, isActive: $isActive) {
      id
      name
      logo
      website
      tier
      description
      startDate
      endDate
      isActive
      displayOrder
    }
  }
`;

export const GET_SPONSOR = gql`
  query GetSponsor($id: ID!) {
    sponsor(id: $id) {
      id
      name
      logo
      website
      tier
      description
      startDate
      endDate
      isActive
      displayOrder
    }
  }
`;
