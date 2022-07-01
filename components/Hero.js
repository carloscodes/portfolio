import { Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";



export default function Hero() {

    return (
        <>
            <Container className="text-left m-16 pb-14">
                <motion.div animate={{ y: 10 }}
                transition={{ type: 'spring', duration: 1, delay: .2 }}>
                    <Text size='xs' noOfLines={1} className="text-green-400 mb-4">
                        Hi, my name is
                    </Text>
                </motion.div>
                    
                    <motion.div animate={{ y: 10 }}
                transition={{ type: 'spring', duration: 1, delay: .4 }}>
                    <Heading as='h1' size='2xl' noOfLines={1} className="mb-3"> 
                        Carlos Chavarria.
                    </Heading>
                </motion.div>
                
                    <motion.div animate={{ y: 10 }}
                transition={{ type: 'spring', duration: 1, delay: .6 }}>
                    <Heading as='h1' size='xl' noOfLines={2} className="text-gray-400 mb-4">
                        I build software for the web and iOS
                    </Heading> 
                </motion.div>
                    
                    <motion.div animate={{ y: 10 }}
                transition={{ type: 'spring', duration: 1, delay: 1 }}>
                    <Text fontSize='xs' className="text-gray-400 mb-12">I&apos;m a software engineer specializing in building (and occasionally design) exceptional digital experiences. Currently, I&apos;m focused on building an accessible, human-centered product to get people healthy and thriving. </Text>
                    <button className="bg-transparent text-green-400 font-light text-xs py-2 px-4 border border-green-400 hover:bg-gray-900 rounded">
                        Check out my work!
                    </button>
                </motion.div>
                
            </Container>
        </>
    );
}