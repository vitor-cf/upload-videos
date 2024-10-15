# upload-videos
Este projeto demonstra um sistema básico de upload de vídeos, construído com Next.js para o frontend e NestJS para o backend. Ele permite que os usuários carreguem vídeos, que são armazenados e servidos a partir de um provedor de armazenamento. 

## Tecnologias

- **Front-end:** Next.js
- **Back-end:** NestJS
- **ORM:** Prisma
- **CSS:** Tailwind CSS
- **Components:** Shadcn UI

## Getting Started

### Pré-requisitos

- Node.js (v20.18.0) and npm (10.8.2) installed
- PostgreSQL 16.4 database server running

1. Install dependencies (in both the client and server directories):

### Acessar a pasta do front-end do projeto
- cd front-end
- npm install  # or yarn install

### Acessar a pasta do back-end do projeto
- cd back-end
- npm install  # or yarn install

2. Prisma migrations:
### Criar tabelas no banco de dados utilizando o prisma
- Acessando a pasta do back-end (cd back-end)
- cp .env.example .env
- npx prisma migrate dev

