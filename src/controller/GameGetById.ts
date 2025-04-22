import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"

export async function gameGetById(req: Request, res: Response) {
    console.log("-- GameGetById --")
    try {
        const gameId = parseInt(req.params.id)

        if (!isNaN(gameId) && gameId > 0) {
            const gameRepo = AppDataSource.getRepository(Game)
            const game = await gameRepo.findOneBy({id: gameId})
            
            if (game != null) { // game found, sending to client
                console.log("Success\n")
                res.send(game)
            } else { // game not found
                console.log('Game at ID ' + req.params.id + ' not found\n')
                res.status(404)
                res.send({status: 'Game at ID ' + req.params.id + ' not found'})
                return
            }
        } else { // ID is not a number or is less than 0
            console.log('Invalid ID: ' + req.params.id + '\n')
            res.status(400)
            res.send('Invalid ID: ' + req.params.id)
        }        
    } catch (err) {
        console.log('Failure: ' + err.message + '\n')
        res.status(500)
        res.send({status: 'Internal server error'})
    }
}