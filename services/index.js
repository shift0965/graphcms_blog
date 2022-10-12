import {GraphQLClient, gql} from 'graphql-request'
const graphcms = new GraphQLClient(process.env.GRAPHQL_ENDPOINT)

export const getPosts = async() => {
    const query = gql`
      {
        posts{
          title,
          featurePost,
          category{
            name,
            slug
          },
          coverPhoto {
            url
          },
          date
          slug,
          subtitle,
          content{
            html
          },
          tags{
            name,
            slug
          }
        }
      }
    `
    const res = await graphcms.request(query);
    return res.posts;
  }


export const getSlugList = async() => {
    const query = gql`
        {
            posts{
                slug
            }
        }
    `
    const res = await graphcms.request(query);
    return res.posts;
}


export const getPostDetail = async(slug) => {
    const query = gql`
        query getPostDetail($slug : String!){
            post(where: { slug : $slug}){
            id,
            title,
            subtitle,
            date,
            slug,
            category{
              name
            },
            tags{
              name,
              slug
            },
            author{
              name,
              avator{
                url
              }
            },
            content{
                raw
            },
            coverPhoto{
                url
            }
            
            } 
        }

    `
    const res = await graphcms.request(query, {slug});
    return res.post;
}


export const getCategories = async() => {
  const query = gql`
    {
      categories{
        name,
        slug,
      }
    }
  `
  const res = await graphcms.request(query);
  return res.categories;
}


export const getCategoryDetail = async(slug) => {
  const query = gql`
  query myQuery($slug : String!){
    category(where: { slug : $slug}){
      name,
      slug,
      quote,
      subtitle,
      posts{
          title,
          coverPhoto {
            url
          },
          date
          slug,
          subtitle,
          tags{
            name,
            slug
          }
        }
    }
  }
  `

  const res = await graphcms.request(query, {slug});
  return res.category;
}



