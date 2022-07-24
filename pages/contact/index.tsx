import { Button, Container, Heading, Input, InputGroup, Spinner, Textarea, useToast } from "@chakra-ui/react";
import { useState } from "react";
import supabase from "../../utils/supabase";
import axios from "axios";
import Header from "../../components/global/Header";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

export default function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const toast = useToast()
    const [loading, setLoading] = useState(false)

    async function submitToDB(){
        const values = {
            name: name,
            email: email,
            content: content
        }

        const { data, error } = await supabase
        .from('contacts')
        .insert([
            values,
        ]);

        if(error){
            throw new Error(error.message);
        }

        sendEmail(values);

        setName('');
        setEmail('');
        setContent('');
    }

    async function sendEmail(values: Object){
        let config = {
            method: 'post',
            url: `${window.location.origin}/api/contact`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: values
        };

        try {
            setLoading(true);

            const response = await axios(config);

            console.log(response);

            
            toast({
                title: 'Your Contact has been successfully sent. Please allow a couple of days for a response',
                variant: 'solid',
                isClosable: true,
                status: 'success'
                });

                // hide loading indicator
            setTimeout(() => {
                setLoading(false);
            }
            , 2000);
            
        } catch (error) {
            // hide loading indicator
            setTimeout(() => {
                setLoading(false);
            }
            , 2000);

            return toast({
                title: `${error}\nPlease try again later.`,
                variant: 'solid',
                isClosable: true,
                status: 'error'
                
              });
        }

    }

    // open chakra modal and submit to db
    function handleContact() {
        if(name.length == 0 || email.length == 0 || content.length == 0){
            return toast({
                title: 'All fields are required',
                variant: 'solid',
                isClosable: true,
                status: 'error'
              })
        }

        submitToDB();
    }

    return (
        !loading ? <>
            <Header />
            <Navbar />
            <Container className="grid place-items-center">
                <Heading className="mb-8">
                    Get in touch
                </Heading>
                <InputGroup className="mb-4">
                    <Input type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                </InputGroup>
                <InputGroup className="mb-4">
                    <Input type='email' placeholder='Your Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                </InputGroup>
                <InputGroup>
                    <Textarea placeholder='Hello, I am reaching out because...' value={content} onChange={(event) => setContent(event.target.value)} />
                </InputGroup>
                <Button className="mt-8" variant='outline' onClick={handleContact} >Send</Button>
            </Container>
            <Footer />
        </> : <div>
            <Header />
            <Navbar />
                <div className="grid place-items-center">
                <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                        />
                </div>
                <Footer />
        </div>
    );
}