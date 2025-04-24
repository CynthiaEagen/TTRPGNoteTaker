import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"

export async function gameSave(req: Request, res: Response) {
    console.log('-- GameSave --')
    try {
        const gameRepo = AppDataSource.getRepository(Game)
        // TODO: there is probably a better solution for this error handling check. Why isn't SQLite throwing an error?
        if (req.body.name.length > 60) {
            throw new Error("Name greater than 60 characters")
        }
        if (req.body.name === '') {
            throw new Error("Name empty")
        }
        const newGame = gameRepo.create(req.body)
        await gameRepo.save(newGame)
        console.log("Success\n")
        res.send({status: "Game saved"})
    } catch (err) {
        console.log('Failure: ' + err.message + '\n')
        // TODO: Is there a better way of handling these similar errors?
        // client side validation will avoid 90% of their use, but still
        if (err.message === "SQLITE_CONSTRAINT: UNIQUE constraint failed: game.name") {
            res.status(400)
            res.send({status: "Name already exists"})
        } else if (err.message === "Name greater than 60 characters") {
            res.status(400)
            res.send({status: err.message})
        } else if (err.message === "Name empty") {
            res.status(400)
            res.send({status: err.message})
        }
        else {
            res.status(500)
            res.send({status: 'Internal server error'})
        }
    }
}