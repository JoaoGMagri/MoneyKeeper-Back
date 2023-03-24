import spedingService from "../service/spending-service";
import { AuthenticatedRequest } from "../protocols";
import { Response } from "express";
import httpStatus from "http-status";

export async function getSpending(req: AuthenticatedRequest, res: Response) {
    const { userId } = req

    try {
        const resp = await spedingService.getSpending(userId);
        return res.status(httpStatus.OK).send(resp);
    } catch (error) {
        if (error.name === "NotFoundError") {
            return res.status(httpStatus.NOT_FOUND).send(error);
        }
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }

}