import React, { useState } from 'react';
import { MDBContainer, MDBNavbar, 
    MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, 
    MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import Link from 'next/link';

const Navbar = () => {
    const [collapse, setCollapse] = useState(false);

    const onClick = () => setCollapse(!collapse)

    return(
      <div className="mb-5 pb-5">
          <header>
            <MDBNavbar light expand="md" color="white" scrolling fixed="top">
              <Link href="/">
                  <img src="/assets/images/logo.png" className="navbar-logo" alt=""/>
              </Link>
              <MDBNavbarToggler onClick={onClick} />
              <MDBCollapse isOpen={collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <Link href="/about">
                        <a className="h4-responsive">
                            About
                        </a>
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link href="/blog">
                        <a className="h4-responsive">
                            Blog
                        </a>
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link href="/shop">
                        <a className="h4-responsive">
                            Shop
                        </a>
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link href="/contact">
                        <a className="h4-responsive">
                            Contact
                        </a>
                    </Link>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <Link href="/fb"><MDBIcon fab size="lg" icon="facebook-f" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link href="/twt"><MDBIcon fab size="lg" icon="twitter" /></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link href="/ig"><MDBIcon fab size="lg" icon="instagram" /></Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
}

export default Navbar;