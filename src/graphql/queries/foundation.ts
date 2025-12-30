import { gql } from '@apollo/client';

export const GET_FOUNDATION_PROGRAMS = gql`
  query GetFoundationPrograms($type: ProgramType, $isActive: Boolean) {
    foundationPrograms(type: $type, isActive: $isActive) {
      id
      name
      description
      type
      startDate
      endDate
      location
      capacity
      ageGroup
      price
      isActive
      createdAt
    }
  }
`;

export const GET_FOUNDATION_PROGRAM = gql`
  query GetFoundationProgram($id: ID!) {
    foundationProgram(id: $id) {
      id
      name
      description
      type
      startDate
      endDate
      location
      capacity
      ageGroup
      price
      isActive
      enrollments {
        id
        studentName
        studentAge
        guardianName
        enrolledAt
      }
      createdAt
    }
  }
`;
