import React from "react";
import "./BloodGroup.scss"
import {Col,Row,Button} from 'react-bootstrap';

const BloodGroup = (props) => {
  const {Data} = props;
  return(
    <>
      <h2>Choose Blood Group</h2>
      <Row>
        { Data.map( group =>  {
          return(
        <Col xs={{ span:6 }} md={{ span:3 }}  className="center ">
          <Button variant="outline-danger" className="bloodOption" size="lg">{group}</Button>
        </Col>
          )
          }
          )
        }
      </Row>

    </>
  )
};

export default BloodGroup