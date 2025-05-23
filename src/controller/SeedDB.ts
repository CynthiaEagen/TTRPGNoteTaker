import { Request, Response } from 'express'
import { AppDataSource } from "../data-source"
import { Game } from "../entity/Game"
import { Note, NoteType } from "../entity/Note"

export async function seedDB(req: Request, res: Response) {
    try {
        console.log("Inserting new games into the database...")
        const game = new Game()
        game.name = "Game1"
        game.notes = []
        await AppDataSource.manager.save(game)
        console.log("Saved a new game with id: " + game.id)

        const game2 = new Game()
        game2.name = "Game2"
        game2.notes = []
        await AppDataSource.manager.save(game2)
        console.log("Saved a new game with id: " + game2.id)

        console.log("Inserting new notes into the database...")
        const note1 = new Note()
        note1.game = game
        note1.title = "note1"
        note1.type = NoteType.MISC
        note1.body = "This is note 1"
        note1.tags = ["tag1", "tag2", "tag3"]
        await AppDataSource.manager.save(note1)
        console.log("Saved a new note with id: " + note1.id)

        const note2 = new Note()
        note2.game = game
        note2.title = "note2"
        note2.type = NoteType.PERSON
        note2.body = "This is note 2"
        note2.tags = ["tag4", "tag5", "tag6"]
        await AppDataSource.manager.save(note2)
        console.log("Saved a new note with id: " + note2.id)
        
        res.send("Database seeded")
    } catch (error) {
        console.log(error)
        console.log(error.message)
        res.send(error.message)
    }
    

}