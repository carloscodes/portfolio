import { Container, Textarea, Input, Button, Alert, AlertIcon, AlertTitle, AlertDescription,Box,  } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../global/Footer";
import Navbar from "../global/Navbar";
import supabase from "../../utils/supabase";

export default function Post() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [photo, setPhoto] = useState('');
    const [isPublished, setIsPublished] = useState(false);
    const [newPost, setNewPost] = useState(false);


    async function handlePost () {
        setIsPublished(true);

        
        const { data, error } = await supabase
        .from('posts')
        .insert([
        { title: title, content: content, photo: photo, is_published: isPublished },
        ]);

        if(error){
            throw new Error(error.message);
        }

        setNewPost(true);

    }

    return (
        <>
            {!newPost ? <>
                <Navbar />
            <Container>
                <div>
                    <Input className="mb-6" focusBorderColor="gray" colorScheme="gray" color="gray.300" id='title' placeholder='Title' onChange={event => setTitle(event.currentTarget.value)} />
                    <Textarea className="mb-6" focusBorderColor="gray" colorScheme="gray" color="gray.300" placeholder='Create!' onChange={event => setContent(event.currentTarget.value)} />
                    <Input className="mb-6" focusBorderColor="gray" colorScheme="gray" color="gray.300" id='photo' placeholder='Photo URL' onChange={event => setPhoto(event.currentTarget.value)} />
                    <div className="flex justify-end">
                        <Button className="shadow-lg shadow-green-500/25" color='green.400' variant='outline' onClick={() => handlePost()}>Post Content</Button>
                    </div>
                </div>
            </Container>
            <Footer />
             </> : <SuccessMessage />}
        </>
    );
}

function SuccessMessage(){
    return (
        <>
            <Navbar />
            <Container>
                <Alert status='success'>
                    <AlertIcon />
                    <Box>
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>
                            You have Successfully uploaded a new blog post
                        </AlertDescription>
                    </Box>
                </Alert>
            </Container>
            <Footer />
        </>
    )
}