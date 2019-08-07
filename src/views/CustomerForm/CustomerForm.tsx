import React, { useState } from "react";
import PropTypes from "prop-types";

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

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CustomerForm(props) {
  const { isOpen, customer, onSaveCustomer, onCancel } = props;
  let cPhone = "";
  let cName = "";
  let cEmail = "";
  let cAddress = "";
  let cId = null;

  if (customer) {
    cPhone = customer.phone;
    cName = customer.name;
    cEmail = customer.email;
    cAddress = customer.address;
    cId = customer.id;
  }

  const [phone, setPhone] = useState(cPhone);
  const [name, setName] = useState(cName);
  const [email, setEmail] = useState(cEmail);
  const [address, setAddress] = useState(cAddress);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  return (
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
            <Label for="dob">Date of Birth</Label>
            <DatePicker
              className="form-control"
              name="dob"
              selected={dateOfBirth}
              onChange={date => setDateOfBirth(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
            />
          </FormGroup>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input
              type="textarea"
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
        <Button
          color="primary"
          onClick={() =>
            onSaveCustomer({
              variables: {
                customer: {
                  id: cId,
                  name,
                  email,
                  phone,
                  address,
                  dateOfBirth: dateOfBirth
                }
              }
            })
          }
        >
          Save
        </Button>{" "}
        <Button color="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
CustomerForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  customer: PropTypes.object,
  onSaveCustomer: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object
};

CustomerForm.defaultProps = {
  customer: null,
  isEdit: false,
  loading: false,
  error: null
};
export default CustomerForm;
