'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { useState } from "react";
import { AlertCircle } from "lucide-react"


export default function Register() {

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    senha: "",
    data_nascimento: "",
    confirma_senha: ""
  });

  type AlertVariant = "destructive" | "default" | "confirm";

  const [message, setMessage] = useState("");
  const [variantAlert, setVariantAlert] = useState<AlertVariant>("destructive");
  const [alertError, setAlertError] = useState(false);

  const registerUser = async () => {
    const url = `http://localhost:8000/usuarios`;
    try {

      formData.data_nascimento = new Date(formData.data_nascimento).toISOString(); // Formata a data_nascimento formato ISO 8601

      const payload = JSON.stringify(formData);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload
      });
      if (!response.ok) {
        const errorData = await response.json();
        setMessage(errorData.message[0]);
        throw new Error(errorData.message[0]);
      }
      setVariantAlert("confirm");
      setMessage("Usuário cadastrado com sucesso!");
    } catch (error: any) {
      setAlertError(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-5">
      <div>
        {alertError && (
          <Alert variant={variantAlert}>
            <AlertDescription>
              {message}
            </AlertDescription>
          </Alert>
        )}
      </div>
      <Card className="flex flex-col justify-between w-[350px]  border-gray-300">
        <CardHeader className="text-center text-xl">
          <CardTitle>Crie sua conta</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-3">
              <div className="flex flex-col ">
                <Label htmlFor="nome"></Label>
                <Input id="nome" placeholder="Nome" value={formData.nome} onChange={e => setFormData({ ...formData, nome: e.target.value })} />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="cpf"></Label>
                <Input id="cpf" placeholder="CPF" value={formData.cpf} onChange={e => setFormData({ ...formData, cpf: e.target.value })} />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="datanascimento"></Label>
                <Input id="datanascimento" type="date" placeholder="Data de Nascimento" value={formData.data_nascimento} onChange={e => setFormData({ ...formData, data_nascimento: e.target.value })} />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="celular"></Label>
                <Input id="celular" placeholder="Celular" value={formData.telefone} onChange={e => setFormData({ ...formData, telefone: e.target.value })} />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="email"></Label>
                <Input id="email" type="email" placeholder="E-mail" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="senha"></Label>
                <Input id="senha" type="password" placeholder="Senha" value={formData.senha} onChange={e => setFormData({ ...formData, senha: e.target.value })} />
              </div>
              <div className="flex flex-col ">
                <Label htmlFor="senha"></Label>
                <Input id="senha" type="password" placeholder="Confirmar senha" value={formData.confirma_senha} onChange={e => setFormData({ ...formData, confirma_senha: e.target.value })} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col justify-center ">
          <Button type="button" onClick={registerUser} className="w-full mb-3">Cadastrar</Button>
          <Link href="/login" className="text-blue-500 hover:text-blue-700">
            Já possui uma conta?
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
