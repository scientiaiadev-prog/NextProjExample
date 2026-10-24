import "./globals.css";
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <nav style={{ padding: "10px", background: "#eee", display: "flex", gap: "10px" }}>
          <Link href="/">Home</Link>
          <Link href="/produto/index">Produtos</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
