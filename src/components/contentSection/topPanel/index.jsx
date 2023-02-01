import styles from "../../../../styles/centerSection/topPanel.module.css";
import {
  micSvg,
  lensSvg,
  enterSvg,
  folderSvg,
  bellSvg,
} from "../../../../data/svg";
import { contentTopPanelItemsArray } from "../../../../data/contentTopPanelItems";
export const TopPanel = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.lefter}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInsideContainer}>
              <div className={styles.searchBox}>
                <div className={styles.searchSvg}>{lensSvg}</div>
                <div>
                  <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search Tasks"
                  />
                </div>
              </div>

              <div className={styles.enterSvg}>{enterSvg}</div>
            </div>
          </div>
          <div className={styles.mic}>{micSvg}</div>
        </div>
        <div className={styles.contentTopPanelItemsContainer}>
          {contentTopPanelItemsArray.map((e) => (
            <div className={styles.contentTopPanelItems}>{e}</div>
          ))}
        </div>
        <div className={styles.contentTopPanelRight}>
          <div>{folderSvg}</div>
          <div> {bellSvg} </div>
          <div>
            <img src="/Avatar.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
