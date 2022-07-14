import { Container, Heading, Link } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";

function blur(...classes: String[]) {
    // https://michaeluloth.com/filter-boolean
    return classes.filter(Boolean).join(' ');
}

export default function Success() {
    const [isLoading, setLoading] = useState(true);

    return (
        <>
            <div className="mt-20 mx-16 text-center">
                <Heading as="h1" size="2xl" >
                    Your purchase was successful!
                </Heading>
                <br></br>
                <Heading as="h2" size="xl">
                    You can download the eBook with the link below.
                </Heading>
                <Container>
                    <div className="group block p-8 hover:cursor-pointer shadow-md border border-gray-500 rounded-lg max-w-sm mt-8">
                        <Link color="blue.500">
                            <div className="group max-w-sm">
                                <div className="pb-8">
                                    <Image className={
                                        blur("group-hover:opacity-80 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")
                                    } height="100%" width="100%" layout="responsive" src="https://media.healthyfood.com/wp-content/uploads/2020/12/3-ways-to-keep-red-meat-in-your-diet-and-be-healthier-iStock-1155240408.jpg"
                                    onLoadingComplete={() => setLoading(false)}
                                    />
                                </div>
                            </div>
                            <Heading as="h3" size="lg" className="mt-8">
                                Download Your Purchase
                            </Heading>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    );
}