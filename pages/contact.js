import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ContactPage = () => {
    return (
        <Layout>  
            <SEO title="Contact" 
            desc="Send us a message here. Find out where we are located"/>
            <MDBContainer className="py-5">
                <MDBRow className="py-4">
                    <MDBCol md="6" lg="6">
                        <h1 className="h1-responsive">Let's Talk</h1>
                        <form action="">
                            <MDBInput label="Your Name *" />
                            <MDBInput label="Your Email *" />
                            <MDBInput label="Your Message *" />
                            <MDBInput type="textarea" label="Your Message *" rows="5" />
                            <MDBBtn color="dark" className="mx-0 text-capitalize" type="submit">Send Message</MDBBtn>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    )
}

export default ContactPage
