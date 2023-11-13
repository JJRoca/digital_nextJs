import Link from "next/link";

  export const fecthUsuarios=()=>{
    return fetch("http://localhost:3000/api/usuario")
    .then(res=>res.json())
  }
  export default async function Usuarios(){
    const { usuarios }=await fecthUsuarios();
    return (
      <div>
        <h1>Lista de usuarios</h1>
        <Link href="/">Inicio</Link>
        <br />
        <Link href="producto">Producto</Link>
        <br />
        <Link href="categoria">Categoria</Link>
        <br />
        <table className="border-collapse border w-full">
       <thead>
         <tr>
           <th className="border p-2">ID</th>
           <th className="border p-2">Nombre</th>
           <th className="border p-2">Apellidos</th>
           <th className="border p-2">Telefono</th>
           <th className="border p-2">Email</th>
           <th className="border p-2">Username</th>
           <th className="border p-2">Password</th>
         </tr>
       </thead>
       <tbody>
         {usuarios.map((value, index) => (
           <tr key={value.id} className={(index + 1) % 2 === 0 ? 'bg-gray' : ''}>
             <td className="border p-2">{index + 1}</td>
             <td className="border p-2">{value.nombre}</td>
             <td className="border p-2">{value.apellidos}</td>
             <td className="border p-2">{value.telefono}</td>
             <td className="border p-2">{value.email}</td>
             <td className="border p-2">{value.username}</td>
             <td className="border p-2">{value.password}</td>
           </tr>
         ))}
       </tbody>
     </table>
      
      </div>
    )
  }
