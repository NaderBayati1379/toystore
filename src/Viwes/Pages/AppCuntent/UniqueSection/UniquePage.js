import {Col, Container, Row} from "react-bootstrap";
import "./unique__sass/__unique.scss";
import shapes from '../../../Images/shapes.png';
import TextComponent from "../../../Components/UniqueComponent/TextComponent";
import TextData from "../../../Components/UniqueComponent/TextData";

const UniquePage = () => {
    return (
        <section className=" sec  uniqueSection">
            <Container>
                <Row>
                    <Col lg="6" md="12" sm="12">
                        <div className="uniqueSection__Text">
                            <Row>
                                <Col lg="12" md="12" sm="12" xs='12' className="text-md-start text-sm-start">
                                    <h1>A <span
                                        className="text-danger">unique</span> shopping
                                        experience</h1>

                                </Col>
                            </Row>
                            <Row className="uniqueSection__Text-content">
                                <Col lg="12" className="text-md-start text-sm-start ">
                                    <Row className="pb-sm-4">
                                        {
                                            TextData.map(item => <TextComponent item={item} key={item.id} />)
                                        }
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg="6" md="12" sm="12" xs='12'>
                        <Row>
                            <Col lg="12">
                                <div className="uniqueSection__image  align-content-md-between">
                                    <img src={shapes} alt="picture"/>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default UniquePage;