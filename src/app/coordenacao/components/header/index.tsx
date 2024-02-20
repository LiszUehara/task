import Container from "@/components/container";
import Link from "next/link"


export function DashboardHeader(){
    return (
        <Container>
            <header className="w-full bg-blue-900 my-4 p-3 rounded flex gap-4 items-center">
                <Link href="/coordenacao" className="text-white hover:font-bold duration-300">Chamados</Link>
                <Link href="/coordenacao/funcionarios" className="text-white hover:font-bold duration-300">Funcionarios</Link>
                <Link href="/coordenacao/graficos" className="text-white hover:font-bold duration-300">Graficos</Link>
            </header>
        </Container>
    )
}