import express from "express";
import LNDMiddleware from "../middlewares/lnd.middleware";
import LNDRoute from "./lnd.router";

export default function initRouter(app: express.Application) {
  const rootApiUrl = "/api";

  app.use(rootApiUrl, LNDMiddleware, LNDRoute);
}
