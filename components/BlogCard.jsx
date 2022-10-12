import Image from 'next/image'
import Link from 'next/link'


export default function BlogCard({post}) {
    
    return(
        <div className=' col-span-4 rounded-lg md:h-64 group'>
            <Link href={"/posts/"+post.slug}>
                <div className=' cursor-pointer w-full'>
                    <div className='w-full aspect-video relative rounded-lg overflow-hidden'>
                        <div className="w-full h-full relative group-hover:scale-105 duration-300">
                            <Image src={post.coverPhoto.url} 
                                    layout='fill'
                                    objectFit='cover'
                                    >
                            </Image>
                        </div>
                    </div>

                    <div className="textArea py-2">
                        {post.tags.map((tag) => <h6 key={tag.slug}>{tag.name}</h6>) || " "}
                        <h4 className='my-1 group-hover:opacity-80 duration-300'>{post.title}</h4>
                    </div>
                </div>
            </Link>
        </div>
    )
}




/*

                        <div className=''>
                            <div className=''>
                                <Image 
                                    loader={() => post.author.avator.url}
                                    src={post.author.avator.url} 
                                    alt="author avator"
                                    height='50' width='50'
                                    >
                                    </Image>

                                <h3>{post.author.name}</h3>
                            </div>
                        </div>

*/