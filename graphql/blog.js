import graphql from 'graphql-tag';

export const getAllBlogs = graphql`
    query{
        blogs{
            id
            title
            description
            preview{
                url
            }
        }
    }
`

export const getSingleBlog = graphql`
    query Blog($title: String!) {
        blogsConnection(where: {title: $title}) {
        edges {
            node {
            description
            title
            preview {
                url
            }
            content {
                markdown
            }
            id
            }
        }
        }
    }   
`