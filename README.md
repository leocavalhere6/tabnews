# TabNews Clone — Projeto Full Stack

Projeto full stack desenvolvido do zero com foco em **simular um ambiente real de engenharia de software**, incluindo autenticação robusta, API REST versionada, testes automatizados, CI/CD e deploy em produção.

🔗 **Demo:** https://tabnews-weld-ten.vercel.app  
📦 **Repositório:** https://github.com/leocavalhere6/tabnews

---

## 📌 Visão Geral

Este projeto é um clone funcional do TabNews, desenvolvido como um **projeto real de engenharia**, indo além de um CRUD básico.  
O objetivo foi aplicar **boas práticas profissionais**, cobrindo todo o ciclo de desenvolvimento: arquitetura, backend, frontend, banco de dados, testes, automação e deploy.

---

## 🧠 Principais Funcionalidades

### 🔐 Autenticação e Autorização

- Sistema completo de autenticação implementado do zero
- Hash de senhas com **salt + pepper**
- Tokens com expiração e renovação de sessão
- Middleware de autenticação
- Fluxo de ativação de conta por e-mail
- Recuperação de conta

### 🌐 API REST

- API REST **versionada (v1)**
- Controllers organizados
- Validações server-side
- Status codes corretos
- Padronização de erros
- Endpoints estáveis e testáveis

### 🗄️ Banco de Dados

- PostgreSQL
- Modelagem relacional normalizada
- Migrations (up e dry-run)
- Ambiente totalmente containerizado com Docker

### 🎨 Frontend

- Aplicação React / Next.js
- Criação de páginas e componentes do zero
- Integração completa com o backend
- Página `/status` com dados dinâmicos da API
- Componentes reutilizáveis (ex: `DatabaseStatus`)
- Uso de props, estados e abstração de lógica de UI
- Tratamento e padronização de erros no frontend

---

## 🧪 Testes

- Testes de integração cobrindo fluxos críticos:
  - Autenticação
  - Usuários
  - Sessões
- Aplicação de conceitos de **TDD e BDD**
- Garantia de estabilidade dos endpoints

---

## ⚙️ CI/CD e Qualidade

- Pipelines de CI/CD com **GitHub Actions**
- Execução automática de testes
- Deploy automatizado
- Padronização de código com:
  - ESLint
  - Commitlint
  - Conventional commits
  - Git hooks
  - Semantic Versioning

---

## 🚀 Deploy

- Deploy real em produção na **Vercel**
- Ambiente de homologação / staging configurado
- Integração contínua entre código, testes e deploy

---

## 🏗️ Arquitetura

- Refatoração completa para arquitetura **MVC**
- Código modularizado
- Separação clara de responsabilidades
- Foco em legibilidade, manutenção e escalabilidade

---

## 🛠️ Stack Utilizada

**Backend**

- Node.js
- JavaScript (ESM)
- PostgreSQL
- Docker

**Frontend**

- React
- Next.js

**Testes & Qualidade**

- Jest
- Testes de Integração

**DevOps**

- Git
- GitHub Actions
- CI/CD
- Vercel

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

- Simular experiência profissional real para desenvolvedor júnior
- Consolidar fundamentos de engenharia de software
- Demonstrar capacidade de aprender, estruturar e entregar um sistema completo

---

## 👤 Autor

**Leonardo Henrique De Oliveira Cavalhere**  
Desenvolvedor Full Stack  
📧 leocavalhere6@gmail.com  
🔗 GitHub: https://github.com/leocavalhere6  
🔗 LinkedIn: https://www.linkedin.com/in/leonardo-cavalhere-59b422340/
