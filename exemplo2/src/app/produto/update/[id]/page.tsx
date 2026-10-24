import Link from 'next/link';
import { FindProduto } from '../../../lib/query';
import UpdateForm from '@/app/ui/produto/update-form';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const produto = await FindProduto(Number(id));

  if (!produto) return <div>Produto não encontrado.</div>;

  return (
    <div>
      <h1>Update produto com ID = {id}</h1>
      <UpdateForm produto={produto} />
      <Link href="/produto/index">Voltar</Link>
    </div>
  );
}
