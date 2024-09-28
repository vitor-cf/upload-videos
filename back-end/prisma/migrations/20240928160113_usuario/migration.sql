-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "senha" VARCHAR(8) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "telefone" VARCHAR(11) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);
