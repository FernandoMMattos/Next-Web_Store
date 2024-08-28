import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosAPI() {
  const res = await fetch(
    "https://api.npoint.io/b5ea65a6b78807014009/produtos"
  );
  if (!res.ok) throw new Error("Nao foi possivel obter os dados");

  const produtos = await res.json();
  return produtos;
}

async function fetchCategoriasAPI() {
  const res = await fetch("http://localhost:3000/api/categorias");
  if (!res.ok) throw new Error("Nao foi possivel obter os dados");

  const categorias = await res.json();
  return categorias;
}

export default async function Home() {
  const produtos = await fetchProdutosAPI();
  const categorias = await fetchCategoriasAPI();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
