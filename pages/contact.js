import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn, MDBAnimation } from 'mdbreact'
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
                        <MDBAnimation type="fadeInUp" reveal>
                        <h1 className="h1-responsive">Let's Talk</h1>
                        </MDBAnimation>
                        <MDBAnimation type="fadeInUp" reveal>
                            <form action="">
                                <div className="my-3">
                                    <MDBInput label="Your Name *" />
                                </div>
                                <div className="my-3">
                                    <MDBInput label="Your Email *" />
                                </div>
                                <div className="my-3">
                                    <MDBInput label="Your Message *" />
                                </div>
                                <div className="my-3">
                                    <MDBInput type="textarea" label="Your Message *" rows="5" />   
                                </div>
                                <div className="my-3">
                                    <MDBBtn color="dark">Send Message</MDBBtn>
                                </div>
                            </form>
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <section className="grey lighten-4 mt-5 py-5">
                <MDBContainer className="py-5 my-5">
                    <MDBAnimation type="fadeInUp" reveal>
                        <h1 className="display-3">Contact Us</h1>
                    </MDBAnimation>
                    <MDBAnimation type="fadeInUp" reveal>
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
                    </MDBAnimation>
                </MDBContainer>
            </section>
        </Layout>
    )
}

export default ContactPage
