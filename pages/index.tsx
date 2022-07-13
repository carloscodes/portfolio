import Header from '../components/global/Header'
import Navbar from '../components/global/Navbar'
import Hero from '../components/home/Hero'
import Footer from '../components/global/Footer'
import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
          <Hero />
        </motion.div>
      </Container>
      <Footer />
    </>
  )
}
