import React, { useEffect, useState } from 'react';
import "./BloodGroup.scss"
import Heart from '../../../assets/heartBeat.svg'
import axios from "axios";
import {Col,Row,Button} from 'react-bootstrap';
import { useAuth } from '../../../context/auth';

const BloodGroup = (props) => {

  const value = useAuth();
  const [Data,setData] = useState([]);

  useEffect(() =>{
    axios.get(value.domain+"/blood-groups/")
      .then(res => setData(res.data))
  },[]);

  function handleChange(e){
    props.next();
    value.setGroup(e)
  }

  return(

    <>
      {Data.length?
      <>
        <Row>
          <Col
            className={"d-md-none"}>
            <h5 className={"mt-4"}>Choose Blood Group</h5>
          </Col>
          <Col className={"d-none d-md-block"}>
            <h2 className={"mt-4"}>Choose Blood Group</h2>
          </Col>
        </Row>
      <Row>
        { Data.map( x =>  {
          return(
        <Col xs={{ span:6 }} md={{ span:3 }}  className="center ">
          <Button variant="outline-danger" value={x.id} onClick={() => handleChange(x.id)} className="bloodOption" size="lg">{x.group}</Button>
        </Col>
          )
          }
          )
        }
      </Row>
        </>
        :
        <div className={
          "heartLoader"
        }>
          <img src={Heart} alt=""/>
        </div>
      }

    </>
  )
};

export default BloodGroup