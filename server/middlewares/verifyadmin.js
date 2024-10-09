import jwt from "jsonwebtoken"
import Admin from "../models/admin.js"

const verifyAdmin = async (req, res, next) => {

    const token = req.headers['token']

    try {

        const { id, adminId } = jwt.verify(token, process.env.JWTSECRET)

        const count = await Admin.countDocuments({ _id: id, adminId })

        if (count >= 1) {

            next()

        } else {

            res.status(400).json({ message: 'invalid token' })


        }


    } catch (error) {


        res.status(400).json({ message: 'invalid token' })

    }




}




export default verifyAdmin