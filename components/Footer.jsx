import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {MdOutlineEmail} from 'react-icons/md'


export default function Footer() {

    return (
        <div className=' w-full py-12 flex flex-col justify-center items-center'>
            <a
                href="mailto:shift0965@gmail.com"
                className=' px-12 py-1.5 bg-primary-sec text-primary dark:bg-dark-primary-sec dark:text-dark-primary rounded-full flex items-center border-2
                                border-primary-sec dark:border-dark-primary-sec hover:bg-primary hover:dark:bg-dark-primary hover:text-primary-sec hover:dark:text-dark-primary-sec duration-300
            '>
                聯絡主廚<MdOutlineEmail className=' ml-2'/>
            </a>

            <h6 className='mt-4 mb-2 mx-2 text-center'>The website is built by Next.js and deployed by Vercel</h6>
            <a href='https://shift0965.github.io/personal/' target="_blank" rel="noreferrer"><h6 className=' cursor-pointer underline'>MoreAboutMe</h6></a>
        </div>
    )
}