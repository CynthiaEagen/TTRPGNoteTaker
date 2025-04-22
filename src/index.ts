import { AppDataSource } from "./data-source"
import { Game } from "./entity/Game"
import { Note, NoteType } from "./entity/Note"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new game into the database...")
    const game = new Game()
    game.name = "Test"
    game.notes = []
    await AppDataSource.manager.save(game)
    console.log("Saved a new game with id: " + game.id)

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


}).catch(error => console.log(error))
