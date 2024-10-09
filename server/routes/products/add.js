import Product from "../../models/product.js";


// Product creation route (POST /api/products)
const addProduct = async (req, res) => {
    try {
        const { name, taxes, description, price, category, stock } = req.body;

        // Check if required fields are provided
        if (!name || !description || !price || !category || !stock) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        // Handle uploaded images
        const images = req.files.map(file => file.path.slice(6)); // Paths of uploaded images

        // Create new product
        const newProduct = new Product({
            name,
            description,
            price,
            category,
            stock,
            images,
            taxes // Add the uploaded image paths
        });

        // Save the product to MongoDB
        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error while creating product:', error);
        res.status(500).json({ message: 'Server error' });
    }
}



export default addProduct