import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import logger from "./utils/logger";
import routerInit from "./routers/router";

dotenv.config();
const server = express();

const corsOptions: cors.CorsOptions = {
  origin: "*",
  credentials: true,
};

// configure middlewares
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(cors(corsOptions));
server.use(express.json());

// configure routes
routerInit(server);

const PORT = process.env.PORT || 7500;
const start = async () => {
  logger.info("starting up dashboard ....");
  server.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}!`);
  });
};

start();

import { Request, Response } from "express";
server.get("/test", (req: Request, res: Response) => {
  res.status(200).send("ok");
});
