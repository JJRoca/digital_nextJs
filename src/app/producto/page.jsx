import Link from "next/link";
// Table.js
import React from 'react';
export const fetchProductos=()=>{
  return fetch("http://localhost:3000/api/producto")
  .then(res=>res.json());
}

export default async function Productos(){
  const {producto}=await fetchProductos();
  console.log("producots---",producto);
  return(
    <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Descripción</th>
        {/* Agrega más encabezados según tus necesidades */}
      </tr>
    </thead>
    <tbody>
      {producto.map((item,index) => (
        <tr key={item.id}>
          <td>{index+1}</td>
          <td>{item.nombre}</td>
          <td>{item.descripcion}</td>
          {/* Agrega más celdas según tus necesidades */}
        </tr>
      ))}
    </tbody>
  </table>
  );
}


