import React from 'react';
import { MDBCol } from 'mdbreact';
import Link from 'next/link';

const BlogPreview = ({blogs}) => {
    const previewBlogs = blogs && blogs.map(i => {
        return(
            <MDBCol className="py-5" key={i.id} md="4" lg="4">
                <img src={i.preview.url} alt="" className="w-100"/>
                <div className="content my-3">
                    <h3 className="h3-responsive">{i.title}</h3>
                    <p className="lead">{i.description}</p>
                    <Link href="/blog/[title]" as={`/blog/${i.title}`}>
                        <a className="black-text">
                            Read Blog
                        </a>    
                    </Link>
                </div>
            </MDBCol>
        )
    })
    return (
        <>
        {previewBlogs} 
        </>
    )
}

export default BlogPreview
