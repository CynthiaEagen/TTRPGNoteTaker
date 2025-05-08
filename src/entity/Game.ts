import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Note } from './Note'
import { ValidationError } from "./ValidationError"

@Entity()
/**
 * This class represents a unique game a player
 * may take notes about. Each Game must have a 
 * unique Name, and a collection of Notes - though
 * this collection will be empty at time of 
 * instantiation.
 */
export class Game {

    /**
     * Validates the data contained in the Game 
     * @throws ValidationError
     */
    validate() {
        // SQLite doesn't enforce varchar length, so we have to enforce it manually 
        if (this.name.length > 60) {
            throw new ValidationError("Name greater than 60 characters")
        }
        else if (this.name === '') {
            throw new ValidationError("Name empty")
        }
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 60,
        unique: true
    })
    name: string

    @OneToMany(() => Note, (note) => note.game)
    notes: Note[]

}