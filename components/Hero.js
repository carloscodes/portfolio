import { Container, Heading, Text } from "@chakra-ui/react";

export default function() {
    return (
        <>
            <Container className="text-left m-16">
                <Text size='xs' noOfLines={1} className="text-green-400 mb-4">
                    Hi, my name is
                </Text>
                <Heading as='h1' size='2xl' noOfLines={1} className="mb-3"> 
                    Carlos Chavarria.
                </Heading>
                <Heading as='h1' size='xl' noOfLines={2} className="text-gray-400 mb-4">
                    I build software for the web and iOS
                </Heading>
                <Text fontSize='xs' className="text-gray-400 mb-12">I&apos;m a software engineer specializing in building (and occasionally) exceptional digital experiences. Currently, I&apos;m focused on building an accessible, human-centered product to get people healthy and thriving. </Text>
                <button className="bg-transparent text-green-400 font-light text-xs py-2 px-4 border border-green-400 rounded">
                    Check out my work!
                </button>
            </Container>
        </>
    );
}