import "styles/reset.css";
import styles from "styles/App.module.css";
import Nav from "components/Nav";
import Search from "components/SearchComponents/Search";
import SendField from "components/SendField";
import Main from "components/MainComponents/Main";

export default function Page() {
  return (
    <>
      <div className={styles.wrapper}>
        <Nav />
        <div className={styles.title}>рейтинг</div>
        <Search />
        <Main />
      </div>

      <SendField />
    </>
  );
}
