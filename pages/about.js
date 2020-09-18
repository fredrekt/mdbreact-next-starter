import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About Us" 
            desc="What you need to know about us. Find out more here."/>
            <MDBContainer>
                <h1>Hello About</h1>
                <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur metus at viverra suscipit. Morbi efficitur lectus eget arcu suscipit pretium ac sit amet massa. Sed quis laoreet magna. Aliquam erat volutpat. Donec semper dictum nisl nec molestie. Fusce sit amet mi metus. Quisque rhoncus arcu nec velit pharetra, vitae finibus elit vestibulum. Etiam feugiat cursus neque, porttitor blandit massa. Cras nisl mi, bibendum gravida bibendum vestibulum, blandit eu orci. Nam in pharetra purus. In et elit et odio viverra tempus eu volutpat ante. Proin quis lacus non ante viverra feugiat in posuere risus. Morbi congue, tortor non molestie feugiat, lorem ante fermentum velit, eget ultrices quam leo vitae nisi. Cras non bibendum elit.
                </p>
                <p className="lead">
                Sed sollicitudin, tellus non bibendum pharetra, velit leo dignissim nibh, ut molestie ligula nisl ut orci. Etiam ut urna eros. Duis arcu neque, imperdiet eget eros euismod, commodo luctus velit. Donec faucibus neque id bibendum tempus. Nam eget efficitur diam, sit amet finibus elit. Ut augue lorem, rutrum ac semper in, congue et purus. Nunc elit felis, sagittis facilisis lacus non, placerat bibendum risus. Vivamus aliquet diam tincidunt, pulvinar sem nec, consequat ligula.
                </p>
                <p className="lead">
                In ut mi scelerisque, tincidunt ante non, condimentum nunc. Praesent mi augue, lacinia sit amet dolor congue, luctus convallis neque. Vivamus ac nisl eu lorem volutpat ultricies dapibus placerat eros. Aliquam laoreet accumsan leo, in pellentesque purus porttitor laoreet. Donec pulvinar feugiat ultrices. Nulla ut fermentum nisi. Phasellus pretium vitae ligula vitae vulputate. Maecenas risus ante, viverra quis volutpat sed, aliquet eget velit.
                </p>
                <p className="lead">
                Phasellus velit velit, commodo eu feugiat vitae, gravida ac ante. Ut rhoncus, lacus congue elementum mattis, elit magna aliquet justo, a cursus eros sem ut sapien. Ut dignissim libero ut dui semper consectetur. Nunc fermentum tristique urna sed tincidunt. Pellentesque viverra at nibh ac eleifend. Donec mattis ligula posuere iaculis molestie. Vivamus sed pellentesque velit. Quisque tristique blandit leo at egestas. Cras at mauris ante. Curabitur erat lectus, pellentesque eu justo sed, pulvinar faucibus sapien. Donec tincidunt hendrerit ex dignissim pretium. Proin quis tellus sapien.
                </p>
                <p className="lead">
                Quisque nec nisi quis neque maximus pulvinar ut quis urna. Quisque porttitor purus id libero efficitur, nec dictum magna pellentesque. Quisque a dapibus leo, at lacinia erat. Vestibulum vitae mauris et enim rutrum mattis. Donec viverra sem eget elit tincidunt ullamcorper. Nulla consectetur, felis et consequat venenatis, sem sapien consequat tortor, nec fermentum purus lacus a nibh. Donec ac sem in felis viverra feugiat quis scelerisque velit. Suspendisse potenti. Curabitur tempor enim eu feugiat lobortis. Ut eu luctus augue, et ultricies libero.
                </p>
            </MDBContainer>
        </Layout>
    )
}

export default AboutPage
