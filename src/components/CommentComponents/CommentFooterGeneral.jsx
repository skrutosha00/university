import styles from "styles/Comments.module.css";
import arrowGreenImage from "images/arrow-green.svg";
import arrowImage from "images/arrow.svg";
import arrowRedImage from "images/arrow-red.svg";

export default function CommentFooterGeneral({ comment, arrowClickHandler }) {
  const imageArrowUp = comment.vote == 1 ? arrowGreenImage : arrowImage;
  const imageArrowDown = comment.vote == -1 ? arrowRedImage : arrowImage;

  return (
    <div className={styles.footerGeneral}>
      <img
        src={imageArrowUp}
        alt=""
        className={styles.upArrow}
        onClick={() => {
          arrowClickHandler(1);
        }}
      />

      <div className={styles.rating}>{comment.comment_rating}</div>

      <img
        src={imageArrowDown}
        alt=""
        className={styles.downArrow}
        onClick={() => {
          arrowClickHandler(-1);
        }}
      />
    </div>
  );
}
