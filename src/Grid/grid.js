
//    background-color: #1890ff;

import React from 'react'
// eslint-disable-next-line
import {Col,Row} from 'antd'   
import './grid.css'


class GridDemo extends React.Component{

    render(){
        return (
            <div className="gutter-example">
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
              </Col>
              <Col className="gutter-row" span={6}>
                <div className="gutter-box">col-6</div>
              </Col>
            </Row>

            <br />
            <br />
            <Row>
      <Col span={8}>col-8</Col>
      <Col span={8} offset={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6} offset={6}>col-6 col-offset-6</Col>
      <Col span={6} offset={6}>col-6 col-offset-6</Col>
    </Row>
    <Row>
      <Col span={12} offset={6}>col-12 col-offset-6</Col>
    </Row>

    <br />
    <Row>
      <Col span={18} push={2}>col-18 col-push-6</Col>
      <Col span={6} pull={18}>col-6 col-pull-18</Col>
    </Row>
          </div>
        )
    }

}

export default GridDemo