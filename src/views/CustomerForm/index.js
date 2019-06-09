import React, { Component } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import CustomerForm from "./CustomerForm";

const CREATE_CUSTOMER = gql`
  mutation createCustomer($customer: CustomerInput!) {
    customer(customer: $customer) {
      id: _id
      name
      phone
      email
      address
    }
  }
`;

const GET_CUSTOMER = gql`
  query getCustomerById($id: ID!) {
    customer(id: $id) {
      id: _id
      name
      phone
      email
      address
    }
  }
`;

class CustomerFormGraph extends Component {
  constructor(props) {
    super(props);
    this.renderMutationCustomForm = this.renderMutationCustomForm.bind(this);
  }
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
  };

  static defaultProps = {};

  renderMutationCustomForm(customer, isEdit) {
    const { onCancel, isOpen } = this.props;
    return (
      <Mutation mutation={CREATE_CUSTOMER}>
        {(createCustomer, { called, error, loading }) => (
          <CustomerForm
            customer={customer}
            isOpen={isOpen}
            isEdit={isEdit}
            onSaveCustomer={createCustomer}
            onCancel={onCancel}
            loading={loading}
            error={error}
          />
        )}
      </Mutation>
    );
  }
  render() {
    const { customerId } = this.props;
    if (customerId) {
      return (
        <Query query={GET_CUSTOMER} variables={{id:customerId}}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return this.renderMutationCustomForm(data.customer, true);
          }}
        </Query>
      );
    }
    return this.renderMutationCustomForm(null, false);
  }
}

export default CustomerFormGraph;
