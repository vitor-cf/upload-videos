import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="flex flex-col justify-between w-[350px]  border-gray-300">
        <CardHeader className="text-center text-xl">
          <CardTitle >Entre na sua conta </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-3">
              <div>
                <Label htmlFor="email"></Label>
                <Input id="email" type="email" placeholder="E-mail" className="border-gray-300" />
              </div>
              <div>
                <Label htmlFor="senha"></Label>
                <Input id="senha" type="password" placeholder="Senha" className="border-gray-300" />
              </div>
            </div>
            <div className="flex justify-end text-sm text-gray-500 hover:text-gray-700 mt-1 ">
                <Link href="/cadastro">Esqueceu sua senha?</Link>
            </div>
          </form>
        </CardContent >

        <CardFooter className="flex-col justify-center ">
          <Button className="w-full mb-3" >Entrar</Button>
          <Link className="text-blue-500 hover:text-blue-700" href="/register">Não possui uma conta?</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
