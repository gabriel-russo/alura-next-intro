import logger from "@/logger";
import {remark} from "remark";
import html from 'remark-html';
import styles from "./page.module.css";

const getPostBySlug = async (slug) => {
  const url = `http://localhost:3042/posts?slug=${slug}`
  const response = await fetch(url);

  if (!response.ok) {
    logger.error("Ops, alguma coisa ocorreu mal!");
    return {};
  }

  logger.info("Posts obtidos com sucesso!");

  const [data] = await response.json();

  if (!data) {
    return {};
  }

  const processedContent = await remark().use(html).process(data.markdown);
  data.markdown = processedContent.toString();

  return data;
}

const PagePost = async ({params}) => {
  const slug = params?.slug || "";

  const post = await getPostBySlug(slug);

  return (
    <article className={styles.post}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.markdown}}></div>
    </article>
  );
};

export default PagePost;
