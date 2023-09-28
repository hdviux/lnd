import logger from "pino";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const log = logger({
  transport: {
    target: "pino-pretty",
  },
  base: {
    pid: false,
  },
  timestamp: () =>
    `,"time":"${dayjs().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss.SSS")}"`,
});

export default log;
