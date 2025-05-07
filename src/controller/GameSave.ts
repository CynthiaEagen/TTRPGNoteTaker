import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"
import { ValidationError } from '../entity/ValidationError'
import { addNotes } from './helper_functions/HelperAddNotes'

export async function gameSave(req: Request, res: Response) {
    console.log('-- GameSave --')
    try {
        const gameRepo = AppDataSource.getRepository(Game)
        //#region Input Validation
        // SQLite doesn't enforce varchar length, so we have to enforce it manually 
        if (req.body.name.length > 60) {
            throw new ValidationError("Name greater than 60 characters")
        }
        if (req.body.name === '') {
            throw new ValidationError("Name empty")
        }
        //#endregion Input Validation
        
        const newGame = gameRepo.create(req.body)
        await gameRepo.save(newGame)

        if (req.body.notes) { // if there are notes, add them to the Notes table
            await addNotes(req.body.notes, newGame)
        }
        console.log("Success\n")
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