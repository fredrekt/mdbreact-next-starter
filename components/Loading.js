import { MDBContainer } from 'mdbreact'
import React from 'react'
import Layout from './Layout'

const Loading = () => {
    return (
        <>
        <div className="position-fixed w-100 h-100 align-items-center text-center justify-content-center d-flex mx-auto">
            <img src="/assets/images/pulse-loading.gif" alt="Rendering Content"/>
        </div>
        </>
    )
}

export default Loading
