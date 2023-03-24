import { authenticateToken } from "../middleware/authentication-midleware";
import { Router } from "express";

const spendingRouter = Router();

spendingRouter
    .use("/*", authenticateToken)
    .get("", (_req, res) => res.send("OK!"))

export { spendingRouter };