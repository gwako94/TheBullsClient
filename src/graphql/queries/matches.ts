import { gql } from '@apollo/client';

export const GET_UPCOMING_MATCHES = gql`
  query GetUpcomingMatches($limit: Int) {
    upcomingMatches(limit: $limit) {
      id
      homeTeam {
        id
        name
        shortName
        logo
      }
      awayTeam {
        id
        name
        shortName
        logo
      }
      venue {
        id
        name
        city
        country
        capacity
      }
      kickoffTime
      competition
      season
      status
      homeScore
      awayScore
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
        logo
      }
      awayTeam {
        id
        name
        shortName
        logo
      }
      venue {
        id
        name
        city
      }
      kickoffTime
      competition
      season
      status
      homeScore
      awayScore
      attendance
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
        logo
        stadium
      }
      awayTeam {
        id
        name
        shortName
        logo
        stadium
      }
      venue {
        id
        name
        city
        country
        capacity
        address
      }
      kickoffTime
      competition
      season
      status
      homeScore
      awayScore
      attendance
      matchReport
      highlightUrls
      createdAt
    }
  }
`;
