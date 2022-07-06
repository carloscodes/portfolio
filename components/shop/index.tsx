import { Container, Text, Select, Button } from "@chakra-ui/react";
import Image from "next/image";


export default function Shop() {
    return (
        <>
            <Container>
                <div className="group block p-8 bg-black hover:cursor-pointer shadow-md border border-gray-800 rounded-lg max-w-sm">
                    <div className="pb-8">
                        <Image className="group-hover:opacity-80" height="100%" width="100%" layout="responsive" src="data:image/jpeg;base64,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" />
                    </div>
                    <Text fontSize="md" className="pb-4 text-center text-gray-300">
                        Product Name
                    </Text>
                    <div className="pb-4">
                        <Select focusBorderColor="green.500" borderColor="gray.900" color="GrayText" variant='outline' placeholder='Size'>
                            <option value="xl">X Large</option>
                            <option value="large">Large</option>
                            <option value="medium">Medium</option>
                            <option value="small">Small</option>
                        </Select>
                    </div>
                    <div className="flex justify-center">
                        <Button colorScheme='gray' color='green.400' variant='outline'>
                            Buy Now
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    );
}