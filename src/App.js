import React, { Component } from 'react';
import Loading from 'react-loading-components'
import { PageHeader, Grid, Row, Col, Label } from 'react-bootstrap';

import './App.css';

const Wrapper = ({ children }) => (
  <div className='Item'>
    { children }
  </div>
)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PageHeader> react-loading-components </PageHeader>
        <Grid>
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='audio' width={72} height={72} fill='#2196F3' />
                <br />
                <br />
                <Label bsStyle="default">type: audio</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='ball_triangle' width={72} height={72} fill='#E91E63' />
                <br />
                <br />
                <Label bsStyle="default">type: ball_triangle</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='bars' width={72} height={72} fill='#9C27B0' />
                <br />
                <br />
                <Label bsStyle="default">type: bars</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='circles' width={72} height={72} fill='#673AB7' />
                <br />
                <br />
                <Label bsStyle="default">type: circles</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='grid' width={72} height={72} fill='#3F51B5' />
                <br />
                <br />
                <Label bsStyle="default">type: grid</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='hearts' width={72} height={72} fill='#F44336' />
                <br />
                <br />
                <Label bsStyle="default">type: hearts</Label>
              </Wrapper>
            </Col>

            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='oval' width={72} height={72} fill='#009688' />
                <br />
                <br />
                <Label bsStyle="default">type: hearts</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='puff' width={72} height={72} fill='#CDDC39' />
                <br />
                <br />
                <Label bsStyle="default">type: hearts</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='rings' width={72} height={72} fill='#FFEB3B' />
                <br />
                <br />
                <Label bsStyle="default">type: hearts</Label>
              </Wrapper>
            </Col>
            
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='spinning_circles' width={72} height={72} fill='#FF9800' />
                <br />
                <br />
                <Label bsStyle="default">type: hearts</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='tail_spin' width={72} height={72} fill='#FF5722' />
                <br />
                <br />
                <Label bsStyle="default">type: tail_spin</Label>
              </Wrapper>
            </Col>
            <Col xs={4} md={4}>
              <Wrapper>
                <Loading type='three_dots' width={72} height={72} fill='#795548' />
                <br />
                <br />
                <Label bsStyle="default">type: three_dots</Label>
              </Wrapper>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
