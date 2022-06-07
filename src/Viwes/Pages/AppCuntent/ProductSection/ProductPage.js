import {Card, Row} from "react-bootstrap";
import ProductComponent from "../../../Components/ProductComponent_Card/ProductComponent";
import  './Product__sass/__product.scss';
import {ProductData1} from "../../../Components/ProductComponent_Card/ProductData";


const ProductPage=()=>{
    return(
        <section className="sec categorySection">
            <Row>
                <Card className=" categorySection">
                    <h1>Shop by <span>Category</span></h1>
                    <Card.Body className=" m-auto categorySection__body">
                        <Row className=" justify-content-center categorySection__main">
                            <Row>
                                {
                                    ProductData1.map(item=>
                                        <ProductComponent item={item} key={item.id} />
                                    )
                                }
                               <a className="text-danger"> ....Viwe more</a>
                            </Row>

                        </Row>
                    </Card.Body>

                </Card>
            </Row>
        </section>
    )
}
export  default  ProductPage;