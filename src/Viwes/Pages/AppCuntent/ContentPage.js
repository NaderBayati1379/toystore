import  './__content.scss';
import AgeCategoryPage from "./AgeCategorySection/AgeCategoryPage";
import UniquePage from "./UniqueSection/UniquePage";
import OfferPage from "./OfferSection/OfferPage";
import SupportPage from "./SupportSection/SupportPage";
import ProductPage from "./ProductSection/ProductPage";
import ArticlePage from "./ArticleSection/ArticlePage.";
import SubPage from "./SubscribeSection/SubPage";


const ContentPage = () => {
    return (
            <>
                <AgeCategoryPage/>
                <UniquePage/>
                <OfferPage/>
                <SupportPage/>
                <ProductPage/>
                <ArticlePage/>
                <SubPage/>
            </>
    );
};
export default ContentPage;