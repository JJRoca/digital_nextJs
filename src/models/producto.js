import mongoose from "mongoose";
const {Schema,model,models,ObjectId}=mongoose;

const productoSchema=new Schema({
    nombre:{
    type:String,
    trim:true,
    required:[true,"Este campo es obligatorio"]
    },
    descripcion:{
      type:String,
      trim:true
    },
    costo_elaboracion:{
      type:Number,
      required:[true,"Ingrese el costo de elaboracion"]
    },
    precio:{
      type:Number,
      required:[true,"El precio es obligatorio"]
    },
    stock:{
      type:Number,
      required:[true,"Ingrese un stock"]
    },
    categoria_id:{
      type:ObjectId,
      ref:"Categoria"
    },
    estado:{
      type:Boolean,
      default:true
    }
},
{
  timestamps:true
}
);
export default models.Producto || model("Producto",productoSchema);
