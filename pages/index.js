import { MDBAnimation, MDBCol, MDBContainer, MDBRow, MDBIcon } from 'mdbreact'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const HomePage = () => {
  const data = [
    {
      features: "Search Engine Optimization",
      status: true
    },
    {
      features: "GraphQL Ready",
      status: true
    },
    {
      features: "Content Caching",
      status: true
    },
    {
      features: "Easy to use Design Framework",
      status: true
    },
    {
      features: "Axios Ready",
      status: true
    },
    {
      features: "Markdown Ready for MDX Files or content from cms",
      status: true
    },
    {
      features: "Progressive Image Loading",
      status: true
    },
    {
      features: "Fully Customizable",
      status: true
    },
    {
      features: "Server Side Rendering",
      status: true
    },
    {
      features: "Mobile Ready Framework",
      status: true
    },
    {
      features: "Rehydration",
      status: true
    },
    {
      features: "Apollo Client Setup",
      status: true
    },
  ]
  const trData = data.map(i => 
      <tr>
        <td className="font-weight-bold">{i.features}</td>
        <td>{i.status ? <MDBIcon icon="check" /> : 'NA'}</td>
      </tr>
    )
  return (
    <Layout>
      <SEO title="Home" 
      desc="About your application here and description of something for
      your search engine optimization."/>
      <MDBContainer className="py-5 my-5">
        <MDBRow>
          <MDBCol md="8" lg="8">
            <MDBAnimation type="fadeInUp" reveal>
              <h1 className="display-4">
                Next.JS Material Design Bootstrap Starter
              </h1>
              <p className="lead">
                Read the documentaion of <a href="https://mdbootstrap.com/docs/react" target="_blank" rel="noopener noreferer" className="black-text">Material Design Bootstrap</a>.
              </p>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow className="py-5 my-5">
          <MDBCol lg="8" md="8">
            <MDBAnimation type="fadeInUp" reveal>
              <h1 className="display-4">What's in this starter?</h1>
              <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th className="h5-responsive">Features</th>
                    <th className="h5-responsive">Status</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {trData}
                </MDBTableBody>
              </MDBTable>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow className="py-4">
          <MDBCol lg="8" md="8">
            <div className="content">
              <h3 className="h3-responsive">
                Check out my other starters
              </h3>
              <div className="d-flex flex-column">
                <a href="https://github.com/fredrekt/gatsby-starter-base-web" target="_blank" rel="noopener noreferer" className="h5-responsive black-text">
                  Gatsby - Minimalist Starter 
                </a>
                <a href="https://github.com/fredrekt/Patterns-Landing-Page" target="_blank" rel="noopener noreferer" className="h5-responsive black-text">
                  React SPA - Patterns Landing Page 
                </a>
                <a href="https://github.com/fredrekt/gatsby-starter-mdbreact" target="_blank" rel="noopener noreferer" className="h5-responsive black-text">
                  Gatsby - MDBReact Starter 
                </a>
                <a href="https://github.com/fredrekt/Minimalist-SPA-Template" target="_blank" rel="noopener noreferer" className="h5-responsive black-text">
                  React SPA - Minimalist Starter 
                </a>
                <a href="https://github.com/fredrekt/minimalist-next-starter" target="_blank" rel="noopener noreferer" className="h5-responsive black-text">
                  Next - Minimalist Starter
                </a>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>  
    </Layout>
  )
}

export default HomePage
