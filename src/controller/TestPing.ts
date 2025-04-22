import { Request, Response } from 'express'

export async function testPing(req: Request, res: Response) {
    res.send("ping");
}