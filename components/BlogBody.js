import Markdown from 'markdown-to-jsx'
import React from 'react'

const BlogBody = ({node}) => {
    return (
        <>
        <Markdown className="lead">
            {node.content.markdown}
        </Markdown>   
        </>
    )
}

export default BlogBody
