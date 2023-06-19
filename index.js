import {prismaClient } from "@prisma/client"
import express from "express"

const prisma = new PrismaClient();

const app = express();

app.use(express.json())




app.use((req, res, next) => {
    res.status(404)
    return res.json({
        success: false,
        payload: null,
        message: 'APY SAYS: endpoint not not fuound for path: ${req.path}',
    })
})

app.listen(process.env.port || 8000, () =>
 console.log('server ready at http://localhost:8000')
)