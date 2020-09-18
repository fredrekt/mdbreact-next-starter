import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const MissingPage = () => {
    return (
        <Layout>
            <SEO title="Page Not Found" 
            desc="Error code 404, we coulnd't find what you we're looking for. Sorry for the Inconvenience."/>
            <MDBContainer className="py-5">
                <MDBRow className="align-items-center py-5">
                    <MDBCol md="6" lg="6">
                        <div className="content text-center">
                            <h1 className="h1-responsive">Oooopssieee</h1>
                            <p className="lead">Page not found. Sorry for the Inconvenience, we're not able to find what you were looking for.</p>
                        </div>
                    </MDBCol>
                    <MDBCol md="6" lg="6">
                        <img src="/assets/images/missing.png" alt="" className="w-100"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default MissingPage
