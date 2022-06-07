import {Col} from "react-bootstrap";
import  '../../Pages/AppCuntent/UniqueSection/unique__sass/__unique.scss'

const  TextComponent=({item})=>{
return(
  <>
      <Col lg="10" md="10" sm="10" xs='9' className="pt-lg-5 pt-md-4 ">
          <h3>
              {item.title}
          </h3>

          <span className="text-secondary">{item.text}</span>
      </Col>
      <Col lg="2" md="2" sm="2" xs="3" className="pt-lg-5 pt-md-4">
          <div className="imgicon">
              <img src={item.image}/>
          </div>
      </Col>
  </>

)
}
export default  TextComponent;