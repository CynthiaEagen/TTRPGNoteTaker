import { seedDB } from './controller/SeedDB'
import { testPing } from './controller/TestPing'
import { gameGetAll } from './controller/GameGetAll'
import { gameSave } from './controller/GameSave'
import { gameGetById } from './controller/GameGetById'

/**
 * All application routes
 */
export const AppRoutes = [
    {
        path: '/ping',
        method: 'get',
        action: testPing
    },
    {
        path: '/seedDB',
        method: 'get',
        action: seedDB
    },
    {
        path: '/games',
        method: 'get',
        action: gameGetAll
    },
    {
        path: '/games',
        method: 'post',
        action: gameSave
    },
    {
        path: '/games/:id',
        method: 'get',
        action: gameGetById
    }
]