import { useContext, useState } from "react";

import styles from "styles/SendField.module.css";
import { Context } from "Context";
import Loader from "components/Loader";
import sendArrowImage from "images/send-arrow.svg";
import { createComment, fetchTeacherData, fetchAllTeachers } from "helpers/fetchDataFunctions";

export default function SendField() {
  const { chosenTeacher, teacherData, setTeacherData, setAllTeachers } = useContext(Context);

  const [inputValue, setInputValue] = useState("");
  const [sendLoading, setSendLoading] = useState(false);

  async function getAllTeachers() {
    setAllTeachers(await fetchAllTeachers());
  }

  function inputChangeHandler(ev) {
    setInputValue(ev.target.value);
  }

  async function buttonClickHandler() {
    if (!inputValue || !chosenTeacher || teacherData.requester_comment_id) {
      return;
    }

    setSendLoading(true);

    setInputValue("");
    await createComment(inputValue, chosenTeacher.id);
    getAllTeachers();
    setTeacherData(await fetchTeacherData(chosenTeacher.id));

    setSendLoading(false);
  }

  return (
    <div className={styles.cont}>
      <input type="text" className={styles.input} onChange={inputChangeHandler} value={inputValue} />
      <div className={styles.sendButton} onClick={buttonClickHandler}>
        {sendLoading ? <Loader size="small" /> : <img src={sendArrowImage} alt="" />}
      </div>
    </div>
  );
}
