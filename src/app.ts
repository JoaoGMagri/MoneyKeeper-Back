import express, { Express } from "express";
import cors from "cors";

import { loadEnv } from "./config/envs";
import { connectDb, disconnectDB } from "./config/database";
import { sessionRouter } from "./routers/session-router";
import { spendingRouter } from "./routers/spending-router";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/spending", spendingRouter )
  .use("/session", sessionRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
