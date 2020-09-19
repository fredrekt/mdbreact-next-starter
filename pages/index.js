import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home" 
      desc="About your application here and description of something for
      your search engine optimization."/>
      <MDBContainer className="py-5 my-5">
        <h1>Hello Home</h1>
      </MDBContainer>  
    </Layout>
  )
}

export default HomePage
