import Container from '@/components/container'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { CardCustomer } from './components/card'

export default async function Funcionarios() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }


  return (
    <Container>
    <main className="mt-9 mb-2">
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Meus funcionarios</h1>
      <Link href="/coordenacao/funcionarios/new" className="bg-blue-900 text-white px-4 py-1 rounded">
        Novo funcionario
      </Link>
    </div>

    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-2">
      <CardCustomer/>
      <CardCustomer/>
      <CardCustomer/>
    </section>


  </main>
    </Container>
  )
}