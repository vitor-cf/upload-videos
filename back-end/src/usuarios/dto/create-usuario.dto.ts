import { IsDateString, IsEmail, IsNotEmpty, IsString, IsUUID, Length } from "class-validator";
import { UUID } from "crypto";

export class CreateUsuarioDto {

    @IsUUID()
    @IsNotEmpty()
    id: UUID;

    @IsString({message: "O nome deve ser uma string."})
    @Length(0,150, {message: "Precisa conter pelo menos 1 caracter"})
    @IsNotEmpty({message: "O nome deve ser obrigatório."})
    nome: string;

    @IsEmail({}, {message: "O e-mail deve ser um endereço de email válido."})
    @IsNotEmpty({message: "O e-mail deve ser obrigatório."})
    email: string;

    @IsString({message: "Deve ser uma string"})
    @Length(8,8, { message: "A senha deve ter no mínimo 8 caracteres."})
    @IsNotEmpty({message: "Senha é obrigatório"})
    senha: string;

    @IsDateString({},{message: "Informe uma data válida."})
    @IsNotEmpty({message: "Data de nascimento é obrigatória"})
    data_nascimento: Date;

    @IsString({message: "Deve ser uma string"})
    @Length(10,11, {message: "Telefone inválido."})
    @IsNotEmpty({message: "Telefone obrigatório."})
    telefone: string;

    @IsString({message: "Deve ser uma string"})
    @Length(11,11, {message: "CPF inválido."})
    @IsNotEmpty({message: "CPF é obrigatório"})
    cpf: string

}
