import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const SingleBlog = () => {
    return (
        <Layout>
            <SEO title="title here" 
            desc="desc here"/>
            <MDBContainer>
                <h1 className="h1-responsive">Single Blog here</h1>
            </MDBContainer>
        </Layout>
    )
}

export default SingleBlog
