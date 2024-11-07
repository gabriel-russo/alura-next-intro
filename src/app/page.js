import {CardPost} from "@/components/CardPost";
import logger from "@/logger";
import {CardPostGrid} from "@/components/CardPostGrid";

const getAllPosts = async () => {
  const response = await fetch('http://localhost:3042/posts');
  if (!response.ok) {
    logger.error('Ops, alguma coisa ocorreu mal!');
    return [];
  }
  logger.info("Posts obtidos com sucesso!");
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      <CardPostGrid>
        {posts.map(post => (
          <CardPost post={post}/>
        ))}
      </CardPostGrid>
    </main>
  );
};
