import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import About from "../../components/about";
import Header from "../../components/global/Header";

export default function AboutPage() {
    return (
        <>
            <Header />
            <Navbar />
                <About />
            <Footer />
        </>
    );
}