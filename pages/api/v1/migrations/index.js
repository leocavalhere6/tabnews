import { createRouter } from "next-connect";
import controller from "infra/controller";
import migrator from "models/migrator.js";

const router = createRouter();

router.get(getHandler);
router.post(postHandler);

export default router.handler(controller.errorHandler);

async function getHandler(request, response) {
  const migrateMigrations = await migrator.listPendingMigrations();
  response.status(200).json(migrateMigrations);
}

async function postHandler(request, response) {
  const migrateMigrations = await migrator.runPendingMigrations();

  if (migrateMigrations.length > 0) {
    return response.status(201).json(migrateMigrations);
  }
  response.status(200).json(migrateMigrations);
}
