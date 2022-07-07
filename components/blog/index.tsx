import { Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import supabase from '../../utils/supabase';

export async function getStaticProps(){
    const { data: posts, error } = await supabase.from('posts').select('*');

    if(error){
        throw new Error(error.message);
    }

    return {
        props: {
            posts
        }
    };
}

function blur(...classes: String[]) {
    // https://michaeluloth.com/filter-boolean
    return classes.filter(Boolean).join(' ');
}

export default function Blog({ posts }: any) {
    return (
        <>
            <Container>
                <BlogCard posts={posts} />
            </Container>
        </>
    );
}

function BlogCard(posts: any){
    const [isLoading, setLoading ] = useState(true);

    return (
        <Link href="/blogpost">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 group p-4 bg-black hover:cursor-pointer shadow-md border border-slate-900 rounded-lg w-full">
            <div className="md:pr-12 sm:pb-2">
                <Image className={
                            blur("group-hover:opacity-80 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")
                        } height="100%" width="100%" layout="responsive" src={posts.photo || "https://cdnb.artstation.com/p/assets/images/images/001/237/089/large/oskars-dzenis-blessed-by-the-gods-ancient-rome-competition.jpg?1442769533&dl=1"}
                        onLoadingComplete={() => setLoading(false)}
                        />
            </div>
            <div className="grid justify-items-center py-4">
                <Text className="pb-4">
                    {posts.date}
                </Text>
                <Heading>
                        {posts.title}
                </Heading>
                </div>
            </div>
        </Link>
    );
}