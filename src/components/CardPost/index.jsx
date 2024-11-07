import Image from "next/image";
import {Avatar} from "@/components/Avatar";
import styles from "./card-post.module.css";

export const CardPost = ({post}) => {
  return (
    <article className={styles.cardPost}>
      <header className={styles.thumbnail}>
        <Image className={styles.thumbnail__image} src={post.cover} width={438} height={133}
               alt={`Capa do post ${post.title}`}/>
      </header>
      <section className={styles.info}>
        <h2 className={styles.info__title}>{post.title}</h2>
        <p className={styles.info__description}>{post.body}</p>
      </section>
      <footer className={styles.footer}>
        <Avatar name={post.author.username} imageSrc={post.author.avatar}/>
      </footer>
    </article>
  )
};
