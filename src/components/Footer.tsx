import { CornerLeftUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollButton from './ScrollButton'

const Footer = () => {
    return (
        <footer className='w-full bg-dark-blue text-white border-t-8'>
            <div className='mx-32 py-4 flex flex-col items-center max-md:mx-4'>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <Image src='/img/logo.png' alt="logo" width={40} height={40}/>
                    <h1 className='text-2xl font-semibold max-md:text-lg max-md:text-center'>The Personal Portfolio of Florin Veniș</h1>
                </div>
                <h3>All rights reverved.</h3>
                <div className='h-[0.1px] w-[36rem] max-md:w-[24rem] bg-white my-4'></div>
                <ScrollButton scrollId={"hero-section"} className='primary-light-btn mt-4'><CornerLeftUp />Back to Top</ScrollButton>
            </div>
        </footer>
    )
}

export default Footer
