import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Categoria from "@/models/categoria";
import { connectDB } from "@/libs/mongoose";

export async function GET(request,{params}){
  try {
    await connectDB();
    const id=params.id;
    const categoria=await Categoria.findById(id);
    console.log("categoria-----------",categoria)
    if (!categoria){
      return NextResponse({
        mensaje:"Categoria no encontrado"
      },{status:400})
    }
    return NextResponse.json({
      categoria
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
      const categoria= await Categoria.deleteOne({'_id':id});
      
      if(!categoria){
          return NextResponse({
              mensaje:"Categoria no encontrada"
          },{status:400})
      }

      return NextResponse.json({
      categoria
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
      const categoriaUpdated=await Categoria.findByIdAndUpdate(id,data,{new:true});
      
      if(!categoriaUpdated){
          return NextResponse({

              mensaje:"Categoria no encontrada"
          },{status:400})
      }

      return NextResponse.json({
          categoriaUpdated
      })
  } catch (error) {
      console.log(error)
      return NextResponse(error.mensaje,{status:400})
  }
}