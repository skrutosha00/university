import { useContext, useEffect } from "react";

import styles from "styles/Main.module.css";
import { Context } from "Context";
import Comments from "components/CommentComponents/Comments";
import Loader from "components/Loader";
import TeacherInfo from "components/MainComponents/TeacherInfo";
import MarkStars from "components/MainComponents/MarkStars";

import { fetchTeacherData } from "helpers/fetchDataFunctions";

export default function Main() {
  const { chosenTeacher, teacherData, setTeacherData } = useContext(Context);

  useEffect(() => {
    if (!chosenTeacher) {
      return;
    }
    getTeacherData();

    async function getTeacherData() {
      try {
        const teacherData = await fetchTeacherData(chosenTeacher.id);
        setTeacherData(teacherData);
      } catch (err) {
        console.log(err);
      }
    }
  }, [chosenTeacher]);

  if (!chosenTeacher) {
    return;
  }

  if (chosenTeacher && !teacherData) {
    return <Loader />;
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <TeacherInfo />
        <MarkStars />
      </div>
      <Comments />
    </div>
  );
}
