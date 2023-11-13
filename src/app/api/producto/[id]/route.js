import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Producto from "@/models/producto";
import { connectDB } from "@/libs/mongoose";

export async function GET(request,{params}){
  try {
    await connectDB();
    const id=params.id;
    const producto=await Producto.findById(id);
    console.log("producto-----------",producto)
    if (!producto){
      return NextResponse({
        mensaje:"Producto no encontrado"
      },{status:400})
    }
    return NextResponse.json({
      producto
    })
  } catch (error) {
    console.log(error);
    return NextResponse(error.message,{status:400})
  }
}

export async function DELETE(request,{params}){
  try {
      await connectDB();
      const id = params.id;
      const producto= await Producto.deleteOne({'_id':id});
      
      if(!producto){
          return NextResponse({
              mensaje:"Producto no encontrada"
          },{status:400})
      }

      return NextResponse.json({
      producto
      })
  } catch (error) {
      console.log(error)
      return NextResponse(error.mensaje,{status:400})
  }
}

export async function PUT(request,{params}){
  try {
      await connectDB();
      const data = await request.json();
      const id = params.id; 
      const productoUpdated=await Producto.findByIdAndUpdate(id,data,{new:true});
      
      if(!productoUpdated){
          return NextResponse({
              mensaje:"Producto no encontrada"
          },{status:400})
      }

      return NextResponse.json({
          productoUpdated
      })
  } catch (error) {
      console.log(error)
      return NextResponse(error.mensaje,{status:400})
  }
}