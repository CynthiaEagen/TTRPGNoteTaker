import { seedDB } from './controller/SeedDB'
import { testPing } from './controller/TestPing'
import { gameGetAll } from './controller/GameGetAll'
import { gameSave } from './controller/GameSave'
import { gameGetById } from './controller/GameGetById'
import { gameDelete } from './controller/GameDelete'
import { gameUpdate } from './controller/GameUpdate'
import { gameGetNotes } from './controller/GameGetNotes'
import { noteSave } from './controller/NoteSave'

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
    }, 
    {
        path: '/games/:id',
        method: 'delete',
        action: gameDelete
    },
    {
        path: '/games/:id',
        method: 'put',
        action: gameUpdate
    },
    {
        path: '/games/:id/notes',
        method: 'get',
        action: gameGetNotes
    },
    {
        path: '/notes',
        method: 'post',
        action: noteSave
    }
]