import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  Button,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type PropType = {
  name: string;
};
export default function Customer(props: PropType) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <Card>
            <CardHeader>
              <i className="fa fa-users" />
              Customer Details
              <div className="float-right">
                <Button outline color="primary" title="Save">
                  Save
                </Button>{" "}
                <Button outline color="danger" title="Cancel">
                  Cancel
                </Button>{" "}
              </div>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col></Col>
                  <Col>
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
                  </Col>
                  <Col>
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
                  </Col>
                </Row>

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
                    onChange={date => setDateOfBirth(date as Date)}
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
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
