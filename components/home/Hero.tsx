import { Container, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";



export default function Hero() {

    return (
        <>
            <Container className="grid grid-cols-1 gap-4 text-left m-16 pb-14">                    
                    <div>
                        <Text size='sm' noOfLines={1} className="text-gray-300 mb-4">
                            Hi, my name is
                        </Text>
                        <Heading as='h1' size='2xl' noOfLines={1} className="mb-3"> 
                            Carlos Chavarria.
                        </Heading>
                    </div>
                
                    <div>
                        <Heading as='h2' size='lg' noOfLines={2} className="leading-relaxed text-gray-400 mb-4">
                            I build software for the web and mobile
                        </Heading> 
                    </div>
                    
                    <div>
                        <Text fontSize='sm' className="leading-loose text-gray-400 mb-14">I&apos;m a full stack software engineer specializing in building (and occasionally design) exceptional digital experiences. Currently, I&apos;m focused on building an accessible, human-centered product to get people healthy and thriving using React Native and Supabase. More on this will follow. </Text>
                        <div className="flex justify-center">
                            <Link href='/work'>
                                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-sm py-2 px-4 rounded">
                                    Check out my work!
                                </button>
                            </Link>
                        </div>
                    </div>
                
            </Container>
        </>
    );
}