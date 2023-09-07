import uuid from "react-uuid";
import { useContext, useState } from "react";

import styles from "styles/Main.module.css";
import { Context } from "Context";
import Loader from "components/Loader";
import { fetchAllTeachers, fetchTeacherData, sendMark } from "helpers/fetchDataFunctions";
import starImage from "images/star-mark.svg";
import starEmptyImage from "images/star-mark-empty.svg";

export default function MarkStars() {
  const { chosenTeacher, teacherData, setTeacherData, setAllTeachers } = useContext(Context);
  const [starLoading, setStarLoading] = useState(false);
  const starCount = teacherData.requester_mark;

  async function getAllTeachers() {
    setAllTeachers(await fetchAllTeachers());
  }

  async function starClickHandler(mark) {
    setStarLoading(true);

    await sendMark(chosenTeacher.id, mark);
    getAllTeachers();
    setTeacherData(await fetchTeacherData(chosenTeacher.id));

    setStarLoading(false);
  }

  if (starLoading) {
    return (
      <div className={styles.starsLoader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((mark) => {
        const image = starCount >= mark ? starImage : starEmptyImage;

        return (
          <img
            src={image}
            className={styles.star}
            onClick={() => {
              starClickHandler(mark);
            }}
            alt=""
            key={uuid()}
          />
        );
      })}
    </div>
  );
}
