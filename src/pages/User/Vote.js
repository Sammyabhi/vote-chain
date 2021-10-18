import React, { Component } from 'react';
import './Vote.css';
import img1 from '../../assets/arvindkejriwal.jpg';
import img2 from '../../assets/mamata.jpg';
import img3 from '../../assets/narendra modi.jpg';
import img4 from '../../assets/rahulgandhi.jpg';
import img5 from '../../assets/nota.jpg';
import img6 from '../../assets/Uddhav.jpg';
/*import Img from '..';*/


/*import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';

class Vote extends Component {
  render() {
    return (
     <div>
      <Container>
       <Row>
       <Col md={3}>
        
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
       </Col>
       </Row>
     </Container>
     <Container>
       <Row>
       <Col md={3}>
        
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
       </Col>
       </Row>
     </Container>
     <Container>
       <Row>
       <Col md={3}>
        
        <Card>
          <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      
       </Col>
       </Row>
     </Container>
     </div>
     
     
    );
  };
};*/

/*import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';*/
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle, Button,Row,Col, Container}
 from 'reactstrap';

class Vote extends Component {
  render() {
    return (
      <>
      <body className='vote-body'>
      <div className='row1'>
        <div classname='col1-1'>
        <Card>
              <CardImg top width="50%" src={img1} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Arvind Kejriwal</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Aam Aadmi Party</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <span>  {' '} </span>
        <div className='col1-2'>
        <Card>
        <CardImg top width="50%" src={img2} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Mamta Banerjee</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">All India Trinamool Congress</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <span> </span>
        <div className='col1-3'>
        <Card>
        <CardImg top width="50%" src={img3} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Narendra Modi</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Bharatiya Janata Party</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
      </div> 
    
      <div className='row2'>
        <div className='col2-1'>
        <Card>
        <CardImg top width="50%" src={img4} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Rahul Gandhi </CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Indian National Congress</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <span> </span>
        <div className='col2-2'>
        <Card>
        <CardImg top width="50%" src={img6} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">Uddhav Thackeray</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">Shiv Sena</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <div className='col2-3'>
        <Card>
        <CardImg top width="50%" src={img5} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h4">NOTA</CardTitle>
                <CardSubtitle tag="h5" className="mb-2 text-muted">NOTA</CardSubtitle>
                <CardText>"All of us may have been created equal. But we'll never actually be equal until we all vote. So don't wait."</CardText>
                <Button>Vote</Button>
              </CardBody>
            </Card>
        </div>
        <span> </span>
        
      </div>
      </body>
      </>
      

    );
  };
};




export default Vote;