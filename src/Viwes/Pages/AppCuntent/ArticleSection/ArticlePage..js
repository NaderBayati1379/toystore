import {Col, Container, Row} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import {ArticleData} from "../../../Components/ArticleComponent_swiper/ArticleData";
import ArticleComponent from "../../../Components/ArticleComponent_swiper/ArticleComponent";
import './Article__sass/__article.scss';
import {Navigation} from "swiper";

const ArticlePage=()=>{
    return(
        <section className="sec articleSection">
            <Container>
                <Row>
                    <Col lg="6">
                        <Swiper className=" swiperArticle articleSection__swiper"
                                spaceBetween={10}
                                slidesPerView={1}
                                autoplay={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                loop={true}

                                breakpoints={{
                                    375:{
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },

                                }}
                        >
                            {
                                ArticleData.map(item=>
                                    <SwiperSlide>
                                        <ArticleComponent item={item} key={item.id}/>

                                    </SwiperSlide>
                                )
                            }
                        </Swiper>

                    </Col>
                    <Col lg="6">
                        <div className="articleSection__Text">
                            <h1><i className="text-danger">Selected</i> Articles</h1>

                            <span>
                            Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod
                            tinidunt ut laoreet aliquam erat volutpat
                        </span>
                            <div  className="articleSection__chevron">
                                <button className="btn btn-info text-white  articleSection__chevron-btnRight fa fa-chevron-right" ></button>
                                <button className="btn btn-danger articleSection__chevron-btnLeft fa fa-chevron-left" ></button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export  default  ArticlePage;