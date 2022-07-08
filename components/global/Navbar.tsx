import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { CloseButton } from '@chakra-ui/react';
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


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
    const [ isOpen, setIsOpen ] = useState(false)

    function toggleMenu(){
        let m = document.getElementById('mobile-menu')

        if(m!.classList.contains('hidden')){
            setIsOpen(true)
            m!.classList.remove('hidden')
            
        } else {
            setIsOpen(false)
            m!.classList.add('hidden')
        }
        
    }

    return (
        <div className='mb-4 mt-2 text-slate-50 lg:px-12'>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className='lg:hidden'>
                    <motion.div  animate={isOpen ? "closed" : "open"}
                    variants={variantsIcon} transition={{ duration: .5 }} className="block lg:hidden">
                        {isOpen ? <CloseButton onClick={() => toggleMenu()} /> : <button className="flex items-center" onClick={() => toggleMenu()}>
                             <HamburgerIcon />
                        </button> }
                    </motion.div>
                </div>
                

                <motion.div animate={isOpen ? "open" : "closed"}
                    variants={variants} transition={{ type: 'tween', duration: .5 }}  className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden" id="mobile-menu">
                    <div className="text-sm lg:flex-grow">
                    <Link href='/'>
                        <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 hover:border-b hover:cursor-pointer">
                            Home
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 hover:border-b hover:cursor-pointer">
                            About
                        </a>
                    </Link>
                    <Link href='/work'>
                        <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 hover:border-b hover:cursor-pointer">
                            Work
                        </a>
                    </Link>
                    <Link href='/shop'>
                        <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 hover:border-b hover:cursor-pointer">
                            Shop
                        </a>
                    </Link>
                    <Link href='/blog'>
                        <a className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 hover:border-b hover:cursor-pointer">
                            Blog
                        </a>
                    </Link>
                    </div>
                    <div>
                        <Link href='https://apps.apple.com/us/app/training-log/id1621350376'>
                            <a className="inline-block mt-4 lg:mt-0 text-sm px-4 py-2 customBtn hover:cursor-pointer">Download App</a>
                        </Link>
                    </div>
                </motion.div>
                
            </nav>
        </div>
    );
}