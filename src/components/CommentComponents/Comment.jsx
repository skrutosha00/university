import { useContext, useState } from "react";

import styles from "styles/Comments.module.css";
import { Context } from "Context";
import CommentStars from "components/CommentComponents/CommentStars";
import DotsMenu from "components/CommentComponents/DotsMenu";
import CommentFooter from "components/CommentComponents/CommentFooter";
import CommentMain from "components/CommentComponents/CommentMain";
import dotsImage from "images/dots.svg";
import {
  deleteComment,
  editComment,
  fetchTeacherData,
  fetchAllTeachers,
  voteComment
} from "helpers/fetchDataFunctions";

export default function Comment({ comment }) {
  const { chosenTeacher, teacherData, setTeacherData, setAllTeachers } = useContext(Context);

  const [mode, setMode] = useState("general");
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [footerLoading, setFooterLoading] = useState(false);
  const [editFieldValue, setEditFieldValue] = useState();

  async function getAllTeachers() {
    setAllTeachers(await fetchAllTeachers());
  }

  function dotsClickHandler() {
    if (mode !== "general") {
      return;
    }
    setShowDotsMenu(!showDotsMenu);
  }

  function editBtnHandler() {
    setMode("edit");
    setShowDotsMenu(false);
  }

  async function deleteBtnHandler() {
    setFooterLoading(true);

    await deleteComment(comment.id);
    getAllTeachers();
    setTeacherData(await fetchTeacherData(chosenTeacher.id));

    setFooterLoading(false);
  }

  function editFieldChangeHandler(ev) {
    setEditFieldValue(ev.target.value);

    ev.target.style.height = "auto";
    ev.target.style.height = ev.target.scrollHeight + "px";
    ev.target.style.overflowY = "hidden";
  }

  function cancelBtnHandler() {
    setMode("general");
  }

  async function saveBtnHandler() {
    if (!editFieldValue) {
      return;
    }

    setFooterLoading(true);

    await editComment(comment.id, editFieldValue);
    setTeacherData(await fetchTeacherData(chosenTeacher.id));
    setMode("general");

    setFooterLoading(false);
  }

  async function arrowClickHandler(vote) {
    setFooterLoading(true);

    await voteComment(comment.id, vote);
    setTeacherData(await fetchTeacherData(chosenTeacher.id));

    setFooterLoading(false);
  }

  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <CommentStars starCount={comment.stars_count} />
        <div className={styles.date}>{comment.date}</div>
      </div>

      {comment.id == teacherData.requester_comment_id && (
        <img src={dotsImage} alt="" className={styles.dots} onClick={dotsClickHandler} />
      )}

      {showDotsMenu && <DotsMenu {...{ mode, editBtnHandler, deleteBtnHandler }} />}

      <CommentMain {...{ mode, comment, editFieldChangeHandler, deleteBtnHandler }} />

      <CommentFooter
        {...{
          mode,
          comment,
          footerLoading,
          cancelBtnHandler,
          saveBtnHandler,
          arrowClickHandler
        }}
      />
    </div>
  );
}
