
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import prismaClient from '@/lib/prisma'


export async function POST(request: Request){
  const session = await getServerSession(authOptions);

  if(!session || !session.user){
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  const { name, email, phone, address, cargo, userId } = await request.json();

  try{
    await prismaClient.customer.create({
      data:{
        name,
        phone,
        email,
        cargo,
        address: address ? address : "",
        userId: userId
      }
    })

    return NextResponse.json({ message: "Funcionario cadastrado com sucesso!" })

  }catch(err){
    return NextResponse.json({ error: "Failed crete new" }, { status: 400 })
  }

}