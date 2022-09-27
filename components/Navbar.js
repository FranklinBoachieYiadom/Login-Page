import React, {useState} from 'react';
import {Transition} from "@headlessui/react";   //for smooth transition between tabs
import {Link} from "react-scroll";  // Alternate for a tag. In Next js we use Link for ref

function Navbar() {
    // useState is used to change the state while
    // start it false means when we click then only its open otherwise Not.
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
        {/* for main nav container */}
        <nav className='shadow-sm fixed w-full z-10'>
            <div className='w-full '>
                <div className='flex items-center h-20 w-full'>
                    {/* first block Section outter part */}
                    <div className='flex items items-center mx-20 justify-between w-full'>
                        <div className='flex justify center items-center flex-shrink-0'>
                            <h1 className='font-bold text xl cursor-pointer'>
                                <span className='text-blue-500'>Menu</span> Recipe App
                            </h1> 
                        </div>
                        {/* for small screen we do not show tabs thats why its written hidden and on medium devices
                        ie. we want it as block */}
                        <div className='hidden md:block'>
                            <div className='ml-10 flex items-baseline space-x-4'>
                                <Link 
                                activeClass="Home" 
                                to="home" 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black" 
                                >
                                 Home
                                </Link>
                                <Link 
                                activeClass="about" 
                                to="about" 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                                >
                                  About
                                </Link> 
                                <Link 
                                activeClass="work" 
                                to="work" 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                                >
                                  Projects
                                </Link> 
                                <Link 
                                activeClass="services" 
                                to="services" 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
                                >
                                  Services
                                </Link>
                                <Link 
                                activeClass="contact" 
                                to="contact" 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                className="cursor-pointer bg-blue-600 text-white px-3 py-2 hover:bg-black rounded-md text-sm font-medium" 
                                >
                                  Contact
                                </Link>  
                            </div>
                        </div>
                    </div> 
                    {/* Now we work on mobile-responsiveness */}
                    <div className='mr-10 flex md:hidden'>
                        {/* It has some properties like when we click what will happen on mobile phone */}
                        <button onClick={()=> setIsOpen(!isOpen)} 
                        type="button" 
                        className='bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus: outline-none focus: ring-offset-2 focus: ring-offset-blue-800 focus: ring-white'
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            >
                            <span className='sr-only'>Open main menu</span>
                            {/* Basically i am taking the menu icons from w3 website */}
                            {/* here d is the shape code */}
                            {!isOpen ?(
                                <svg 
                                className='block h-6 w-6' 
                                xmlns="http:www.w3.org/2000/svg" 
                                fill="none" 
                                viewbox="0 0 24 24" 
                                stroke="currentColor" 
                                aria-hidden="true"
                                >
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin='round' 
                                strokeWidth="2" 
                                d="M4 6h16M4 12h16M4 18h16" // for menu shape
                                />                               
                                </svg>
                            ):(
                                <svg 
                                className='block h-6 w-6' 
                                xmlns="http:www.w3.org/2000/svg" 
                                fill="none" 
                                viewbox="0 0 24 24" 
                                stroke="currentColor" 
                                aria-hidden="true"
                                >
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin='round' 
                                strokeWidth="2" 
                                d="M4 18L18 6M6 6l12 12"  // for cross shape
                                />                               
                            </svg> 
                            )}  
                        </button>   
                    </div>
                </div>
            </div>
            {/* We include transition from headlessui for smoothness in mobile experience */}
            <Transition 
            show={isOpen} 
            enter="transition ease-out duration-100 transform" 
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
                {(ref)=>(
                    // handle the mobile menu tabs
                    <div className='md:hidden id=mobile-menu'>
                        <div ref={ref} 
                        className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                        >
                            <Link href="home"
                            activeClass='home'
                            to="home" 
                            smooth={true} 
                            offset={50} 
                            duration={500} 
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                            >
                                Home
                            </Link>
                            <Link href="about"
                            activeClass='about'
                            to="about" 
                            smooth={true} 
                            offset={50} 
                            duration={500} 
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                            >
                                About
                            </Link>
                            <Link href="work"
                            activeClass='work'
                            to="work" 
                            smooth={true} 
                            offset={50} 
                            duration={500} 
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                            >
                                Projects
                            </Link>
                            <Link href="services"
                            activeClass='services'
                            to="services" 
                            smooth={true} 
                            offset={50} 
                            duration={500} 
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                            >
                                Services
                            </Link>
                            <Link href="contact"
                            activeClass='contact'
                            to="contact" 
                            smooth={true} 
                            offset={50} 
                            duration={500} 
                            className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                            >
                                Contact
                            </Link>
                        </div>
                </div>
                )}
            </Transition>
        </nav>
    </div>
  )
}


export default Navbar