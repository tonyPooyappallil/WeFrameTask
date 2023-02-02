import styles from "../../../styles/leftSideBar.module.css";
import { useWidth } from "../hooks/useWindowDimensions";

export const DashboardMenuItem = ({ ev }) => {
  const windowWidth = useWidth();

  return (
    <>
      <div className={styles.dashboardMenuItem}>
        <div className={styles.dashboardMenuItemLeftGroup}>
          {windowWidth > 750 ? <div>{ev.left}</div> : ""}
          <div className={styles.dashboardMenuItemText}>{ev.center}</div>
        </div>
        {ev.right ? (
          <div className={styles.dashboardMenuItemNumber}>{ev.right}</div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};
