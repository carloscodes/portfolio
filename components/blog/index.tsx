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
            <div className="p-8">
                <BlogCard post={post} />
            </div>
        </>
    );
}

function BlogCard( {post }: any){
    const [isLoading, setLoading ] = useState(true);

    return (
        <Link href={'/blog/'+post.id}>
            <div className="group hover:cursor-pointer shadow-md border border-gray-800 rounded-lg">
                <div className="p-12 sm:pb-2">
                    <Image className={
                                blur("group-hover:opacity-80 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100", "rounded-md")
                            } height="50%" width="50%" layout="responsive" src={post.photo}
                            onLoadingComplete={() => setLoading(false)}
                            />
                </div>
                <div className="text-center py-4">
                    <Heading size="md">
                            {post.title}
                    </Heading>
                </div>
            </div>
        </Link>
    );
}