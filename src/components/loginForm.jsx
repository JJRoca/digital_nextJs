"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(email,password)
      console.log(res)
      if (res.error) {
        setError("Invalid Credentials");
        console.log("entro",res.error)
        return;
      }
      console.log("login true")
      router.replace("main");
    } catch (error) {
      console.log("type of error",error);
    }
  };

  return (
    <div className="grid place-items-center h-screen" style={{background:"black"}}>
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400" >
      
        <div className="flex justify-center mb-4">
          <img src="logo.png" style={{height:200}} alt="Logo" />
        </div>

        <h1 className="text-xl font-bold my-4" style={{color:"white"}} >Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            style={{ width: '100%' }} // Agrega el estilo para color negro
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}