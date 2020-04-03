import React, { useEffect, useState } from 'react';
import "./Thaluk.scss"
import {Col,Row,Button} from 'react-bootstrap';
import axios from "axios";
import Heart from '../../../assets/heartBeat.svg';
import { useAuth } from '../../../context/auth';

const Thaluk = (props) => {

  const value = useAuth();

  const[data,setData]=useState([]);

  function handleChange(e){
    props.next();
    value.setThaluk(e)
  }


  useEffect(()=> {
    axios.get(value.domain+/districts/+value.district)
      .then(res => setData(res.data.taluks))
  },[value.district]);

  return(
    <>
      {data.length ?
        <>
          <Row>
            <Col
              className={"d-md-none"}>
              <h5 className={"mt-4"}>Choose Thaluk</h5>
            </Col>
            <Col className={"d-none d-md-block"}>
              <h2 className={"mt-4"}>Choose Thaluk</h2>
            </Col>
          </Row>
          <Row>
            {data.map(x => {
                return (
                  <Col xs={{ span: 6 }} md={{ span: 3 }} className="center ">
                    <Button variant="outline-danger" value={x.id} className="districtOption"
                            onClick={() => handleChange(x.id)} size="sm">{x.name}</Button>
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

export default Thaluk