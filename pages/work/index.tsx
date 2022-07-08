import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'
import Work from '../../components/work';
import Header from '../../components/global/Header';

export default function WorkPage() {
    return (
        <>
        <Header />
        <Navbar />
            <Work />
        <Footer />
        </>
    );
}