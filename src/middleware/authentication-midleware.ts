import httpStatus from "http-status";
import sessionRepository from "../repositories/session-repositories";
import { NextFunction, Request, Response } from "express";
import { unauthorizedError } from "../errors/unauthorized-error";
import { notFoundError } from "../errors/not-found-error";
import { AuthenticatedRequest } from "../protocols";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    try {
        const userSession = await sessionRepository.findSessionbyToken(token);
        if (!userSession) {
            return generateUnauthorizedResponse(res);
        }

        req.userId = userSession.userId;

        return next();
    } catch (err) {
        return generateUnauthorizedResponse(res);
    }

}

function generateUnauthorizedResponse(res: Response) {
    res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
  }

