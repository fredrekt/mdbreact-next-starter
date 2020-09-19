import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import Router, { useRouter } from 'next/router';
//apollo Client
import { withApollo } from '../../libs/apolloProvider';
import { useQuery } from '@apollo/react-hooks';
import { getSingleBlog } from '../../graphql/blog';
import Loading from '../../components/Loading';
import BlogHeader from '../../components/BlogHeader';
import BlogBody from '../../components/BlogBody';

const SingleBlog = () => {
    const router = useRouter();
    const { title } = router.query;
    const varTitle = decodeURI(title)

    const { data, loading, error } = useQuery(getSingleBlog, { variables: { title: varTitle } })
    if(loading) return <Loading/>
    if(error){
        Router.push('/404')
    }
    const { edges } = data.blogsConnection

    return edges.map(i => (
        <Layout>
            <SEO title={i.node.title} 
            desc="desc here"/>
            <MDBContainer className="py-5 my-5">
                <BlogHeader node={i.node}/>
                <BlogBody node={i.node}/>
            </MDBContainer>
        </Layout>
    )
)}

export default withApollo({ ssr: true })(SingleBlog)
