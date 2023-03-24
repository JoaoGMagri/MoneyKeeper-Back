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
export type TypeUserId = {
    userId: number;
}

export type AuthenticatedRequest = Request & TypeUserId;

export type NewSpending = {
    name: string;
    value: number;
    type: "INPUT" | "OUTPUT";
}