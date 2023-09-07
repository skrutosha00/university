import uuid from "react-uuid";

import styles from "styles/Search.module.css";
import Loader from "components/Loader";
import SearchOption from "components/SearchComponents/SearchOption";

const maxLen = 50;

export default function SearchOptions({ displayOptions, teachers }) {
  if (!teachers) {
    return (
      <div className={styles.options} style={{ display: displayOptions }}>
        <div className={styles.loadingOption}>
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.options} style={{ display: displayOptions }}>
      {teachers.map((teacher, ind) => {
        if (ind >= maxLen) {
          return;
        }

        return <SearchOption teacher={teacher} key={uuid()} />;
      })}
    </div>
  );
}
