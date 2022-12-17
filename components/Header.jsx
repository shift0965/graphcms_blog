import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { getCategories } from '../services';
import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonFill } from 'react-icons/bs'



export default function Header() {
    const [mounted, setMounted] = useState(false);
    const {systemTheme, theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if(!mounted) return null;

        const currentTheme = (theme === 'system') ? systemTheme : theme;

        if(currentTheme === "dark"){
            return(
                <div className='darkLight' onClick={() => {setTheme('light')}}>
                    <BsSunFill/>
                </div>
            )
        }
        else {
            return(
            <div className='darkLight' onClick={() => {setTheme('dark')}}>
                <BsMoonFill/>
            </div>)
        }  
    }

    const logoImage = () => {
        const currentTheme = (theme === 'system') ? systemTheme : theme;
        if(currentTheme === "dark"){
            return(
                <Image src='/logo-white.png'
                    layout='fill'
                    objectFit='cover'
                    >
                </Image>
            )
        }
        else return(
            <Image src='/logo-black.png'
                    layout='fill'
                    objectFit='cover'
                    >
                </Image>
            )
    }

    const [categories, setCategories] = new useState([]);
    const [barOpen, setBarOpen] = new useState(false);
    const switchBar = () => {
        setBarOpen(!barOpen);
    }
    const closeBar = () => {
        setBarOpen(false);
    }

    useEffect(() => {
        const fetchCategories = async() => {
            getCategories()
                .then(res => setCategories(res))
                .catch(error => console.log(error))
        }
        fetchCategories()
    }, [])
      

    const [animateHeader, setAnimateHeader] = useState(false);
    


    useEffect(() => {
        const listener = () => {
          if (window.scrollY > 80) {
            setAnimateHeader(true);
          } else setAnimateHeader(false);
        };
        window.addEventListener("scroll", listener);
        return () => {
          window.removeEventListener("scroll", listener);
        };
      }, []);

    return (
        <div className={`w-full fixed z-50 bg-primary dark:bg-dark-primary ${(animateHeader)? 'md:h-12 drop-shadow-sm' : 'md:h-16'}  h-14 duration-300`}>
            <div className='header flex items-center h-full'>
                <div className='md:ml-0 ml-4'> 
                    <Link href="/">
                        <div className=' w-36 h-7 relative cursor-pointer'>
                            {logoImage()}
                        </div>
                    </Link>
                </div>

                <button className={`nav_toggle w-16 h-16 z-50  ${barOpen? "active" : ""} rounded-full`} onClick={switchBar}>               
                    <div className="nav_toggle_bar top-6 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="nav_toggle_bar top-9 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>   
                </button> 

                <div className={`ml-auto flex nav_menu ${barOpen? "" : "active"} z-20`}>
                    <ul className='nav_list'>

                    <li className="nav_link" onClick={closeBar}>
                        <Link href={"/"}>
                            <h4 className='xing'>首頁</h4> 
                        </Link>
                    </li> 
                    {categories.map((category) =>
                        <li className="nav_link" onClick={closeBar} key={category.slug}>
                            <Link href={"/categories/"+category.slug} key={category.slug}>
                                <h4 className='xing'>{category.name}</h4> 
                            </Link>
                        </li> 
                    )}
                    </ul>
                </div>

                {renderThemeChanger()}
            </div>
        </div>
    )
}
