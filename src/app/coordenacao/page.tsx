import Container from "@/components/container";
import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";
import { redirect } from 'next/navigation';
import Link from "next/link";
import { TicketItem } from "./components/ticket";
import prismaClient from "@/lib/prisma";

export default async function Coordenacao(){

    const session = await getServerSession(authOptions)

    if (!session || !session.user) {
      redirect("/")
    }

    const tickets = await prismaClient.ticket.findMany({
      where: {
        userId: session.user.id,
        status: "ABERTO"
      },
      include: {
        customer: true,
      }
    })


    console.log(tickets);

    return (
       <Container>
        <main className="mt-9 mb-2">
            <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-900 ">Chamados</h1>
            <Link href="/coordenacao/new" className="bg-blue-900 px-4 py-1 rounded text-white">
                Atualizar Chamados
            </Link>
            </div>

            <table className="min-w-full my-2">
          <thead>
            <tr>
              <th className="font-medium text-left pl-1 text-blue-900">CLIENTE</th>
              <th className="font-medium text-left text-blue-900">DATA CADASTRO</th>
              <th className="font-medium text-left text-blue-900">STATUS</th>
              <th className="font-medium text-left text-blue-900">#</th>
            </tr>
          </thead>
          <tbody>

          {tickets.map(ticket => (
              <TicketItem 
              key={ticket.id} 
              customer={ticket.customer}
              ticket={ticket}
              />
          ))}
          


          </tbody>
        </table>



        </main>
        </Container>
    )
}

