import styles from "../../../styles/leftSideBar.module.css";
import { Content } from "./content";
import { dashboardSvg } from "../../../data/svg";

export const LeftSideBar = () => {
  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.dashboardSvgContainer}>{dashboardSvg}</div>
      </div>
      <Content></Content>
    </>
  );
};
