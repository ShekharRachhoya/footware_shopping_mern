import { Router } from "express";
import Admin from "../../models/admin.js";
import jwt from "jsonwebtoken";
import verifyAdmin from "../../middlewares/verifyadmin.js";

const router = Router()



router.post('/login', async (req, res) => {

    const { adminId, password } = req.body
    console.log(req.body)

    try {

        if (!adminId || !password) {

            res.status(400).json({ message: 'invalid cradencial' })

        }

        const data = await Admin.findOne({ adminId, password })

        if (!data) {

            res.status(400).json({ message: 'invalid cradencial' })

        } else {


            const token = jwt.sign({ id: data._id, adminId: data.adminId }, process.env.JWTSECRET);
            res.status(200).json({ token })


        }




    } catch (error) {

        console.log(error)
        res.status(400).json({ message: 'invalid cradencial' })

    }


})






router.get('/verify', verifyAdmin, async(req, res)=>{

res.status(200).json({message:'token was verified'})

})








export default router