import { CreateProduto } from '@/app/lib/action';

export default function CreateForm() {
  return (
    <form action={CreateProduto}>
      Descrição: <input type="text" maxLength={50} id="id1" name="c1" required />
      <br />
      Preço: <input type="number" step="0.01" min={0} id="id2" name="c2" required />
      <br />
      <input type="submit" value="Gravar" />
    </form>
  );
}
