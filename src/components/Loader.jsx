import styles from "styles/Loader.module.css";

export default function Loader({ size }) {
  let className;
  if (size == "small") {
    className = styles.loaderSmall;
  } else if (size == "medium") {
    className = styles.loaderMedium;
  } else {
    className = styles.loader;
  }

  return <div className={className}></div>;
}
