import styles from "../../../styles/leftSideBar.module.css";
import { addNewProjectSvg } from "../../../data/svg";
export const AddNewProject = () => {
  return (
    <div className={styles.addNewProjectContainer}>
      <div className={styles.dashboardMenuItem}>
        <div className={styles.dashboardMenuItemLeftGroup}>
          <div>{addNewProjectSvg}</div>
          <div className={styles.dashboardMenuItemText}>Add New Project</div>
        </div>
      </div>
    </div>
  );
};
