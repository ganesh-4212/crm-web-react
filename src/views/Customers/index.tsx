import React from "react";
import gql from "graphql-tag";
import Customers from "./Customers";
import { useGetCustomersQuery } from "../../generated/graphql";

const GET_CUSTOMERS = gql`
  query getCustomers{
    customers {
      id
      name
      phone
      email
      address
    }
  }
`;

export default () => {
  const {loading, error, data }  = useGetCustomersQuery()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    const customers = (data && data.customers)?data.customers:[]
  return <Customers customers={customers}/>;
}

