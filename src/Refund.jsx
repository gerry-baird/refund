import React, { Component } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class Refund extends Component {
  state = {
    bookingName: "",
    bookingRef: "",
    email: "",
    date: "",
    origin: "",
    destination: "",
    refundMessage: "",
  };

  onChange = (e) => {
    const widgetName = e.target.name;
    const value = e.target.value;

    // console.log("Widget Name: " + widgetName);
    // console.log("Widget Value: " + value);

    this.setState({
      [widgetName]: value,
    });
  };

  reset = (e) => {
    this.setState({
      bookingName: "",
      bookingRef: "",
      email: "",
      date: "",
      origin: "",
      destination: "",
      refundMessage: "",
    });
  };

  requestRefund = (e) => {
    console.log("Submitting : " + this.state.bookingRef);
    this.setState({
      refundMessage: "Refund #21-345 for £234.56 has been issued.",
    });
  };

  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="formBookingName">
              <Form.Label>Booking Name</Form.Label>
              <Form.Control
                onChange={this.onChange}
                type="text"
                name="bookingName"
                placeholder="Enter booking name"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={this.onChange}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBookingRef">
              <Form.Label>Booking Ref</Form.Label>
              <Form.Control
                onChange={this.onChange}
                name="bookingRef"
                type="text"
                placeholder="ABC-#####"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formDateOfTravel">
              <Form.Label>Date of Travel</Form.Label>
              <Form.Control
                onChange={this.onChange}
                name="date"
                type="date"
                placeholder=""
              />
            </Form.Group>
            <Form.Group controlId="formOrigin">
              <Form.Label>Origin</Form.Label>
              <Form.Control
                onChange={this.onChange}
                name="origin"
                type="text"
                placeholder="Origin Airport"
              />
            </Form.Group>
            <Form.Group controlId="formDestination">
              <Form.Label>Destination</Form.Label>
              <Form.Control
                onChange={this.onChange}
                name="destination"
                type="text"
                placeholder="Destination Airport"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" onClick={this.requestRefund}>
          Submit
        </Button>
        <Button
          className="ml-3"
          variant="warning"
          type="submit"
          onClick={this.reset}
        >
          Clear
        </Button>

        {this.state.refundMessage.length > 0 && (
          <Form.Text className="text-muted mt-3">
            This refund has been processed. {this.state.refundMessage}
          </Form.Text>
        )}
      </Form>
    );
  }
}

export default Refund;
