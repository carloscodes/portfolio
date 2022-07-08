import Header from '../components/global/Header'
import Navbar from '../components/global/Navbar'
import Hero from '../components/home/Hero'
import Footer from '../components/global/Footer'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </>
  )
}
