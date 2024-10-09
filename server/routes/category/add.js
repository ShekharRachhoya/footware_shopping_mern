import Category from "../../models/category.js"

const addCategory = async (req, res) => {
try {
    const {name, description} = req.body 

    const data = await Category.findOne({name})

    if (!data) {

      const newDoc =  await Category.create({name, description})

        res.status(200).json(newDoc)
        
    }else{

        res.status(200).json(newDoc)

    }




    
} catch (error) {

    res.status(400).json({message: 'internal server error'})
    
}
    

}


export default addCategory