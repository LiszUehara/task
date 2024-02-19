import Image from "next/image";
import logo from "@/app/assets/logo.jpg"

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)] " style={{ background: '#F6f6f6' }}>
      <h2 className="font-medium text-2x1 mb-2">Gerenciador de Tarefas</h2>
      <h1 className="font-bold text 3x1 mb-8 text-blue-600 md:text-4x1">SECRETARIA DE FINANÇAS</h1>

      <Image
        src={logo}
        alt="Imagem Sefin"
        width={600}
        className="max-w-sm md:max-w-xl"

      />
    </main>
  );
}
