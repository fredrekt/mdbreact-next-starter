import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            <div className="p-4 d-flex justify-content-between black-all">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar
