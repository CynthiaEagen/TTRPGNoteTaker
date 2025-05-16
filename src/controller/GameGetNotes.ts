import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"
import { GetGameWithNotes } from './helper_functions/HelperGetGameWithNotes'

export async function gameGetNotes(req: Request, res: Response) {
    console.log("-- GameGetNotes --")
    try {
        const gameId = parseInt(req.params.id)

        if (!isNaN(gameId) && gameId > 0) {
            const game = await GetGameWithNotes(gameId)
            if (game !== null) {
                console.log(game)
                console.log("Success")
                res.send(game.notes)
            } else {
                console.log('Game at ID ' + req.params.id + ' not found\n')
                res.status(404)
                res.send({status: 'Game at ID ' + req.params.id + ' not found'})
                return
            }
        }
    } catch (err) {
        console.log('Failure: ' + err.message + '\n')
        res.status(500)
        res.send({status: 'Internal server error'})
    }
}