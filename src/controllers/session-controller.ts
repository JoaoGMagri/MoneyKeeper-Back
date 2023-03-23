import sessionService from "../service/session-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function usersPost(req: Request, res: Response){
    const {email, password, username} = req.body;

    try {
        const response = await sessionService.usersPost(  {email, password, username} );
        return res.status(httpStatus.CREATED).send({email: response.email, id: response.id});
    } catch (error) {
        if (error.name === "DuplicatedEmailError") {
            return res.status(httpStatus.CONFLICT).send(error);
        }
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
};
