import { TaskRow } from "./taskRow";
import { rowTaskData } from "../../../../data/rowTaskData";
import styles from "../../../../styles/centerSection/taskRowSection.module.css";
export const TaskRowSection = () => {
  return (
    <div className={styles.taskSectionMainContainer}>
      {rowTaskData.map((ev) => (
        <div className={styles.taskSectionContainer}>
          <TaskRow data={ev}></TaskRow>
        </div>
      ))}
    </div>
  );
};
