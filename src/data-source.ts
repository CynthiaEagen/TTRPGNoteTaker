import "reflect-metadata"
import { DataSource } from "typeorm"
import { Game } from "./entity/Game"
import { Note } from "./entity/Note"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "ttrpgnotetaker.sqlite",
    synchronize: true,
    logging: false,
    entities: [Game, Note],
    migrations: [],
    subscribers: [],
})
