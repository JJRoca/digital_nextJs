import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongoose";
import Usuarios from "@/models/usuario";
import bcrypt from "bcryptjs";

export async function GET(){
  try {
    await connectDB();
    const usuarios= await Usuarios.find();
    return NextResponse.json({
      usuarios
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
    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(data.password, 10); // Hash con una sal de 10 rondas
    data.password=hashedPassword;

    const newUsuario=new Usuarios(data);
    const respuesta=await newUsuario.save()
    return NextResponse.json({
      respuesta
    })
  } catch (error) {
    console.log(error);
    return NextResponse(error.message,{status:400})
  }
}