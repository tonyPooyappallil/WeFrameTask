import styles from "../../../styles/leftSideBar.module.css";
import { addNewProjectSvg } from "../../../data/svg";
import useWindowDimensions from "../hooks/dimensioner";
export const AddNewProject = () => {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <div className={styles.addNewProjectContainer}>
      <div className={styles.dashboardMenuItem}>
        <div className={styles.dashboardMenuItemLeftGroup}>
          <div>{addNewProjectSvg}</div>
          {windowWidth > 750 ? (
            <div className={styles.dashboardMenuItemText}>Add New Project</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
