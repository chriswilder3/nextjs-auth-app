"use client"

import { useState } from "react"
import Link  from 'next/link';

export default function LoginPage() {
    const [user,setUser] = useState({
            username : "",
            password : ""
    })

    const onLogin = async () =>{

    }

    return (
        <div className="bg-gray-400 ">
            <h1 className="text-center text-black text-2xl font-medium">
            Welcome to Login!
            </h1>

            <form action="" className="p-4 w-1/2 mx-auto bg-slate-300 flex flex-col gap-1 text-slate-700 font-medium rounded-md">
                <label htmlFor="username">username</label>
                <input type="text" className="rounded"
                    name="username" id="username"
                    value={user.username} 
                    onChange={(e)=>setUser({...user, username : e.target.value})}
                />
                
                <label htmlFor="password"> password </label>
                <input type="password" className="rounded"
                    name="password" id="password"
                    value={user.password} 
                    onChange={(e)=>setUser({...user, password : e.target.value})}
                />

                <button onClick={onLogin}
                    type="submit" className="bg-indigo-600 text-white py-1 px-5 my-1 rounded-md"> 
                    Login 
                </button>
                <span> Not registered? <Link href="/signup" className="text-blue-500">Sign up</Link> </span>
            </form>
        </div>
    )
}