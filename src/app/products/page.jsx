import React from 'react'
import getAllProducts from '../../../lib/getAllProducts'
import Link from 'next/link';

export const metadata = {
    title: "SALFORD | Products",
    description: "Generated",
    icons: {
        icon: "/logo/logo1.png", // your logo or favicon path
    },
};

export default async function Products() {
    const products = await getAllProducts();
    return (
        <div className='my-10 lg:my-20'>
            <h2 className='text-4xl font-bold mb-5'>This is products page</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-auto'>
                {
                    products.map((p) => (
                        <div key={p._id} className='card w-80 mx-auto rounded-2xl space-y-3 shadow-2xl'>
                            <img src={p?.image} className='w-80 h-52 object-fill mx-auto rounded-t-2xl'/>
                            <h2 className='mx-2 text-xl font-semibold'>{p?.name}</h2>
                            <h2 className='mx-2 text-base font-semibold'>{p?.price}$</h2>
                            <Link href={`/products/${p._id}`} className='btn rounded-3xl bg-[#3A4980] text-white mx-2 mb-3'>View Details</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}