import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner from "@/app/image/banner1.png"

export default function Banner() {
    return (
        <div className='bg-gradient-to-r from-[#F4E8F3] to-[#EEE0F9] flex flex-col-reverse md:flex-row items-center md:items-baseline justify-around rounded-3xl gap-10 md:gap-0 py-5 md:py-0'>
            <div className='my-auto space-y-3'>
                <h2 className='text-4xl md:text-5xl font-bold'>Grab Upto 50% Off On <br /> Selected Headphone</h2>
                <Link href="/products" className='btn rounded-3xl bg-[#3A4980] text-white'>Buy Now</Link>
            </div>
            <div>
                <Image src={banner} alt='girl' className='w-fit xl:w-98'/>
            </div>
        </div>
    )
}
