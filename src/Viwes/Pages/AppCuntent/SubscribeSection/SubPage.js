import {Container, Row} from "react-bootstrap";
import  './Subscribe__sass/__subscribe.scss';

const SubPage=()=>{
    return(
        <section className="subscribeSection">
            <Container>
                <Row>
                    <div className=" subscribe">
                        <h1><span className="text-danger">Subscribe </span>to Newsletter </h1>
                        <span>
                        Get informed about new products and discounts
                    </span>
                        <div className="subscribe__search">
                            <button type="button" className="btn btn-danger subscribe__search-btn">Register</button>
                            <input type="search" placeholder="Youer Phon Number"/>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
export  default  SubPage;