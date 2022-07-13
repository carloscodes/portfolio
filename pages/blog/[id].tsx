import { Container, Heading, Text  } from "@chakra-ui/react";
import Footer from "../../components/global/Footer";
import Header from "../../components/global/Header";
import Navbar from "../../components/global/Navbar";
import supabase from "../../utils/supabase";
import { motion } from 'framer-motion';

export async function getServerSideProps({ params }: any){
    const { data: post, error } = await supabase.from('posts').select('*').eq('id', params.id).single();

    return {
        props: {
            post
        }
    }
}

export default function Post({ post }: any) {
    return (
        <>
            <Header />
            <Navbar />
                <Container>
                    <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
                        <div className="text-center pb-16">
                            <Text className="pb-4" fontSize="xs">{post.date}</Text>
                            <Heading className="pb-12">{post.title}</Heading>
                            <pre>{post.content} </pre>
                        </div>
                    </motion.div>
                </Container>
            <Footer />
        </>
    );
}