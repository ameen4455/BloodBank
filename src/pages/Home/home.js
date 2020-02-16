import React,{useState} from "react";
import "./Home.scss"
import BloodGroup from './BloodGroup/BloodGroup';
import District from './District/District';
import BloodList from './BloodList/BloodList';
import {Container,Tabs,Tab,Button,Row,Col} from 'react-bootstrap';
import TopStyle from '../../assets/topstyle.png'

const Home = () => {
  const [key, setKey] = useState('3');
  const nextVal = () => {
    let val = parseInt(key)+1;
    setKey(val);
  };
  const prevVal = () => {
    let val = parseInt(key)-1;
    console.log(val);
    setKey(val);
  };
  return(
    <>
      <img src={TopStyle}  className="topStyle" alt=""/>
      <Container>
        <Tabs id="controlled-tab-example" activeKey={key}  onSelect={k => setKey(k)}>
          <Tab eventKey="1" title="Blood">
            <BloodGroup Data={["A+","A-","B+","B-","AB+","AB-","O+","O-"]}/>
          </Tab>
          <Tab eventKey="2" title="District">
            <District Data={[
              "Alappuzha",
              "Ernakulam",
              "Idukki",
              "Kannur",
              "Kasaragod",
              "Kollam",
              "Kottayam",
              "Kozhikode",
              "Malappuram",
              "Palakkad",
              "Pathanamthitta",
              "Thiruvananthapuram",
              "Thrissur",
              "Wayanad"
            ]}/>
          </Tab>
          <Tab eventKey="3" title="Taluk">
            <BloodList/>
          </Tab>
          <Tab eventKey="4" title="College">
            4
          </Tab>
        </Tabs>
        <Row>
          <Col xs={{offset:6 ,span:3}} md={{offset:10, span:1}}  className="nextBut" >
            <Button variant="outline-primary" onClick={e => prevVal()}>
              prev
            </Button>
          </Col>
          <Col xs={{span:3}} md={{span:1}}className="nextBut">
            <Button onClick={e => nextVal()}>
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
};

export default Home