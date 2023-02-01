import styles from "../../../../styles/centerSection/thirdSection.module.css";
import { anotherPlusSvg } from "../../../../data/svg/index";
export const ThirdSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.firstContainer}>
          <div className={styles.firstContainerInside}>
            <div> {anotherPlusSvg}</div>
            <div>Board View</div>
          </div>
          <div className={styles.firstContainerMiddle}></div>
          <div className={styles.firstContainerInside}>
            <div> {anotherPlusSvg}</div>
            <div>Board View</div>
          </div>
        </div>
      </div>
    </>
  );
};
