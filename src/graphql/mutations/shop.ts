import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      orderNumber
      status
      totalAmount
      shippingAddress
      paymentMethod
      paymentStatus
      items {
        id
        product {
          id
          name
          price
        }
        quantity
        price
        size
        color
      }
      createdAt
    }
  }
`;
