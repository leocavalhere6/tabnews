import { NextApiRequest } from "next";
import { redis } from "@/infra/redis";
import { TooManyRequestsError } from "@/infra/errors";

interface RateLimitOptions {
  windowInSeconds?: number;
  maxRequests?: number;
  keyPrefix?: string;
}

export async function applyRateLimit(
  request: NextApiRequest,
  options: RateLimitOptions = {},
) {
  const { windowInSeconds = 60, maxRequests = 5, keyPrefix = "rl" } = options;

  const clientIp =
    (request.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    request.socket.remoteAddress ||
    "127.0.0.1";

  const key = `${keyPrefix}:${clientIp}`;
  const currentRequests = await redis.incr(key);

  if (currentRequests === 1) {
    await redis.expire(key, windowInSeconds);
  }

  if (currentRequests > maxRequests) {
    const ttl = await redis.ttl(key);
    throw new TooManyRequestsError({ ttl });
  }
}
