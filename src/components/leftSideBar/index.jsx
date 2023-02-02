import styles from "../../../styles/leftSideBar.module.css";
import { Content } from "./content";
import { dashboardSvg } from "../../../data/svg";
import { useWidth } from "../hooks/useWindowDimensions";

export const LeftSideBar = () => {
  const windowWidth = useWidth();

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
