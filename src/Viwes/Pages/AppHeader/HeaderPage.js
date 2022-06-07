import nader from '../../Images/image.png';
import {Col, Container, Nav, Navbar, Row} from 'react-bootstrap';
import  './Header__sass/__header.scss';

const HeaderPage = () => {
    return (
        <div className="header">
            <Container>
                <Row>

                    <Navbar  expand="lg" >
                        <Container className="header__container">
                            <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
                            <Navbar.Brand href="#home" className="text-white header__logo">Lorem Toy</Navbar.Brand>


                            <Navbar.Collapse id="basic-navbar-nav " className="ltr">
                                <Nav className="gap-lg-5 ">
                                    <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                                    <Nav.Link href="#link" className="text-white">About Us</Nav.Link>
                                    <Nav.Link href="#home" className="text-white">Content</Nav.Link>
                                    <Nav.Link href="#link" className="text-white">Category</Nav.Link>
                                    <Nav.Link href="#home" className="text-white">Whith me</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                            <Navbar.Collapse className="header__icon">
                                <Nav className="gap-lg-3 text-white">
                                    <Nav.Item ><i className="fa fa-home"></i></Nav.Item>
                                    <Nav.Item ><i className="fa fa-user"></i></Nav.Item>
                                    <Nav.Item ><i className="fa fa-search"></i></Nav.Item>
                                </Nav>
                            </Navbar.Collapse>

                        </Container>
                    </Navbar>
                </Row>
                <Row className='pt-5'>
                    <Col lg='6' md='6' sm='12'>
                        <div className="header__image">
                            <img src={nader} alt="img" />
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <div className=" header__description">

                            <div className="header__description-title">
                                <span>Good Toys For <br />Good Children</span>
                            </div>
                            <div className="header__description-content">
                                <span>
                                    Lorem ipsum dolor sit , consectetuer adipiscing
                                    elit, sed diam nonummy nibh euismod
                                    tinidunt ut laoreet aliquam erat volutpat
                                </span>
                            </div>
                            <div className="header__description-btn">
                                <button className="btn btn-light">Shop Now</button>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default HeaderPage;