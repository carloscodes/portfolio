import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";
import About from "../../components/about";
import Header from "../../components/global/Header";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <>
            <Header />
            <Navbar />
                <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
                    <About />
                </motion.div>
            <Footer />
        </>
    );
}