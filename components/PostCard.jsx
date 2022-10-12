import Image from 'next/image'
import Link from 'next/link'


export default function PostCard({post}) {
    
    return(
        <div className=' col-span-4 rounded-lg h-32 group border-blue-300 mb-10'>
            <Link href={"/posts/"+post.slug}>
                <div className=' cursor-pointer h-full grid grid-cols-10 gap-5'>
                    <div className=' col-span-3 aspect-video relative rounded-lg overflow-hidden border-black'>
                        <div className="w-full h-full relative group-hover:scale-105 duration-300">
                            <Image src={post.coverPhoto.url} 
                                    layout='fill'
                                    objectFit='cover'
                                    >
                            </Image>
                        </div>
                    </div>

                    <div className=" col-span-7 textArea h-full">
                        <h4 className='mb-2 group-hover:opacity-80 duration-300'>{post.title}</h4>
                        {post.tags.map((tag) => <h6 key={tag.slug}>{tag.name}</h6>) || " "}
                        <h5 className='mt-2'>
                            {post.subtitle}
                        </h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}