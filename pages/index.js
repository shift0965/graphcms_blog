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

  const [postsNum, setPostsNum] = useState(4);

  const readMorePosts = () => {
    setPostsNum(postsNum + 3);

    console.log(postsNum)
  }

  
  return (
    <div className=''>
      <Header/>
      <div className='container pt-20 pb-10'>
        <Head>
          <title>WannaEAT想吃軟飯</title>
          <meta name="description" content="最特別的軟飯食譜，歡迎光臨想吃軟飯部落格！" />
          <link rel="icon" href="/icon.png" />
          <meta property="og:image" content="https://wannaeat.vercel.app/cover.png"></meta>
        </Head>

        <div className='mb-14'> 
          {posts.map((post) => {
            if(post.featurePost)
            return(
              <FeaturePost post={post} key={post.slug}/>
            )
          })}
        </div>

        <div className="postsArea grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-8">
          {posts.slice(0,postsNum).map((post) => {
            if(!post.featurePost)
            return(
              <BlogCard 
              post = {post}
              key = {post.slug}
              />
            )
            })}
        </div>

        {(postsNum < posts.length)?
          <div className='py-10 w-full flex justify-center items-center'>
            <button className=' md:px-32 px-20 py-1 rounded-full shadow-light dark:shadow-dark-light shadow-lg hover:shadow-md duration-300' onClick={() => readMorePosts()}><h5 className='xing'>想看更多</h5></button>
          </div>:
          <></>
        }
        

      </div>
      <Footer/>
    </div>
  )
}


