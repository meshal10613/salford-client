"use client";

import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

export default function RegisterForm() {
    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const payload = { username, email, password, role: "user" };
        fetch("https://salford-server.vercel.app/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(async(data) => {
            if(data.insertedId){
                Swal.fire({
                    title: "Congratulations!",
                    text: "Register Successfully",
                    icon: "success"
                });

                // ✅ Immediately log the user in
                await signIn("credentials", {
                    redirect: true, // auto-redirect after login
                    email,
                    password,
                    callbackUrl: "/", // where to redirect after login
                });
            }else{
                Swal.fire({
                    title: "Sorry!",
                    text: `${data.message}`,
                    icon: "error"
                });
            }
        })
    };
    return (
        <div className="flex items-center justify-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Username</label>
                        <input type="text" name="username" className="input" placeholder="Username" />
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type="submit" className="btn btn-neutral mt-4">register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}