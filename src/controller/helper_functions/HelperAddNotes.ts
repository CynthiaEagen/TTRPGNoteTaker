import { AppDataSource } from "../../data-source"
import { Game } from "../../entity/Game"
import { Note } from "../../entity/Note"

//TODO: add input validation here for the notes
export async function addNotes(notes: Note[], gamePartial: Partial<Game>) {
    console.log("\n-- HelperAddNotes --")
    const game = await AppDataSource.getRepository(Game).findOneBy({id: gamePartial.id})
    const noteRepo = AppDataSource.getRepository(Note)
    const newNotes = []
    for (let i = 0; i < notes.length; i++) {
        let note = notes[i]
        note.game = game
        newNotes.push(note)
    }
    await noteRepo.insert(newNotes)
    console.log("Success\n")
}