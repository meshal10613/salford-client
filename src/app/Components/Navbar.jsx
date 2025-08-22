"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
    const pathname = usePathname();
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>; // optional
    }

    const links = [
        { name: "Home", href: "/" },
        { name: "Products", href: "/products" },
        { name: "Dashboard", href: "/dashboard/addProducts" },
    ];

    return (
    <div className="navbar px-[1%] md:px-[5%] 2xl:px-[7%]">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links.map((link) => (
                            <Link
                            key={link.href}
                            href={link.href}
                            className={`${
                                pathname === link.href
                                ? "text-[#EEE0F9] font-bold border-b-2 border-[#EEE0F9]"
                                : "text-black hover:text-[#EEE0F9]"
                            } mb-3`}
                            >
                            {link.name}
                            </Link>
                        ))}
                </ul>
            </div>
            <Link href="/" className="flex items-center gap-1">
                <img src="/logo/logo1.png" alt='logo' className='w-12'/>
                <h2 className='text-2xl font-semibold'>SALFORD</h2>
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5 text-black">
                {links.map((link) => (
                    <Link
                    key={link.href}
                    href={link.href}
                    className={`${
                        pathname === link.href
                        ? "font-bold border-b-2 border-[#EEE0F9]"
                        : ""
                    } mb-3`}
                    >
                    {link.name}
                    </Link>
                ))}
            </ul>
        </div>
        <div className="navbar-end">
            {
                session?
                <div>
                    <button onClick={() => signOut({ callbackUrl: "/" })} className='btn rounded-3xl bg-[#3A4980] text-white'>Signout</button>
                </div> :
                <div>
                    <button onClick={() => signIn()} className='btn rounded-3xl bg-[#3A4980] text-white'>Login</button>
                    <Link href="/register" className='btn rounded-3xl bg-[#3A4980] text-white'>Register</Link>
                </div>
            }
        </div>
    </div>
    )
}
