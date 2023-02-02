import styles from "../../../styles/leftSideBar.module.css";
import useWindowDimensions from "../hooks/dimensioner";

export const DashboardMenuItem = ({ ev }) => {
  const { width: windowWidth } = useWindowDimensions();
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
