import Link from 'next/link';
import { FindProduto } from '../../../lib/query';
import { DeleteProduto } from '../../../lib/action';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const produto = await FindProduto(Number(id));

  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  const DeleteWithId = DeleteProduto.bind(null, produto.id);

  return (
    <div>
      <h1>Excluir produto com ID = {id}</h1>
      <p>Deseja mesmo excluir o produto <strong>{produto.descricao}</strong>?</p>
      <form action={DeleteWithId}>
        <input 
          type="submit" 
          value="Sim, Excluir" 
          style={{ backgroundColor: 'red', color: 'white', cursor: 'pointer', padding: '5px 10px' }} 
        />
      </form>
      <br />
      <Link href="/produto/index">Cancelar e Voltar</Link>
    </div>
  );
}
