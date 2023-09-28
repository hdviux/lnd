import dotenv from "dotenv";
dotenv.config();
export const config = {
  socket: `${process.env.SOCKET_HOST_LND}:${process.env.SOCKET_PORT_LND}`,
};
