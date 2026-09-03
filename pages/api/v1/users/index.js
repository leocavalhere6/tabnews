import { createRouter } from "next-connect";
import controller from "infra/controller";
import { applyRateLimit } from "infra/rate-limiter";
import user from "models/user";

const router = createRouter();

router.post(postHandler);

export default router.handler(controller.errorHandler);

async function postHandler(request, response) {
  await applyRateLimit(request, {
    windowInSeconds: 60,
    maxRequests: 5,
    keyPrefix: "rate-limit:users:post",
  });

  const userInputValues = request.body;
  const newUser = await user.create(userInputValues);
  return response.status(201).json(newUser);
}
