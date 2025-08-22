"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

export default function AddProducts() {
    const { data: session, status } = useSession();

    const router = useRouter();

    if (status === "loading") {
        return <p>Loading...</p>; // optional: show loading state
    }

    if (status === "unauthenticated") {
        router.push("/api/auth/signin"); // redirect to login page
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Convert types
        data.price = Number(data.price);
        data.productDetails = data.productDetails
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);

        // send to API
        const res = await fetch("https://salford-server.vercel.app/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (res.ok) {
            Swal.fire({
                title: "Congratulations!",
                text: "Headphone added Successfully",
                icon: "success"
            });
        }else{
            Swal.fire({
                title: "Sorry!",
                text: `${res.message}`,
                icon: "error"
            });
        }
    };

    return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl ">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full p-2 border rounded-lg"
            required
            />

            {/* Image */}
            <input
            type="url"
            name="image"
            placeholder="Image URL"
            className="w-full p-2 border rounded-lg"
            required
            />

            {/* Price */}
            <input
            type="number"
            name="price"
            placeholder="Price"
            className="w-full p-2 border rounded-lg"
            required
            />

            {/* Description */}
            <textarea
            name="description"
            placeholder="Description"
            className="w-full p-2 border rounded-lg"
            required
            />

            {/* Product Details */}
            <input
            type="text"
            name="productDetails"
            placeholder="Product Details (comma separated)"
            className="w-full p-2 border rounded-lg"
            required
            />
            <p className="text-sm text-gray-500">Example: Bluetooth 5.0, Noise Cancelling, 20hr Battery</p>

            <button
            type="submit"
            className="btn btn-block rounded-3xl bg-[#3A4980] text-white"
            >
            Add Product
            </button>
        </form>
    </div>
    )
}