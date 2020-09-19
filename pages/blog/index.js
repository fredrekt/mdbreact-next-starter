import { MDBAnimation, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Router from 'next/router';
import Loading from '../../components/Loading';
//apollo client
import { withApollo } from '../../libs/apolloProvider';
import { useQuery } from '@apollo/react-hooks';
import { getAllBlogs } from '../../graphql/blog';
import BlogPreview from '../../components/BlogPreview';

const BlogsPage = () => {

    const { data, loading, error } = useQuery(getAllBlogs)
    if(loading) return <Loading/>
    if(error){
        Router.push('/404')
    }

    const { blogs } = data

    return (
        <Layout>
            <SEO title="Blogs" 
            desc="Collections of blogs about things and stuff. Read more here."/>
            <MDBContainer className="py-5 my-5">
                <MDBAnimation type="fadeInUp" reveal>
                    <h1 className="h1-responsive">Blogs Page</h1>
                </MDBAnimation>    
                <MDBAnimation type="fadeInUp" reveal>
                    <MDBRow>
                        <BlogPreview blogs={blogs}/>
                    </MDBRow>
                </MDBAnimation>
            </MDBContainer>
        </Layout>
    )
}

export default withApollo({ ssr: true })(BlogsPage)
