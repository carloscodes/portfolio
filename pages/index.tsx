import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Container className='text-center'>
        <h1>Hello world!</h1>
      </Container>
      

      
    </>
  )
}
