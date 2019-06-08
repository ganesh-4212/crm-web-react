import React, { useState } from "react";
import gql from "graphql-tag";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { Query, Mutation } from "react-apollo";

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
function CustomerForm(props) {
  const { isOpen, customerId } = props;
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  return (
    <Mutation
      mutation={CREATE_CUSTOMER}
      variables={{ customer: { name, email, phone, address } }}
    >
      {createCustomer => (
        <Modal isOpen={isOpen}>
          <ModalHeader>Update Customer Details</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="phone">Phone number</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Customer Phone number"
                  value={phone}
                  onChange={event => setPhone(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Customer name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Customer Email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Address</Label>
                <Input
                  type="textArea"
                  name="address"
                  id="address"
                  placeholder="Customer Address"
                  value={address}
                  onChange={event => setAddress(event.target.value)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => createCustomer()}>
              Save
            </Button>{" "}
            <Button color="secondary">Cancel</Button>
          </ModalFooter>
        </Modal>
      )}
    </Mutation>
  );
}

export default CustomerForm;
