"use client"

import { FuncionarioProps } from "@/app/utils/funcionarios.type"

export function CardCustomer( {funcionario} : { funcionario: FuncionarioProps}) {
    return (
      <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-2 hover:scale-105 duration-300">
        <h2>
          <a className="font-bold">Nome:</a> {funcionario.name}
        </h2>
        <p><a className="font-bold">Email:</a> {funcionario.email}</p>
        <p><a className="font-bold">Setor:</a> {funcionario.cargo}</p>
        <p><a className="font-bold">Telefone:</a> {funcionario.phone}</p>
  
      </article>
    )
  }