import styles from "styles/Comments.module.css";

import Loader from "components/Loader";
import CommentFooterGeneral from "components/CommentComponents/CommentFooterGeneral";
import CommentFooterEdit from "components/CommentComponents/CommentFooterEdit";

export default function CommentFooter({
  comment,
  mode,
  footerLoading,
  cancelBtnHandler,
  saveBtnHandler,
  arrowClickHandler
}) {
  if (footerLoading) {
    return (
      <div className={styles.footerLoading}>
        <Loader size="medium" />
      </div>
    );
  }

  return (
    <>
      {mode === "general" && <CommentFooterGeneral {...{ comment, arrowClickHandler }} />}
      {mode === "edit" && <CommentFooterEdit {...{ saveBtnHandler, cancelBtnHandler }} />}
    </>
  );
}
