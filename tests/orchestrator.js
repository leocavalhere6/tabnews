import retry from "async-retry";
import database from "infra/database.js";
import migrator from "models/migrator.js";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000,
    });

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      // eslint-disable-next-line no-unused-vars
      const responseBody = await response.json();

      if (response.status !== 200) {
        throw Error();
      }
    }
  }
}

async function clearDatabase() {
  await database.query({
    text: `
      DROP SCHEMA public CASCADE;
      CREATE SCHEMA public;
    `,
  });
}

async function runPendingMigrations() {
  await migrator.runPendingMigrations();
}

const orchestrator = {
  waitForAllServices,
  clearDatabase,
  runPendingMigrations,
};

export default orchestrator;
