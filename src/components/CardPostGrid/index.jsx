import styles from "./card-post-grid.module.css";

export const CardPostGrid = ({children}) => {
  return (
    <div className={styles.cardPostGrid}>
      {children}
    </div>
  )
}
