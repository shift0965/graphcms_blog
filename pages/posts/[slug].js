import {GraphQLClient} from 'graphql-request'



import { getPostDetail, getSlugList } from '../../services'
import {Footer, Header, Loader, PostDetail } from '../../components'

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

    return{
      props:{
        post : post
      }
    }
  }


export default function article({post}) {
    //<Image src={post.coverPhoto.url} height='500' width='800'></Image>

    
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