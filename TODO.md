Roteiro Mestre de Desenvolvimento (11 PRs)
Fase 1: Fundação de Engenharia e Qualidade

PR #1: Higiene do Repositório (.gitignore & Clean Build)

Remoção das pastas compiladas (.next, .swc) do rastreamento do Git.

Ajuste fino do .gitignore para prevenir acúmulo de arquivos temporários.

PR #2: Tipagem Estática (TypeScript Setup)

Configuração do tsconfig.json e suporte a compilação.

Migração gradual dos módulos principais de infra/ e models/.

PR #3: Validação Declarativa de Schemas (Zod)

Validação de payloads HTTP e variáveis de ambiente com contratos estritos.

Eliminação de verificações manuais de campos (if (!email) ...).

PR #4: Observabilidade e Logs Estruturados (Pino)

Substituição de console.log por logs formatados em JSON.

Mapeamento de níveis de log (info, warn, error) integrados ao infra/errors.js.

PR #5: Middleware de Rate Limiting

Limitação de requisições por IP usando Redis.

Bloqueio contra ataques de força bruta em rotas sensíveis.

PR #6: Testes End-to-End e de API (Playwright)

Configuração do runner do Playwright.

Criação de testes E2E focados em rotas de API e smoke tests de navegação.

PR #7: Abstração de Banco de Dados (Query Builder)

Adição do Drizzle ORM ou Kysely para autocompletion e queries type-safe.

Manutenção da performance de SQL puro com proteção contra SQL Injection.

Fase 2: Identidade, Segurança e Comunicação

PR #8: Serviço de E-mails Transacionais

Configuração do container do Mailpit no infra/compose.yaml para ambiente local.

Criação da abstração infra/email.js para envio e renderização de templates HTML.

PR #9: Perfil de Usuário & Engenharia de Senhas

Modelagem completa de usuários e políticas de complexidade de senha.

Hash de senhas usando Argon2d ou Bcrypt com salting automático.

Criação e validação de tokens de ativação de conta enviados por e-mail.

PR #10: Sistema de Autenticação

Endpoint de login (POST /api/v1/sessions) e logout (DELETE /api/v1/sessions).

Gerenciamento de sessões com cookies HttpOnly, Secure e SameSite=Lax.

PR #11: Sistema de Autorização

Middlewares de proteção de rotas privadas e validação de sessão ativa.

Controle de acesso baseado em papéis ou escopos de permissão (RBAC).
