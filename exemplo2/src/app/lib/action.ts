'use server';

import prisma from './prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Página 24 - Cadastrar
export async function CreateProduto(formData: FormData) {
  const obj: any = {
    descricao: formData.get("c1"),
    preco: Number(formData.get("c2")),
  };

  await prisma.produto.create({ data: obj });

  revalidatePath('/produto/index');
  redirect('/produto/index');
}

// Página 30 - Editar
export async function UpdateProduto(id: number, formData: FormData) {
  const obj: any = {
    descricao: formData.get("c1"),
    preco: Number(formData.get("c2")),
  };

  await prisma.produto.update({
    where: { id: id },
    data: obj,
  });

  revalidatePath('/produto/index');
  redirect('/produto/index');
}

// Página 31 - Excluir (Exercício Resolvido)
export async function DeleteProduto(id: number) {
  await prisma.produto.delete({
    where: { id: id },
  });

  revalidatePath('/produto/index');
  redirect('/produto/index');
}
