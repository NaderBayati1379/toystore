import './Layout__sass/__layout.scss';
import HeaderPage from '../Pages/AppHeader/HeaderPage';
import ContentPage from '../Pages/AppCuntent/ContentPage';
import FooterPage from "../Pages/AppFooter/FooterPage";


const Layout = () => {
    return (
        
        <>
        <HeaderPage/>
        <ContentPage/>
        <FooterPage/>
        </>
    )
}
export default Layout;