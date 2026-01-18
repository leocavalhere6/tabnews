import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <main>
      <h1>Status</h1>
      <UpdatedAt />
      <DatabaseStatus />
    </main>
  );
}

/* ===== Components ===== */

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return (
    <p>
      Última estruturação: <strong>{updatedAtText}</strong>
    </p>
  );
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  if (isLoading || !data) {
    return (
      <div className="card">
        <h2>Database</h2>
        <div className="status">Carregando...</div>
      </div>
    );
  }

  const database = data.dependencies.database;

  return (
    <div className="card">
      <h2>Database</h2>
      <div className="status">
        <div>Versão: {database.version}</div>
        <div>Conexões abertas: {database.opened_connections}</div>
        <div>Conexões máximas: {database.max_connections}</div>
      </div>
    </div>
  );
}
