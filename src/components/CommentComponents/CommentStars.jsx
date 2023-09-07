import uuid from "react-uuid";

import styles from "styles/Comments.module.css";
import starImage from "images/star-comment.svg";
import starEmptyImage from "images/star-comment-empty.svg";

export default function CommentStars({ starCount }) {
  if (!starCount) {
    return;
  }

  return (
    <div className={styles.starBlock}>
      {Array.from({ length: 5 }).map((el, ind) => {
        const image = starCount > ind ? starImage : starEmptyImage;

        return <img src={image} className={styles.star} key={uuid()} alt="" />;
      })}
    </div>
  );
}
