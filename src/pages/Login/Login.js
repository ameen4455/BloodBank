import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import {useAuth} from '../../context/auth';
import axios from 'axios';
import {Row,Col,Container,Button,Form} from 'react-bootstrap';
import "./Login.scss"
import TopStyle from '../../assets/topstyle.png';
import Logo from "../../assets/nssLogo.png"
import BloodPic from "../../assets/bloodBank.png"

const Login = () => {
  const [isError, setIsError] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  let history = useHistory();

  function postLogin() {
    axios.post("http://13.233.96.106/api/token/", {
      username:username,
      password:password
    }).then(result => {
      if (result.status === 200) {
        console.log(result);
        setAuthTokens(result.data.access);
        history.push("/college")
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }



  return<>
    <div>
      <img src={TopStyle} className="topStyle" alt=""/>
    </div>
    <Container >
      <div >
        <img className={"bloodPic d-none d-md-none d-lg-block "} src={BloodPic} alt=""/>
      </div>
    </Container>
    <Container fluid={true}>
      <Col lg={{ span: 4, offset: 7  }}>
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
          { isError &&<div>The username or password provided were incorrect!</div> }

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter email" onChange={e => {            setUserName(e.target.value,console.log(username));
              }}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={e => { setPassword(e.target.value,console.log(password));
              }}/>
            </Form.Group>
            <div className={" d-flex justify-content-center "}>
              <Button variant="outline-danger" onClick={postLogin}>
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