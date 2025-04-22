import { AppDataSource } from "./data-source"
import { AppRoutes } from "./routes"
import * as express from 'express'
import { Request, Response } from 'express'

AppDataSource.initialize().then(async () => {

    const app = express()
    app.use(express.json())
    
    AppRoutes.forEach(route => {
        app[route.method](route.path, (req: Request, res: Response, next: Function) => {
            route.action(req, res)
                 .then(() => next)
                 .catch(err => next(err))
        })
    })

    app.listen(3000)

    console.log("Express app listening on port 3000")
    
}).catch(error => console.log(error))
