import  Container  from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NewFuncionarioForm } from "../components/form";
 
export default async function NewFuncionario() {

    const session = await getServerSession(authOptions)
  
    if (!session || !session.user) {
      redirect("/")
    }



  return (
    <Container>
     <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3">
          <Link href="/coordenacao/funcionarios" className="bg-gray-900 px-4 py-1 text-white rounded">
            Voltar
          </Link>
          <h1 className="text-3xl font-bold">Novo Funcionario</h1>
        </div>

        
            <NewFuncionarioForm userId={session.user.id}/>
      </main>
    </Container>
  )
}