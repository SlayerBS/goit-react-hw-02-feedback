import styles from "./Section.modules.css";

const Section = ({ children, title }) => (
  <>
    <h2> {title}</h2>
    <div className={styles.container}>{children} </div>
  </>
);

export default Section;
