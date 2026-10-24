import Link from 'next/link';
import { Produto } from '@/app/lib/definition';

export default function IndexProdutoUI(p: Produto[]) {
  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {p.map((x: Produto) => (
          <tr key={x.id}>
            <td>{x.descricao}</td>
            <td>{x.preco}</td>
            <td>
              <Link href={`/produto/update/${x.id}`}>Alterar</Link>
            </td>
            <td>
              <Link href={`/produto/delete/${x.id}`}>Excluir</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
