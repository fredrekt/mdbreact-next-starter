import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const ContactPage = () => {
    return (
        <Layout>  
            <SEO title="Contact" 
            desc="Send us a message here. Find out where we are located"/>
            <MDBContainer className="py-5 my-5">
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
            <section className="grey lighten-4 mt-5 py-5">
                <MDBContainer className="py-5 my-5">
                    <h1 className="display-3">Contact Us</h1>
                    <MDBRow>
                        <MDBCol md="4" lg="4">
                            <div className="contact-details my-5">
                                <h5 className="h5-responsive mb-3">Call</h5>
                                <p className="m-0">Sales & Customer Service</p>
                                <a href="#number" className="m-0 black-text">1-800-369-7469 x 4801</a>
                            </div>

                            <div className="contact-details my-5">
                                <p className="m-0">Sales & Customer Service</p>
                                <a href="#number" className="m-0 black-text">1-800-369-7469 x 4801</a>
                            </div>
                        </MDBCol>
                        <MDBCol md="4" lg="4">
                            <div className="contact-details my-5">
                                <h5 className="h5-responsive mb-3">Email</h5>
                                <a href="mailto:fredrickjohng7@gmail.com" className="m-0 black-text">fredrickjohng7@gmail.com</a>
                            </div>

                            <div className="contact-details my-5">
                                <a href="mailto:fredrickjohng7@gmail.com" className="m-0 black-text">sample@email.com</a>
                            </div>
                        </MDBCol>
                        <MDBCol md="4" lg="4">
                            <div className="contact-details my-5">
                                <MDBBtn className="mx-0 w-100 text-capitalize z-depth-0" color="dark">
                                    Start Live Chat
                                </MDBBtn>
                                <p className="m-0 text-right grey-text">Mon to Fri 8:30am – 5pm (PST)</p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </Layout>
    )
}

export default ContactPage
