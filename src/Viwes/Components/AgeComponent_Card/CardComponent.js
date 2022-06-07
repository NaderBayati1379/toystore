import {Card, CardImg} from "react-bootstrap";
import '../Pages/AppCuntent/AgeCategorySection/cuntent__sass/__cuntent.scss';

const CardComponent = ({item}) => {

    return (

        <Card className="ageCategory__content ">
            <CardImg src={item.image} className="card-img-top  ageCategory__content-roundedimg"></CardImg>

                <span className="ageCategory__content-rang rtl">{item.age}-
                    <span className="ageCategory__content-years">{item.text}</span>
                </span>


        </Card>
    )

}
export default CardComponent;