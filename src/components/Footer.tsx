import { CornerLeftUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollButton from './ScrollButton'

const Footer = () => {
    return (
        <footer className='w-full bg-dark-blue text-white border-t'>
            <div className='mx-32 py-4 flex flex-col items-center max-md:mx-4'>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <Image src='/img/logo.png' alt="logo" width={30} height={30} />
                    <h1 className='text-xl max-md:text-lg max-md:text-center'>The Personal Portfolio of Florin Veniș</h1>
                </div>

                <div className='h-[1px] w-[32rem] max-md:w-[24rem] bg-white my-4'></div>
                <h3>All rights reverved.</h3>
            </div>
        </footer>
    )
}

export default Footer
