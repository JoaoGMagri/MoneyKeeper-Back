import { Request } from "express";

//
export type ApplicationError = {
    name: string;
    message: string;
};

//
export type InformationUser = {
    username: string;
    email: string;
    password: string;
}

//
export type typeUserId = {
    userId: number;
}

export type AuthenticatedRequest = Request & typeUserId;