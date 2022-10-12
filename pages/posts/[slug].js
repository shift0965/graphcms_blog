import {GraphQLClient} from 'graphql-request'

import { useRouter } from 'next/router'


import { getPostDetail, getSlugList } from '../../services'
import {Footer, Header, Loader, PostDetail } from '../../components'

const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.hygraph.com/v2/cl8cqmd9h0tj101ul0hnz26d1/master"
  )
  
export async function getStaticPaths(){
    const posts = await getSlugList()
    return{
        paths: posts.map((post) => ({ params:{slug : post.slug}})),
        fallback:true
    }
}

export async function getStaticProps({params}){
    const post = await getPostDetail(params.slug);

    return{
      props:{
        post : post
      }
    }
  }


export default function article({post}) {
    //<Image src={post.coverPhoto.url} height='500' width='800'></Image>

    const router = useRouter();
    if(router.isFallback){
      return <Loader/>
    }
    
    return (
        <div className=''>
          <Header/>
          <div className='container py-20 grid gap-5'>
            <div className='post'>
              <PostDetail post={post}/>
            </div>
          </div>
          <Footer/>
        </div>
    )
}