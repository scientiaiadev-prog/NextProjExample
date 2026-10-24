import { UpdateProduto } from '@/app/lib/action';

export default function UpdateForm({ produto }: { produto: any }) {
  const UpdateProdutoWithId = UpdateProduto.bind(null, produto.id);

  return (
    <form action={UpdateProdutoWithId}>
      Descrição: <input type="text" defaultValue={produto.descricao} maxLength={50} id="id1" name="c1" required />
      <br />
      Preço: <input type="number" step="0.01" defaultValue={Number(produto.preco)} min={0} id="id2" name="c2" required />
      <br />
      <input type="submit" value="Gravar" />
    </form>
  );
}
