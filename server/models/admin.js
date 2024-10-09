import { model, Schema } from "mongoose";


const adminSchema = new Schema({

    name:String,
    
    adminId: {
        type: String,
        require: true
    },

    password : {
        type:String,
        required:true
    }


})


const Admin = model('Admin', adminSchema)

export default Admin