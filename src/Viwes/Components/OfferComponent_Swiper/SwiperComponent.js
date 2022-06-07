import '../../Pages/AppCuntent/OfferSection/offer__sass/__offer.scss';

import {Card, Col, Row} from "react-bootstrap";

const  SwiperComponent=({item})=>{
    return(


              <Card className="product">
                  <Card.Body className="product__main ">
                      <div className="product__main-image">
                          <img src={item.image} />
                          <span className="product__main-about">{item.text} </span>
                      </div>
                      <Card.Footer className=" product__footer p-0 bg-white">
                          <Row className="product__footer-rowstyle">
                              <Col lg="4" md='6' sm='6' xs='4'>
                                  <div className="product__footer-plusbtn">
                                      <button className="btn btn-outline-dark fa fa-plus"></button>
                                  </div>
                              </Col>
                              <Col lg="4" md='6' sm='6' xs='4'>
                                  <button className="btn btn-danger product__footer-reng">{item.range}</button>
                              </Col>
                              <Col lg="4" md='12' sm='12' xs='4'>
                                  <span className="product__footer-price ">{item.price}</span>
                              </Col>
                          </Row>
                      </Card.Footer>

                  </Card.Body>
              </Card>



    );
}
export  default  SwiperComponent;