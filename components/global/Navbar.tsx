import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Button, CloseButton, Divider, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, DrawerHeader, useDisclosure } from '@chakra-ui/react';
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Contact from '../contact/Contact';


const svgStyle = {
    filter: 'invert(100%) sepia(1%) saturate(7491%) hue-rotate(225deg) brightness(127%) contrast(99%)'
}

const variantsIcon = {
    open: { opacity: 1},
    closed: { opacity: 1, y: "5%", rotate: 180 },
    
  }

  const variants = {
    open: { opacity: 1, y: 5},
    closed: { opacity: 1, y: 1},
    
  }

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ isNavOpen, setisNavOpen ] = useState(false)

    function onClosed(){
        toggleMenu()
    }

    function toggleMenu(){
        let m = document.getElementById('mobile-menu')

        if(m!.classList.contains('hidden')){
            setisNavOpen(true)
            m!.classList.remove('hidden')
            
        } else {
            setisNavOpen(false)
            m!.classList.add('hidden')
        }
        
    }

    return (
        <div className='mb-4 mt-2 text-slate-50 lg:px-12'>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className='lg:hidden'>
                    <motion.div  animate={isNavOpen ? "closed" : "open"}
                    variants={variantsIcon} transition={{ duration: .5 }} className="block lg:hidden">
                        {isNavOpen ? <CloseButton onClick={() => toggleMenu()} /> : <button className="flex items-center" onClick={() => toggleMenu()}>
                             <HamburgerIcon />
                        </button> }
                    </motion.div>
                </div>

                <div className="text-sm lg:flex-grow hidden lg:block">
                        <Link href='/'>
                            <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                                Home
                            </a>
                            
                        </Link>
                        
                        <Link href='/about'>
                            <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                                About
                            </a>
                        </Link>
                        <Link href='/work'>
                            <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                                Work
                            </a>
                        </Link>
                        <Link href='/blog'>
                            <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                                Blog
                            </a>
                        </Link>
                        

                        <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                            <Contact />
                        </a>
                        </div>
                        <div className='mt-4 hidden lg:block'>
                            <Link href='https://apps.apple.com/us/app/training-log/id1621350376'>
                                <Button fontWeight="hairline" size="sm" variant="outline" color="blue.500" >Download App</Button>
                            </Link>
                        </div>
            
                        

                <div className="hidden" id="mobile-menu">
                    <Drawer placement='left' onClose={onClosed} isOpen={isNavOpen} size="full">
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader></DrawerHeader>
                        <DrawerBody>
                        <div className="text-sm lg:flex-grow">
                        <Link href='/'>
                            <a onClick={toggleMenu} className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                                Home
                                <div className='mt-4'><Divider /></div>
                            </a>
                            
                        </Link>
                        
                        <Link href='/about'>
                            <a onClick={toggleMenu} className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                                About
                                <div className='mt-4'><Divider /></div>
                            </a>
                        </Link>
                        <Link href='/work'>
                            <a onClick={toggleMenu} className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                                Work
                                <div className='mt-4'><Divider /></div>
                            </a>
                        </Link>
                        <Link href='/blog'>
                            <a onClick={toggleMenu} className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                                Blog
                                <div className='mt-4'><Divider /></div>
                            </a>
                        </Link>
                        

                        <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 md:hover:bg-gray-900 hover:cursor-pointer rounded-md">
                            <Contact />
                            <div className='mt-4'><Divider /></div>
                        </a>
                        
                        </div>
                        <div className='mt-4'>
                            <Link href='https://apps.apple.com/us/app/training-log/id1621350376'>
                                <Button fontWeight="hairline" size="sm" variant="outline" color="blue.500" >Download App</Button>
                            </Link>
                        </div>
              
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
            
                
            </nav>
        </div>
    );
}