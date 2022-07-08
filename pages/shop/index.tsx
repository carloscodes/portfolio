import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'
import Shop from '../../components/shop';
import Header from '../../components/global/Header';

export default function ShopPage() {
    return (
        <>
        <Header />
        <Navbar />
            <Shop />
        <Footer />
        </>
    );
}