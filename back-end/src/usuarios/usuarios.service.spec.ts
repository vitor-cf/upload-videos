import { Test, TestingModule } from '@nestjs/testing';
import { UsuariosService } from './usuarios.service';
import { PrismaClient } from '@prisma/client';
import { Usuario } from './entities/usuario.entity';

// Descreve um conjunto de testes para o serviço UsuariosService
describe('UsuariosService', () => {
  let service: UsuariosService; // Variável para armazenar a instância do serviço sendo testada
  let prisma: PrismaClient; // Variável para armazenar a instância mockada do PrismaClient


  beforeEach(async () => { // Executa antes de cada teste
    // Cria um módulo de teste do NestJS
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuariosService, // Inclui o serviço real que está sendo testado
        {
          // Fornece um mock para o PrismaClient, para evitar acesso ao banco de dados real
          provide: PrismaClient, 
          useValue: {
            usuario: {
              // Define mocks para os métodos do PrismaClient que serão usados no serviço
              create: jest.fn(), // Mock para o método 'create'
              findUnique: jest.fn() // Mock para o método 'findUnique'
              // Adicione outros métodos do Prisma que seu serviço usa aqui, se necessário.
            },
          },
        },
      ],
    }).compile(); // Compila o módulo de teste

    // Obtém a instância do serviço do módulo de teste
    service = module.get<UsuariosService>(UsuariosService);
    // Obtém a instância mockada do PrismaClient do módulo de teste
    prisma = module.get<PrismaClient>(PrismaClient);
  });

  // Teste simples para verificar se o serviço foi definido
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Conjunto de testes para o método 'create'
  describe('create', () => {
    it('should create a new user', async () => { // Teste para criação de usuário com sucesso
      const createUser = { // Dados de entrada para criar o usuário (DTO simulado)
        id: "8a1b7896-208b-4b70-9b53-a8f74cda823d",
        nome: "Vitor",
        email: "vitor@clipnet.com",
        senha: "password",
        data_nascimento: new Date("1999-10-30"),
        telefone: "71991182502",
        cpf: "07529331590"
      };

      // Usuário criado que esperamos receber de volta após a criação (mock)
      const createdUser = {
        id: "8a1b7896-208b-4b70-9b53-a8f74cda823d",
        nome: "Vitor",
        senha: "password",
        email: "vitor@clipnet.com",
        data_nascimento: new Date("1999-10-30"),
        telefone: "71991182502",
        cpf: "07529331590",
      };

      // Chama o método 'create' do serviço
      const user = await service.create(createUser);

      // Verifica se o usuário retornado pelo serviço corresponde ao usuário criado (mockado)
      expect(user).toEqual(createdUser);

    });
  });
});