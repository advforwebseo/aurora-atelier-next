import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export const registerRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 m"),
});

export const loginRateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
});
