import React, { useEffect, useState } from 'react';
import './District.scss';
import { Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../../../context/auth';
import Heart from '../../../assets/heartBeat.svg'

const District = props => {
  const [data, setData] = useState([]);
  const value = useAuth();

  function handleChange(e) {
    props.next();
    value.setDistrict(e.target.value);
  }

  useEffect(() => {
    axios.get(value.domain + /districts/).then(res => setData(res.data));
  }, []);

  return (
    <>
      {data.length ? (
        <>
          <Row>
            <Col className={'d-md-none'}>
              <h5 className={'mt-4'}>Choose District</h5>
            </Col>
            <Col className={'d-none d-md-block'}>
              <h2 className={'mt-4'}>Choose District</h2>
            </Col>
          </Row>
          <Row>
            {data.map(x => {
              return (
                <Col xs={{ span: 6 }} md={{ span: 3 }} className="center ">
                  <Button
                    variant="outline-danger"
                    value={x.id}
                    className="districtOption"
                    onClick={e => handleChange(e)}
                    size="sm"
                  >
                    {x.name}
                  </Button>
                </Col>
              );
            })}
          </Row>
        </>
      ) : (
        <div className={'heartLoader'}>
          <img src={Heart} alt="" />
        </div>
      )}
    </>
  );
};

export default District