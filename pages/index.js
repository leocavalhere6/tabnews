export default function HomePage() {
  return (
    <main>
      <Headline />
      <ProjectContext />
      <ImplementedFeatures />
      <InProgress />
      <ImportantLinks />
      <Footer />
    </main>
  );
}

function Headline() {
  return (
    <>
      <h1>TabNews Clone — Projeto Full Stack em Desenvolvimento</h1>
      <p>
        Projeto real focado em arquitetura, qualidade de código e boas práticas
        de engenharia de software.
      </p>
    </>
  );
}

function ProjectContext() {
  return (
    <p>
      Este projeto simula um ambiente real de desenvolvimento, cobrindo
      autenticação, API REST, banco de dados, testes, CI/CD e deploy em
      produção.
    </p>
  );
}

function ImplementedFeatures() {
  return (
    <div className="card">
      <h2>✔ O que já está implementado</h2>
      <ul>
        <li>API REST versionada (v1)</li>
        <li>PostgreSQL com migrations e Docker</li>
        <li>
          Frontend em React para landing page técnica e página de status
          (/status)
        </li>
        <li>Integração backend + frontend (Next.js)</li>
        <li>Testes de integração (Jest)</li>
        <li>CI/CD com GitHub Actions</li>
        <li>Deploy em produção (Vercel)</li>
      </ul>
    </div>
  );
}

function InProgress() {
  return (
    <div className="card">
      <h2>🚧 Em desenvolvimento</h2>
      <ul>
        <li>Interface final da aplicação</li>
        <li>Refinamento da UX/UI</li>
        <li>Novos fluxos de usuários</li>
        <li>Sistema de Autenticação e autorização</li>
      </ul>
    </div>
  );
}

function ImportantLinks() {
  return (
    <div className="card">
      <h2>🔗 Links importantes</h2>
      <ul>
        <li>
          <a
            href="https://github.com/leocavalhere6/tabnews"
            target="_blank"
            rel="noreferrer"
          >
            Repositório no GitHub
          </a>
        </li>

        <li>
          <a href="/status">Endpoint /status</a>
        </li>

        <li>
          <a
            href="https://github.com/leocavalhere6/tabnews#readme"
            target="_blank"
            rel="noreferrer"
          >
            Documentação da API
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        Projeto em desenvolvimento contínuo — foco em engenharia de software,
        arquitetura e qualidade de código.
      </p>
    </footer>
  );
}
