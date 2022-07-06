import { Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export default function Work() {
    return (
        <>
            <div className="pb-8">
                <Container>
                    <div>
                        <Heading as='h3' size='lg'>
                            Angular Calculator PWA
                        </Heading>
                        <Link href="https://chalkcalculator.web.app">
                            <Image className="hover:cursor-pointer" alt="" src="/images/calculator.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                        </Link>
                    </div>
                    <div>
                        <Heading as='h3' size='lg'>
                            Flutter Training App
                        </Heading>
                        <Link href="https://apps.apple.com/us/app/training-log/id1621350376">
                            <Image className="hover:cursor-pointer" alt="" src="/images/app.png" width="100%" height="100%" layout="responsive" objectFit="contain" />
                        </Link>
                    </div>
                    
                </Container>
            </div>
        </>
    );
}