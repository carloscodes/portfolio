import { Container, Heading, Text, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";



export default function Hero() {

    return (
        <>
            <Container className="grid grid-cols-1 gap-4 text-left m-16 pb-14">                    
                    <div className="md:flex justify-evenly">
                    <Avatar 
                        className="mb-4"
                        bg='blue.500'
                        size='xl'
                        name='Carlos Chavarria'
                        src="images/me.png"
                        />

                        <Heading className="mt-6" as='h1' size='xl' noOfLines={1}> 
                            Carlos Chavarria.
                        </Heading>
                    </div>
                
                    <div>
                        <Heading as='h2' size='lg' noOfLines={2} className="leading-relaxed text-gray-400 mb-2">
                            I build software for the web and mobile
                        </Heading> 
                    </div>
                    
                    <div>
                        <Text fontSize='sm' className="leading-loose text-gray-400 mb-14">I&apos;m a <RoughNotation animationDelay={500} animationDuration={700} type="underline" show={true} color="#3b82f6">full stack </RoughNotation> software engineer specializing in building (and occasionally design) exceptional digital experiences. Currently, I&apos;m focused on building an accessible, human-centered product to get people healthy and thriving using React Native and Supabase. More to follow. </Text>
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