import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Note } from './Note'

@Entity()
/**
 * This class represents a unique game a player
 * may take notes about. Each Game must have a 
 * unique Name, and a collection of Notes - though
 * this collection will be empty at time of 
 * instantiation.
 */
export class Game {

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