import { SecondPanel } from "./secondPanel";
import { TopPanel } from "./topPanel";
import { ThirdSection } from "./thirdSection";
import { TaskRowSection } from "./taskRowSection";
import useWindowDimensions from "../hooks/dimensioner";

export const ContentSection = () => {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <div>
      <TopPanel></TopPanel>
      <SecondPanel></SecondPanel>
      {windowWidth > 750 ? <ThirdSection></ThirdSection> : ""}
      <TaskRowSection></TaskRowSection>{" "}
    </div>
  );
};
