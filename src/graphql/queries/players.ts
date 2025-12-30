import { gql } from '@apollo/client';

export const GET_PLAYERS = gql`
  query GetPlayers($position: Position, $status: PlayerStatus) {
    players(position: $position, status: $status) {
      id
      firstName
      lastName
      displayName
      position
      jerseyNumber
      nationality
      dateOfBirth
      height
      weight
      status
      bio
      joinedDate
      contractEndDate
      photoUrls
    }
  }
`;

export const GET_PLAYER = gql`
  query GetPlayer($id: ID!) {
    player(id: $id) {
      id
      firstName
      lastName
      displayName
      position
      jerseyNumber
      nationality
      dateOfBirth
      height
      weight
      preferredFoot
      status
      bio
      joinedDate
      contractEndDate
      photoUrls
      stats {
        id
        season
        appearances
        goals
        assists
        yellowCards
        redCards
        minutesPlayed
        passAccuracy
        shotsOnTarget
        tackles
        interceptions
        saves
        cleanSheets
      }
      achievements {
        id
        title
        description
        awardedAt
        season
      }
      createdAt
    }
  }
`;

export const GET_PLAYERS_BY_POSITION = gql`
  query GetPlayersByPosition($position: Position!) {
    playersByPosition(position: $position) {
      id
      displayName
      jerseyNumber
      position
      nationality
      photoUrls
    }
  }
`;
