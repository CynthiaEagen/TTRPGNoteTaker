import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BeforeInsert, BeforeUpdate } from "typeorm"
import { Game } from './Game'

/**
 * The NoteType enum contains the allowed
 * Types for all notes.
 */
export enum NoteType {
    PERSON = "person",
    PLACE = "place",
    THING = "thing",
    MISC = "misc"
}

@Entity()
/**
 * This class represents a single note. 
 * Each Note belongs to a Game. Each Note must have a 
 * unique Title, a Type (Person, Place, Thing, Misc), 
 * a Body, and Tags - though the Tags may be empty.
 */
export class Note {

    // the Game the Note belongs to
    @ManyToOne(() => Game, (game) => game.notes)
    game: Game

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 60,
    })
    title: string

    @Column({
        type: "varchar",
        unique: true,
        nullable: true
    })
    noteUniqueId: string

    // must use the NoteType enum options
    @Column("varchar")
    type: string

    @Column("text")
    body: string

    /* will be stored in the db as, effectively, a single line csv
     * i.e., "tag1,tag2,tag3,..."
     * and must be processed as an array
     */
    @Column("simple-array")
    tags: string[]

    @BeforeInsert()
    @BeforeUpdate()
    generateUniqueId() {
        this.noteUniqueId = this.game.id + "-" + this.title
    }

}