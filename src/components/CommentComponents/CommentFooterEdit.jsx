import styles from "styles/Comments.module.css";

export default function CommentFooterEdit({ saveBtnHandler, cancelBtnHandler }) {
  return (
    <div className={styles.footerEdit}>
      <div className={styles.footerEditBtn} onClick={saveBtnHandler}>
        Сохранить
      </div>
      <div className={styles.footerEditBtn} onClick={cancelBtnHandler}>
        Отмена
      </div>
    </div>
  );
}
