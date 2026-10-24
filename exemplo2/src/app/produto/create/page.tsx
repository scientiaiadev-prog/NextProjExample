import Link from 'next/link';
import CreateForm from '@/app/ui/produto/create-form';

export default function Page() {
  return (
    <div>
      <h1>Create</h1>
      <CreateForm />
      <Link href="/produto/index">Voltar</Link>
    </div>
  );
}
