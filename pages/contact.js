import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ContactPage = () => {
    return (
        <Layout>  
            <SEO title="Contact" 
            desc="Send us a message here. Find out where we are located"/>
            <MDBContainer>
                <h1>Hello Contact</h1>
            </MDBContainer>
        </Layout>
    )
}

export default ContactPage
