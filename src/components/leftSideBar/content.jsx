import styles from "../../../styles/leftSideBar.module.css";
import avatar from "../../../public/Avatar.jpg";
import { userRightSvg } from "../../../data/svg";
import { dashboardMenuSvg } from "../../../data/svg";
import { DashboardMenuItem } from "./dashboardMenuItem";
import { dashboardMenuItemsDouble } from "../../../data/dashboardMenuItems";
import { dashboardProjectsItems } from "../../../data/dashboardProjectsItems";
import { AddNewProject } from "./addNewProject";
import useWindowDimensions from "../hooks/dimensioner";
export const Content = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className={styles.contentContainer}>
      <div className={styles.userContainer}>
        <div className={styles.avatarContainer}>
          <img src="/Avatar.jpg" alt="" />
        </div>
        <div>
          <div className={styles.nancy}>Nancy Martino </div>
          {windowWidth > 750 ? (
            <div className={styles.position}>Designer</div>
          ) : (
            ""
          )}
        </div>
        <div>{userRightSvg}</div>
      </div>
      <div className={styles.dasboardMenuContainer}>
        <div className={styles.dasboardHeaderDiv}>
          <div className={styles.dashboardHeader}>DASHBOARDS</div>
          {windowWidth > 750 ? <div>{dashboardMenuSvg}</div> : ""}
        </div>
        {dashboardMenuItemsDouble.map((ev) => (
          <DashboardMenuItem ev={ev} />
        ))}
      </div>
      <div className={styles.dasboardMenuContainer}>
        <div className={styles.dasboardHeaderDiv}>
          <div className={styles.dashboardHeader}>PROJECTS</div>
          {windowWidth > 750 ? <div>{dashboardMenuSvg}</div> : ""}
        </div>
        {dashboardProjectsItems.map((ev) => (
          <DashboardMenuItem ev={ev} />
        ))}
        <AddNewProject></AddNewProject>
      </div>
    </div>
  );
};
