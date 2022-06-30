import Image from "next/image";
import MenuIcon from '../public/menu.svg'


const svgStyle = {
    filter: 'invert(100%) sepia(1%) saturate(7491%) hue-rotate(225deg) brightness(127%) contrast(99%)'
}

export default function Navbar() {
    function toggleMenu(){
        let m = document.getElementById('mobile-menu')

        if(m.classList.contains('hidden')){
            m.classList.remove('hidden')
        } else {
            m.classList.add('hidden')
        }
        
    }

    return (
        <div className='mb-4'>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 mr-6">
                    <span className="font-semibold text-xl tracking-tight">NewCo</span>
                </div>
                <div className='lg:hidden'>
                    <div className="block lg:hidden">
                        <button className="flex items-center" onClick={() => toggleMenu()}>
                            <Image src={MenuIcon} width={35} height={65} style={svgStyle} />
                        </button>
                    </div>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden" id="mobile-menu">
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
                        <a href="#" className="inline-block mt-4 lg:mt-0 font-light text-sm px-4 py-2  customBtn">Download App</a>
                    </div>
                </div>
                
            </nav>
        </div>
    );
}