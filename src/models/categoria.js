import mongoose from "mongoose";
const {Schema,model,models}=mongoose;

const categoriaSchema=new Schema({
  nombre:{
    type:String,
    trim:true,
    required:[true,"El nombre es obligatorio"]
  },
  descripcion:{
    type:String,
    trim:true
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

export default models.Categoria || model("Categoria",categoriaSchema);