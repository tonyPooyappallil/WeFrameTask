import { TaskRow } from "./taskRow";
import styles from "../../../../styles/centerSection/taskRowSection.module.css";
import { useEffect, useState } from "react";
export const TaskRowSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/taskData`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const { data } = await response.json();
      setData(data);
    })();
  }, []);

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
