import { Container } from "@chakra-ui/react";
import Footer from "../global/Footer";
import Navbar from "../global/Navbar";

export default function Post() {
    return (
        <>
            <Navbar />
            <Container>
                <div>
                    Post Component
                </div>
            </Container>
            <Footer />
        </>
    );
}