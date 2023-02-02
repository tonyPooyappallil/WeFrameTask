import { closeSvg, rightArrowSvg } from "../../../data/svg";
import styles from "../../../styles/rightSection/rightSideStyles.module.css";
export const RightSideBar = () => {
  const sixteenPeopleMaker = () => {
    let data = [];
    for (let index = 0; index < 16; index++) {
      data.push(
        <div>
          <img src="/Avatar.jpg" alt="" />
        </div>
      );
    }
    return data;
  };
  return (
    <div className={styles.container}>
      <div className={styles.firstDiv}> {closeSvg} </div>
      <div className={styles.secondDiv}>{sixteenPeopleMaker()}</div>
      <div className={styles.firstDiv}> {rightArrowSvg} </div>
    </div>
  );
};
