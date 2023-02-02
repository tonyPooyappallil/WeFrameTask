import { SecondPanel } from "./secondPanel";
import { TopPanel } from "./topPanel";
import { ThirdSection } from "./thirdSection";
import { TaskRowSection } from "./taskRowSection";

export const ContentSection = () => {
  return (
    <div>
      <TopPanel></TopPanel>
      <SecondPanel></SecondPanel>
      <ThirdSection></ThirdSection>
      <TaskRowSection></TaskRowSection>
    </div>
  );
};
