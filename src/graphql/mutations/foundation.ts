import { gql } from '@apollo/client';

export const ENROLL_IN_PROGRAM = gql`
  mutation EnrollInProgram($input: EnrollProgramInput!) {
    enrollInProgram(input: $input) {
      id
      program {
        id
        name
        type
      }
      studentName
      studentAge
      guardianName
      guardianEmail
      guardianPhone
      status
      enrolledAt
    }
  }
`;

export const SUBSCRIBE_NEWSLETTER = gql`
  mutation SubscribeNewsletter($email: String!) {
    subscribeNewsletter(email: $email)
  }
`;
