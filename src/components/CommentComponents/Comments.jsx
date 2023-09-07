import uuid from "react-uuid";
import { useContext } from "react";

import styles from "styles/Comments.module.css";
import { Context } from "Context";
import Comment from "components/CommentComponents/Comment";
import declOfNum from "helpers/declOfNum";

export default function Comments() {
  const { teacherData } = useContext(Context);
  const comments = teacherData.comments;
  const commentAmount = teacherData.comments_count;

  return (
    <>
      <div className={styles.title}>
        {commentAmount} {declOfNum(commentAmount)}:
      </div>

      <div className={styles.comments}>
        {comments.map((comment) => {
          return <Comment {...{ comment }} key={uuid()} />;
        })}
      </div>
    </>
  );
}
