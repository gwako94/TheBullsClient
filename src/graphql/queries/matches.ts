import { gql } from '@apollo/client';

export const GET_UPCOMING_MATCHES = gql`
  query GetUpcomingMatches($limit: Int) {
    upcomingMatches(limit: $limit) {
      id
      homeTeam {
        id
        name
        shortName
        badgeUrl
      }
      awayTeam {
        id
        name
        shortName
        badgeUrl
      }
      venue
      kickoffTime
      competition
      season
      status
    }
  }
`;

export const GET_MATCHES = gql`
  query GetMatches($status: MatchStatus, $limit: Int) {
    matches(status: $status, limit: $limit) {
      id
      homeTeam {
        id
        name
        shortName
        badgeUrl
      }
      awayTeam {
        id
        name
        shortName
        badgeUrl
      }
      venue
      kickoffTime
      competition
      season
      status
      homeScore
      awayScore
    }
  }
`;

export const GET_MATCH = gql`
  query GetMatch($id: ID!) {
    match(id: $id) {
      id
      homeTeam {
        id
        name
        shortName
        badgeUrl
      }
      awayTeam {
        id
        name
        shortName
        badgeUrl
      }
      venue
      kickoffTime
      competition
      season
      status
      homeScore
      awayScore
      matchReport
      createdAt
    }
  }
`;
