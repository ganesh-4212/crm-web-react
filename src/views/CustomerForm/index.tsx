import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import CustomerForm from "./CustomerForm";
import { useQuery } from "@apollo/react-hooks";
import {
  useCreateCustomerMutation,
  useGetCustomerByIdQuery,
  GetCustomerByIdQueryResult,
  GetCustomerByIdQuery,
  Customer
} from "../../generated/graphql";

const CREATE_CUSTOMER = gql`
  mutation createCustomer($customer: CustomerInput!) {
    createCustomer(customer: $customer) {
      id
      name
      phone
      email
      address
    }
  }
`;

const GET_CUSTOMER = gql`
  query getCustomerById($id: String!) {
    customer(customerId: $id) {
      id
      name
      phone
      email
      address
    }
  }
`;
const AddOrUpdateCustomer = ({
  customer,
  isOpen,
  isEdit,
  onCancel
}: {
  customer?: Customer;
  isOpen: boolean;
  isEdit: boolean;
  onCancel: any;
}) => {
  const [createCustomer, { error, loading }] = useCreateCustomerMutation();
  return (
    <CustomerForm
      customer={customer}
      isOpen={isOpen}
      isEdit={isEdit}
      onSaveCustomer={createCustomer}
      onCancel={onCancel}
      loading={loading}
      error={error}
    />
  );
};
const UpdateCutsomer = ({
  onCancel,
  isOpen,
  customerId
}: {
  onCancel: any;
  isOpen: boolean;
  customerId: string;
}) => {
  const { loading, error, data } = useGetCustomerByIdQuery({
    variables: { id: customerId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const customer =
    data && data.customer ? (data.customer as Customer) : undefined;
  return (
    <AddOrUpdateCustomer
      customer={customer}
      isEdit={true}
      isOpen={isOpen}
      onCancel={onCancel}
    />
  );
};

export default ({
  onCancel,
  isOpen,
  customerId
}: {
  onCancel: any;
  isOpen: boolean;
  customerId?: string;
}) => {
  if (customerId) {
    return (
      <UpdateCutsomer
        customerId={customerId}
        isOpen={isOpen}
        onCancel={onCancel}
      />
    );
  }
  return (
    <AddOrUpdateCustomer isEdit={false} isOpen={isOpen} onCancel={onCancel} />
  );
};
