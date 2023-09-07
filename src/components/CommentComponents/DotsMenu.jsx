import styles from "styles/Comments.module.css";

export default function DotsMenu({ editBtnHandler, deleteBtnHandler }) {
  return (
    <div className={styles.dotsMenu}>
      <div className={styles.dotsMenuBtn} onClick={editBtnHandler}>
        Изменить
      </div>
      <div className={styles.dotsMenuBtn} onClick={deleteBtnHandler}>
        Удалить
      </div>
    </div>
  );
}
