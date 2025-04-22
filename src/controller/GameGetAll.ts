import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"

export async function gameGetAll(req: Request, res: Response) {
    console.log("-- GameGetAll --")
    try {
        const gameRepo = AppDataSource.getRepository(Game)
        const games = await gameRepo.find()
        console.log("Success\n")
        res.send(games)
    } catch (err) {
        console.log('Failure: ' + err.message + '\n')
        res.status(500)
        res.send({status: 'Internal server error'})
    }
}