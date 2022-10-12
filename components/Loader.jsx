import React from 'react'
import Image from 'next/image'


export default function Footer() {

    return (
        <div className=' w-full h-full flex justify-center items-center'>
            <div className=' w-40 h-8 relative cursor-pointer'>
                <Image src='/logo.png'
                        layout='fill'
                        objectFit='cover'
                        >
                </Image>
            </div>
        </div>
    )
}