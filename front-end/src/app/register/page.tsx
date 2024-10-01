import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="flex flex-col justify-between w-[350px]  border-gray-300">
        <CardHeader className="text-center text-xl">
          <CardTitle>Crie sua conta</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-3">
              <div className="flex flex-col ">
                <Label htmlFor="nome"></Label>
                <Input id="nome" placeholder="Nome" />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="cpf"></Label>
                <Input id="cpf" placeholder="CPF" />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="datanascimento"></Label>
                <Input id="datanascimento" type="date" placeholder="Data de Nascimento" />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="celular"></Label>
                <Input id="celular" placeholder="Celular" />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="email"></Label>
                <Input id="email" type="email" placeholder="E-mail" />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="senha"></Label>
                <Input id="senha" type="password" placeholder="Senha" />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="senha"></Label>
                <Input id="senha" type="password" placeholder="Confirmar senha" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col justify-center ">
          <Button className="w-full mb-3">Cadastrar</Button>
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Já possui uma conta?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
