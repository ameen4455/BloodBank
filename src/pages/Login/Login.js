import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import {Row,Col,Container,Button,Form} from 'react-bootstrap';
import "./Login.scss"
import {Link} from 'react-router-dom';
import TopStyle from '../../assets/topstyle.png';
import Logo from "../../assets/nssLogo.png"
import BloodPic from "../../assets/bloodBank.png"

const Login = (props) => {
  let history = useHistory();
  return<>
    <div>
      <img src={TopStyle} className="topStyle" alt=""/>
    </div>
    <Container>
      <div >
        <img className={"bloodPic d-none d-md-none d-lg-block "} src={BloodPic} alt=""/>
      </div>
    </Container>
    <Container>
      <Col lg={{ span: 7, offset: 5 }}>
        <Row>
          <Col>
            <img src={Logo} className={"logLogo"} alt=""/>
          </Col>
        </Row>
        <Row>
          <Col className={"d-flex justify-content-center"}>
            <h3>NSS Blood Bank</h3>
          </Col>
        </Row>
        <Row>
          <Col className={"d-flex justify-content-center mt-3"}>
            <Button variant={"danger"} size={"lg"} onClick={() => history.push("/doner") }>Find Doner</Button>
          </Col>
        </Row>
        <Row>
          <Col className={"d-flex justify-content-center mt-5"}>
            <h4>Volunteer Login</h4>
          </Col>
        </Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <div className={" d-flex justify-content-center "}>
              <Button variant="outline-danger" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Col>
    </Container>
  </>



};

export default Login