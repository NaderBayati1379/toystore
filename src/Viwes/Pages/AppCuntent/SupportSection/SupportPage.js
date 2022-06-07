        import { Container, Row,Col} from "react-bootstrap";
import  './supportSection__sasa/__support.scss';
import  WomenImg from '../../../Images/Group 10.png';
const SupportPage=()=>{
    return(
        <section className=" supportSection mt-lg-5">
            <Container className='containerStyle'>
                <Row>
                    <Col  md='6'>
                        <div className="supportSection__img ">
                            <img src={WomenImg}/>
                        </div>
                    </Col>
                    <Col md='6'>
                        <div className="supportSection__callToAction mt-lg-5">
                            <h1 className="mb-lg-5">Do <i className="text-danger fw-bold">you</i> need<br/>
                                ?consultation </h1>
                            <span>
                            Lorem ipsum dolor sitie , consectetuer elit, nonummy aliquam erate volutpat
                            contetuer
                            elit, diam aliquam erate erate volutpat
                            Get a free consultation. Just leave the request below</span>
                            <div className="supportSection__callToAction-btnsearch">
                                <button type="button"
                                        className="btn btn-danger supportSection__callToAction-callback">callback
                                </button>
                                <input type="search" placeholder="Youer Phon Number"/>

                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export  default  SupportPage;