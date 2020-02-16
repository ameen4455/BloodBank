import React from "react";
import "./District.scss"
import {Col,Row,Button} from 'react-bootstrap';

const District = (props) => {
  const {Data} = props;
  return(
    <>
      <h2>Choose District</h2>
      <Row>
        { Data.map( group =>  {
            return(
              <Col xs={{ span:6 }} md={{ span:3 }}  className="center ">
                <Button variant="outline-danger" className="districtOption" size="sm">{group}</Button>
              </Col>
            )
          }
        )
        }
      </Row>

    </>
  )
};

export default District