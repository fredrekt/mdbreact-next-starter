import React from 'react'

const BlogHeader = ({node}) => {
    return (
        <>
        <h1 className="display-2">{node.title}</h1> 
        </>
    )
}

export default BlogHeader
