import { IntegerType } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Game } from "../../entity/Game"

export async function GetGameWithNotes(gameId: number) {
    const gameRepo = AppDataSource.getRepository(Game)
    if (await gameRepo.existsBy({id: gameId})) { // check if game exists
        // get the game and save it to a new variable
        const gameResults = await gameRepo.find(
            {
                relations: {
                    notes: true
                },
                where: {
                    id: gameId   
                }
            }
        )
        return gameResults[0] 
    } else {
        return null
    }
}

