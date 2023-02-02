import styles from "../../../../styles/centerSection/secondPanel.module.css";
import {
  micSvg,
  lensSvg,
  enterSvg,
  folderSvg,
  bellSvg,
  penSvg,
  plusSvg,
} from "../../../../data/svg";
import { contentSecondPanelItemsArray } from "../../../../data/contentSecondPanelItems";
import { useWidth } from "../../hooks/useWindowDimensions";
export const SecondPanel = () => {
  const windowWidth = useWidth();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.lefter}>
        <div className={styles.taskBoard}>Task Boards</div>
        <div className={styles.mic}>{penSvg}</div>
      </div>

      {windowWidth > 750 ? (
        <div className={styles.contentTopPanelItemsContainer}>
          {contentSecondPanelItemsArray.map((e) => (
            <div className={styles.contentTopPanelItems}>{e}</div>
          ))}
        </div>
      ) : (
        <div></div>
      )}

      <div className={styles.contentTopPanelRight}>
        <div className={styles.PeopleImgs}>
          <div>
            <img src="/Avatar.jpg" alt="" />
          </div>
          <div>
            <img src="/Avatar.jpg" alt="" />
          </div>
          <div>
            <img src="/Avatar.jpg" alt="" />
          </div>
        </div>
        <div className={styles.afterPeopleImgs}> {plusSvg} </div>
      </div>
    </div>
  );
};
