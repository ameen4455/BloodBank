import React, { useState } from 'react';
import './Home.scss';
import BloodGroup from './BloodGroup/BloodGroup';
import Thaluk from './Thaluk/Thaluk';
import District from './District/District';
import BloodList from './BloodList/BloodList';
import { Container, Tabs, Tab, Button, Row, Col } from 'react-bootstrap';
import TopStyle from '../../assets/topstyle.png';

const Home = () => {
  const [key, setKey] = useState('1');
  const [backDis, setBackDis] = useState(true);
  const [district, setDistrict] = useState();
  const [thaluk, setThaluk] = useState();

  const nextVal = () => {
    let val = parseInt(key) + 1;
    setBackDis(false);
    setKey(val);
  };

  const prevVal = () => {
    let val = parseInt(key) - 1;
    setKey(val);
    if (val === 1) setBackDis(false);
  };
  return (
    <>
      <img src={TopStyle} className="topStyle" alt="" />
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
        >
          <Tab eventKey="1" title="Blood">
            <BloodGroup
              next={() => nextVal()}
            />
          </Tab>
          <Tab eventKey="2" title="District">
            <District
              next={() => nextVal()}
            />
          </Tab>
          <Tab eventKey="3" title="Taluk">
            <Thaluk
              next={() => nextVal()}
            />
          </Tab>
          <Tab eventKey="4" title="College">
            <BloodList thaluk={thaluk} />
          </Tab>
        </Tabs>
        <Row>
          <Col
            xs={{ offset: 9, span: 3 }}
            md={{ offset: 11, span: 1 }}
            className="nextBut"
          >
            <Button
              variant="outline-primary"
              onClick={e => prevVal()}
              disabled={backDis}
            >
              prev
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home