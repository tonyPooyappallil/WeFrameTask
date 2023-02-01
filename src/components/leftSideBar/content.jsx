import styles from "../../../styles/leftSideBar.module.css";
import avatar from "../../../public/Avatar.jpg";
import { userRightSvg } from "../../../data/svg";
export const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.userContainer}>
        <div className={styles.avatarContainer}>
          <img src="/Avatar.jpg" alt="" />
        </div>
        <div>
          <div>Nancy Martino </div>
          <div>Designer</div>
        </div>
        <div>{userRightSvg}</div>
      </div>
    </div>
  );
};
