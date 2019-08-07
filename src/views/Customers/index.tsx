import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Customers from "./Customers";

const GET_CUSTOMERS = gql`
  {
    customers {
      id:_id
      name
      phone
      email
      address
    }
  }
`;

export default () => (
  <Query query={GET_CUSTOMERS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return <Customers customers={data.customers}/>;
    }}
  </Query>
);
