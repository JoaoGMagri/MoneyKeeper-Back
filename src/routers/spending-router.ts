import { getSpending } from "../controllers/spending-controller";
import { authenticateToken } from "../middleware/authentication-midleware";
import { Router } from "express";

const spendingRouter = Router();

spendingRouter
    .use("/*", authenticateToken)
    .get("", getSpending)
    .post("",)
    .delete("/:spendingId")
    .put("/:spendingId",);

export { spendingRouter };