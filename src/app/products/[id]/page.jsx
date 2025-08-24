import React from 'react'
import getProduct from '../../../../lib/getProduct';
// import { authOptions } from '@/app/api/auth/[...nextauth]/route';
// import { getServerSession } from 'next-auth';
// import { redirect } from 'next/navigation';

export async function generateMetadata({ params }) {
    const {id} = params;
    const product = await getProduct({id});
    return {
        title: product?.name,
        description: product.description,
    };
};


export default async function Product({params}) {
    const {id} = params;
    const product = await getProduct({id});
    // const session = await getServerSession(authOptions);
    return (
        <div className='my-10'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>{product.name}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='space-y-4 my-3 pl-5'>
                    <h3>{product.price}$</h3>
                    <h2 className='text-xl font-semibold'>Description</h2>
                    <p>{product.description}</p>
                    <h2 className='text-xl font-semibold'>Product Details</h2>
                    {
                        product.productDetails.map((p, index) => (
                            <li key={index}>{p}</li>
                        ))
                    }
                </div>
                <img src={product.image} alt="" className='w-full' />
            </div>
        </div>
    )
    // else{
    //     redirect("/register");
    // };
}