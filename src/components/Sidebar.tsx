import { CodeXml, Home, Send, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import ScrollButton from './ScrollButton'

const Sidebar = () => {
    return (
        <nav className='fixed flex flex-col bg-dark-blue h-screen justify-between items-center drop-shadow z-50 max-md:hidden'>
            <ScrollButton scrollId="hero-section" >
                <Image src='/img/logo.png' alt="logo" width={60} height={60}/>
            </ScrollButton>
            <div className='mb-auto mt-auto flex flex-col items-center text-white'>
                <ScrollButton scrollId="hero-section" className='p-4 hover:bg-white hover:text-black ease'>
                    <Home className='size-10'/>
                </ScrollButton>
                <ScrollButton scrollId="about-section" className='p-4 hover:bg-white hover:text-black ease'>
                    <User className='size-10'/>
                </ScrollButton>
                <ScrollButton scrollId="projects-section" className='p-4 hover:bg-white hover:text-black ease'>
                    <CodeXml className='size-10'/>
                </ScrollButton>
                <ScrollButton scrollId="contact-section" className='p-4 hover:bg-white hover:text-black ease'>
                    <Send className='size-10'/>
                </ScrollButton>
            </div>
        </nav>
    )
}

export default Sidebar
