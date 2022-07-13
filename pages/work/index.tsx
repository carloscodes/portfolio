import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'
import Work from '../../components/work';
import Header from '../../components/global/Header';
import { motion } from 'framer-motion';

export default function WorkPage() {
    return (
        <>
            <Header />
            <Navbar />
                <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
                    <Work />
                </motion.div>
            <Footer />
        </>
    );
}