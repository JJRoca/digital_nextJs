import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Cliente from "@/models/cliente";

export async function GET(request,{params}){
  try {
    await connectDB();
    const id=params.id;
    const cliente=await Cliente.findById(id);
    if (!cliente){
      return NextResponse({
        message:"Cliente no encontrado"},
        {status:400})
    }
    return NextResponse.json({
      cliente
    })
  } catch (error) {
    console.log(error);
    return NextResponse(error.message,{status:400})
  }
}
export async function DELETE(request,{params}){
  try {
    await connectDB();
    const id=params.id;
    const cliente=await Cliente.findByIdAndDelete(id);
    return NextResponse.json({
      cliente
    })
  } catch (error) {
    
  }
}

export async function PUT(request,{params}){
  try {
    await connectDB();
    const data=await request.json()
    const id=params.id;
    const clienteUpdated=await Cliente.findByIdAndUpdate(id,data,{new:true})
    if (!clienteUpdated){
      return NextResponse(
        {message:"Cliente no actualizado"},
        {status:400}
      )
    }
    return NextResponse.json({
      clienteUpdated
    })
  } catch (error) {
    console.log(error);
    return NextResponse(error.message,{status:400})
  }
}