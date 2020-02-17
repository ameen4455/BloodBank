import React, {useState} from "react";
import {Row,Container,Col} from 'react-bootstrap';
import "./CollegeList.scss"

const CollegeList = () => {

    const[Data,setData] = useState();

    return<>
      <div className="container-fluid listTitle">
        <Container>
          <h2>Students List</h2>
          <h4>College Name</h4>
        </Container>
      </div>
      <Container>
        <Row className="listTableHead">
          <Col xs={{ span: 4 }}>
            Name
          </Col>
          <Col xs={{ span: 2 }}>
            Blood Group
          </Col>
          <Col xs={{ span: 4 }}>
            Phone Number
          </Col>
          <Col xs={{ span: 2 }}>
            Last Donated
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="listTable">
          <Col xs={{ span: 4 }}>
            Name
          </Col>
          <Col xs={{ span: 2 }}>
            Blood Group
          </Col>
          <Col xs={{ span: 4 }}>
            Phone Number
          </Col>
          <Col xs={{ span: 2 }}>
            <input type="date"/>
          </Col>
        </Row>
      </Container>


    </>
};

export default CollegeList;