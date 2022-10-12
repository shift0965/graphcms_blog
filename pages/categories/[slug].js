import { Footer, Header, PostCard } from "../../components"
import { getCategories, getCategoryDetail } from "../../services"

export async function getStaticPaths(){
    const categories = await getCategories()
    console.log(categories)
    return{
        paths: categories.map((category) => ({ params : {slug: category.slug}})), 
        fallback: false
    }
}

export async function getStaticProps({params}){
    const category = await getCategoryDetail(params.slug)
    console.log(category)
    return{
        props:{
            category : category
        }
    }
}

function page ({category}){
    console.log(category)
    return(
        <div className=''>
            <Header/>
            <div className='container pt-20 pb-10'>
                <div className='text-center py-8 mb-10 border-b'>
                    <h2 className=' xing italic mb-6'>“ {category.quote}”</h2>
                    <h4 className=' text-gray-500'>{category.subtitle}</h4>
                </div>
                {category.posts.map((post) => (<PostCard post={post} key={post.slug}/>))
                }
            </div>
            <Footer/>
      </div>
    )
}

page.displayName = "page"
export default page