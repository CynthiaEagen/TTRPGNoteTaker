import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"
import { Note } from '../entity/Note'
import { ValidationError } from '../entity/ValidationError'
import { addNotes } from './helper_functions/HelperAddNotes'

export async function noteSave(req: Request, res: Response) {
    console.log('-- NoteSave --')
    try {
        const noteRepo = AppDataSource.getRepository(Note)
        const game = await AppDataSource.getRepository(Game).findOneBy({id: req.body.game})
        const note = new Note()
        note.game = game
        note.title = req.body.title
        note.type = req.body.type
        note.body = req.body.body
        note.tags = req.body.tags
        // throws a ValidationError if data is not valid
        note.validate()
        await noteRepo.save(note)
        console.log("Success\n")
        res.status(201)
        res.send({status: "Note saved"})
    } catch (err) {
        console.log('Failure: ' + err.message + '\n')
        if (err.message === "SQLITE_CONSTRAINT: UNIQUE constraint failed: note.noteUniqueId") {
            res.status(400)
            res.send({status: "Title already exists"})
        } else if (err.name == "ValidationError") {
            res.status(400)
            res.send({status: err.message})
        } else {
            res.status(500)
            res.send({status: 'Internal server error'})
        }
    }
}