import React, { useEffect, useState } from 'react';
import "./BLoodList.scss"
import {Col,Row,Container} from 'react-bootstrap';
import { useAuth } from '../../../context/auth';
import Heart from '../../../assets/heartBeat.svg';

const BloodList = () => {
  const value = useAuth();

  const [data,setData] = useState([]);

  useEffect(()=>{
    setData([]);
    fetch(value.domain +"/search-availability/?blood_group="+value.group+"&taluk="+value.thaluk)
      .then(res => res.json())
      .then(res => setData(res))
  },[value.thaluk,value.district]);

  return(
    <>
      {data.length?
        <Container className="cardContainer">
          {
            data.map(data => {
                return (
                  <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                      <div className="cardBod">
                        <div className="cardVal">
                          <p>{data.blood_group_count}</p>
                        </div>
                        <div className="cardInfo">
                          <div className="cardCollegeName">
                            {data.name}
                          </div>
                          <div className="cardAddress">
                            {data.location}
                          </div>
                          <div className="cardDoner">
                            Doners of <span style={{ fontWeight: 500 }}>{data.requested_blood_group}</span> available
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                )
              }
            )
          }
        </Container>
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
export default BloodList;