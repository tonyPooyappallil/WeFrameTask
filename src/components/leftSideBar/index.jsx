import styles from "../../../styles/leftSideBar.module.css";
import { Content } from "./content";
import { dashboardSvg } from "../../../data/svg";
import useWindowDimensions from "../hooks/dimensioner";

export const LeftSideBar = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <>
      {windowWidth > 750 ? (
        <div>
          <div className={styles.dashboardContainer}>
            <div className={styles.dashboard}>Dashboard</div>
            <div className={styles.dashboardSvgContainer}>{dashboardSvg}</div>
          </div>
          <div className={styles.horLine}></div>
        </div>
      ) : (
        <div>
          <div className={styles.dashboardContainer}>
            <div className={styles.dashboardSvgContainer}>{dashboardSvg}</div>
          </div>
          <div className={styles.horLine}></div>
        </div>
      )}

      <Content></Content>
    </>
  );
};
