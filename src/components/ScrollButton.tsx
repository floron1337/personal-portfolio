'use client'
import { scrollIntoTheView } from '@/lib/utils';
import React, { MouseEventHandler, ReactNode } from 'react'

interface Props{
    children: ReactNode;
    className?: string | "";
    scrollId: string;
}

const ScrollButton = ({children, className, scrollId} : Props) => {
    return (
        <button className={className} onClick={() => scrollIntoTheView(scrollId)}>
            {children}
        </button>
    )
}

export default ScrollButton
