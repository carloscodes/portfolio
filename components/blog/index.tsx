import { Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


function blur(...classes: String[]) {
    // https://michaeluloth.com/filter-boolean
    return classes.filter(Boolean).join(' ');
}

export default function Blog({ post }: any) {
    return (
        <>
            <Container className="mb-6">
                <BlogCard post={post} />
            </Container>
        </>
    );
}

function BlogCard( {post }: any){
    const [isLoading, setLoading ] = useState(true);

    return (
        <Link href={'/blog/'+post.id}>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 group p-4 hover:cursor-pointer shadow-md border border-slate-300 rounded-lg w-full">
            <div className="md:pr-12 sm:pb-2">
                <Image className={
                            blur("group-hover:opacity-80 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")
                        } height="100%" width="100%" layout="responsive" src={post.photo}
                        onLoadingComplete={() => setLoading(false)}
                        />
            </div>
            <div className="grid justify-items-center py-4">
                <Text className="pb-4">
                    
                </Text>
                <Heading size="md">
                        {post.title}
                </Heading>
                </div>
            </div>
        </Link>
    );
}