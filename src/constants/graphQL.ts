import gql from "graphql-tag";
export const GET_CUSTOMERS = gql`
  {
    customers {
      id
      breed
    }
  }
`;
