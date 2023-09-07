import { useContext, useEffect, useState } from "react";

import styles from "styles/Search.module.css";
import { Context } from "Context";
import SearchOptions from "components/SearchComponents/SearchOptions";
import { fetchAllTeachers } from "helpers/fetchDataFunctions";

export default function Search() {
  const { chosenTeacher } = useContext(Context);
  const { allTeachers, setAllTeachers } = useContext(Context);

  const [showOptions, setShowOptions] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const displayOptions = showOptions ? "block" : "none";

  const suitableTeachers = allTeachers?.filter((teacher) => {
    return teacher.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  useEffect(() => {
    getAllTeachers();

    async function getAllTeachers() {
      setAllTeachers(await fetchAllTeachers());
    }
  }, []);

  useEffect(() => {
    if (!chosenTeacher) {
      return;
    }

    setInputValue(chosenTeacher.name);
  }, [chosenTeacher]);

  function inputFocusHandler() {
    setShowOptions(true);
  }

  function inputChangeHandler(ev) {
    setInputValue(ev.target.value);
  }

  function inputBlurHandler() {
    setTimeout(() => {
      setShowOptions(false);
    }, 100);
  }

  return (
    <>
      <div className={styles.searchBlock}>
        <input
          type="text"
          className={styles.search}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler}
          onChange={inputChangeHandler}
          value={inputValue}
        />
        <img src="image/search-icon.svg" alt="" />
        <SearchOptions displayOptions={displayOptions} teachers={suitableTeachers} />
      </div>
    </>
  );
}
