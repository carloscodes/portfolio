import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'
import Shop from '../../components/shop';
import Header from '../../components/global/Header';
import { motion } from 'framer-motion';

export default function ShopPage() {
    return (
        <>
            <Header />
            <Navbar />
                <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
                    <Shop />
                </motion.div>
            <Footer />
        </>
    );
}