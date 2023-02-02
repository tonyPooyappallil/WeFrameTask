import { SecondPanel } from "./secondPanel";
import { TopPanel } from "./topPanel";
import { ThirdSection } from "./thirdSection";
import { TaskRowSection } from "./taskRowSection";
import { useWidth } from "../hooks/useWindowDimensions";

export const ContentSection = () => {
  const windowWidth = useWidth();

  return (
    <div>
      <TopPanel></TopPanel>
      <SecondPanel></SecondPanel>
      {windowWidth > 750 ? <ThirdSection></ThirdSection> : ""}

      <TaskRowSection></TaskRowSection>
    </div>
  );
};
