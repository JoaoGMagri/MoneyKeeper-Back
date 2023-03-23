import { usersPost } from "../controllers/session-controller";
import { Router } from "express";

const sessionRouter = Router();

sessionRouter
    .post("/", )
    .post("/signUp", usersPost);

export { sessionRouter };