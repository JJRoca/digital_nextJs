"use client";
import Link from 'next/link';
import { useRouter} from "next/navigation";

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Inicio',
    },
    {
      href: '/about',
      title: 'Mantenimiento',
    },
    {
      href: '/contact',
      title: 'Movimientos',
    },
    {
      href: '/contact',
      title: 'Reportes',
    },  {
      href: '/contact',
      title: 'Administracion',
    },
  ];

  return (
    <div className='min-h-screen flex flex-col'>
      <header style={{background:"#66d9ef"}} className='bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase'>
        Digital Gomez 
      </header>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-fuchsia-100 w-full md:w-60' style={{background:"#D3D3D3",paddingRight:15}}>
          <div style={{paddingTop:100}}>
            <nav style={{background:"white", paddingTop:15,paddingBottom:15}}  >
              <ul>
                {menuItems.map(({ href, title }) => (
                  <li className='m-2' key={title}>
                  <Link legacyBehavior href={href}>
                  <a
                    className={`flex p-2 bg-white-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
                      router.asPath === href && 'bg-fuchsia-600 text-white'
                    }`}
                  >
                    {title}
                  </a>
                </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
       <main className='flex-1'style={{background:"black"}} >{children} 
              {/* Aquí colocamos las imágenes */}
          <div className='flex justify-around mt-4'>
            <Link legacyBehavior href="">
              <a className='mx-2'> 
                <img src='logoCliente.png' alt='Clientes' />
              </a>
            </Link>
            <Link legacyBehavior href="">
              <a className='mx-2'>
                <img src='logoUsuario.png' alt='Usuarios' />
              </a>
            </Link>
          </div>
          <div className='flex justify-around mt-4'>
            <Link legacyBehavior href="">
              <a className='mx-2'>
                <img src='logoProducto.png' alt='Productos' />
              </a>
            </Link>
            <Link legacyBehavior href="">
              <a className='mx-2'>
                <img src='logoVenta.png' alt='Categorías' />
              </a>
            </Link>
          </div>
          <div className='flex justify-around mt-4'> 
            <Link legacyBehavior href="">
              <a className='mx-2'> 
                <img src='logoCompra.png' alt='Compras' />
              </a>
            </Link>
          </div> 
          {/* Resto del contenido */}
          {children}
        </main>
      </div>
    </div>
  );
}
