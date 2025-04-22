import { testPing } from './controller/TestPing'

/**
 * All application routes
 */
export const AppRoutes = [
    {
        path: "/ping",
        method: "get",
        action: testPing
    }
]