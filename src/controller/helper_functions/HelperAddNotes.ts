import { AppDataSource } from "../../data-source"
import { Game } from "../../entity/Game"
import { Note } from "../../entity/Note"

//TODO: add input validation here for the notes
export async function addNotes(notes: Note[], gameId: number) {
    console.log("\n-- HelperAddNotes --")
    const game = await AppDataSource.getRepository(Game).findOneBy({id: gameId})
    const noteRepo = AppDataSource.getRepository(Note)
    for (let i = 0; i < notes.length; i++) {
        const note = new Note()
        note.game = game
        note.title = notes[i].title
        note.type = notes[i].type
        note.body = notes[i].body
        note.tags = notes[i].tags
        noteRepo.save(note)
    }
    console.log("Success\n")
}