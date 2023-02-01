import styles from "../../../styles/leftSideBar.module.css";

export const DashboardMenuItem = ({ ev }) => {
  return (
    <>
      <div className={styles.dashboardMenuItem}>
        <div className={styles.dashboardMenuItemLeftGroup}>
          <div>{ev.left}</div>
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
