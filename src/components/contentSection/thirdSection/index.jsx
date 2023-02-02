import styles from "../../../../styles/centerSection/thirdSection.module.css";
import {
  anotherPlusSvg,
  downArrowSvg,
  equalSvg,
  lensSvg,
  lockSvg,
} from "../../../../data/svg/index";
import { svgArray } from "../../../../data/svgsForCenterThordSection";
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
            <div> {equalSvg}</div>
            <div>List View</div>
          </div>
        </div>
        <div className={styles.secondContainer}>
          <div>{lockSvg}</div>
          <div>Limited Access</div>
          <div>{downArrowSvg}</div>
        </div>
        <div className={styles.thirdContainer}>
          <div>Owners</div>
          <div>
            <img src="/twitter-3 1.jpg" alt="" />
          </div>
          <div>Twitter Team</div>
        </div>
        <div className={styles.fourthContainer}>
          <div>{lensSvg}</div>
          <div>
            <input
              className={styles.search}
              type="text"
              placeholder="Search Tasks"
            />
          </div>
        </div>
        <div className={styles.fifthContainer}>
          {svgArray.map((ev) => (
            <div>{ev}</div>
          ))}
        </div>
      </div>
    </>
  );
};
