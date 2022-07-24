import { Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Work() {
    function blur(...classes: String[]) {
        // https://michaeluloth.com/filter-boolean
        return classes.filter(Boolean).join(' ');
    }

    const [isLoading, setLoading ] = useState(true);

    return (
        <>
            <div className="pb-8">
                <Container>
                    <div className="group">
                        <Heading as='h3' size='lg'>
                            Next.js + Supabase + TailwindCSS Company Website
                        </Heading>
                        <Link href="https://goldenrambuzz.com">
                            <a>
                                <Image className={blur("group-hover:opacity-80 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")} alt="" src="/images/goldenram.png" width="100%" height="100%" layout="responsive" objectFit="contain"
                                onLoadingComplete={() => setLoading(false)}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="group">
                        <Heading as='h3' size='lg'>
                            Angular Calculator PWA
                        </Heading>
                        <Link href="https://chalkcalculator.web.app">
                            <a>
                                <Image className={blur("group-hover:opacity-80 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")} alt="" src="/images/calculator.png" width="100%" height="100%" layout="responsive" objectFit="contain"
                                onLoadingComplete={() => setLoading(false)}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="group">
                        <Heading as='h3' size='lg'>
                            Flutter Training App
                        </Heading>
                        <Link href="https://apps.apple.com/us/app/training-log/id1621350376">
                            <a>
                                <Image className={blur("group-hover:opacity-80 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")} alt="" src="/images/app.png" width="100%" height="100%" layout="responsive" objectFit="contain"
                                onLoadingComplete={() => setLoading(false)}
                                />
                            </a>
                        </Link>
                    </div>
                    
                </Container>
            </div>
        </>
    );
}