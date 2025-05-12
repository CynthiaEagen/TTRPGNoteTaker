import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"
import { ValidationError } from '../entity/ValidationError'
import { addNotes } from './helper_functions/HelperAddNotes'

export async function gameSave(req: Request, res: Response) {
    console.log('-- GameSave --')
    try {
        const gameRepo = AppDataSource.getRepository(Game)
        const newGame = gameRepo.create(req.body as Partial<Game>)
        // throws a ValidationError if data is not valid
        newGame.validate()
        await gameRepo.save(newGame)

        if (req.body.notes) { // if there are notes, add them to the Notes table
            await addNotes(req.body.notes, newGame.id)
        }
        
        console.log("Success\n")
        res.status(201)
        res.send({status: "Game saved"})
    } catch (err) {
        console.log('Failure: ' + err.message + '\n')
        if (err.message === "SQLITE_CONSTRAINT: UNIQUE constraint failed: game.name") {
            res.status(400)
            res.send({status: "Name already exists"})
        } else if (err.name == "ValidationError") {
            res.status(400)
            res.send({status: err.message})
        } 
        else {
            res.status(500)
            res.send({status: 'Internal server error'})
        }
    }
}