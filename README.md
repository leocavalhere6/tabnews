# TabNews Clone — Full Stack Application

Full stack application designed and implemented to replicate core TabNews features while following production-grade engineering standards.

The project emphasizes backend architecture, authentication flows, API stability, automated testing, CI/CD pipelines, and real production deployment.

🔗 **Live Application:**  
https://tabnews-weld-ten.vercel.app  

📦 **Repository:**  
https://github.com/leocavalhere6/tabnews  

---

## Overview

This project goes beyond a basic CRUD implementation. It was architected to reflect real-world software engineering practices, covering the full development lifecycle:

- System design
- Backend architecture
- Frontend integration
- Database modeling
- Automated testing
- CI/CD automation
- Production deployment

The focus was on building a maintainable, scalable, and well-structured system.

---

## Core Features

### Authentication & Authorization

- Custom-built authentication system
- Password hashing with salt + pepper strategy
- Session management with expiring tokens
- Authentication middleware
- Email-based account activation flow
- Account recovery mechanism

---

### REST API

- Versioned REST API (`v1`)
- Structured controllers
- Server-side validations
- Standardized error handling
- Proper HTTP status code usage
- Stable and testable endpoints

---

### Database Layer

- PostgreSQL relational database
- Normalized schema design
- Migration system (`up` and dry-run support)
- Fully containerized environment with Docker

---

### Frontend Application

- Built with React and Next.js
- Full backend integration
- Dynamic `/status` page consuming live API data
- Reusable components (e.g., `DatabaseStatus`)
- UI logic abstraction
- Standardized frontend error handling

---

## Testing Strategy

Integration tests covering critical flows:

- Authentication
- User management
- Session lifecycle

The project incorporates TDD and BDD principles to ensure endpoint reliability and regression safety.

---

## CI/CD & Code Quality

- Automated CI/CD pipelines with GitHub Actions
- Automatic test execution on push
- Automated deployment workflow
- ESLint configuration
- Commitlint enforcement
- Conventional Commits standard
- Git hooks
- Semantic Versioning strategy

---

## Deployment

- Production deployment on Vercel
- Staging / homologation environment configured
- Continuous integration between repository, testing suite, and deployment pipeline

---

## Architecture

- MVC architectural pattern
- Modularized codebase
- Clear separation of responsibilities
- Emphasis on maintainability, readability, and scalability

---

## Tech Stack

### Backend
- Node.js
- JavaScript (ES Modules)
- PostgreSQL
- Docker

### Frontend
- React
- Next.js

### Testing & Quality
- Jest
- Integration Testing

### DevOps
- Git
- GitHub Actions
- CI/CD
- Vercel

---

## Project Goal

This project demonstrates the ability to:

- Architect and implement a full stack application from scratch
- Design secure authentication flows
- Structure scalable backend systems
- Apply automated testing and CI/CD practices
- Deliver and maintain a production-ready environment

---

## Author

Leonardo Henrique De Oliveira Cavalhere  
Full Stack Developer  

📧 leocavalhere6@gmail.com  
🔗 GitHub: https://github.com/leocavalhere6  
🔗 LinkedIn: https://www.linkedin.com/in/leonardo-cavalhere-59b422340/
