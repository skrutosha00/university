import { useContext } from "react";

import styles from "styles/Search.module.css";

import { Context } from "Context";

export default function SearchOption({ teacher }) {
  const { setChosenTeacher } = useContext(Context);

  function optionClickHandler() {
    setChosenTeacher(teacher);
  }

  return (
    <div className={styles.option} onClick={optionClickHandler}>
      <div className={styles.name}>{teacher.name}</div>
      <div className={styles.info}>
        <div>Оценок: {teacher.marks_count}</div>
        <div>Комментариев: {teacher.comments_count}</div>
        <div className={styles.starInfo}>{teacher.average_mark}</div>
      </div>
    </div>
  );
}
