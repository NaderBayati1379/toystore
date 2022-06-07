import {Col, Container, Row} from "react-bootstrap";
import CardData from "../../../Components/AgeComponent_Card/CardData";
import CardComponent from "../../../Components/AgeComponent_Card/CardComponent";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import {Navigation} from "swiper";


const AgeCategoryPage=()=>{
    return(
        <>
            <section className=" ageCategorySection">
                <Container>
                    <Row className="ageCategory">
                        <Swiper modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={4}
                            navigation={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                375:{
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                500:{
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                922:{
                                    slidesPerView: 5,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                        >
                        {
                            CardData.map(item=>
                                <Col ><SwiperSlide >  <CardComponent item={item} key={item.id}  /></SwiperSlide></Col>
                            )
                        }

                        </Swiper>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export  default  AgeCategoryPage;