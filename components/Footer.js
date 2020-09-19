import React from "react";
import { MDBCol, MDBContainer, 
    MDBRow, MDBFooter, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Link from "next/link";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left py-5">
        <MDBRow>
          <MDBCol md="3">
            <MDBRow>
                <MDBCol md="12" lg="12">
                    <h4 className="h4-responsive mb-3">About Starter</h4>   
                </MDBCol>
                <MDBCol md="12" lg="12">
                    <h4 className="h4-responsive mb-3">Contact Us</h4>
                </MDBCol>
                <MDBCol md="12" lg="12">
                    {/* <div className="d-block mb-3">
                        <Link href="/fb"><MDBIcon className="white-text" fab size="lg" icon="facebook-f" /></Link>
                        <Link href="/twt"><MDBIcon className="white-text" fab size="lg" icon="twitter" /></Link>
                        <Link href="/twt"><MDBIcon className="white-text" fab size="lg" icon="github" /></Link>
                        <Link href="/twt"><MDBIcon className="white-text" fab size="lg" icon="linkedin-in" /></Link>
                    </div> */}
                    <div className="d-flex justify-content-between w-responsive mb-3">
                        <div className="h4-responsive mb-3">
                            Links
                        </div>
                        <h4 className="h4-responsive mb-3">
                            Links
                        </h4>
                        <h4 className="h4-responsive mb-3">
                            Links
                        </h4>
                    </div>
                </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="9">
              <MDBRow>
                  <MDBCol md="3" lg="3">
                    <h4 className="h4-responsive mb-3">Services</h4>
                        <ul className="list-unstyled">
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>GatsbyJS Starters</a>
                                </Link>
                            </li>
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>SPA Starters</a>
                                </Link>
                            </li>
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>NextJS Starters</a>
                                </Link>
                            </li>
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>Vercel Docs</a>
                                </Link>
                            </li>
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>Netlify Deployment</a>
                                </Link>
                            </li>
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>Github</a>
                                </Link>
                            </li>
                        </ul>
                  </MDBCol>
                  <MDBCol md="3" lg="3">
                    <h4 className="h4-responsive mb-3">Community</h4>
                        <ul className="list-unstyled">
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>Issues</a>
                                </Link>
                            </li>
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>Pull Request</a>
                                </Link>
                            </li>
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>Github Repository</a>
                                </Link>
                            </li>
                        </ul>
                  </MDBCol>
                  <MDBCol md="3" lg="3">
                    <h4 className="h4-responsive mb-3">Support</h4>
                        <ul className="list-unstyled">
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>Star on github</a>
                                </Link>
                            </li>
                            <li className="list-unstyled mb-2">
                                <Link href="/">
                                    <a>Buy me coffee</a>
                                </Link>
                            </li>
                        </ul>
                  </MDBCol>
                  <MDBCol md="3" lg="3">
                    <h4 className="h4-responsive mb-3">Subscribe Newsletter</h4>
                    <form action="">
                        <MDBInput className="my-3" label="Your Email *" />
                        <MDBBtn size="md" color="light" outline className="text-capitalize mx-0 w-100">
                            Subscribe
                        </MDBBtn>
                    </form>
                  </MDBCol>
              </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-5">
        <MDBContainer className="py-4" fluid>
            <MDBRow>
                <MDBCol md="6" lg="6">
                    <MDBRow className="footer-credits">
                        <MDBCol md="3" lg="3">
                            <Link href="https://www.next-mdbreact.ga">
                                <span>
                                    &copy; <a> Next Starter </a> {new Date().getFullYear()} 
                                </span>
                            </Link>
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Link href="">
                                <a className="grey-text">
                                    Terms & Conditions
                                </a>
                            </Link>
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Link href="">
                                <a className="grey-text">
                                    Privacy Policy
                                </a>
                            </Link>
                        </MDBCol>
                        <MDBCol md="3" lg="3">
                            <Link href="">
                                <a className="grey-text">
                                    Sitemap
                                </a>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
                <MDBCol className="" md="6" lg="6">

                </MDBCol>
            </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;