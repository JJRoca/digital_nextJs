"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !apellidos || !telefono || !email || !username || !password ){
      setError("All fields are necessary.");
      return;
    }

    try {
    //   const resUserExists = await fetch("api/userExists", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   });

    //   const { user } = await resUserExists.json();

    //   if (user) {
    //     setError("User already exists.");
    //     return;
    //   }

      const res = await fetch("api/usuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellidos,
          telefono,
          email,
          username,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("usuario");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            placeholder="Nombre"
          />
          <input
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            placeholder="Apellidos"
          />
           <input
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
            placeholder="Telefono"
          />
          
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
           <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
           <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}