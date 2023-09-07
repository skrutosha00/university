import { useEffect, useRef } from "react";
import styles from "styles/Comments.module.css";

export default function CommentMain({ mode, comment, editFieldChangeHandler }) {
  const editFieldRef = useRef();

  useEffect(() => {
    if (mode != "edit") {
      return;
    }

    editFieldRef.current.style.height = editFieldRef.current.scrollHeight + "px";
  }, [mode]);

  return (
    <div className={styles.main}>
      {mode === "general" && comment.text}

      {mode === "edit" && (
        <textarea
          className={styles.editField}
          defaultValue={comment.text}
          onChange={editFieldChangeHandler}
          ref={editFieldRef}
        />
      )}
    </div>
  );
}
