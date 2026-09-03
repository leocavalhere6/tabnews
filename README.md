# Twitter Clone

A full-stack social platform inspired by Twitter/X, built with **TypeScript, Next.js, PostgreSQL, Redis, and Docker**.

The application includes authentication, user management, posts, social interactions, API validation, automated testing, structured logging, and CI/CD.

🔗 **Live Demo:** https://tabnews-weld-ten.vercel.app

📦 **Repository:** https://github.com/leocavalhere6/tabnews

---

## 🚀 Tech Stack

- **TypeScript**
- **Next.js**
- **React**
- **PostgreSQL**
- **Redis**
- **Drizzle ORM**
- **Zod**
- **Pino**
- **Jest**
- **Playwright**
- **Docker & Docker Compose**
- **GitHub Actions**

---

## ✨ Features

- User registration and authentication
- Secure password hashing with Argon2id
- Session management with HttpOnly and Secure cookies
- User profiles
- Posts and social interactions
- REST API
- Request validation with Zod
- IP-based rate limiting with Redis
- PostgreSQL database with migrations
- Structured logging with Pino
- Background processing
- Integration tests
- End-to-end tests with Playwright
- CI/CD with GitHub Actions
- Dockerized development environment

---

## 🏗️ Project Structure

```text
.
├── .github/        # CI/CD workflows
├── .husky/         # Git hooks
├── infra/          # Database and infrastructure
├── models/         # Data models
├── pages/          # Application and API routes
├── styles/         # Global styles
├── tests/          # Integration and E2E tests
├── package.json
└── README.md
```

---

## 🧪 Testing

The project includes automated tests covering the main application flows.

### Integration Tests

- Authentication
- Users
- Sessions
- API validation
- Database interactions
- Rate limiting

### End-to-End Tests

Playwright is used to test complete user flows through the application.

Run the test suite with:

```bash
npm test
```

Run E2E tests with:

```bash
npm run test:e2e
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Docker
- Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/leocavalhere6/tabnews.git

cd tabnews
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the infrastructure

```bash
docker compose up -d
```

### 4. Run database migrations

```bash
npm run db:migrate
```

### 5. Start the development server

```bash
npm run dev
```

---

## ⚙️ CI/CD

GitHub Actions is used for automated:

- Linting
- Type checking
- Testing
- Deployment

---

## 🧹 Code Quality

The project uses:

- ESLint
- Husky
- Commitlint
- Conventional Commits
- Semantic Versioning

---

## 👨‍💻 Author

**Leonardo Henrique de Oliveira Cavalhere**

Full Stack Software Engineer

📧 [leocavalhere6@gmail.com](mailto:leocavalhere6@gmail.com)

💼 https://linkedin.com/in/leonardo-cavalhere

🐙 https://github.com/leocavalhere6
