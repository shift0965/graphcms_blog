import Head from 'next/head'
import { useState } from 'react'
//import Image from 'next/image'
import {BlogCard, Header, FeaturePost, Footer} from '../components/'
import { getPosts, getCategories } from '../services/index.js'

export async function getStaticProps(){
  const posts = (await getPosts()) || []
  
  return{
    props:{
      posts: posts,
    },
    revalidate: 10
  }
}


export default function Home({posts}) {

  const [postsNum, setPostsNum] = useState(3);

  const readMorePosts = () => {
    setPostsNum(postsNum + 3);

    console.log(postsNum)
  }

  
  return (
    <div className=''>
      <Header/>
      <div className='container pt-20 pb-10'>
        <Head>
          <title>Blog</title>
          <meta name="description" content="This is My blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='mb-16'> 
          {posts.map((post) => {
            if(post.featurePost)
            return(
              <FeaturePost post={post} key={post.slug}/>
            )
          })}
        </div>

        <div className="postsArea grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-8">
          {posts.slice(0,postsNum).map((post) => (
            <BlogCard 
              post = {post}
              key = {post.slug}
              />
          ))}
        </div>

        {(postsNum < posts.length)?
          <div className='py-10 w-full flex justify-center items-center'>
            <button className=' md:px-32 px-20 py-1 rounded-full shadow-gray-300 shadow-lg hover:shadow-md duration-300' onClick={() => readMorePosts()}><h5 className='xing'>想看更多</h5></button>
          </div>:
          <></>
        }
        

      </div>
      <Footer/>
    </div>
  )
}


