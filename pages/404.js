import { MDBAnimation, MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Router from 'next/router';

const MissingPage = () => {
    return (
        <Layout>
            <SEO title="404" 
            desc="Error code 404, we coulnd't find what you we're looking for. Sorry for the Inconvenience."/>
            <MDBContainer className="py-5 my-5">
                <MDBRow className="align-items-center py-5 my-5">
                    <MDBCol md="6" lg="6">
                        <MDBAnimation type="fadeInUp" reveal>
                            <div className="content text-center">
                                <h1 className="h1-responsive">Oooopssieee</h1>
                                <p className="lead">Page not found. Sorry for the Inconvenience, we're not able to find what you were looking for.</p>
                                <MDBBtn color="dark" className="mx-0 text-capitalize" onClick={()=>Router.push('/')}>
                                    Go Home
                                </MDBBtn> 
                            </div>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="6" lg="6">
                        <MDBAnimation type="fadeInUp" reveal>
                            <img src="/assets/images/missing.png" alt="" className="w-100"/>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default MissingPage
