import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taxes: {

        type: Number,
        default:0
          
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },


    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    images: [String],
}, {
    timestamps: true,
});

const Product = model('Product', productSchema);

export default Product