import { threedotSvg } from "../../../../data/svg";
import styles from "../../../../styles/centerSection/taskrow.module.css";
export const TaskRow = ({ data }) => {
  const getAvatars = (count) => {
    let data = [];
    for (let index = 0; index < count; index++) {
      data.push(
        <div>
          <img src="/Avatar.jpg" alt="" />
        </div>
      );
    }
    return data;
  };
  return (
    <div>
      <div className={styles.headingContainer}>
        <div className={styles.leftContainer}>
          <div>{data.heading.text}</div>
          <div>{data.heading.count}</div>
        </div>
        <div className={styles.rightContainer}> {threedotSvg} </div>
      </div>

      {data.taskData.map((ev) => (
        <div className={styles.taskCardContainer}>
          <div className={styles.taskCardTop}>
            <div className={styles.taskCardTopTitle}>{ev.title}</div>
            <div className={styles.taskCardTopRight}>
              <div>svg</div>
              <div>{ev.count}</div>
            </div>
          </div>
          <div className={styles.taskCardMiddle}>
            {ev.tags.map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <div className={styles.taskCardBottom}>
            <div className={styles.taskCardAvatars}>
              {" "}
              {getAvatars(ev.avatars)}
            </div>
            <div className={styles.taskCardBottomRight}>
              <div>svg</div>
              <div>{ev.attachments}</div>
              <div>svg</div>
              <div>{ev.comments}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
