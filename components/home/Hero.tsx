import { Container, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";



export default function Hero() {

    return (
        <>
            <Container className="text-left m-16 pb-14">
                <div>
                    <Text size='xs' noOfLines={1} className="text-green-500 mb-4">
                        Hi, my name is
                    </Text>
                </div>
                    
                    <div>
                    <Heading as='h1' size='2xl' noOfLines={1} className="mb-3"> 
                        Carlos Chavarria.
                    </Heading>
                </div>
                
                    <div>
                    <Heading as='h1' size='xl' noOfLines={2} className="text-gray-400 mb-4">
                        I build software for the web and iOS
                    </Heading> 
                </div>
                    
                    <div>
                    <Text fontSize='xs' className="text-gray-400 mb-12">I&apos;m a software engineer specializing in building (and occasionally design) exceptional digital experiences. Currently, I&apos;m focused on building an accessible, human-centered product to get people healthy and thriving. </Text>
                    <Link href='/work'>
                        <button className="bg-transparent text-green-500 font-medium text-xs py-2 px-4 border border-green-500 hover:bg-gray-900 rounded">
                            Check out my work!
                        </button>
                    </Link>
                </div>
                
            </Container>
        </>
    );
}