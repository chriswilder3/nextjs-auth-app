"use client" // Since servers components are exclusive to servers and
            // client components to client, we need to include this stmt
            // to make it a client component.

import Link from "next/link" // similar to React router's Link
import React from "react"
import { useRouter } from "next/navigation" // Why is this used? in
            // addition to file based routing, we need dynamic routing for
            // programatic navigation,access route parameters ([id]) etc 
import axios from "axios"

export default function (){
    const [user, setUser] = React.useState({
        email : "",
        username : "",
        password : ""
    }) // a state var to store userinfo, vals initialized to ""

    const onSignUp = async () =>{

    }

    return (
        <div className="bg-gray-700">
            <h1 className="text-center text-white text-2xl font-medium">
            Welcome to Sign up!
            </h1>

            <form action="" className="p-4 w-1/2 mx-auto bg-slate-300 flex flex-col gap-1 text-slate-700 font-medium rounded-md">
                <label htmlFor="username">username</label>
                <input type="text" className="rounded"
                    name="username" id="username"
                    value={user.username} 
                    onChange={(e)=>setUser({...user, username : e.target.value})}

                />
    
                <label htmlFor="email">email</label>
                <input type="email" className="rounded"
                    name="email" id="email"
                    value={user.email} 
                    onChange={(e)=>setUser({...user, email : e.target.value})}
                />
                
                <label htmlFor="password"> password </label>
                <input type="password" className="rounded"
                    name="password" id="password"
                    value={user.password} 
                    onChange={(e)=>setUser({...user, password : e.target.value})}
                />

                <button onClick={onSignUp}
                    type="submit" className="bg-indigo-600 text-white py-1 px-5 my-1 rounded-md"> 
                    Register 
                </button>
                <span> Already have an account? <Link href="/login" className="text-blue-500">Login</Link> </span>
            </form>
        </div>
    )
}