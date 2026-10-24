import { IndexProduto } from '../../lib/query';
import IndexProdutoUI from '@/app/ui/produto/index-table';
import Link from 'next/link';

export default async function Page() {
  const produtos = await IndexProduto();

  const produtosFormatados = produtos.map(p => ({
    ...p,
    preco: p.preco.toString()
  }));

  return (
    <>
      <Link href="/produto/create">Novo Produto</Link>
      <div>
        <h1>Index</h1>
        {IndexProdutoUI(produtosFormatados)}
      </div>
    </>
  );
}
