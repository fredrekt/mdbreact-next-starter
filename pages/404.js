import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const MissingPage = () => {
    return (
        <Layout>
            <SEO title="Page Not Found" 
            desc="Error code 404, we coulnd't find what you we're looking for. Sorry for the Inconvenience."/>
            <MDBContainer>
                
            </MDBContainer>
        </Layout>
    )
}

export default MissingPage
