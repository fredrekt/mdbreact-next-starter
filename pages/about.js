import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About Us" 
            desc="What you need to know about us. Find out more here."/>
            <MDBContainer>
                <h1>Hello About</h1>
            </MDBContainer>
        </Layout>
    )
}

export default AboutPage
