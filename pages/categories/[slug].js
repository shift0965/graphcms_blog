import { Footer, Header, PostCard } from "../../components"
import { getCategories, getCategoryDetail } from "../../services"

export async function getStaticPaths(){
    const categories = await getCategories()
    return{
        paths: categories.map((category) => ({ params : {slug: category.slug}})), 
        fallback: false
    }
}

export async function getStaticProps({params}){
    const category = await getCategoryDetail(params.slug)
    return{
        props:{
            category : category
        }
    }
}

function page ({category}){
    return(
        <div className=''>
            <Header/>
            <div className='container pt-20'>
                <div className='text-center py-8'>
                    <h2 className=' xing italic mb-6'>“ {category.quote}”</h2>
                    <h4 className=' text-text dark:text-dark-text opacity-90'>{category.subtitle}</h4>
                </div>
            </div>
            <div className="container pt-10 pb-10">
                {category.posts.map((post) => (<PostCard post={post} key={post.slug}/>))
                }
            </div>
            <Footer/>
      </div>
    )
}

page.displayName = "page"
export default page