import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, InputGroup, Input, Textarea, useToast} from "@chakra-ui/react";
import { useState } from "react";

export default function Contact() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const toast = useToast()

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

        onClose();

        return toast({
            title: 'Your Contact has been successfully sent. Please allow a couple days for a response',
            variant: 'solid',
            isClosable: true,
            status: 'success'
            
          })
        
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
            >
                <ModalOverlay 
                bg='none'
                backdropFilter='auto'
                backdropInvert='4%'
                backdropBlur='4px' />
                <ModalContent>
                <ModalHeader>Enter Details</ModalHeader>
                <ModalCloseButton />
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
