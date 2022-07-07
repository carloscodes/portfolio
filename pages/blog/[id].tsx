import { Container, Heading, Text  } from "@chakra-ui/react";
import Footer from "../../components/global/Footer";
import Navbar from "../../components/global/Navbar";
import supabase from "../../utils/supabase";

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
            <Navbar />
                <Container>
                    <div className="text-center pb-16">
                        <Text className="pb-4" fontSize="xs">{post.date}</Text>
                        <Heading className="pb-12">{post.title}</Heading>
                        <Text>{post.content} </Text>
                    </div>
                </Container>
            <Footer />
        </>
    );
}