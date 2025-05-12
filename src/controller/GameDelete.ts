import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"
import { Note } from '../entity/Note'

export async function gameDelete(req: Request, res: Response) {
    console.log("-- GameDelete --")
    try {
        const gameId = parseInt(req.params.id)
        if (!isNaN(gameId) && gameId > 0) {
            const gameRepo = AppDataSource.getRepository(Game)
            if (await gameRepo.existsBy({id: gameId})) { // check if game exists
                // get the game and save it to a new variable
                const gameResults = await gameRepo.find(
                    {
                        relations: {
                            notes: true
                        },
                        where: {
                            id: gameId   
                        }
                    }
                )
                const game = gameResults[0] 
                const noteRepo = AppDataSource.getRepository(Note)
                // if there are notes associated with the game, delete all of them
                if (game.notes.length > 0) {
                    game.notes.forEach((note) => {
                        noteRepo.delete({id: note.id})
                    })
                }
                await gameRepo.delete({id: gameId})
                console.log("Success\n")
                res.send({status: "Delete successful"})
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