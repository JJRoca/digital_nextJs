import mongoose from "mongoose";
const {Schema,model,models}=mongoose;

const clienteSchema=new Schema({
    nombre:{
        type:String,
        trim:true,
        required:[true,"EL nombre es obligatorio"]
    },
    telefono:{
        type:Number
    },
    direccion:{
        type:String,
        trim:true,
    },
    visible:{
        type:Boolean,
        default:true
    },
    C_I:{
        type:Number,
        required:[true,"El Carnet de identitdad es obligatorio"]
    },
    estado:{
        type:Boolean,
        default:0
    },
    sexo:{
        type:String,
        enum:["Masculino","Femenino"]
    }
},
{
    timestamps:true
}
);
export default models.Cliente || model('Cliente',clienteSchema);