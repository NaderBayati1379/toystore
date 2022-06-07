import '../../Pages/AppCuntent/ArticleSection/Article__sass/__article.scss';


const ArticleComponent=({item})=>{
    return(
        <div className="articleSection">
            <div className="card articleSection__img">
                <img src={item.image}/>

            </div>

        </div>
    )
}
export  default  ArticleComponent;