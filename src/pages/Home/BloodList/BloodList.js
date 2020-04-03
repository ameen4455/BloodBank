import React, { useEffect, useState } from 'react';
import './BLoodList.scss';
import { Col, Row, Container, Collapse } from 'react-bootstrap';
import { useAuth } from '../../../context/auth';
import Heart from '../../../assets/heartBeat.svg';
import Charting from '../../../components/chart/Chart';

const BloodList = () => {
  const value = useAuth();

  const phoneCall = n => {
    window.location.href = 'tel:' + n;
  };

  const email = n => {
    window.location.href = 'mailto:' + n;
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    fetch(
      value.domain +
        '/search-availability/?blood_group=' +
        value.group +
        '&taluk=' +
        value.thaluk,
    )
      .then(res => res.json())
      .then(res => setData(res));
  }, [value.thaluk, value.district]);

  return (
    <>
      {data.length ? (
        <Container className="cardContainer">
          {data.map(data => {
            return (
              <Row className={"mt-3"}>
                <Col lg={{ span: 6, offset: 3 }}>
                  <Col className="cardBod pt-2 d-flex flex-column">
                    <Row>
                      <div className="d-flex cardVal">
                        <div className={"align-self-center m-2 ml-3 pt-1"}>{data.blood_group_count}</div>
                      </div>
                      <Col className="cardInfo">
                        <div className="cardCollegeName">{data.name}</div>
                        <div className="cardAddress">{data.location}</div>
                        <div className="cardDoner">
                          Doners of {" "}
                          <span style={{ fontWeight: 500 }}>
                            {data.requested_blood_group}
                          </span>{' '}
                          available
                        </div>
                      </Col>
                    </Row>
                    <Row className={"mt-2 mb-2"}>
                      <Col>
                        <Charting data={{'B+ve':5,'A-ve':6,'A+':1}}/>
                      </Col>
                    </Row>
                    <Row>
                      <Col className={'poc m-2'}>
                        <div className={'poc-head font-weight-medium'}>
                          Point of Contact
                        </div>
                        <div className={'poc-body mt-1 position-relative'}>
                          <div className={'poc-name'}>Abin</div>
                          <div
                            className={'poc-number'}
                            onClick={() => phoneCall('+919633288284')}
                          >
                            +919633288284
                          </div>
                          <div
                            className={'poc-email'}
                            onClick={() => email('ameen4455@gmail.com')}
                          >
                            ameen4455@gmail.com
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Col>
              </Row>
            );
          })}
        </Container>
      ) : (
        <div className={'heartLoader'}>
          <img src={Heart} alt="" />
        </div>
      )}
    </>
  );
};
export default BloodList;