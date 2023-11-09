import mongoose from "mongoose";
const {Schema,models,model}=mongoose
import mongooseTypeEmail from "mongoose-type-email"
const usuarioSchema=new Schema({
    nombre:{
        type:String,
        trim:true,
        required:[true,"El nombre es obligatorio"]
    },
    apellidos:{
        type:String,
        trim:true,
        required:[true,"El apellido es obligatorio"]
    },
    telefono:{
        type:Number,
        required:[false],
    },
    email:{
        type: mongoose.SchemaTypes.Email,
        required:[true,"El correo electronico es obligatorio"]
    },
    username:{
        type:String,
        trim:true,
        required:[true,"El username es obligatorio"]
    },
    password:{
        type:String,
        trim:true,
        required:[true,"El password es oblogatorio"]
    },
    // rol_id:{
    //     rol_i
    // },
    estado:{
        type:Boolean,
        default:0
    }
},
{
    timestamps:true
}
)
export default models.Usuario || model("Usuario",usuarioSchema)