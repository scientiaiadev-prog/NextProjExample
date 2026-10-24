import prisma from '@/app/lib/prisma';

// Função para consultar todos os Produtos (Página 18)
export async function IndexProduto() {
  return await prisma.produto.findMany();
}

// Função para recuperar um único Produto pelo ID (Página 28)
export async function FindProduto(id: number) {
  return await prisma.produto.findUnique({
    where: { id: id },
  });
}
