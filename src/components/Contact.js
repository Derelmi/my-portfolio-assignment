import bootstrap from "bootstrap";
import React from "react";
import { Button,Form,Row,Col, } from 'react-bootstrap';

const Contact = () =>{
    return (
      <div className="container container-fluid">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>USERNAME</Form.Label>
              <Form.Control type="username" placeholder="Enter username" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>AGE</Form.Label>
              <Form.Control type="number" placeholder="Enter age" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTelephone">
              <Form.Label>TELEPHONE</Form.Label>
              <Form.Control type="tel" placeholder="Enter telephone(+......)" />
            </Form.Group>
          </Row>

          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                GENDER
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label=" MALE👨"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="FEMALE👩"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="OTHER🛠"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Row className="mb-3">
            <Form.Group as={Col} className="col-md-4" controlId="formGridCity">
              <Form.Label>CITY</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Street, Apartment, Landmark" />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group> */}

            <Form.Group as={Col} className="col-md-4" controlId="formGridState">
              <Form.Label>ID TYPE</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>National ID Card</option>
                <option>Voters ID Card</option>
                <option>National Passport</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} className="col-md-2" controlId="formGridZip">
              <Form.Label>ID NUMBER</Form.Label>
              <Form.Control type="tel" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label=" I agree that information in this form are correct and valid"
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
};
export default Contact;