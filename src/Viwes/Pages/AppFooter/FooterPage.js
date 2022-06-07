import './Footer__sass/__footer.scss';
import {Col, Container, Row} from "react-bootstrap";


const FooterPage = () => {
    return (
        <footer className='footer'>
            <Container className='m-auto footer__main'>
                <Row>
                    <Col lg='4' md='6' sm='8' xs='12' xs="text-start"  className="mb-4 mb-md-0 text-lg-start text-white">
                        <h5 className="text-uppercase">Lorem Toy</h5>
                        <p>
                            Lorem ipsum dolor sit , sed diam nonummy nibh euismod tinidunt  ut laoret erat volutpat Lorem sit , sed nonummy nibh euismod
                        </p>
                    </Col>
                    <Col lg='2' md='6' sm='4' xs='6' className="mb-4 mb-md-0 ">
                        <h5 className=" text-white text-start">Compony</h5>

                        <ul className="list-unstyled text-start mb-0">
                            <li>
                                <a href="#!" className="text-white text-decoration-none">About Us</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white text-decoration-none">Services</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white text-decoration-none">Subscribe</a>
                            </li>

                        </ul>
                    </Col>
                    <Col lg='2' md='6' sm='6' xs='6' className="mb-4 mb-md-0">
                        <h5 className="text-white text-start">Suport</h5>

                        <ul className="list-unstyled text-start mb-0">
                            <li>
                                <a href="#!" className="text-white text-decoration-none">Help Center</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white  text-decoration-none">1234562013+</a>
                            </li>

                        </ul>
                    </Col>
                    <Col lg='2' md='6' sm='6' xs='6' className="mb-4 mb-md-0">
                        <h5 className="text-white text-start">Links</h5>

                        <ul className="list-unstyled text-start mb-0">
                            <li>
                                <a href="#!" className="text-white">Shop by age</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Category</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Product</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Best offer</a>
                            </li>
                        </ul>
                    </Col>


                </Row>
                <hr className="text-white m-2"/>
                <Row>

                    <Col lg='12' className='text-center pb-sm-2'>
                       <div className="footer__">
                           <a
                               className="btn btn-outline-light btn-floating m-1 rounded-circle"
                               href="#!"
                               role="button"
                           ><i className="fa fa-facebook-f"></i
                           ></a>

                           <a
                               className="btn btn-outline-light btn-floating m-1 rounded-circle"
                               href="#!"
                               role="button"
                           ><i className="fa fa-twitter"></i
                           ></a>

                           <a
                               className="btn btn-outline-light btn-floating m-1 rounded-circle"
                               href="#!"
                               role="button"
                           ><i className="fa fa-google"></i
                           ></a>

                           <a
                               className="btn btn-outline-light btn-floating m-1 rounded-circle"
                               href="#!"
                               role="button"
                           ><i className="fa fa-instagram"></i
                           ></a>

                           <a
                               className="btn btn-outline-light btn-floating m-1 rounded-circle"
                               href="#!"
                               role="button"
                           ><i className="fa fa-linkedin"></i
                           ></a>

                           <a
                               className="btn btn-outline-light btn-floating m-1 rounded-circle"
                               href="#!"
                               role="button"
                           ><i className="fa fa-github"></i
                           ></a>
                       </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default FooterPage;