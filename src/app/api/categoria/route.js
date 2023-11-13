import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Categorias from "@/models/categoria";

export async function GET(){
  try {
    await connectDB();
    const categoria=await Categorias.find();
    return NextResponse.json({
      categoria
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
    const newCategoria=new Categorias(data);
    const respuesta=await newCategoria.save();
    console.log(respuesta);
    return NextResponse.json({
      respuesta
    });
  } catch (error) {
    console.log(error);
    return NextResponse(error.message,{status:400});
  }
}