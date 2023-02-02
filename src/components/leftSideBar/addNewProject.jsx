import styles from "../../../styles/leftSideBar.module.css";
import { addNewProjectSvg } from "../../../data/svg";
import { useWidth } from "../hooks/useWindowDimensions";
export const AddNewProject = () => {
  const windowWidth = useWidth();

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
