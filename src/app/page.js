import logger from "@/logger";
import Link from "next/link";
import {CardPost} from "@/components/CardPost";
import {CardPostGrid} from "@/components/CardPostGrid";
import styles from "./page.module.css";

const getAllPosts = async (page) => {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if (!response.ok) {
    logger.error('Ops, alguma coisa ocorreu mal!');
    return [];
  }
  logger.info("Posts obtidos com sucesso!");
  return response.json();
}

export default async function Home({searchParams}) {
  const currentPage = searchParams?.page || 1;
  const {data: posts, prev, next} = await getAllPosts(currentPage);
  return (
    <main className={styles.container}>
      <CardPostGrid>
        {posts.map(post => (
          <CardPost key={post.id} post={post}/>
        ))}
      </CardPostGrid>
      <div className={styles.pagination}>
        {prev &&
          <Link className={styles.pagination__link} href={`/?page=${prev}`}>Página anterior</Link>
        }
        <br/>
        {next &&
          <Link className={styles.pagination__link} href={`/?page=${next}`}>Próxima página</Link>
        }
      </div>
    </main>
  );
};
