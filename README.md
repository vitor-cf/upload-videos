# Upload-Videos

Este projeto demonstra um sistema básico de upload de vídeos, construído com Next.js para o frontend e NestJS para o backend. Ele permite que os usuários carreguem vídeos, que são armazenados e servidos a partir de um provedor de armazenamento.

## Tecnologias

- **Frontend:** Next.js
- **Backend:** NestJS
- **ORM:** Prisma
- **CSS:** Tailwind CSS
- **Componentes:** Shadcn UI
- **Banco de Dados:** PostgreSQL

## Começando

### Pré-requisitos

- Node.js (v20.18.0) e npm (10.8.2) instalados
- Servidor de banco de dados PostgreSQL 16.4 em execução

### Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/upload-videos.git
```

2. Instale as dependências (nos diretórios client e server):

cd upload-videos/front-end
npm install

cd ../back-end
npm install

3. Migrações do Prisma:

cd back-end
cp .env.example .env  # Configure suas variáveis de ambiente
npx prisma migrate dev

4. Execute as aplicações:

# Em um terminal, na pasta front-end:
npm run dev

# Em outro terminal, na pasta back-end:
npm run start:dev

5. Executando o projeto

- Após seguir os passos de instalação, você pode acessar o frontend em http://localhost:3000. O backend estará rodando em http://localhost:8000.