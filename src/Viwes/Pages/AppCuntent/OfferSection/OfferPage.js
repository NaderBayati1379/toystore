import {Col, Container, Row} from "react-bootstrap";
import SwiperComponent from "../../../Components/OfferComponent_Swiper/SwiperComponent";
import SwiperData from "../../../Components/OfferComponent_Swiper/SwiperData";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import {Navigation} from "swiper";

const OfferPage = () => {
    return (
        <>
            <section className="sec offerSection">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="offerSection__title ">
                                <h1>
                                    <span className="text-danger fw-bold">Best</span> offers for you
                                </h1>
                                <Swiper className="p-3"
                                        modules={[Navigation]}
                                        navigation={true}

                                        spaceBetween={10}
                                        slidesPerView={4}
                                        autoplay={true}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        breakpoints={{
                                            375: {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                            },
                                            640: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            768: {
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                            922: {
                                                slidesPerView: 3,
                                                spaceBetween: 10,
                                            },
                                            1024: {
                                                slidesPerView: 4,
                                                spaceBetween: 50,
                                            },
                                        }}
                                >
                                    {SwiperData.map(item =>

                                        <SwiperSlide> <SwiperComponent item={item} key={item.id}/> </SwiperSlide>
                                    )}  </Swiper>

                            </div>


                        </Col>

                    </Row>
                </Container>

            </section>
        </>
    )
}
export default OfferPage;