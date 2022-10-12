import React from "react"
import Image from "next/image"


export default function Author({author}) {
    return(
        <div className='w-full'>
            <div className="flex flex-wrap items-center">
                <div className="relative w-20 aspect-square rounded-full">
                    <Image
                        layout='fill'
                        objectFit='cover'    
                        alt={author.name}
                        src={author.avator.url}
                    />
                </div>
                <div className=" ml-2">
                    <h3 className=" mb-1">{author.name}</h3>
                    <h5><span className=" font-bold">{author.posts.length} </span>posts</h5>
                </div> 
                
            </div>
            
            

            
            <p className='text-white text-lg'>{author.bio}</p>
        </div>
    )
}