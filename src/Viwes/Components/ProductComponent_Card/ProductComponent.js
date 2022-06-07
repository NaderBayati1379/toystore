import {Card,Col} from "react-bootstrap";
import '../../Pages/AppCuntent/ProductSection/Product__sass/__product.scss';

const ProductComponent=({item})=>{
    return(

            <Col xs="12" sm="6"  md="4" className="p-3">

                <Card className=" categorySection__card mb-4">
                    <img className="card-img-top p-lg-1 pb-2" src={item.image}/>
                    <span className="pb-2">{item.text}</span>
                    <button type="button" className="btn btn-danger mb-2">Show products</button>
                </Card>
            </Col>


    )
}
export  default  ProductComponent;