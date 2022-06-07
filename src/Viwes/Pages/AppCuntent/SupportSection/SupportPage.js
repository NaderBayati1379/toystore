import {Button, Container, Row} from "react-bootstrap";
import  './supportSection__sasa/__support.scss';

const SupportPage=()=>{
    return(
        <section className="sec supportSection">
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="supportSection__img ">
                            <img src="../img/Group 10.png"/>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="supportSection__callToAction">
                            <h1>Do <i className="text__title--red">you</i> need<br/>
                                ?consultation </h1>
                            <span>
                            Lorem ipsum dolor sitie , consectetuer elit, nonummy aliquam erate volutpat.
                            contetuer
                            elit, diam aliquam erate erate volutpat
                        </span>
                            <span>Get a free consultation. Just leave the request below.</span>
                            <div className="supportSection__callToAction-btnsearch">
                                <Button type="button"
                                        className="btn btn-danger supportSection__callToAction-callback">callback
                                </Button>
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