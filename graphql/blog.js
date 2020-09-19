// customize your queries here

import graphql from 'graphql-tag';

export const getAllBlogs = graphql`
    query{
        blogs(where: {title_not: "#Throwback Classics"}){
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