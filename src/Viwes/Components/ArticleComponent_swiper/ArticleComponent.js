import '../../Pages/AppCuntent/ArticleSection/Article__sass/__article.scss';


const SwiperComponent=({item})=>{
    return(
        <div className="articleSection">
            <div className="card articleSection__img">
                <img src={item.image}/>
                <div className=" articleSection__imgoverly">
                    <img src={item.pic}/>
                </div>
            </div>

        </div>
    )
}
export  default  SwiperComponent;