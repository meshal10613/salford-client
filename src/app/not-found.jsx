import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='text-3xl'>The requested resources not found!</h2>
            <Link href="/" className='btn rounded-3xl bg-[#3A4980] text-white'>Back to Home</Link>
        </div>
    )
}
