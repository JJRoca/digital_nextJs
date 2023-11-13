// Productos.js
import React from 'react';
import Link from 'next/link';
export const fetchProductos = () => {
  return fetch("http://localhost:3000/api/producto")
    .then(res => res.json());
}

export default async function Productos() {
  const { producto } = await fetchProductos();
  console.log("productos---", producto);

  return (
    <div>
       <h1>Lista de productos</h1>
          <Link href="/">Inicio</Link>
          <br/>
          <Link href="categoria">Categoria</Link>
          <br />
          <Link href="usuario">Usuario</Link>
          
      <table className="border-collapse border w-full">
      <thead>
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Nombre</th>
          <th className="border p-2">Descripcion</th>
          <th className="border p-2">Costo Elaboracion</th>
          <th className="border p-2">Precio</th>
          <th className="border p-2">Stock</th>
          <th className="border p-2">Categoria</th>
        </tr>
      </thead>
      <tbody>
        {producto.map((value, index) => (
          <tr key={value.id} className={(index + 1) % 2 === 0 ? 'bg-gray' : ''}>
            <td className="border p-2">{index + 1}</td>
            <td className="border p-2">{value.nombre}</td>
            <td className="border p-2">{value.descripcion}</td>
            <td className="border p-2">{value.costo_elaboracion}</td>
            <td className="border p-2">{value.precio}</td>
            <td className="border p-2">{value.stock}</td>
            <td className="border p-2">{value.categoria_id}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
}
