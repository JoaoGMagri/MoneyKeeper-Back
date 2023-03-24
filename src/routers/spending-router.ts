import { deleteSpending, getSpending, postSpending, putSpending } from "../controllers/spending-controller";
import { authenticateToken } from "../middleware/authentication-midleware";
import { Router } from "express";

const spendingRouter = Router();

spendingRouter
    .all("/*", authenticateToken)
    .get("", getSpending)
    .post("", postSpending)
    .delete("/:spendingId", deleteSpending)
    .put("/:spendingId", putSpending);

export { spendingRouter };