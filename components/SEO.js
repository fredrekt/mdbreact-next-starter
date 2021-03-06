import React from 'react';
import Head from 'next/head';

const SEO = ({title, desc, img}) => {
    const metaTitle = title ? `${title} | ${process.env.NEXT_PUBLIC_APP_NAME}` : process.env.NEXT_PUBLIC_APP_NAME
    const description = desc ? desc : process.env.NEXT_PUBLIC_APP_DESCRIPTION
    const image = img ? img : process.env.NEXT_PUBLIC_DEFAULT_IMAGE
    const website = process.env.NEXT_PUBLIC_WEBSITE

    return (
        <>
        <Head>
            <title>{metaTitle}</title>
            <meta name="title" content={metaTitle}/>
            <meta name="description" content={description}/>

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content={website}/>
            <meta property="og:title" content={metaTitle}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={website}/>
            <meta property="twitter:title" content={metaTitle}/>
            <meta property="twitter:description" content={description}/>
            <meta property="twitter:image" content={image}/>
        </Head>  
        </>
    )
}

export default SEO
