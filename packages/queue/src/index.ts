import IORedis from "ioredis";
import { Queue } from "bullmq";

const redis = new IORedis({
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT) || 6379,
});

export const queue = new Queue("jobs", {
  connection: redis,
});
