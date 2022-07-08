import { Container, Heading, Text } from "@chakra-ui/react";

export default function About() {
    return (
        <div className="pb-8">
            <Container>
                <div>
                    <Heading as='h3' size='lg' className="pb-8 text-gray-300">
                        About Me
                    </Heading>
                    <Text className="leading-loose text-gray-400 text-md">
                        Hello world! My name is Carlos Chavarria and I enjoy making software. 
                        My interest in software development started back in 2016 when I took a java programming 
                        class in college. I was intrigued and decided to pursue CS at the University of California Irvine.
                        I took it upon myself to learn web and app development when I
                        was not studying and managed to run a relatively successful software consulting business for a couple years after college.
                        I built web apps, stripe backends with paypal and zapier integrations, as well as a fully fledged iOS app with in-app payment support.
                        <br></br>
                        <br></br>
                        My main focus these days is learning and a continous refinement of my skills. I am also teaching my daughter
                        about software and business in my spare time. I run her small business for her 😊
                    </Text>
                    <br></br>
                    <Text className="text-gray-400 text-sm">
                        Here are a few technologies I&apos;ve been working with as of late:
                        <br></br>
                        <br></br>
                        <div className="leading-loose grid gap-2 grid-cols-2 text-sm font-semibold text-blue-400">
                            <Text>JavaScript ES6+</Text>
                            <Text>React</Text>
                            <Text>Flutter/Dart</Text>
                            <Text>Next.js</Text>
                            <Text>Tailwind CSS</Text>
                            <Text>Typescript</Text>
                            <Text>Supabase</Text>
                            <Text>React Native</Text>
                        </div>
                    </Text>
                </div>
            </Container>
        </div>
    );
}