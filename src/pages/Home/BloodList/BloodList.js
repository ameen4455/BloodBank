import React, { useEffect, useState } from 'react';
import "./BLoodList.scss"
import {Col,Row} from 'react-bootstrap';

const BloodList = () => {

  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch("http://demo2916921.mockable.io/college-list")
      .then(res => res.json())
      .then(res => setData(res.colleges))
  });

  return(
    <>{
      data.map(data => {
        return(
          <Row>
            <Col lg={{ span:4 , offset:4}}>
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
                  <div className ="cardDoner">
                    Doners of <span style={{fontWeight:500}}>{data.requested_blood_group}</span> available
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        )
        }
      )
    }
    </>
  )
};
export default BloodList;