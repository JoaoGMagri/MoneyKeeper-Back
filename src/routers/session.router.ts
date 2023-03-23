import { userSession, usersPost } from "../controllers/session-controller";
import { Router } from "express";

const sessionRouter = Router();

sessionRouter
    .post("", userSession)
    .post("/signUp", usersPost);

export { sessionRouter };