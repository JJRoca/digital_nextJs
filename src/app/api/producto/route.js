import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Productos from "@/models/producto"

// export async function GET() {
//   try {
//     await connectDB();
//     const productos = await Productos.find();

//     // Perform a lookup join to fetch the corresponding category name
//     const productosWithCategoryNames = await Productos.populate(productos, {
//       path: "categoria",
//       select: "nombre",
//     });

//     return NextResponse.json({
//       productos: productosWithCategoryNames,
//     });
//   } catch (error) {
//     console.log(error);
//     return NextResponse(error.message, { status: 400 });
//   }
// }
export async function GET(){
    try {
      await connectDB();
      const producto=await Productos.find()
      return NextResponse.json({
        producto
      })  
    } catch (error) {
        console.log(error);
        return NextResponse(error.message,{status:400})
    }
}




export async function POST(request){
  try {
    await connectDB();
    const data=await request.json();
    const newProducto=new Productos(data);
    const respuesta=await newProducto.save();
    console.log(respuesta);
    return NextResponse.json({
      respuesta
    })
  } catch (error) {
    console.log(error);
    return NextResponse(error.message,{status:400})
  }
}