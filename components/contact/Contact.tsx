import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, InputGroup, Input, Textarea, useToast} from "@chakra-ui/react";
import { useState } from "react";
import supabase from "../../utils/supabase";
import axios from "axios";

export default function Contact() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const toast = useToast()

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

        onClose();

        setName('');
        setEmail('');
        setContent('');
    }

    async function sendEmail(values: Object){
        let config = {
            method: 'post',
            url: 'https://carloschavarria.dev/api/contact',
            headers: {
                'Content-Type': 'application/json'
            },
            data: values
        };

        try {
            const response = await axios(config);

            
            return toast({
                title: 'Your Contact has been successfully sent. Please allow a couple of days for a response',
                variant: 'solid',
                isClosable: true,
                status: 'success'
                });
            
        } catch (error) {
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
        <>
            <div onClick={onOpen}>
                Contact
            </div>
            <Modal
                size="xl"
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                closeOnOverlayClick={false}
                autoFocus={false}
            >
                <ModalOverlay 
                bg='none'
                backdropFilter='auto'
                backdropInvert='4%'
                backdropBlur='4px' />
                <ModalContent>
                <ModalHeader>Enter Details</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                <InputGroup className="mb-4">
                    <Input type='text' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                </InputGroup>
                <InputGroup className="mb-4">
                    <Input type='email' placeholder='Your Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                </InputGroup>
                <InputGroup>
                    <Textarea placeholder='Hello, I am reaching out because...' value={content} onChange={(event) => setContent(event.target.value)} />
                </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button variant='outline' onClick={handleContact} >Send</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
