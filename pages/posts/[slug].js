import {GraphQLClient} from 'graphql-request'

import { getPostDetail, getSlugList, getSimilarPosts } from '../../services'
import {Footer, Header, Loader, PostCard, PostDetail } from '../../components'
import {GiKnifeFork} from 'react-icons/gi'


const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.hygraph.com/v2/cl8cqmd9h0tj101ul0hnz26d1/master"
  )
  
export async function getStaticPaths(){
    const posts = await getSlugList()
    return{
        paths: posts.map((post) => ({ params:{slug : post.slug}})),
        fallback:false
    }
}

export async function getStaticProps({params}){
    const post = await getPostDetail(params.slug);
    //similar posts : posts that match the first tag
    const similarPosts = await getSimilarPosts(post.slug, post.tags);

    return{
      props:{
        post : post,
        similarPosts : similarPosts
      }
    }
  }


export default function article({post, similarPosts}) {
    return (
        <div className=''>
          <Header/>
          <div className='container pt-20 pb-10 grid gap-5'>
            <div className='post'>
              <PostDetail post={post}/>
            </div>
          </div>

          {
            (similarPosts.length > 0) ? 
            <div className='recommend container py-12'>
              <h2 className='mb-7 flex items-center xing'><GiKnifeFork className=' mr-2'/>想嘗更多</h2>  
                {similarPosts.map((post) => (<PostCard post={post} key={post.slug}/>))
                }
            </div> :
            <></>
          }

          <Footer/>
        </div>
    )
}