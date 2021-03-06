import { Container, Text, Select, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { checkout } from "../../utils/checkout";

function blur(...classes: String[]) {
    // https://michaeluloth.com/filter-boolean
    return classes.filter(Boolean).join(' ');
}


export default function Shop() {
    const [isLoading, setLoading] = useState(true);

    return (
        <>
            <Container>
                <div className="group block p-8 hover:cursor-pointer shadow-md border border-gray-500 rounded-lg max-w-sm">
                    <div className="pb-8">
                        <Image className={
                            blur("group-hover:opacity-80 duration-700 ease-in-out", isLoading ? "grayscale blur-2xl scale-110" : "grayscale-0 blur-0 scale-100")
                        } height="100%" width="100%" layout="responsive" src="https://media.healthyfood.com/wp-content/uploads/2020/12/3-ways-to-keep-red-meat-in-your-diet-and-be-healthier-iStock-1155240408.jpg"
                        
                        onLoadingComplete={() => setLoading(false)}
                        />
                    </div>
                    <Text fontSize="md" className="pb-4 text-center text-gray-300">
                        Ancestral Diet eBook
                    </Text>
                    <Text fontSize="sm" className="pb-4 text-center text-gray-300">
                        $29.99
                    </Text>
                    
                    
                    <div className="flex justify-center">
                        <Button onClick={() => checkout({
                            lineItem: [{
                                price: 'price_1LLRW5CvuzWZZBtlfRn6ZMzr',
                                quantity: 1
                            }]
                        })} className="shadow-lg shadow-blue-500/25" color='blue.500' variant='outline'>
                            Buy Now
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    );
}