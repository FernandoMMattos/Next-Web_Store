import styles from "./page.module.css";
import Produto from "@/app/components/Produto";

async function getProdutoPorSlug(slug) {
  const res = await fetch(
    `https://api.npoint.io/b5ea65a6b78807014009/produtos`
  );
  const produtos = await res.json();

  const produto = produtos.find((produto) => produto.id.toString() === slug);

  return produto;
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://api.npoint.io/b5ea65a6b78807014009/produtos"
  );
  const produtos = await res.json();

  return produtos.map((produto) => ({ slug: produto.id.toString() }));
}

export default async function ProdutoPage({ params }) {
  const produto = getProdutoPorSlug(params.slug);

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}
