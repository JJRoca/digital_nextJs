// Categorias.js
import React from 'react';
import Link from 'next/link';
export const fetchCategorias=()=>{
    return fetch("http://localhost:3000/api/categoria")
    .then(res=>res.json());
}

export default async function Categorias(){
    const { categoria }=await fetchCategorias();
    console.log("categorias--------",categoria)
    return(
        <div>
        <h1>Lista de Categorias</h1>
          <Link href="/">Inicio</Link>
          <br />
          <Link href="producto">Producto</Link>
          <br />
          <Link href="usuario">Usuario</Link>
       <table className="border-collapse border w-full">
       <thead>
         <tr>
           <th className="border p-2">ID</th>
           <th className="border p-2">Nombre</th>
           <th className="border p-2">Descripcion</th>
           <th className="border p-2">Estado</th>
         </tr>
       </thead>
       <tbody>
         {categoria.map((value, index) => (
           <tr key={value.id} className={(index + 1) % 2 === 0 ? 'bg-gray' : ''}>
             <td className="border p-2">{index + 1}</td>
             <td className="border p-2">{value.nombre}</td>
             <td className="border p-2">{value.descripcion}</td>
             <td className="border p-2">{value.estado}</td>
           </tr>
         ))}
       </tbody>
     </table>
     </div>
    )
}