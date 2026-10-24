import prisma from './prisma';

// Página 18 - Listar produtos
export async function IndexProduto() {
  return await prisma.produto.findMany();
}

// Página 28 - Buscar por ID
export async function FindProduto(id: number) {
  return await prisma.produto.findUnique({
    where: { id: id },
  });
}
