import Image from 'next/image'
import Link from 'next/link'


export default function FeaturePost({post}) {
    
    return(
        <Link href={"/posts/"+post.slug}>
            <div className=' grid md:grid-cols-12 grid-cols-1 rounded-lg md:gap-8 group cursor-pointer'>  
                <div className=' md:col-span-8 col-span-1'>
                    <div className='w-full aspect-video rounded-lg overflow-hidden relative'> 
                        <div className='h-50 z-10 absolute border-2 border-primary w-20 h-20 flex justify-center items-center top-2 left-2 rounded-full xing text-primary md:scale-100 scale-75 origin-top-leftco'>
                            <div>
                                <h3>主廚</h3>
                                <h3>推薦</h3>
                            </div>
                        </div> 
                        <div className='relative w-full h-full group-hover:scale-105 duration-300'>                  
                            <Image src={post.coverPhoto.url} 
                                    layout='fill'
                                    objectFit='cover'
                                    >
                            </Image>
                        </div>
                    </div>
                </div>

                <div className=" md:col-span-4 col-span-1 flex flex-col py-6">
                    <h2 className='group-hover:opacity-70 duration-300 md:text-3xl text-2xl'>{post.title}</h2>
                    <div className=' w-fit md:mt-auto mt-4 mb-4'>
                        {post.tags.map((tag) => 
                            <div className='px-3 py-1 bg-secondary-sec rounded-full' key={tag.slug}>
                                <h5>{tag.name}</h5>
                            </div>
                        )}
                    </div>
                    <h4 className=''>{post.subtitle} </h4>
                </div>
            </div>
        </Link>
    )
}