import { useContext } from "react";

import styles from "styles/Main.module.css";
import { Context } from "Context";

export default function TeacherInfo() {
  const { teacherData } = useContext(Context);

  return (
    <div className={styles.info}>
      <div>Оценок: {teacherData.marks_count}</div>
      <div>Средняя оценка: {teacherData.average_mark}</div>
      {teacherData.requester_mark && <div>Ваша оценка: {teacherData.requester_mark}</div>}
    </div>
  );
}
