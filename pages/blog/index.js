import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const BlogsPage = () => {
    return (
        <Layout>
            <SEO title="Blogs" 
            desc="Collections of blogs about things and stuff. Read more here."/>
            <MDBContainer>
                <h1 className="h1-responsive">Blogs Page</h1>
            </MDBContainer>
        </Layout>
    )
}

export default BlogsPage
