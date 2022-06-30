import Image from "next/image";
import { useState } from "react";
import MenuIcon from '../public/menu.svg'
import { motion } from "framer-motion";
import CloseIcon from '../public/close.svg'


const svgStyle = {
    filter: 'invert(100%) sepia(1%) saturate(7491%) hue-rotate(225deg) brightness(127%) contrast(99%)'
}

const variants = {
    open: { opacity: 1},
    closed: { opacity: 1, y: "5%" },
  }

export default function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false)

    function toggleMenu(){
        let m = document.getElementById('mobile-menu')

        if(m.classList.contains('hidden')){
            setIsOpen(true)
            m.classList.remove('hidden')
            
        } else {
            setIsOpen(false)
            m.classList.add('hidden')
        }
        
    }

    return (
        <div className='mb-4 mt-4'>
            <nav className="flex items-center justify-between flex-wrap p-6">
                
                <motion.div className="flex items-center flex-shrink-0 mr-6">
                    <span className="font-semibold text-xl tracking-tight">NewCo</span>
                </motion.div>
                <div className='lg:hidden'>
                    <motion.div animate={isOpen ? "closed" : "open"}
                    variants={variants} className="block lg:hidden">
                        <button className="flex items-center" onClick={() => toggleMenu()}>
                        { isOpen ? <Image src={CloseIcon} width={30} height={60} style={svgStyle} />  : <Image src={MenuIcon} width={30} height={60} style={svgStyle} /> }
                        </button>
                    </motion.div>
                </div>
                

                <motion.div animate={isOpen ? "open" : "closed"}
                    variants={variants} className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden" id="mobile-menu">
                    <div className="text-sm lg:flex-grow">
                    <a href="#" className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 hover:border-b">
                        Home
                    </a>
                    <a href="#" className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 mr-4 hover:border-b">
                        Shop
                    </a>
                    <a href="#" className="px-2 py-2 block mt-4 lg:inline-block lg:mt-0 hover:border-b">
                        Blog
                    </a>
                    </div>
                    <div>
                        <a href="#" className="inline-block mt-4 lg:mt-0 font-light text-sm px-4 py-2 customBtn">Download App</a>
                    </div>
                </motion.div>
                
            </nav>
        </div>
    );
}