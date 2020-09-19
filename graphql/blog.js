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