import { TaskRow } from "./taskRow";
import styles from "../../../../styles/centerSection/taskRowSection.module.css";
export const TaskRowSection = ({ data: { data = [] } }) => {
  return (
    <div className={styles.taskSectionMainContainer}>
      {data.map((ev) => (
        <div className={styles.taskSectionContainer}>
          <TaskRow data={ev}></TaskRow>
        </div>
      ))}
    </div>
  );
};
