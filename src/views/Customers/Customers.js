import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  Button
} from "reactstrap";
import CustomerForm from "./CustomerForm";

function CustomerListItem(props) {
  const { customer, onEdit } = props;
  return (
    <tr>
      <td>{customer.name}</td>
      <td>{customer.phone}</td>
      <td>{customer.email}</td>
      <td>{customer.address}</td>
      <td>
        <Button
          size="sm"
          color="primary"
          title="Edit Customer Details"
          onClick={() => onEdit(customer.id)}
        >
          <i className="fa fa-edit" />
        </Button>{" "}
        <Button size="sm" color="danger" title="Delete Customer">
          <i className="fa fa-trash" />
        </Button>
      </td>
    </tr>
  );
}

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomerId: null
    };
    this.handleEditCustomer = this.handleEditCustomer.bind(this);
  }

  handleEditCustomer(id) {
    this.setState({
      selectedCustomerId: id
    });
  }
  render() {
    const { customers } = this.props;
    const { selectedCustomerId } = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-users" />
                Customers
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map(customer => (
                      <CustomerListItem
                        customer={customer}
                        key={customer.id}
                        onEdit={this.handleEditCustomer}
                      />
                    ))}
                  </tbody>
                </Table>
                <CustomerForm isOpen={selectedCustomerId ? true : false} />
                <Pagination>
                  <PaginationItem disabled>
                    <PaginationLink previous tag="button">
                      Prev
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink tag="button">4</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next tag="button">
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Customers;
