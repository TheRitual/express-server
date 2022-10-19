import { NextFunction, Request, Response } from "express";

const allLogger = (req: Request, res: Response, next: NextFunction) => {
  const startTime = Date.now();
  next();
  const burl = req.baseUrl;
  const endpoint = req.url;
  const ip = req.ip;
  const protocol = req.protocol;
  const method = req.method;
  const endTime = Date.now();
  console.log(
    `[${new Date(startTime)
      .toISOString()
      .replace(/T/, " ")
      .replace(/\..+/, "")}.${new Date(startTime).getMilliseconds()}] [${
      endTime - startTime
    }ms] ::: ${protocol} ${method} ${burl}${endpoint} from ${ip} ${
      req.errored ? " ::: " + req.errored : "OK"
    }`
  );
};

export default allLogger;
